// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const HelloAPI = (req, res) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}


export default HelloAPI