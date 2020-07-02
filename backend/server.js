const express = require('express')
const routes = require('./server/index')
const team = require('./server/team')
// const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

// app.get('/', (req,res) => {
//     res.send('hi m working');
// })

app.use(cors());
app.options('*', cors());


app.use('/', routes)
app.use('/team', team)

app.listen(4000, ()=>{
    console.log('server run')
})