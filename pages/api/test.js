import dbConnect from 'models/db/dbConnect'

dbConnect()

const Test = async (req, res) => {
  res.json({ test: 'test'})
}

export default Test
