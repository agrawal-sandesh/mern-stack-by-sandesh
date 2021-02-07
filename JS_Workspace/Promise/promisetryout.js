function getTrip(location) {
    return new Promise(function(resolve, reject) {
        if (location == "Paris") {
            resolve("Let's take a trip to " + location);
        } else {
            reject(Error("Invalid Location"));
        }
    });
}
getTrip("Paris").then(
    function(data) {
        console.log(data);
    },
    function(error) {
        console.log(error.message);
    }
)