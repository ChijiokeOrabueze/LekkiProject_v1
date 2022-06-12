const router = require('express').Router();
const PropertyController = require('../controllers/propertyController');
const Service = require('../service/Service');
const constructResponse = require('../helpers/constructResponse');
// const upload = require("../config/imageSaveConfig");

const propertyService = Service("property");
const propertyController = PropertyController(propertyService, {constructResponse});


router.get("/property/:id?", propertyController.getProperty);
router.post("/property", propertyController.addProperty);
router.put("/property/:id", propertyController.updateProperty);
router.post("/upload", propertyController.addPropertyImage)





module.exports = router;
    