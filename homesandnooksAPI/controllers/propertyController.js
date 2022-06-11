


const PropertyController = (serviceContainer, helpers) =>{
    const addProperty = async (req, res) => {
        try{
            console.log(req.body);
            const property = await(serviceContainer.saveItem(req.body));
            const response = helpers.constructResponse(property, "ok");
            res.status(201).json(response);
        }catch(err){
            res.send({"error":err});
        }
    }


    return {
        addProperty
    }
}


module.exports = PropertyController;