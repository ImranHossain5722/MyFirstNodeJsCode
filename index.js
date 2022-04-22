const express =require ('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000
app.use(cors())
app.use (express.json());

const users=[
 {id:1, name: 'Sabana', email: 'sabana@gmail.com',phone: '0123456789'},
 {id:2, name: 'srabone', email: 'sabana@gmail.com',phone: '0123456789'},
 {id:3, name: 'sabana', email: 'sabana@gmail.com',phone: '0123456789'},
 {id:4, name: 'sabana', email: 'sabana@gmail.com',phone: '0123456789'},
 {id:5, name: 'sabana', email: 'sabana@gmail.com',phone: '0123456789'},
 {id:6, name: 'sabanoor', email: 'sabnur@gmail.com',phone: '0123456784'},
]


app.get('/users',(req,res) =>{
    console.log('query', req.query);
    //filter search query
    if(req.query.name){
        const search =req.query.name.toLocaleLowerCase();
        const matched =users.filter(user=>user.name.toLowerCase().includes(search))

        res.send(matched)
    }
    else{
        res.send(users)
    }
   
})

app.get('/user/:id',(req, res)=>{
    console.log(req.params)
    const id = req.params.id
    const user = users[id]
 res.send(user)
})

app.post('/user',(req,res)=>{
    console.log(req.body);
    const user =req.body;
    user.id= users.length+1;
    users.push(user)
    res.send(user)

})

app.listen(port,()=>{
    console.log('Listening to port',port);
})