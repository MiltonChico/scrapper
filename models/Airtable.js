var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keysnqU62kt06HWdq'}).base('appwjvunSHCymw27C');


class AirtableModel {
    static async getAllRealtors(){
        const toReturn = [];

        await base('Clients').select({
            view: "Contact Info"
        }).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {
                toReturn.push({                    
                    name: record.get('Client Name (ID)'),
                    zillow: record.get('Zillow Link'),
                    realtor: record.get('Realtor.com Link'),
                    google: record.get('Google Link'),
                    yelp: record.get('Yelp Link'),
                    facebook: record.get('Facebook Link'),
                })
            });
            fetchNextPage();
        });

        return toReturn;
    }
}
module.exports = AirtableModel;