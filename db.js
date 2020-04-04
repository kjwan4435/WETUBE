import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

mongoose.connect(
    process.env.MONGO_URL,
    {
        //항상 mongodb를 실행할 때마다 줄 configuration. new version에 맞춰서 설정해놓은거임 신경 ㄴㄴ
        useNewUrlParser:true,
        useFindAndModify:false
    });

const db = mongoose.connection;

const handleOpen = () => console.log("✅ connect to DB");
const handleError = (error) => console.log(`❌ connection DB ERROR: ${error}`)

db.once("open", handleOpen);
db.on("error", handleError);