/**
 * TreatmentController
 *
 * @description :: Server-side logic for managing treatments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Imports the Google Cloud client library
const Speech = require('@google-cloud/speech');
const fs = require('fs');
const wav = require('node-wav');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


module.exports = {
    voiceToText: voiceToText

};

function voiceToText(req, response) {
    var soundBinaryStr = req.body;

    try {
        // todo: predfom a check here.
        console.log("HYYY");
        var textToReturn = "howdeyyy!";
        // our Google Cloud Platform project ID
        const projectId = 'atomic-voice-176415';

        // Instantiates a client
        const speechClient = Speech({
            projectId: projectId
        });

        console.log("init apeech");
        // The name of the audio file to transcribe

        // Reads a local audio file and converts it to base64
        // const file = fs.readFileSync(req.body);
       /* let a = req.body;*/

        console.log("HYYY" + req.body);

        // let decodedWav = wav.decode(req.body.wavFile);
        var decodedWav = wav.decode(req.body);

        console.log("hi");
        var newChannelData = decodedWav.channelData; //we will change this if we find it is in stereo
        if (decodedWav.channelData.length > 1) { //if there is more than one channel, this is a stereo audio file
            newChannelData = []; //wipe newChannelData clean
            newChannelData.push(decodedWav.channelData[0]); //push only the first channel. If you wanted the second channel you could push [1]
        }
        console.log(newChannelData.length);
        var correctedAudioFile = wav.encode(newChannelData, {
            sampleRate: decodedWav.sampleRate,
            float: false,
            bitDepth: 16
        }); //get a buffer
        const audioBytes = correctedAudioFile.toString('base64');

        // The audio file's encoding, sample rate in hertz, and BCP-47 language code
        const audio = {
            content: audioBytes
        };
        const config = {
            encoding: 'LINEAR16',
            sampleRateHertz: 44100,
            languageCode: 'he-IL'
        };
        const request = {
            audio: audio,
            config: config
        };

        // Detects speech in the audio file
        speechClient.recognize(request)
            .then(function (results) {
                const transcription = results[0].results[0].alternatives[0].transcript;
                response.send(transcription);
                console.log(transcription);
                //console.log(`Transcription: ${transcription.split("").reverse().join("")}`);
            })
            .catch(function (err) {
                console.error('ERROR:', err);
            })
        ;
        // [END speech_quickstart]

        // response.send('Hello POST');
    }
    catch (ex) {
        console.log("error : "+ JSON.stringify(ex));
        response.send("shit!" + JSON.stringify(ex));
    }

    var textToReturn = "howdey!";
    //response.send(textToReturn);
}
