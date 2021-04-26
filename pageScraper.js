const scraperObject = {
    url: 'https://www.zillow.com/austin-tx/real-estate-agent-reviews/?regionID=10221&locationText=Austin%20TX',
    async scraper(browser){
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        // Navigate to the selected page
        await page.goto(this.url);
        // Wait for the required DOM to be rendered
        await page.waitForSelector('.ldb-boards-results');

        console.log(page)
        // Get the link to all the required books
        let urls = await page.$$eval('section ul > li', links => {
            // Make sure the book to be scraped is in stock
            //links = links.filter(link => link.querySelector('zsg-separator ldb-table ldb-table-abc ldb-fg-bg-container za-track-event > i'))
            
            // Extract the links from the data
            //links = links.map(el => el.querySelector('h3 > a').href)
            return links;
        });
        console.log(urls);
    }
}

module.exports = scraperObject;