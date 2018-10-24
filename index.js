const express = require('express');
const bodyParser = require('body-parser');
const mc = require('./controllers/messages_controller');
const app = express();
app.use(bodyParser.json())
app.use( express.static(__dirname + '/public/build'));
const port = 3001;

app.get(`/api/messages`, mc.readMessage)
app.post(`/api/messages`, mc.createMessage)
app.put(`/api/messages/:id`, mc.updateMessage)
app.delete(`/api/messages/:id`, mc.delete)


app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})