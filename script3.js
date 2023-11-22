// Step 01: Create a XHR Object
var request = new XMLHttpRequest();
// Step 02: Specify the API
request.open("GET", "https://restcountries.com/v2/all");
// Step 03: Sending the request
request.send();
//Step 04: Once the requested data is there in server once data is successfully loaded
//Server response will be of 200 status code.
//Functions: they are used to perform specific task
request.onload = function () {
    var result = JSON.parse(request.response);
    for(var i=0;i<=result.length;i++)
    {
    console.log("countryname=",result[i].name);
    console.log("region=",result[i].region);
    console.log("subregion=",result[i].subregion);
    console.log("population=",result[i].population)
    }
}
