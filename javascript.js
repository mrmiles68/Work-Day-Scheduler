
// create main banner date
var timeNow = moment().format("MMMM Do YYYY")
document.getElementById("currentDay").innerHTML = timeNow;
console.log(timeNow);
var hour = moment().hour();
console.log(hour);

// Define Variables

var saveNine =" ";
var saveTen =" ";
var saveEleven =" ";
var saveTwelve =" ";
var saveOne =" ";
var saveTwo =" ";
var saveThree =" ";
var saveFour =" ";
var saveFive =" ";
var hardSaveNine = localStorage.getItem(hardSaveNine);
var hardSaveTen = localStorage.getItem(hardSaveTen);
var hardSaveEleven = localStorage.getItem(hardSaveEleven);
var hardSaveTwelve = localStorage.getItem(hardSaveTwelve);
var hardSaveOne =  localStorage.getItem(hardSaveOne);
var hardSaveTwo =  localStorage.getItem(hardSaveTwo);
var hardSaveThree =  localStorage.getItem(hardSaveThree);
var hardSaveFour =  localStorage.getItem(hardSaveFour);
var hardSaveFive =  localStorage.getItem(hardSaveFive);
var task9 = localStorage.getItem(hardSaveNine);
var task10 = localStorage.getItem(hardSaveTen);
var task11 = localStorage.getItem(hardSaveEleven);
var task12 = localStorage.getItem(hardSaveTwelve);
var task1 = localStorage.getItem(hardSaveOne);
var task2 = localStorage.getItem(hardSaveTwo);
var task3 = localStorage.getItem(hardSaveThree);
var task4 = localStorage.getItem(hardSaveFour);
var task5 = localStorage.getItem(hardSaveFive);


//  Display Previous user data
document.getElementById("currentTaskNine").value = task9;
document.getElementById("currentTaskTen").value = task10;
document.getElementById("currentTaskEleven").value = task11;
document.getElementById("currentTaskTwelve").value = task12;
document.getElementById("currentTaskOne").value = task1;
document.getElementById("currentTaskTwo").value = task2;
document.getElementById("currentTaskThree").value = task3;
document.getElementById("currentTaskFour").value = task4;
document.getElementById("currentTaskFive").value = task5;
console.log("original task " + task9);

// save and display data from user input

$( "#save9" ).click(function() {
        var saveNine = $("#currentTaskNine").val();
        console.log(saveNine);
        localStorage.setItem(hardSaveNine, saveNine);
        task9 = localStorage.getItem(hardSaveNine)
        console.log("current task: " +task9)
        document.getElementById("currentTaskNine").innerHTML = "Current Task: " + task9;
  });

  $( "#save10" ).click(function() {
    var saveTen = $("#currentTaskTen").val();
    console.log(saveTen);
    localStorage.setItem(hardSaveTen, saveTen);
    task10 = localStorage.getItem(hardSaveTen);
    console.log("current task: " +task10)
    document.getElementById("currentTaskTen").innerHTML = "Current Task: " + task10;
});
$( "#save11" ).click(function() {
  var saveEleven = $("#currentTaskEleven").val();
  console.log(saveEleven);
  localStorage.setItem(hardSaveEleven, saveEleven);
  task11 = localStorage.getItem(hardSaveEleven)
  console.log("current task: " +task11)
  document.getElementById("currentTaskEleven").innerHTML = "Current Task: " + task11;
});
$( "#save12" ).click(function() {
  var saveTwelve = $("#currentTaskTwelve").val();
  console.log(saveTwelve);
  localStorage.setItem(hardSaveTwelve, saveTwelve);
  task11 = localStorage.getItem(hardSaveTwelve)
  console.log("current task: " +task12)
  document.getElementById("currentTaskTwelve").innerHTML = "Current Task: " + task12;
});
$( "#save1" ).click(function() {
  var saveOne = $("#currentTaskOne").val();
  console.log(saveOne);
  localStorage.setItem(hardSaveOne, saveOne);
  task1 = localStorage.getItem(hardSaveOne)
  console.log("current task: " +task1)
  document.getElementById("currentTaskOne").innerHTML = "Current Task: " + task1;
});
$( "#save2" ).click(function() {
  var saveTwo = $("#currentTaskTwo").val();
  console.log(saveTwo);
  localStorage.setItem(hardSaveTwo, saveTwo);
  task2 = localStorage.getItem(hardSaveTwo)
  console.log("current task: " +task2)
  document.getElementById("currentTaskTwo").innerHTML = "Current Task: " + task2;
});
$( "#save3" ).click(function() {
  var saveThree = $("#currentTaskThree").val();
  console.log(saveThree);
  localStorage.setItem(hardSaveThree, saveThree);
  task3 = localStorage.getItem(hardSaveThree)
  console.log("current task: " +task3)
  document.getElementById("currentTaskThree").innerHTML = "Current Task: " + task3;
});
$( "#save4" ).click(function() {
  var saveFour = $("#currentTaskFour").val();
  console.log(saveFour);
  localStorage.setItem(hardSaveFour, saveFour);
  task4 = localStorage.getItem(hardSaveFour)
  console.log("current task: " +task4)
  document.getElementById("currentTaskFour").innerHTML = "Current Task: " + task4;
});
$( "#save5" ).click(function() {
  var saveFive = $("#currentTaskFive").val();
  console.log(saveFive);
  localStorage.setItem(hardSaveFive, saveFive);
  task5 = localStorage.getItem(hardSaveFive)
  console.log("current task: " +task5)
  document.getElementById("currentTaskFive").innerHTML = "Current Task: " + task5;
});

