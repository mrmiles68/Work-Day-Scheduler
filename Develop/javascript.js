var timeNow = moment().format("MMMM Do YYYY")
document.getElementById("currentDay").innerHTML = timeNow;
console.log(timeNow);

var saveNine ="";
var saveTen ="";
var saveEleven ="";
var saveTwelve ="";
var saveOne ="";
var saveTwo ="";
var saveThree ="";
var saveFour ="";
var saveFive ="";
var hardSaveNine = localStorage.getItem(hardSaveNine);
var hardSaveTen =  "";
var hardSaveEleven =  "";
var hardSaveTwelve =  "";
var hardSaveOne =  "";
var hardSaveTwo =  "";
var hardSaveThree =  "";
var hardSaveFour =  "";
var hardSaveFive =  "";
var task9 = localStorage.getItem(hardSaveNine);

var dataSave = function(){
    console.log("button 9 clicked");
};
document.getElementById("currentTaskNine").innerHTML = "Current Task: " + task9;
console.log("original task " + task9);


// $(document).ready(function() {
$( "#save9" ).click(function() {
        var saveNine = $(".nineTask").val();
        alert(" New Variable: " + saveNine);
        console.log(saveNine);
        localStorage.setItem(hardSaveNine, saveNine);
        alert(localStorage.getItem(hardSaveNine));
        task9 = localStorage.getItem(hardSaveNine)
        console.log("current task: " +task9)
        document.getElementById("currentTaskNine").innerHTML = "Current Task: " + task9;
  });
// });
   $( "#save10" ).click(function() {
    var saveTen = $("tenTask").val();
        alert(saveTen);
  });
  $( "#save11" ).click(function() {
    var saveEleven = $("elevenTask").val();
        alert(saveEleven);
  });
  $( "#save12" ).click(function() {
    var saveTwelve = $("twelveTask").val();
        alert(saveTwelve);
  });
  $( "#save1" ).click(function() {
    var saveOne = $("oneTask").val();
        alert(saveOne);
  });
  $( "#save2" ).click(function() {
    var saveTwo = $("twoTask").val();
        alert(saveTwo);
  });
  $( "#save3" ).click(function() {
    var saveThree = $("threeTask").val();
        alert(saveThree);
  });
  $( "#save4" ).click(function() {
    var saveFour = $("fourTask").val();
        alert(saveFour);
  });
  $( "#save5" ).click(function() {
    var saveFive = $("fiveTask").val();
        alert(saveFive);
  });


