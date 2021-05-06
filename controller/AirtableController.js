
class AirtableController {
    static save(review){
        const exists = this.get(review);
        if(!exists){
            //save Review
        }
        return null;
    }

    static get(review){
        //llamada a airtable to check if review exists
        return false; // true or false if exists
    }
}

module.exports = AirtableController;