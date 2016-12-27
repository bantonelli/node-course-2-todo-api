var icloud = require("find-my-iphone").findmyphone;

icloud.apple_id = "bantonelli07@gmail.com";
icloud.password = "08SMaSH!!05"; 

icloud.getDevices(function(error, devices) {
    var device;

    if (error) {
        throw error;
    }
    //pick a device with location and findMyPhone enabled
    devices.forEach(function(d) {
        if (device == undefined && d.location && d.lostModeCapable) {
            device = d;
        }
    });

    console.log(devices);

    if (device) {

        //gets the distance of the device from my location
        var myLatitude = 38.8977;
        var myLongitude = -77.0366;

        icloud.getDistanceOfDevice(device, myLatitude, myLongitude, function(err, result) {
            console.log("Distance: " + result.distance.text);
            console.log("Driving time: " + result.duration.text);
        });

        icloud.alertDevice(device.id, function(err) {
            console.log("Beep Beep!");
        });

        icloud.getLocationOfDevice(device, function(err, location) {
            console.log(location);
        });
    }
});