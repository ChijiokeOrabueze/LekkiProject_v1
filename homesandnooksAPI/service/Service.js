const resolveRepo = require('../helpers/resolveRepo');

const Service = (Item) =>{
    const repository = resolveRepo(Item);
    const saveItem = async (itemDetails) => {
        try{
            const savedItem = await repository.save(itemDetails);
            return savedItem;
        }catch(err){
            throw err;
        }
    }

    return {
        saveItem
    }
}


module.exports = Service;