// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// Getting a reference to the button on the page with the id property set to `click-me`
var input_date = d3.select("#text");
// YOUR CODE HERE!

// // Use d3 to update each cell's text with
// // UFO report values (weekday, date, high, low)
data.forEach(function(uforeport) {
    console.log(uforeport);
    var row = tbody.append("tr");

    Object.entries(uforeport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
    });
});




// Select the form
var button = d3.select("#filter-btn");

// // Create event handlers 
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Remove existing table
    d3.select("tbody").html("");

    // // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputdate = d3.select("#datetime");
  
    // // Get the value property of the input element
    var date = inputdate.property("value");

    console.log(date);

    var filteredData = tableData.filter(person => person.datetime === date);

    console.log(filteredData);

    // // Display the filtered dataset
    filteredData.forEach((weatherReport) => {
    var row = tbody.append('tr');

    Object.entries(weatherReport).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});