const express = require('express');
const app = express();

app.get('/', function(request,response) {
    response.writeHead(200);
    response.write('<html><body><p>Please specify a player, item, enemy, NPC, tree, or texture in the URL path.</p></body></html>')
});

//get players
app.get('/players', function(request, response) {
    response.json({player1: 'Joe', player2: 'George'});
    response.end();
});
//get player
app.get('/players/:player', function(request, response) {
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
//replace player
app.put('/players/:player', function(request, response) {
    const player = request.params.player;
    response.json("Hello, you have replaced the " +player);
    response.end();
});

//get items
app.get('/items', function(request, response) {
    response.json({item1: 'sword', item2: 'axe'});
    response.end();
});

//get item
app.get('/items/:item', function(request, response) {
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

//replace item
app.put('/items/:item', function(request, response) {
    const item = request.params.item;
    response.json("Hello, you have replaced the " +item);
    response.end();
});

//get enemies
app.get('/enemies', function(request, response) {
    response.json({enemy1: 'hive', enemy2: 'fallen'});
    response.end();
});

//get enemy
app.get('/enemies/:enemy', function(request, response) {
    const enemy = request.params.enemy;
    response.json("Hello, you have recieved the " +enemy);
    response.end();
});

//delete enemy
app.delete('/enemies/:enemy', function(request, response) {
    const enemy = request.params.enemy;
    response.json("Hello, you have terminated the " +enemy);
    response.end();
});

//create enemy
app.post('/enemies/:enemy', function(request, response) {
    const enemy = request.params.enemy;
    response.json("Hello, you have created the " +enemy);
    response.end();
});

//replace enemy
app.put('/enemies/:enemy', function(request, response) {
    const enemy = request.params.enemy;
    response.json("Hello, you have replaced the " +enemy);
    response.end();
});


//get Non Playable Characters
app.get('/NPCs', function(request, response) {
    response.json({NPC1: 'Zora', NPC2: 'Goron'});
    response.end();
});

//get NPC
app.get('/NPCs/:NPC', function(request, response) {
    const NPC = request.params.NPC;
    response.json("Hello, you have recieved the " +NPC);
    response.end();
});

//delete NPC
app.delete('/NPCs/:NPC', function(request, response) {
    const NPC = request.params.NPC;
    response.json("Hello, you have terminated the " +NPC);
    response.end();
});

//create NPC
app.post('/NPCs/:NPC', function(request, response) {
    const NPC = request.params.NPC;
    response.json("Hello, you have created the " +NPC);
    response.end();
});

//replace NPC
app.put('/NPCs/:NPC', function(request, response) {
    const NPC = request.params.NPC;
    response.json("Hello, you have replaced the " +NPC);
    response.end();
});

//get trees
app.get('/trees', function(request, response) {
    response.json({tree1: 'birch', item2: 'oak'});
    response.end();
});

//get tree
app.get('/trees/:tree', function(request, response) {
    const tree = request.params.tree;
    response.json("Hello, you have recieved the " +tree);
    response.end();
});

//delete tree
app.delete('/trees/:tree', function(request, response) {
    const tree = request.params.tree;
    response.json("Hello, you have terminated the " +tree);
    response.end();
});

//create tree
app.post('/trees/:tree', function(request, response) {
    const tree = request.params.tree;
    response.json("Hello, you have created the " +tree);
    response.end();
});

//replace tree
app.put('/trees/:tree', function(request, response) {
    const tree = request.params.tree;
    response.json("Hello, you have replaced the " +tree);
    response.end();
});

//get textures
app.get('/textures', function(request, response) {
    response.json({item1: 'grass', item2: 'bark'});
    response.end();
});

//get texture
app.get('/textures/:texture', function(request, response) {
    const texture = request.params.texture;
    response.json("Hello, you have recieved the " +texture);
    response.end();
});

//delete texture
app.delete('/textures/:texture', function(request, response) {
    const texture = request.params.texture;
    response.json("Hello, you have terminated the " +texture);
    response.end();
});

//create texture
app.post('/textures/:texture', function(request, response) {
    const texture = request.params.texture;
    response.json("Hello, you have created the " +texture);
    response.end();
});

//replace texture
app.put('/textures/:texture', function(request, response) {
    const texture = request.params.texture;
    response.json("Hello, you have replaced the " +texture);
    response.end();
});

app.listen(8080, function() {
    console.log('express is now running on port 8080...');
});