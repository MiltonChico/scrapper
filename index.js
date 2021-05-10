const Airtable = require('./models/Airtable');
const ZillowController = require('./controller/ZillowController');
const RealtorController = require('./controller/RealtorController')
const YelpController = require('./controller/YelpController')
const GoogleController = require('./controller/GoogleController')

// const AirtableController = require('./controller/AirtableController');
const browserObject = require('./browser');

class Scrapper {
    static async _init(){
        //Consulta a todos los Realtors
        const AllRealtors = await Airtable.getAllRealtors();
        let browserInstance = browserObject.startBrowser();
        
        var i;
        for( i = 0; i < AllRealtors.length ; i++) {
            
            // if(AllRealtors[i].zillow){
            //     const zillowReviews = await ZillowController.start(AllRealtors[i].zillow, browserInstance);
            //     //await AirtableController.save(zillowReviews);
            // }
            // if(AllRealtors[i].realtor){
            //     const realtorReviews = await RealtorController.start(AllRealtors[i].realtor, browserInstance);
            //     //await AirtableController.save(zillowReviews);
            // }
            // if(AllRealtors[i].yelp){
            //     const yelpReviews = await YelpController.start(AllRealtors[i].yelp, browserInstance);
            //     //await AirtableController.save(zillowReviews);
            // }
            if(AllRealtors[i].google){
                const googleReviews = await GoogleController.start(AllRealtors[i].google, browserInstance);
                //await AirtableController.save(zillowReviews);
            }       
        }
    } 
}

Scrapper._init();