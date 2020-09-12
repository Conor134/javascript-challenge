// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// YOUR CODE HERE!

// // Use d3 to update each cell's text with
// // UFO report values 
data.forEach(function(uforeport) {
    // console.log(uforeport);
    var row = tbody.append("tr");

    Object.entries(uforeport).forEach(function([key, value]) {
    // console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
    });
});

//  Select the form
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", function() {

       // Prevent the page from refreshing
    d3.event.preventDefault();
    // Clear the table
    tbody.html("");

    //     // Select the input element and get the raw HTML node
    var inputdate = d3.select("#datetime");
    var inputdate2 = inputdate.property("value");
    console.log(inputdate2);
 
    // Filter reports
    var filteredData = tableData.filter(datereport => datereport.datetime === inputdate2);
    console.log(filteredData);

    // Display the filtered dataset
    filteredData.forEach((report) => {
        var row = tbody.append('tr');

        Object.entries(report).forEach(([key, value]) => {
            console.log(key, value);
            var cell = row.append('td');
            cell.text(value);
        });
    });
});