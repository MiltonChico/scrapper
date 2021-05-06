const scrapper = require('../scrappers/zillowScrapper');

class ZillowController {
    static async start(url, browser){
        let reviewsToReturn = [];
        try{
            browser = await browser;  
            scrapper.url = url;
            reviewsToReturn = await scrapper.scraper(browser);
        }
        catch(err){
            console.log("Could not resolve the browser instance => ", err);
        }     
     

        return reviewsToReturn;
    }
}

module.exports = ZillowController;