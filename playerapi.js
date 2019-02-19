const express = require('express');
const app = express();

app.get('/', function(request,response) {
    response.writeHead(200);
    response.write('<html><body><p>Please specify an player in the URL path</p></body></html>');
});


app.listen(8080, function() {
    console.log('express is now running on port 8080...');
    
});

/*app.put('/:player', function(request, response) {
    const player = request.params.player;
    response.writeHead(200);
    response.write("<html><body><p>" +player+ " does not have the attribute you are looking for.</p></body></html>");
    response.end();
});
*/
//get players
app.get('/players', function(request, response) {
    response.json({player1: 'Joe', player2: 'George'});
    response.end();
});
//get player
app.get('/:player', function(request, response) {
    const player = request.params.player;
    response.json("Hello, you have received the " +player);
    response.end();
});
//delete player
app.delete('/players/:player', function(request, response){
    const player = request.params.player;
    response.json("Hello, you have terminated the " +player);
    response.end();
});
//create player
app.post('/players/:player', function(request, response) {
    const player = request.params.player;
    response.json("Hello, you have created the " +player);
    response.end();
});
//update player
app.patch('/players/:player', function(request, response) {
    const player = request.params.player;
    response.json("Hello, you have updated the " +player);
    response.end();
});

//get items
app.get('/items', function(request, response) {
    response.json({item1: 'sword', item2: 'axe'});
    response.end();
});

//get item
app.get('/:item', function(request, response) {
    const item = request.params.item;
    response.json("Hello, you have recieved the " +item);
    response.end();
});

//delete item
app.delete('/items/:item', function(request, response) {
    const item = request.params.item;
    response.json("Hello, you have terminated the " +item);
    response.end();
});

//create item
app.post('/items/:item', function(request, response) {
    const item = request.params.item;
    response.json("Hello, you have created the " +item);
    response.end();
});

//update item
app.patch('/items/:item', function(request, response) {
    const item = request.params.item;
    response.json("Hello you have updated the " +item);
    response.end();
});