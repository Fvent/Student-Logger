var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var cors = require('cors');
var corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,POST'
}
app.use(cors(corsOptions));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ITech', {useNewUrlParser: true, useUnifiedTopology: true});

var studentSchema = mongoose.Schema({
    firstname: String,
    lastname: String
});

var Student = mongoose.model("Student", studentSchema);


const PORT = 3500;

app.get('/', (req,res) => {
    res.send('express server')
});

app.post('/add-student', (req,res) => {
    var payload = req.body;
        console.log(payload);
   
    Student.find({firstname: payload.firstname, lastname: payload.lastname}, (err, response) => {
        if(err){
            console.log(err);
        }else{
            if(response.length > 0){
                res.send("STUDENT EXISTS")
            }else{
                var newStudent = new Student({
                    firstname: payload.firstname,
                    lastname: payload.lastname
                });
                newStudent.save(function(err, response){
                    console.log(response);
                });
                res.send('NEW STUDENT ADDED');
            }
            
        }
    });
    
});

app.get('/students', function(req, res){
    Student.find(function(err, response){
       res.json(response);
    });
 });


app.listen(PORT, () => {
    console.log(`server listening on port: ${PORT}`);
});