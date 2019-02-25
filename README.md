**Polarity Test**

Basic create and read application with attributes username, hobbies and avatar (size less than 1MB) saved to database and all users retrieved on view page.

Application is built with open-source technologies with minimal components and code but supports addition many future functionalities easily

Basic MERN(Mongo, Express, React, Node) application 

Frontend : React
Backend: Node
Database : Mongo
Other dependencies:
* axios -- send HTTP requests from react to node
* body-parser -- to read express/axios requests body data
* cors -- resouce sharing to open data from different URL's
* express -- for routing in node 
* mongoose -- for MongoDB
* bootstrap -- JS Styling framework
* react-router-dom -- routing in react

Rest API rules are created in /api/route.js mostly for creation of data and retreival of data from database routed through server.js using express

Data Schema, mongo connection are stored in multiple files to access and check easily and for better understandability.

All data is uploaded to my free-tier personal MongoDB cloud Atlas cluster. Connection string with username is password is stored in code.


**INSTALL LATEST VERSION OF NODE JS**

For Windows follow this link :  https://blog.teamtreehouse.com/install-node-js-npm-windows


Once installed, either clone this repo or download it as zip and extract

**Application Installation**

Step 1: 

open /api folder and run : npm install --no-optional

and then once all dependencies are installed run : node server.js


Step 2:

open /polar folder and run : npm install --no-optional

and when all dependencies are installed run : npm start


The application is now installed and open http://localhost:3000 to view the application.
Add data to database in create and view in view pages.

