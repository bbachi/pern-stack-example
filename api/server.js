const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const fs = require('fs')
const path = require("path");

const taskController = require('./controller/task.controller')

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const customCss = fs.readFileSync((process.cwd()+"/swagger.css"), 'utf8');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './ui/build/')));

// let express to use this
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {customCss}));

app.use(bodyParser.json());

app.get('/api/tasks', (req, res) => {
    taskController.getTasks().then(data => res.json(data));
});

app.post('/api/task', (req, res) => {
    console.log(req.body);
    taskController.createTask(req.body.task).then(data => res.json(data));
});

app.put('/api/task', (req, res) => {
    taskController.updateTask(req.body.task).then(data => res.json(data));
});

app.delete('/api/task/:id', (req, res) => {
    taskController.deleteTask(req.params.id).then(data => res.json(data));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './ui/build/index.html'));
});


app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})