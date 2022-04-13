import mongoose from 'mongoose'
import serverConfig from 'server/config'

const connection = {}

const dbConnect = async () => {
  if (connection.isConnected) {
    return
  }
  let dbConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
    const db = await mongoose.connect(serverConfig.MONGO_URL, dbConfig)
  connection.isConnected = db.connections[0].readyState
}

export default dbConnect
