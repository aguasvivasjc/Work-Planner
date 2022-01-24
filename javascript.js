// moment.j -- time & date (local)
var dateElement = document.querySelector("#currentDay");
var today = moment();
// $("#currentDay").text(today.format("MM Do, YYYY"));
dateElement.textContent = today


// save entry to local storage using save button

var dateEl = document.getElementById("currentDay");

function TimeUpdate () {
    var today = moment().format("MMM DD, YYYY [at] hh:mm:ss A");
    $("#currentDay").text(today);
    dateEl.textContent = today;
}
setInterval(TimeUpdate, 1000);