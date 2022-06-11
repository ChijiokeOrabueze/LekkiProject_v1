

class Repo {
    constructor(Model){
        this.Model = Model;
    }

    save = async (itemDetails) =>{
        const newItem = new this.Model({
            ...itemDetails
        });
        try{
            const savedItem = await newItem.save();
            return savedItem;
        }catch(err){
            throw err;
        }
    }

    filter = async (params) =>{
        try{
            const items = await this.Model.find(params);
            return items
        }catch(err){
            throw err
        }  
    }

    findById = async (id) => {
        try{
            const item = await this.Model.findById(id);
            // if (!item){
            //     throw "noItem";
            // }
            return item;
        }catch (err){
            throw err;
        }
    }

    // update = async (item, updates) =>{
    //     try{ 
    //         item[update[0]] = update[1];
    //         const updatedUser = await Model.save();          
    //         return updatedUser;
    //     }catch (err) {
    //         throw err
    //     }
    // }
}

module.exports = Repo;