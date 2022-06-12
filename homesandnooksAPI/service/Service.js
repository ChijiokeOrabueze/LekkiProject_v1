const resolveRepo = require('../helpers/resolveRepo');
const {cloudinary} = require('../config/cloudinaryConfig');

const Service = (targetRepo) =>{
    const repository = resolveRepo(targetRepo);
    const saveItem = async (itemDetails) => {
        try{
            const savedItem = await repository.save(itemDetails);
            return savedItem;
        }catch(err){
            throw err;
        }
    }

    const updateImageArray = async (itemId, file) => {
        try{
            const cloudinaryResponse = await cloudinary.uploader.upload(file.path);
            const filename = cloudinaryResponse.public_id;
            const path = cloudinaryResponse.secure_url;
            const {destination, ...others} = file;
            const image = {...others, path, filename};
            await repository.findItemAndUpdateArray(itemId, {images: image});
            return image;
        }catch(err) {
            throw err;
        }
        
    }

    const queryItem = async (params) => {
        try{
            const foundItems = await repository.filter(params);
            return foundItems;
        }catch(err){
            throw err;
        }
    }

    const updateItem = async (itemId, updates) => {
        const arr = ["bedroom", "sittingRoom", "kitchen", "bathroom", "toilet", "description", "validTo"];
        Object.keys(updates).forEach(u => {
            !arr.includes(u) && delete updates[u];
        });
        console.log(updates);
        try{
            const updatedItem = await repository.update(itemId, updates);
            return updatedItem;
        }catch(err) {
            throw err;
        }
    }

    return {
        saveItem,
        updateImageArray,
        queryItem,
        updateItem
    }
}


module.exports = Service;