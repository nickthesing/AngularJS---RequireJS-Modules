var express = require('express'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override')
	app = express();

app.use(bodyParser.json());
app.use(methodOverride());
app.use('/vendor', express.static(__dirname + '/source/vendor' ));
app.use('/js', express.static(__dirname + '/source/js' ));

app.get('/*', function(req,res)
{
    res.sendfile(__dirname + '/build/index.html');
});

app.listen(3000);

console.log('Listening on port 3000');