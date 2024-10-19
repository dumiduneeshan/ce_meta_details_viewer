chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getMetaDetails") {
    const metaDetails = {
      title: document.title,
      url: window.location.href,
      canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href') || 'N/A',
      description: document.querySelector('meta[name="description"]')?.getAttribute('content') || 'N/A',
      keywords: document.querySelector('meta[name="keywords"]')?.getAttribute('content') || 'N/A',
      favicon: document.querySelector('link[rel="icon"]')?.getAttribute('href') || document.querySelector('link[rel="shortcut icon"]')?.getAttribute('href') || 'N/A',
      ogTitle: document.querySelector('meta[property="og:title"]')?.getAttribute('content') || 'N/A',
      ogDescription: document.querySelector('meta[property="og:description"]')?.getAttribute('content') || 'N/A',
      ogImage: document.querySelector('meta[property="og:image"]')?.getAttribute('content') || 'N/A',
      ogUrl: document.querySelector('meta[property="og:url"]')?.getAttribute('content') || 'N/A',
      twitterCard: document.querySelector('meta[name="twitter:card"]')?.getAttribute('content') || 'N/A',
      twitterTitle: document.querySelector('meta[name="twitter:title"]')?.getAttribute('content') || 'N/A',
      twitterDescription: document.querySelector('meta[name="twitter:description"]')?.getAttribute('content') || 'N/A',
      twitterImage: document.querySelector('meta[name="twitter:image"]')?.getAttribute('content') || 'N/A',
      h1Tags: Array.from(document.querySelectorAll('h1')).map(h1 => h1.textContent),
      h2Tags: Array.from(document.querySelectorAll('h2')).map(h2 => h2.textContent),
      h3Tags: Array.from(document.querySelectorAll('h3')).map(h3 => h3.textContent),
      images: Array.from(document.querySelectorAll('img')).map(img => ({
        src: img.getAttribute('src'),
        alt: img.getAttribute('alt')
      })),
      links: Array.from(document.querySelectorAll('a')).map(a => a.getAttribute('href')),
      structuredData: Array.from(document.querySelectorAll('script[type="application/ld+json"]')).map(script => script.textContent.trim()),
      author: document.querySelector('meta[name="author"]')?.getAttribute('content') || 'N/A',
      robots: document.querySelector('meta[name="robots"]')?.getAttribute('content') || 'N/A',
      viewport: document.querySelector('meta[name="viewport"]')?.getAttribute('content') || 'N/A',
      language: document.documentElement.lang || 'N/A',
      contentType: document.querySelector('meta[http-equiv="Content-Type"]')?.getAttribute('content') || 'N/A',
      doctype: document.doctype ? document.doctype.name : 'N/A',
      scripts: Array.from(document.querySelectorAll('script[src]')).map(script => script.getAttribute('src')),
      stylesheets: Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(link => link.getAttribute('href')),
      contentLength: document.body.textContent.length
    };

    sendResponse(metaDetails);
  }
});
