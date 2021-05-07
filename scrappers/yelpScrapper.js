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

         let reviewsToReturn = await page.$$eval('div.border-color--default__373c0__2oFDT ul' , reviews => {
              console.log('in div');
              console.log(reviews);

              review = reviews.map(el => {
                   const user = el.querySelector('li.margin-b5__373c0__2ErL8.border-color--default__373c0__2oFDT a .target name rol') ? el.querySelector('li.margin-b5__373c0__2ErL8.border-color--default__373c0__2oFDT a.target name rol').innerText : "";
               //     const place = el.querySelector('p.preview-individual-reviews-title-text1') ? el.querySelector('p.preview-individual-reviews-title-text1').innerText : "";
               //     const text = el.querySelector('div.preview-individual-review') ? el.querySelector('div.preview-individual-review').innerText : "";
                   
                   toReturn = {
                        user: user,
                    //     place: place,
                    //     text: text,
                   }
                   return toReturn
              })
              return review;
         });
         return reviewsToReturn;
     }
}

 
 module.exports = yelpScrapper;