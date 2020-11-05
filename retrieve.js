var retrievePromise = d3.json("classData.json")
var successFCN = function(classData){
console.log("data", classData);
}

var failFCN = function(errMessage) {
    console.log("failure", errmessage);
}
retrievePromise.then(successFCN, failFCN);
var drawTable = function(classData)
{
    var rows = d3.select("tbody")
    .selectAll("tr")
    .data(classData)
    .enter()
    .append("tr");
    
    var setTitle = function(msg)
    {
        d3.select("th")
        .text(msg);
    }
    
    var tablePromise = d3.json("classData.json")
    
    var successFunction = function(classData)
    {
        console.log("Class Data", classData);
        setTitle("Class Data");
        drawTable(classData);
    }
    var failFunction = function(err)
    {
        setTitle("Error while loading data");
        console.log("Error Loading Data:",err);
    };
   tablePromise.then(successFunction, failFunction);
    
    
    
    
    d3.select("table")
    .on("click",function()
        {
    classData.sort(function(studentA,studentB)
    {
        if(studentA.final.grade == studentB.final.grade)
            {
                return 0;
            }
    else if (studentA.final.grade > studentB.final.grade)
        {
            return 1;
        }
    else {
        return -1;
    }
    });
    });                