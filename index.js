var http = require('http')
  , static = require('node-static')
  , url = require('url')
  , twilio = require('twilio');

file = new static.Server('./public');

http.createServer(function(request, response) {
  request.addListener('end', function () {
  var hash = url.parse(request.url);
  if (hash.path === '/sms') {
    var twiml = new twilio.TwimlResponse();
    twiml.message('Hey, thanks for saying hi. Ping me anytime @CarterRabasa for questions about Twilio or awesome coffee');
    response.writeHead(200, {'content-type': 'text/xml'});
    response.end(twiml.toString());
  }
  else if (hash.path === '/voice') {
    var twiml = new twilio.TwimlResponse();
    twiml.dial(function(){
      this.conference('conference');
    })
    response.writeHead(200, {'content-type': 'text/xml'});
    response.end(twiml.toString());
  }
  else if (hash.path === '/call'){
    var client = new twilio.RestClient(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    // use your Twilio number below
    client.listMessages({'to': '+1xxxyyyzzzz'}, function(err, res){
      res.messages.forEach(function(message){
        console.log(message.body);
        client.makeCall({
          'to': message.from,
          'from': '+1xxxyyyzzzz',
          'url': 'https://your.domain.com/voice'
        });
      });
    });
    response.end("OK");
  }
  else if (hash.path === '/voip'){
    var twiml = new twilio.TwimlResponse();
    twiml.dial(function(){
      this.client('jsla');
    })
    response.writeHead(200, {'content-type': 'text/xml'});
    response.end(twiml.toString());
  }
  else if (hash.path === '/token') {
    var capability = new twilio.Capability(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    // enter the name of the Twilio Client that you'd like to be
    // able to call into
    capability.allowClientIncoming('jsla');
    response.end(capability.generate());
  }
  // If none of the paths match, let's just serve static files
  // from the public/ directory
  else {
      file.serve(request, response);   
  }  

  }).resume();
}).listen(process.env.PORT || 3000);

