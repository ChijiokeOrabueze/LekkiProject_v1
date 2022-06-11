const router = require('express').Router();
const PropertyController = require('../controllers/propertyController');
const Service = require('../service/Service');
const constructResponse = require('../helpers/constructResponse')

const propertyService = Service("property");
const propertyController = PropertyController(propertyService, {constructResponse});

router.post("/property", propertyController.addProperty);





module.exports = router;
    