require('dotenv').config();
const express = require('express'),
    app = express();

const PORT = process.env.PORT || 8080;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {upload} = require('./config/imageSaveConfig');
// const {cloudinaryConfig} = require('./config/cloudinaryConfig');
const propertyRouteHandler = require('./routes/propertyRouteHandler')


mongoose.connect(process.env.MONGO_URL)
.then(() => {console.log('db connection succesful')})
.catch((err) => {console.log(err)});

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(upload);


app.use('/api/v1/lekki', propertyRouteHandler);




app.listen(PORT, ()=>{
    console.log(`App is listening on port ${PORT}`);
});