// Color fields by time of day

if (hour > 8 && hour < 10){
  document.getElementById("nineAm").style.backgroundColor = "gray"
} else if (hour < 9) {
  document.getElementById("nineAm").style.backgroundColor = "green";
} else {
  document.getElementById("nineAm").style.backgroundColor = "red";
}

if (hour > 9 && hour < 11){
  document.getElementById("tenAm").style.backgroundColor = "gray"
} else if (hour < 10) {
  document.getElementById("tenAm").style.backgroundColor = "green";
} else {
  document.getElementById("tenAm").style.backgroundColor = "red";
}

if (hour > 10 && hour < 12){
  document.getElementById("elevenAm").style.backgroundColor = "gray"
} else if (hour < 11) {
  document.getElementById("elevenAm").style.backgroundColor = "green";
} else {
  document.getElementById("elevenAm").style.backgroundColor = "red";
}

if (hour > 11 && hour < 13){
  document.getElementById("twelvePm").style.backgroundColor = "gray"
} else if (hour < 12) {
  document.getElementById("twelvePm").style.backgroundColor = "green";
} else {
  document.getElementById("twelvePm").style.backgroundColor = "red";
}

if (hour > 12 && hour < 14){
  document.getElementById("onePm").style.backgroundColor = "gray"
} else if (hour < 13) {
  document.getElementById("onePm").style.backgroundColor = "green";
} else {
  document.getElementById("onePm").style.backgroundColor = "red";
}

if (hour > 13 && hour < 15){
  document.getElementById("twoPm").style.backgroundColor = "gray"
} else if (hour < 14) {
  document.getElementById("twoPm").style.backgroundColor = "green";
} else {
  document.getElementById("twoPm").style.backgroundColor = "red";
}

if (hour > 14 && hour < 16){
  document.getElementById("threePm").style.backgroundColor = "gray"
} else if (hour < 15) {
  document.getElementById("threePm").style.backgroundColor = "green";
} else {
  document.getElementById("threePm").style.backgroundColor = "red";
}

if (hour > 15 && hour < 17){
  document.getElementById("fourPm").style.backgroundColor = "gray"
} else if (hour < 16) {
  document.getElementById("fourPm").style.backgroundColor = "green";
} else {
  document.getElementById("fourPm").style.backgroundColor = "red";
}

if (hour > 16 && hour < 18){
  document.getElementById("fivePm").style.backgroundColor = "gray"
} else if (hour < 17) {
  document.getElementById("fivePm").style.backgroundColor = "green";
} else {
  document.getElementById("fivePm").style.backgroundColor = "red";
}