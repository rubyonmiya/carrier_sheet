const path = require('node:path');
const fs = require('node:fs');
const puppeteer = require('puppeteer');

const rootDir = path.resolve(__dirname, '..');
const htmlPath = path.join(rootDir, 'docs', 'index.html');
const pdfPath = path.join(rootDir, 'docs', 'README.pdf');
const nativeChromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const executablePath = process.env.PUPPETEER_EXECUTABLE_PATH
  || (fs.existsSync(nativeChromePath) ? nativeChromePath : puppeteer.executablePath());

(async () => {
  const browser = await puppeteer.launch({ executablePath, headless: 'new' });
  try {
    const page = await browser.newPage();
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      margin: { top: '16mm', right: '14mm', bottom: '18mm', left: '14mm' },
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: '<span></span>',
      footerTemplate: '<div style="font-size:9px; color:#9ca3af; width:100%; text-align:right; padding-right:14mm;"><span class="pageNumber"></span> / <span class="totalPages"></span></div>',
    });
  } finally {
    await browser.close();
  }
})();
