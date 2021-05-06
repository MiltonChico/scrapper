
const zillowScrapper = {
    url: 'https://www.zillow.com/profile/kbainesrealestate/',
    async scraper(browser){
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url);
        // Wait for the required DOM to be rendered
        await page.waitForSelector('.StyledLoadingMaskContent-c11n-8-31-0__felv1f-1');
        // Get the link to all the required books
        console.log("reviews show up");
        let reviewsToReturn = await page.$$eval('div.StyledLoadingMaskContent-c11n-8-31-0__felv1f-1 ul li', reviews => {
            console.log("inside ul");
            console.log(reviews);
            // Make sure the book to be scraped is in stock
            review = reviews.map(el => {
                console.log(el);
                const rating = el.querySelector('.jKAuaq') ? el.querySelector('.jKAuaq').innerText : "";
                const date = el.querySelector('p.dXRVjt') ? el.querySelector('p.dXRVjt').innerText : "";
                const text = el.querySelector('div.dnYdls') ? el.querySelector('div.dnYdls').innerText : "";

                toReturn = {
                    date: date,
                    rating: rating,
                    text: text
                }
                return toReturn;
            })
            // Extract the links from the data
            
            return review;
        });
        return reviewsToReturn;
    }
}

module.exports = zillowScrapper;