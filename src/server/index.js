
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv')
const PORT = process.env.PORT || 8081
const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const app = express()
const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?'
const fetch = require('node-fetch')
const path = require('path')

dotenv.config();

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.static('dist'))


app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post('/saveData', async (req, res) => {
    try {
        const url = req.body.url
        console.log(`you entered: ${url}`)
        const apiURL = `${baseUrl}key=${process.env.API_KEY}&url=${url}&lang=en`
        console.log(apiURL)
        const response = await fetch(apiURL);
        const data = await response.json();
    
        const sendData = {
            text: data.sentence_list[0].text,
            score_tag: data.score_tag,
            agreement: data.agreement,
            subjectivity: data.subjectivity,
            confidence: data.confidence,
            irony: data.irony,
        }
        console.log(sendData)
        res.send(sendData);
    } catch (error) {
        console.log(error.message)
    }

})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})
// TODO: export app to use it in the unit testing

module.exports = app