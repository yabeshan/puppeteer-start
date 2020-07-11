const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  // await page.goto('https://google.com');
  await page.goto('https://2ip.ua/ru/');

  await page.setViewport({width: 1000, height: 500})
  await page.screenshot({path: 'screenshots/ip2.png'});
  // await page.pdf({path: 'hn.pdf', format: 'A4'});

  await browser.close();
})();