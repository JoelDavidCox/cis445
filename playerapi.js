const express = require('express');
const app = express();

app.get('/', function(request,response) {
    response.writeHead(200);
    response.write('<html><body><p>Please specify an player in the URL path</p></body></html>')
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

//get player
app.get('/:player', function(request, response) {
    const player = request.params.player;
    response.writeHead(200);
    response.write("<html><body><p>Hello, some" +player+ " is playing.</p>" + 
                    "<p>I see you are calling: " +player+ "</p>");
    response.write("<p>" +player+ " is really bad at video games.</p></body></html>");
    response.end();
});
//delete player
app.delete('/:player', function(request, response){
    const player = request.params.player;
    response.writeHead(200);
    response.write("<html><body><p>Hello, you have terminated the " +player);
    response.write("</p></body></html>");
    response.end();
});
//create player
app.post('/:player', function(request, response) {
    const player = request.params.player;
    response.writeHead(200);
    response.write("<html><body><p>" +player+ " has been created.</p></body></html>");
    response.end();
});
//update player
app.patch('/:player', function(request, response) {
    const player = request.params.player;
    response.writeHead(200);
    response.write("<html><body><p>" +player+ " has been updated.</p></body></html>");
    response.end();
});

//get items
app.get('/:items', function(request, response) {
    const items = request.params.player;
    response.writeHead(200);
    response.write("<html><body><p>" +items+ " has been retrieved.</p></body></html>");
    response.end();
});

//get item
app.get('/:item', function(request, response) {
    const item = request.params.player;
    response.writeHead(200);
    response.write("<html><body><p>" +item+ " has been retrieved.</p></body></html>");
    response.end();
});

//delete item
app.delete('/:item', function(request, response) {
    const item = request.params.player;
    response.writeHead(200);
    response.write("<html><body><p>" +item+ " has been terminated.</p></body></html>");
    response.end();
});

//create item
app.post('/:item', function(request, response) {
    const item = request.params.player;
    response.writeHead(200);
    response.write("<html><body><p>" +item+ " has been created.</p></body></html>");
    response.end();
});

//update item
app.post('/:item', function(request, response) {
    const item = request.params.player;
    response.writeHead(200);
    response.write("<html><body><p>" +item+ " has been updated.</p></body></html>");
    response.end();
});