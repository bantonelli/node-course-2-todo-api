//API KEY AIzaSyDtxt-JuFq-YVB5Cy9OPSjaywqHasYjIFI

var GoogleLocations = require('google-locations-es6');
 
var locations = new GoogleLocations('AIzaSyDtxt-JuFq-YVB5Cy9OPSjaywqHasYjIFI');
 
// locations.search({keyword: 'Google', location: [37.42291810, -122.08542120]}, function(err, response) {
//   console.log("search: ", response.results);
 
//   locations.details({placeid: response.results[0].place_id}, function(err, response) {
//     console.log("search details: ", response.result.name);
//     // search details: Google 
//   });
// });
 
// locations.autocomplete({input: 'Verm', types: "(cities)"}, function(err, response) {
//   console.log("autocomplete: ", response.predictions);
 
//   var success = function(err, response) {
//     console.log("did you mean: ", response.result.name);
//     // did you mean:  Vermont 
//     // did you mean:  Vermont South 
//     // did you mean:  Vermilion 
//     // did you mean:  Vermillion 
//   };
 
//   for(var index in response.predictions) {
//     locations.details({placeid: response.predictions[index].place_id}, success);
//   }
// });
 
locations.searchByAddress({address: '1430 Oak Tree Drive Apt. E, North Brunswick, NJ 08902'}, function(err, response){
    if (err) {
        console.log(err);
    } else if (response) {
        console.log(response);
    }    
//   for (var index in response.details) {
//     console.log("Potential Match: " + response.details[index].name);
//     // Potential Match: Google 
//     // Potential Match: Gooey Cookie Factory 
//   }
//   for (var index in response.errors) {
//     console.log("Error looking up place details: ", response.errors[index]);
//   }
});
 
// locations.searchByPhone({phone: "(732) 558-5024"}, function(err, response){
//   // Returns up to 2 matches for this phone number 
//   console.log(response);
// });