const yelpScrapper = {
     url: '',
     async scraper(browser){
         let page = await browser.newPage();
         console.log(`Navigating to ${this.url}...`);
         await page.goto(this.url);
         // Wait for the required DOM to be rendered
         await page.waitForSelector('div.border-color--default__373c0__2oFDT');
         // Get the link to all the required books
         console.log("looking for reviews");

         let reviewsToReturn = await page.$$eval('.margin-b5__373c0__2ErL8' , reviews => {
              console.log('in div');
              console.log(reviews);

              review = reviews.map(el => {
                   const user = el.querySelector('.css-m6anxm') ? el.querySelector('.css-m6anxm').innerText : "";
                   const place = el.querySelector('.css-n6i4z7') ? el.querySelector('.css-n6i4z7').innerText : "";
                   const date = el.querySelector('.css-e81eai') ? el.querySelector('.css-e81eai').innerText : "";
                   const text = el.querySelector('.raw__373c0__3rcx7') ? el.querySelector('.raw__373c0__3rcx7').innerText : "";
                   
                   toReturn = {
                        user: user,
                        place: place,
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

 
 module.exports = yelpScrapper;