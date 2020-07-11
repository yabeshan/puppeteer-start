const express = require("express");
const app = express();
const puppeteer = require("puppeteer");

app.get("/", async function(request, response){
    (async () => {
        const browser = await puppeteer.launch({headless: true});
        const page = await browser.newPage();

        await page.goto('http://books.toscrape.com/');
        await page.click('#default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1) > article > div.image_container > a > img');
        await page.waitFor(1000);

        const result = await page.evaluate(() => {
            let title = document.querySelector('h1').innerText;
            let price = document.querySelector('.price_color').innerText;
            return {
                title,
                price
            }

        });

        browser.close();
        console.log (result);
        response.send("<h2>Привет Express!22 title="+ result.title +"___price="+ result.price +"</h2>");
    })();
});

app.listen(3000);
