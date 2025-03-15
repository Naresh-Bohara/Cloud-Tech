require("dotenv").config();
const http = require("http")
const application = require("./src/config/express.config");

const port = process.env.PORT || 9005;
const host = process.env.HOST || "127.0.0.1";

const appServer = http.createServer(application);

appServer.listen(port, host, (error)=>{
    if(!error){
        console.log("server is running on port:", port);
        console.log("Press CTRL+C to stop the server.")
    }else{
        console.log(error);
    }
})


