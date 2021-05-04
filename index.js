const Airtable = require('./models/Airtable');

class Scrapper {
    static _init(){
        const AllRealtors = Airtable.getAllRealtors();

        console.log(AllRealtors);
    }
}

Scrapper._init();