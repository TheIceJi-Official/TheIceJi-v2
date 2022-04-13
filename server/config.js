const config = {}

// *! General
config.TOKEN = 'iceji-Q08NYdjM5w'
config.NAME = 'TheIceJI'
config.VERSION = '2.0.7'
config.GOOGLE_ANALYTICS = ''
config.GOOGLE_TAG_MANAGER = ''

// *! Database
let Mongo_DB_user = ``
let Mongo_DB_pass = ``
let Mongo_DB_cluster = ``
let Mongo_DB_Name = `test`
let Mongo_DB_Permission = `retryWrites=true&w=majority`
config.MONGO_DB_URL = (dbName = Mongo_DB_Name, legacy = false) =>
  legacy
    ? `mongodb://${Mongo_DB_user}:${Mongo_DB_pass}@${Mongo_DB_cluster}-shard-00-00.jcx5d.mongodb.net:27017,${Mongo_DB_cluster}-shard-00-01.jcx5d.mongodb.net:27017,${Mongo_DB_cluster}-shard-00-02.jcx5d.mongodb.net:27017//${dbName}?ssl=true&replicaSet=atlas-mltbir-shard-0&authSource=admin&${Mongo_DB_Permission}`
    : `mongodb+srv://${Mongo_DB_user}:${Mongo_DB_pass}@${Mongo_DB_cluster}.jcx5d.mongodb.net/${dbName}?${Mongo_DB_Permission}`
config.MONGO_URL = config.MONGO_DB_URL(legacy = true)
config.MONGO_NAME_SERVER = ''
config.GRAPHQL_CONTENT_URL = ''
config.GRAPHQL_PROJECT_URL = ''
config.GRAPHQL_SHOP_URL = ''
config.REDIS_DB_MANAGE_API = ''
config.REDIS_DB_CACHE_URL = ''
config.FIREBASE_API_KEY = ''
config.FIREBASE_AUTH_DOMAIN = ''
config.FIREBASE_PROJECT_ID = ''
config.FIREBASE_STORAGE_BUCKET = ''
config.FIREBASE_MESSAGING_SENDER_ID = ''
config.FIREBASE_APP_ID = ''
config.FIREBASE_MEASUREMENT_ID = ''

config.AUTH_FB_APP_ID = ''
config.AUTH_FB_APP_SECRET = ''
config.AUTH_GITHUB_CLIENT_ID = ''
config.AUTH_GITHUB_CLIEN_SECRET = ''
config.AUTH_GOOGLE_CLIENT_ID = ''
config.AUTH_GOOGLE_CLIEN_SECRET = ''
config.AUTH0_DOMAIN = ''
config.AUTH0_CLIENT_ID = ''
config.AUTH0_CLIENT_SECRET = ''
config.AUTH0_ISSUER = ''

// *! Exchange API
config.BINANCE_API_KEY = ''
config.BINANCE_API_SECRET = ''

// *! Blockchain API
config.ETHERSCAN_API = ''
config.BSCSCAN_API = ''

module.exports = config
