const scrapper = require('../scrappers/googleScrapper');

class GoogleController {
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
     
        console.log(reviewsToReturn)
        return reviewsToReturn;
    }
}

module.exports = GoogleController;