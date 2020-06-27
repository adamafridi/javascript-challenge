// YOUR CODE HERE!
// Start by definining the variables
tbody = d3.select("tbody");
// From data.js
var tableData = data;

// Function to Make a Table
function makeTable(data) {
  // Start By Clearing Existing Data
  tbody.html("");
  // Loop Through by using a for each
  data.forEach((dataRow) => {
    // Append Table Row `tr` to the Table Body `tbody`
    row = tbody.append("tr");
    // `Object.values` & `forEach` to Iterate Through Data
    Object.values(dataRow).forEach((val) => {
      // Append a Cell to the Row for Each Value
      cell = row.append("td");
      cell.text(val);
    });
  });
}
// Event that Triggers a Function When the Button is Clicked
function handleClick() {
  // Select HTML Input Element & Get the Value of that Input Element
  date = d3.select("#datetime").property("value");
  filterData = tableData;

  // Use if statement to see if a Date was Entered & Filter Data Using that Date;
  if (date) {
    // Apply Filter to the Table Data to Only Keep Rows Where datetime Value Matches the Filter Value
    filterData = filterData.filter((row) => row.datetime === date);
  }
  // Build Table with Filtered Data
  makeTable(filterData);
}
// `on` Function to attach an Event to the Handler Function
d3.selectAll("#filter-btn").on("click", handleClick);
// Build Table with data.js
makeTable(tableData);cd
