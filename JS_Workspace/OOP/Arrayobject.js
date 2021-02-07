placesToVisit = ["Paris", "New York", "Switzerland"];

//array index starts from 0
console.log(placesToVisit[0]);

//the last element will be removed from the array
placesToVisit.pop();
console.log("after pop operation", placesToVisit)

//push the element at the end of array
placesToVisit.push("Switzerland");
console.log("after push operation", placesToVisit)

//give the index value for element
console.log("index value of New York is", placesToVisit.indexOf("New York"));

//forEach() is used to interate over an array.
console.log("forEach:")
placesToVisit.forEach(function(place) {
    console.log(place);
})

//The map() array function generates a new array.
console.log("map:")

function display_uppercase(place) {
    return place.toUpperCase();
}

placesUpparCase = placesToVisit.map(display_uppercase);
console.log("output of map function", placesUpparCase);

// filter iterates over each element and creates a sub array if the function returns true
console.log("filter:")

function filterPlaces(val) {
    if (val.length > 5) {
        return true;
    }
}

filteredPlaces = placesToVisit.filter(filterPlaces);
console.log("output of filter function", filteredPlaces);

// find returns the first element in the array which satisfies a given condition. 
console.log("find:")

function findPlaces(val) {
    if (val.length > 5) {
        return true;
    }
}

foundPlaces = placesToVisit.find(findPlaces);
console.log("output of find function", foundPlaces);