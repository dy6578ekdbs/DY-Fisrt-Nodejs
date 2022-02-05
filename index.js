const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://dy6578:wjdek22!@cluster0.dwygb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    // useNewUrlParser:true, userUnifiedTopology:true,useCreateIndex:true, useFindAndModify:false
}
).then(() => console.log('MongoDB Conneted')).catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})