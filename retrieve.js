var drawTable = function(classData)
{
    var rows = d3.select("tbody")
    .selectAll("tr")
    .data(classData)
    .enter()
    .append("tr");
    rows.append("td")
        .attr("class","quiz")
        .text(getQuizAverage);
    rows.append("td")
    .attr("class", "homework")
    .text(getHomeworkaverage);
    rows.append("td")
    .attr("class", "test")
    .text(getTestaverage);
    rows.append("td")
    .attr("class", "final")
    .text(getFinalgrade);
    
};
    var setTitle = function(msg)
    {
        d3.select("h2")
        .text(msg);
    };
    var getImage = function(student){
        console.log
        return "img/" + astudent.picture;
    };
    var getGrade = function(item){
        return item.grade;
    }
    var getQuizAverage = function(student){
        var quiz = student.quizes;
        var quizScores = quiz.map(getGrade);
        var avg = d3.mean(quizScores);
        console.log (avg);
        return avg
    };
        var getTestaverage = function(student){
            var test = student.test;
            var testScores = test.map(getGrade);
            var avg =d3.mean(testScores);
            return avg;
        };
        var getHomeworkaverage = function(student){
            var homework = student.homework;
            var homeworkScores = homework.map(getGrade);
            var avg = d3.mean(homeworkScores);
            return avg;
        };
        var getFinalgrade = function(student){
            var final = student.final;
            var Scores = final.map(getGrade);
            var avg = d3.mean(Scores);
            return avg;
            
            
        };
        var get
    var tablePromise = d3.json("classData.json")
    
    var successFunction = function(classData)
    {
        console.log("Class Data", classData);
        setTitle("Class Data");
        drawTable(classData);
        
    }
    var failFunction = function(err)
    {
        console.log(errMSG)
    };
   tablePromise.then(successFunction, failFunction);
    
    var errMSG = function(error){
     return error;
    };
    var clearTable = function() {
        d3.selectAll("table tbody tr")
        .remove();
        
    }
    var Headers = function(students) {
        d3.select("#quiz")
        .on("click",function(){
            console.log("clicked quiz");
            students.sort(function(a,b){
                var average1 = getQuizAverage(a);
                var average2 = getQuizAverage(b);
                if (average1 < average2) {return -1;}
                else if (average1==average2) {return 0;}
                else {return1;}
            });
        
    



            clearTable();
            drawtable(students);
            d3.selectAll(".quiz")
                .attr("class", "clicked")
        });
    };
            
            
