//
//  Created by Avinav on 20/03/17
//  Copyright © 2017 Avinav. All rights reserved.
//
var firebase = require('firebase')

//API Requirements
//airportName:  Name of the Airport
//carrierName:  Name of the Carrier

module.exports = function (req, res) {
    var airportName = req.body.airportName;
    var carrierName = req.body.carrierName;
    var counterNumber = req.body.counterNumber;
    var counterCount = req.body.counterCount;
    var throughput = req.body.throughput;

    firebase.database().ref(airportName+'/'+carrierName+'/'+counterNumber).set({
        counterCount:counterCount,
        throughput:throughput
    })
    // const dbrefObj= firebase.database().ref("/"+airportName+"/")
    // dbrefObj.once('value', snap=>console.log(snap.val()))

    firebase.database().ref("/"+airportName).once('value').then(function(snapshot) {
        res.json(snapshot.val());
    });
    // res.json()
    // res.status(200)
    // res.send('Updated')
};