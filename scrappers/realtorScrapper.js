const realtorScrapper = {
     url: '',
     async scraper(browser){
         let page = await browser.newPage();
         console.log(`Navigating to ${this.url}...`);
         await page.goto(this.url);
         // Wait for the required DOM to be rendered
         await page.waitForSelector('[data-testid=component-reviewsRating]');
         // Get the link to all the required books
         console.log("looking for reviews");

         let reviewsToReturn = await page.$$eval('div[data-testid=component-reviewsRating]' , reviews => {
              console.log('in div');
              console.log(reviews);

              review = reviews.map(el => {
                   const user = el.querySelector('p.jsx-1678420574') ? el.querySelector('p.jsx-1678420574').innerText : "";
                   const place = el.querySelector('p.preview-individual-reviews-title-text1') ? el.querySelector('p.preview-individual-reviews-title-text1').innerText : "";
                   const text = el.querySelector('div.preview-individual-review') ? el.querySelector('div.preview-individual-review').innerText : "";
                   
                   toReturn = {
                        user: user,
                        place: place,
                        text: text,
                   }
                   return toReturn
              })
              return review;
         });
         return reviewsToReturn;
     }
}

 
 module.exports = realtorScrapper;