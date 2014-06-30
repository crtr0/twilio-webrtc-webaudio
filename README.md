# Twilio + WebRTC + Web Audio API = Awesome

## Setup

`git clone <this repo>`

`npm install`

```
export TWILIO_ACCOUNT_SID=YOUR_ACCOUNT_SID
export TWILIO_AUTH_TOKEN=YOUR_AUTH_TOKEN
```

## Get the app on the public Internet

###Option #1

Deploy to the hosting provider or PaaS of choice. Remember to replicate the environment variables to your production environment.

###Option #2

Use a tool like [Ngrok](http://ngrok.com) to tunnel localhost.

## View the presentation

Once this app is on the public internet, view the presentation by going to `http://yourdomain`.

## Connect it to Twilio

1. Sign-up for a [free Twilio account](http://twilio.com/try-twilio)
2. Purchase a new Twilio number
3. Set your `Messaging Request URL` to `http://yourdomain/sms`.
4. Set your `Voice Request URL` to `http://yourdomain/voip`.

## Send and Recieve SMS

Send a text message to your new Twilio number. You should get a canned response. Have a few people send a text to that phone number as well.

## Make phone calls

Edit `index.js` and modify the following lines:

* Line 28 & 33 - edit the phone number to reflect your Twilio number
* Line 34 - edit the URL to point at `http://yourdomain/voice`

Now visit `http://yourdomain/call`. Everyone who sent a text message to your Twilio number should get a phone call and, when they answer it, get put into a conference call with each other. Say "hi!".

## Recieve a phone call in the browser

*REQUIRMENT: You must be using Chrome*

Go to slide 12 in the presentation. Now open up the Chrome Dev Tools and go to the JS console. Enter:

```
$.ajax('/token').done(function(token) { Twilio.Device.setup(token); });

Twilio.Device.incoming(function(conn) { conn.accept(); window.mediaStream = conn.mediaStream; $('log').html('call coming in!'); });
```
Now use someone's phone to call your Twilio number. You should see a Chrome dialog appear asking for permission to use your microphone. Click "accept" and the call will get connected to your browser!

## See the volume of the call using the Web Audio API

Now go to the next slide (#13) and enter the following code in the JS console:

```
visualizeMediaStream(mediaStream.stream);
```

Speak into your computer. You should see the bar rise and fall on the screen based on the volume coming from your microphone on the live call. 

## Meta 

* No warranty expressed or implied.  Software is as is.
* [MIT License](http://www.opensource.org/licenses/mit-license.html)
* Brought to you by [Twilio](http://www.twilio.com) Seattle




