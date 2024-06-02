import mongoose from "mongoose";

type ConnecionObject={
    isConnected?: number
}

const connection:ConnecionObject={}

async function dbConnect():Promise<void>{
    if(connection.isConnected){
        console.log("Already connected to database");
        return;
    }
    try {
        const db=await mongoose.connect(process.env.MONGODB_URI || '',{})
        console.log("Db",db);
        console.log("DB conn",db.connections);
        connection.isConnected=db.connections[0].readyState
        console.log("DB Connected successfully");
    } catch (error) {
        console.log("DB connection failed");
        process.exit(1)
    }
}

export default dbConnect