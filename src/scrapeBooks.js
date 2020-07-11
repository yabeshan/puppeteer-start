const puppeteer = require('puppeteer');

const scrapeBooks = async (code) => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();

    await page.goto('http://books.toscrape.com/');
    await page.click('#default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1) > article > div.image_container > a > img');
    await page.waitFor(1000);

    const result = await extractedBooks(page);
    browser.close();
    console.log (result);
    return result;
};

async function extractedBooks(page) {
    return page.evaluate(() => {
        try {
            let title = document.querySelector('h1').innerText;
            let price = document.querySelector('.price_color').innerText;
            return {
                title,
                price
            }
        } catch(err) {
            return err;
        }
    });
}

module.exports = scrapeBooks;