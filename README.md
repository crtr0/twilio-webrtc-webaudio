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

###Option 2*

Use a tool like [Ngrok](http://ngrok.com) to tunnel localhost.

Once this app is on the public internet, view the presentation by going to `http://domain:3000`.




## Connect it to Twilio

1) Sign-up for a [free Twilio account](http://twilio.com/try-twilio)
2) Purchase a new Twilio number
3) Set your `Messaging Request URL` to `http://yourdomain/sms`.
4) Set your `Voice Request URL` to `http://yourdomain/voip`.

## Send and Recieve SMS

Send a text message to your new Twilio number. You should get a canned response. Have a few people send a text to that phone number as well.

## Make phone calls

Now visit `http://yourdomain/call`. Everyone who sent a text message to your Twilio number should get a phone call and, when they answer it, get put into a conference call with each other. Say "hi!".

## Recieve a phone call in the browser

Go to [slide 12](http://localhost:3000/#/12) in the presentation. *You must be using Chrome*. Now open up the Chrome Dev Tools and go to the JS console. enter

