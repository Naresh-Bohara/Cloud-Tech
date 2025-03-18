/** HouseKeeping of records older then 180 days */

const fs = require("fs");
const cron = require("node-cron");
const path = require("path");

const archive = require("./data/archive.json");

const houseKeepingTasks = ()=>{
    console.log("Running house keeping invoices task: ", new Date())
    try{
        archive.map((item, index)=>{
            const presentDate= new Date().getTime();
            const recordDate = new Date(item.date).getTime();
                console.log("The number of days: ", Math.floor((presentDate-recordDate)/(1000*60*60*24)))

                if(Math.floor((presentDate-recordDate)/(1000*60*60*24)) > 180){
                    archive.splice(index, 1)

                    fs.writeFileSync(
                        path.join(__dirname, "./", "data", "archive.json"),
                        JSON.stringify(archive),
                        "utf-8"
                    )
                }
        })
    }catch(err){
        console.log(err)
    }
    console.log("House keeping task ended: ", new Date())
}

cron.schedule("*/10 * * * * *", houseKeepingTasks)