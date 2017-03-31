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
    var flightNo = req.body.flightNo;
    var source = req.body.source;
    var destination = req.body.destination;
    var delayed = req.body.delayed;
    var boardingGate = req.body.boardingGate;
    var departureTime = req.body.departureTime;
    var arrivalTime = req.body.arrivalTime;

    firebase.database().ref(airportName+'/'+carrierName+'/flight/'+flightNo).set({
        flightNo:flightNo,
        source:source,
        destination:destination,
        delayed:delayed,
        boardingGate:boardingGate,
        departureTime:departureTime,
        arrivalTime:arrivalTime
    })
    // const dbrefObj= firebase.database().ref("/"+airportName+"/")
    // dbrefObj.once('value', snap=>console.log(snap.val()))

    firebase.database().ref("/"+airportName+'/'+carrierName+'/flight').once('value').then(function(snapshot) {
        res.json(snapshot.val());
    });
    // res.json()
    // res.status(200)
}