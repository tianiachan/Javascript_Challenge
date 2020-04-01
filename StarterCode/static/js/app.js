// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// // Use d3 to update each cell's text with alien sighting report data
tableData.forEach(function(alienSighting) 
 {
     //append a row
   var row = tbody.append("tr");
   Object.entries(alienSighting).forEach(function([key, value]) 
   {
     // Append a cell to the row for each value in the weather report object
     var cell = row.append("td");
     cell.text(value);
   });
 });

// Select the button
var button = d3.select("#filter-btn");

//when clicked, select filter based on which field has data
button.on("click", function() 
{
    //input data into table info to be able to be used
    var tableInfo = data;
    //get input
    var inputElement = "";

    //if date time, filter based on what is entered in
    if (d3.select("#datetime").property("value")!= null)
    {
        //get input element
        inputElement = d3.select("#datetime").property("value");
        //apply filter for datetime
        var filteredDateTime = tableInfo.filter(alienSighting => alienSighting.datetime === inputElement);
        //draw new table
        populateTable(filteredDateTime);
    }
    // if city is chosen, filter based on city
    else if(d3.select("#cityName").property("value")!= null)
    {
        //get input element
        inputElement = d3.select("#cityName").property("value");
        //apply filter for city
        var filteredCity = tableInfo.filter(alienSighting => alienSighting.city === inputElement);
        //draw new table
        populateTable(filteredCity);
    }
    // if state is chosen, filter based on state
    else if(d3.select("#stateName").property("value")!= null)
    {
        //get input element
        inputElement = d3.select("#stateName").property("value");
        //apply filter for state
        var filteredState = tableInfo.filter(alienSighting => alienSighting.state === inputElement);
        //draw new table
        populateTable(filteredState);
    }
    // if country is chosen, filter based on country
    else if(d3.select("#country").property("value")!= null)
    {
        //get input element
        inputElement = d3.select("#country").property("value");
        //apply filter for country
        var filteredCountry = tableInfo.filter(alienSighting => alienSighting.country === inputElement);
        //draw new table
        populateTable(filteredCountry);
    }
    //if shape is chosen, filter based on shape
    else if(d3.select("#shape").property("value")!= null)
    {
        //get input element
        inputElement = d3.select("#shape").property("value");
        //apply filter for shape
        var filteredShape = tableInfo.filter(alienSighting => alienSighting.shape === inputElement);
        //draw new table
        populateTable(filteredShape);
    }
});

//helper function to populate table based on data given
function populateTable(dataGiven)
{
    //select based off the html
    var tbody = d3.select("tbody").html("");
    //go through each row in the data given
    dataGiven.forEach(function(alienSighting) 
    {
        //make a row
      var row = tbody.append("tr");
      //add each key and value pair into the table
      Object.entries(alienSighting).forEach(function([key, value]) 
      {
        //put in a cell
        var cell = row.append("td");
        //set the cell text as the value passed in
        cell.text(value);
      });
    });
}