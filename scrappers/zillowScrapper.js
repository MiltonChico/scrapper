const zillowScrapper = {
    url: 'https://www.zillow.com/profile/kbainesrealestate/',
    async scraper(browser){
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url);
         // Wait for the required DOM to be rendered
    //      await page.waitForSelector('.StyledLoadingMask-c11n-8-31-0__felv1f-0 djTxTC');
    //      // Get the link to all the required books
    //      let urls = await page.$$eval('div ul > li', links => {
    //          // Make sure the book to be scraped is in stock
    //          links = links = links.map(el => el.querySelector('.Text-c11n-8-31-0__aiai24-0 sc-fzoxKX kabUNx'))
    //          // Extract the links from the data
             
    //          return links;
    //      });
    //      console.log(urls);
     }
}

module.exports = zillowScrapper;