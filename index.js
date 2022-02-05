const express = require('express')
const app = express()
const port = 5000

const config = require('./config/key');

// const bodyParser = require('body-parser');
const { User } = require('./models/User');

// bodyparser가 서버에서 데이터 가져와 분석해 쓸 수 있게 허용
//application/x-www-form-urlencoded 형태 데이터를 분석
app.use(express.urlencoded({extended: true}));
//application/json 타입 분석 가능
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World! 새해 복 .. 받던가 말던가')
})

app.post('/register', (req,res) => {
  //회원 가입에 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터 베이스에 넣는다

  const user = new User(req.body);

  user.save((err,userInfo)=>{
    if(err) return res.json({success:false, err}) //에러인경우
    return res.status(200).json({ //성공인 경우
      success:true
    })
  }) 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


const mongoose = require('mongoose');
const res = require('express/lib/response');
mongoose.connect(config.mongoURI, {
    // useNewUrlParser:true, userUnifiedTopology:true,useCreateIndex:true, useFindAndModify:false
}
).then(() => console.log('MongoDB Conneted')).catch(err => console.log(err))
