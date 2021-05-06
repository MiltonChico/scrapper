const Airtable = require('./models/Airtable');


class Scrapper {
    static async _init(){
        //Consulta a todos los Realtors
        const AllRealtors = await Airtable.getAllRealtors()

        //Almacenados en un array
        const zillowLinks = [];
        
        var i;
            for( i = 0; i < AllRealtors.length ; i++) {
                (zillowLinks.push(AllRealtors[i].zillow))
            }
        console.log(zillowLinks)
    } 
}

Scrapper._init();