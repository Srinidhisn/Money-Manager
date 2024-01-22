# Session 1:
----------
Body Parser: https://expressjs.com/en/resources/middleware/body-parser.html
CORS: https://www.npmjs.com/package/cors
Nodemon: https://www.npmjs.com/package/nodemon
Express Routing: https://expressjs.com/en/guide/routing.html
Express: https://expressjs.com/
Node: https://nodejs.org/en/learn/getting-started/introduction-to-nodejs


# Session 2:
----------
MongoDB installation: https://www.prisma.io/dataguide/mongodb/setting-up-a-local-mongodb-database
MongoDB official documentation: https://www.mongodb.com/
Mongoose: https://mongoosejs.com/



Username: admin
Pass: ZmTYtTUUQWGC42Ju



const mongoose = require('mongoose');
module.exports = function () {
    mongoose.connect('mongodb+srv://admin:2E2KtfgBCygDzrZF@rg.tbcbpkc.mongodb.net/', {
        dbName: "mern-2024"
    }).then(() => console.log(`Connected to MongoDB`))
        .catch(ex => console.error(ex))
}