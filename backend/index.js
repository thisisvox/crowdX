const detectFacesAll = require('./visionapi');
const express = require('express');
const app = express();


app.use(express.json());

app.get('/api', (req, res) => {
    // Handle GET request to /api
    // return a response generated from visionapi.js
    detectFacesAll().then((count) => {
        console.log(count)
        res.send(count);
    });
});

app.get('/api/:facility', (req, res) => {
    let facility = req.params.facility;
    // the response should be a JSON object with the facility name and the count for each hour starting from 8 AM until 12 AM and the count is a random integer between 0 and 100
    let response = {"facility" : facility, "counts" : 
        Array.from({length: 10}, (_, i) => i + 1).map((i) => {
            return {
                "hour" : i,
                "count" : Math.floor(Math.random() * 100)
            }
        })

    };

    res.send(response);

});
  
// app.post('/api', (req, res) => {
//   // Handle POST request to /api
// });
  
// Add more API routes as needed

app.listen(3000, () => console.log('Listening on port 3000!'));

