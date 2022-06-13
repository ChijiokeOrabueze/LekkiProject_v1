# LekkiProject_v1
This is the first version of a full stack real estate web application that allows users to view and add real estate properties for sale. It allows users to also search properties available based on property address, owner, number of bedrooms, minimum and maximum price. In addition users can add images of properties and update exsiting property information.

This was built with react (front-end) and node-express (backend).

The native appliction saves property data to a mongo db database which i have created and connected to and saves property images to my cloudinary account. The frontend fetches these data and displays. The config links of these dependencies are found in the .env and can be customized.

# Running application
After cloning this repository to your local machine,
There are 2 ways to run this application on your local machine. They are as follows:

# Method 1: Node method
This method is reccomended but violates the 12 factor app rules. But since I have only tested the application with it, I reccommend it. The better method is the method 2 which can be attempted if docker is installed on your local machine. 

- To start, This method will require installing the javascript node dependency. The link to download node is https://nodejs.org/en/download/

- Once node has been installed, Open up a terminal and CD into the homesandnooksAPI folder of this application and run "npm install" to install the node dependencies of the backend of the application.

- On the same terminal run "npm start" to start the api server and connect to my mongo database. #This terminal should be left running.

- Open a new terminal inside the homesandnooks folder and run "npm install" to install frontend dependencies.
- Once the installs are done run "npm start" to start the app.
- Go to localhost:3000 to view the running app.

# Method 2: Docker method
This method is prefereble but owing to the fact that my windows build does not support virtualization, I Could not download docker locally to. Nontheless, This files to execute this method has been created into this application.

- First make sure docker is installed on your local machine (here is a link to download and install docker:https://docs.docker.com/desktop/windows/install/)

- Open up the terminal on the root directory of this project and run the command enclosed in braces {docker build -t "react-app" ./homesandnooks/}.
- This builds an image for the front end and names it "react-app".

- Once the build command finishes running successfully, run this next command on the terminal {docker build -t "api-server" ./homesandnooksAPI/}.
- This builds a docker image of the api and names it "api-server".

- Next, run {docker-compose up} on the terminal. This command starts all 3 containers for the full stack app , frontend and backend respectively.
- Finally, go to your local browser and go to localhost:3000 to see the app.

# Customizations
- In addition, you can also customize the app by creating a cloudinary account and updating the .env file on th homesandnooksAPI folder with your cloudinary details as specified in the .env file.
- Also, you can also change the name of the images during docker build, But this will require editing the docker-compose.yml file with the new image names.

# Important Notes
- The curly braces on the commands are not part of the command.
- Connecting to the database and cloudinary requires internet connection.
- I have included the .env file to allow easier access.



.
