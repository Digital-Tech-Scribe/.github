const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto('https://www.linkedin.com/in/andrew-onukwu-5b4a7a22a/', { waitUntil: 'networkidle2' });
  const html = await page.content();
  console.log(html);
  await browser.close();
})();
