const realtorScrapper = {
     url: '',
     async scraper(browser){
         let page = await browser.newPage();
         console.log(`Navigating to ${this.url}...`);
         await page.goto(this.url);
         // Wait for the required DOM to be rendered
         await page.waitForSelector('.review-dialog-list');
         // Get the link to all the required books
         console.log("looking for reviews");

         let reviewsToReturn = await page.$$eval('.gws-localreviews__google-review' , reviews => {
              console.log(reviews);

              review = reviews.map(el => {
                   const user = el.querySelector('.jxjCjc .TSUbDb') ? el.querySelector('.jxjCjc .TSUbDb').innerText : "";
                   const date = el.querySelector('.PuaHbe .dehysf') ? el.querySelector('.PuaHbe .dehysf').innerText : "";
                   const text = el.querySelector('.Jtu6Td .review-full-text') ? el.querySelector('.Jtu6Td .review-snippet').innerText : "";
                   
                   toReturn = {
                        user: user,
                        date: date,
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