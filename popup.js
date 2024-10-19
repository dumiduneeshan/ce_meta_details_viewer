document.addEventListener('DOMContentLoaded', () => {
  const metaTableBody = document.querySelector('#meta-table tbody');
  const copyButton = document.getElementById('copy-button');
  const copySelectedButton = document.getElementById('copy-selected-button');
  let metaDetailsText = '';

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];

    chrome.scripting.executeScript(
      {
        target: { tabId: currentTab.id },
        files: ['content.js']
      },
      () => {
        chrome.tabs.sendMessage(currentTab.id, { action: "getMetaDetails" }, (response) => {
          metaTableBody.innerHTML = '';

          if (response) {
            for (const [key, value] of Object.entries(response)) {
              let displayValue;

              if (Array.isArray(value)) {
                displayValue = value.length > 0 ? value.join(', ') : 'N/A';
              } else if (typeof value === 'object') {
                displayValue = JSON.stringify(value, null, 2);
              } else {
                displayValue = value;
              }

              const row = document.createElement('tr');
              row.innerHTML = `
                <td><input type="checkbox" class="select-meta-checkbox" data-meta="${key.replace(/([A-Z])/g, ' $1')}: ${displayValue}"></td>
                <td>${key.replace(/([A-Z])/g, ' $1')}</td>
                <td>${displayValue}</td>
                <td><button class="copy-meta-button" data-meta="${key.replace(/([A-Z])/g, ' $1')}: ${displayValue}">Copy</button></td>
              `;
              metaTableBody.appendChild(row);

              metaDetailsText += `${key.replace(/([A-Z])/g, ' $1')}: ${displayValue}\n\n`;
            }

            // Add event listeners to all copy buttons
            const copyMetaButtons = document.querySelectorAll('.copy-meta-button');
            copyMetaButtons.forEach(button => {
              button.addEventListener('click', (e) => {
                const metaText = e.target.getAttribute('data-meta');
                navigator.clipboard.writeText(metaText)
                  .then(() => {
                    alert(`Copied: ${metaText}`);
                  })
                  .catch(err => {
                    console.error('Failed to copy meta detail: ', err);
                  });
              });
            });
          } else {
            const row = document.createElement('tr');
            row.innerHTML = '<td colspan="4">No meta details found.</td>';
            metaTableBody.appendChild(row);
            metaDetailsText = 'No meta details found.';
          }
        });
      }
    );
  });

  copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(metaDetailsText)
      .then(() => {
        alert('Meta details copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy meta details: ', err);
      });
  });

  copySelectedButton.addEventListener('click', () => {
    const selectedCheckboxes = document.querySelectorAll('.select-meta-checkbox:checked');
    let selectedText = '';

    selectedCheckboxes.forEach(checkbox => {
      selectedText += checkbox.getAttribute('data-meta') + '\n\n';
    });

    if (selectedText) {
      navigator.clipboard.writeText(selectedText)
        .then(() => {
          alert('Selected meta details copied to clipboard!');
        })
        .catch(err => {
          console.error('Failed to copy selected meta details: ', err);
        });
    } else {
      alert('No items selected.');
    }
  });
});
