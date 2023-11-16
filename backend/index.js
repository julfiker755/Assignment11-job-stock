const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');

// middleware 
app.use(cors({
  origin: ["http://localhost:5173","https://julfiker_755.surge.sh","https://assignment11-46043.firebaseapp.com"],
  credentials: true,
}))
// app.use(cors())
app.use(express.json())
app.use(cookieParser())



const varifytoken = async (req, res, next) => {
  const token = req.cookies?.token
  if (!token) {
    return res.status(401).send({ message: 'Unauthorized token' })
  }

  jwt.verify(token, `${process.env.ASSENTOKEN}`, (err, decoded) => {
    // error
    if (err) {
      console.log(err)
      return res.status(401).send({ message: 'Unauthorized token varify' })
    }
    req.user = decoded
    next()
  })
}

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3ksqccu.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true, } });

async function run() {
  try {
    const jobsdatabase = client.db("Jobsfair").collection("jobs");
    const Applyjobsdatabase = client.db("Jobsfair").collection("Applyjobs");
    // ? -------------------------------------------------------------------------------------
    app.post('/jwt', async (req, res) => {
      const user = req.body
      const token = jwt.sign(user, `${process.env.ASSENTOKEN}`, { expiresIn: '1h' });
      res.cookie('token', token, {
        httpOnly: true,
        secure:true,
        sameSite:'none'
        // sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
      }).send({ success: true })
    })
    app.post('/logout', async (req, res) => {
      res.clearCookie('token', {
        maxAge: 0,
        secure: process.env.NODE_ENV === 'production' ? true : false,
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
    })
    .send({ status: true })
    })

                
    // ? ------------------------------------------------------------------------------------
    //   how to getdata for my website
    app.get('/jobs', async (req, res) => {
      const result = await jobsdatabase.find({}).toArray()
      res.send(result)
    })
    // how to get jobs single data for wepsite
    app.get('/singlejob/:jodid', async (req, res) => {
      const { jodid } = req.params
      const query = { _id: new ObjectId(jodid) }
      const result = await jobsdatabase.findOne(query)
      res.send(result)
    })
    // how to post data
    app.post('/jobs', async (req, res) => {
      const body = req.body
      const result = await jobsdatabase.insertOne(body)
      res.send(result)
    })
    //? ---------------------------------------------------------------------------------------
    app.patch('/updateapplicants/:id', async (req, res) => {
      const { id } = req.params;
      const query={_id:new ObjectId(id)}
      const job = await jobsdatabase.findOne(query);

      if (job) {
        const result = await jobsdatabase.updateOne(query, {
          $inc: { applicants_number: 1 },
        });
        res.send(result);
      }
       
    });
    // ? --------------------------------------------------------------------------------------
    app.get('/myjobs', varifytoken, async (req, res) => {
      if (req.query?.email !== req.user?.email) {
        return res.status(403).send({ message: 'Forbidden access boss' })
      }

      let query = {}
      if (req.query?.email) {
        query = { email: req.query?.email }
      }
      const result = await jobsdatabase.find(query).toArray()
      res.send(result)

    })
    app.delete('/myjobs/:jobsid', async (req, res) => {
      const id = req.params.jobsid
      const query = { _id: new ObjectId(id) }
      const result = await jobsdatabase.deleteOne(query)
      res.send(result)
    })

    //
    app.put('/myjobupdate/:id', async (req, res) => {
      const id = req.params.id;
      const updateuser = req.body
      const filter = { _id: new ObjectId(id) }
      const options = { upsert: true }
      const updatedoc = {
        $set: {
          name: updateuser.name,
          image: updateuser.image,
          job_title: updateuser.job_title,
          job_category: updateuser.job_category,
          salary: updateuser.salary,
          description: updateuser.description,
          applicants_number: updateuser.applicants_number,
          posting_date: updateuser.posting_date,
          application_deadline: updateuser.application_deadline,

        }
      }
      const result = await jobsdatabase.updateOne(filter, updatedoc, options)
      res.send(result)
    })
    //
    //?------------------------------------------------------------------------------------------
    app.get('/applyjobs', varifytoken, async (req, res) => {
      if (req.query?.email !== req.user?.email) {
        return res.status(403).send({ message: 'Forbidden access boss' })
      }

      let query = {}
      if (req.query?.email) {
        query = { applyemail: req.query?.email }
      }
      const cursor = Applyjobsdatabase.find(query)
      const result = await cursor.toArray()
      res.send(result)
    })
    // how to applay  jobs
    app.post('/applyjobs', varifytoken, async (req, res) => {
      console.log('token', req.user?.email)
      const body = req.body
      const result = await Applyjobsdatabase.insertOne(body)
      res.send(result)
    })
    // ? -------------------------------------------------------------------------------------------

    // simple get data
    app.get('/', (req, res) => {
      res.send('Jobs sever running 2023')
    })
    console.log("Mongobd connect");
  } finally {
    // Ensures that the client will close when you finish/error
    //   await client.close();
  }
}
run().catch(console.dir)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})