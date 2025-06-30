# Meta Details Viewer For Google Chrome

A lightweight Chrome extension by **Dumidu Neeshan** that makes it effortless to inspect, view and copy a web page’s meta details and general information directly from your browser toolbar.

---

## Introduction

Understanding a page’s metadata and structure is vital for SEO audits, content reviews and development troubleshooting. While the browser’s DevTools can show you this information, **Meta Details Viewer** streamlines the process by providing:

- A clean, tabular popup interface to surface all key `<meta>` tags and structural elements at a glance  
- One-click controls to copy everything, individual items or just your selected details to the clipboard  
- Zero external dependencies—just vanilla JavaScript, HTML and CSS  

Whether you’re an SEO specialist, web developer or content strategist, this extension saves you time by bringing all essential page data into a single, intuitive view.

---

## Key Features

1. **Comprehensive Meta Inspection**  
   - Page `<title>`, URL, canonical link, description, keywords, author, robots, viewport, language, content-type and doctype  
   - Open Graph (`og:title`, `og:description`, `og:image`, `og:url`) and Twitter Card meta tags  
   - Favicon URL  

2. **Structural Elements Overview**  
   - Headings: all `h1`, `h2` and `h3` tag contents  
   - Images: `src` and `alt` attributes for every `<img>`  
   - Links: `href` for every `<a>`  
   - Scripts and stylesheets: external resource URLs  
   - Structured Data: JSON-LD from `<script type="application/ld+json">`  

3. **Flexible Copy to Clipboard**  
   - **Copy All**: grab a complete dump of every detail in one go  
   - **Copy Individual**: click the copy button next to any row  
   - **Copy Selected**: tick the checkboxes beside the rows you need and copy just those  

4. **Intuitive, Responsive UI**  
   - Scrollable container for long pages  
   - Alternating row colours and subtle box shadows for readability  
   - Plain-vanilla CSS—no frameworks required  

5. **Lightweight & Secure**  
   - Uses only the `activeTab` and `scripting` permissions  
   - No data is sent to external servers—everything runs in your browser  

---

## Installation

1. **Download** or **clone** the repository.  
2. Open Chrome and go to **chrome://extensions**.  
3. Enable **Developer mode**.  
4. Click **Load unpacked** and select the extension’s folder.  
5. Pin the Meta Details Viewer icon to your toolbar.

---

## Usage

1. Browse to any web page.  
2. Click the **Meta Details Viewer** icon in your toolbar.  
3. Review the table of meta tags and page information.  
4. Use **Copy All**, **Copy Selected** or an individual **Copy** button to copy to clipboard.  
5. Paste the details wherever you need them.

---

## File Structure
meta-details-viewer/ <br>
├── manifest.json <br>
├── popup.html <br>
├── popup.js <br>
├── content.js <br>
├── icon-16x16.png <br>
├── icon-48x48.png <br>
└── icon-128x128.png <br>


- **manifest.json** – Extension metadata, permissions and icons  
- **popup.html & popup.js** – Popup UI and copy logic  
- **content.js** – Content script that extracts all meta details from the current page  

---

## Changelog

- **1.0.0** – Initial release with meta tag, heading, image, link, script, stylesheet and structured-data extraction plus copy functionality

---

## Support & Contribution

Found a bug or have a feature request? Please open an issue on the [GitHub repository](#) or visit the Chrome Web Store support page.

---

*© 2025 Dumidu Neeshan*  

