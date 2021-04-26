const bookScraper = require('../scrappers/bookScrapper');
const googleScraper = require('../scrappers/googleScrapper');
const zillowScrapper = require('../scrappers/zillowScrapper');

async function scrapeAll(browserInstance){
    let browser;
    
    try{
        browser = await browserInstance;
        await bookScraper.scraper(browser);
        await zillowScrapper.scraper(browser);
        await googleScraper.scraper(browser);
    }
    catch(err){
        console.log("Could not resolve the browser instance => ", err);
    }
}

module.exports = (browserInstance) => scrapeAll(browserInstance)