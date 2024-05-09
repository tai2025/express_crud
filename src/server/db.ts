import { MongoClient } from "mongodb";

import { MONGODB_URI, DB_NAME } from "./config";

let connectingClient;

export const connectClient = async () => {
    if(connectingClient){
        return connectingClient.db(DB_NAME)    
    }
    const client = new MongoClient(MONGODB_URI)
    await client.connect()
    await client.db(DB_NAME).command({ping : 1})
    console.info("Connected to MongoDB")
    connectingClient = client

    return connectingClient.db(DB_NAME)
}

export const stopClient = async () => {
    await connectingClient?.close()
}

