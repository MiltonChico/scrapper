const Airtable = require('./models/Airtable');
const ZillowController = require('./controller/ZillowController');
const AirtableController = require('./controller/AirtableController');
const browserObject = require('./browser');

class Scrapper {
    static async _init(){
        //Consulta a todos los Realtors
        const AllRealtors = await Airtable.getAllRealtors();
        let browserInstance = browserObject.startBrowser();
        
        var i;
        for( i = 0; i < AllRealtors.length ; i++) {
            console.log(AllRealtors[i]);
            if(AllRealtors[i].zillow){
                const zillowReviews = await ZillowController.start(AllRealtors[i].zillow, browserInstance);
                //await AirtableController.save(zillowReviews);
            }
        }
    } 
}

Scrapper._init();