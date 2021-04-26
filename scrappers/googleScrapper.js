const googleScraper = {
     url: 'https://www.google.com.ar/search?q=kirk+lewis&ei=VPWGYKjFF7DZ1sQPkNOQgAE&oq=kirk+lewis&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEBMyCggAEMcBEK8BEBMyBAgAEBMyCggAEMcBEK8BEBMyCggAEMcBEK8BEBMyCggAEMcBEK8BEBMyCggAEMcBEK8BEBMyBAgAEBMyBAgAEBMyCggAEMcBEK8BEBM6BwguEEMQkwI6BAgAEEM6BAguEEM6CAgAELEDEIMBOggILhCxAxCDAToNCC4QsQMQgwEQQxCTAjoKCC4QsQMQgwEQQzoHCC4QsQMQQzoFCAAQsQM6CggAELEDEIMBEEM6CggAEMcBEKMCEEM6BQguELEDOgIIADoCCC46BQguEJMCOgYIABAWEB46BwguEA0QkwI6BAgAEA06BggAEA0QHjoICAAQDRAKEB46DQguELEDEIMBEA0QkwJQuT9YvE5gtU9oAXAAeACAAZABiAHuCJIBAzkuM5gBAKABAaoBB2d3cy13aXrAAQE&sclient=gws-wiz&ved=0ahUKEwiov7vntJzwAhWwrJUCHZApBBAQ4dUDCA4&uact=5#lrd=0x8640990fe0df79ef:0xbc7c7599ebbdd74d,1,,,',
     async scraper(browser){
         let page = await browser.newPage();
         console.log(`Navigating to ${this.url}...`);
         // Navigate to the selected page
         await page.goto(this.url);
     }
 }
 
 module.exports = googleScraper;