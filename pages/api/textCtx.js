import dbConnect from 'models/db/dbConnect'

dbConnect()

// const Test = async (req, res) => {
//   res.json({ test: 'test'})
// }

export async function getServerSideProps(context) {
    context.res.write(JSON.stringify(context))
    return {
        props: {ctxdata: context}
    }
}

export default Test