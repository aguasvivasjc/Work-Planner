// moment.j -- time & date (local)
var dateEl = document.getElementById("currentDay");
var dateElement = document.querySelector("#currentDay");
var today = moment();
const description = document.querySelector(".description");
const saveBtn = document.querySelectorAll(".saveBtn");
console.log(saveBtn)



// $("#currentDay").text(today.format("MM Do, YYYY"));


// save entry to local storage using save button


function timeUpdate() {
    var today = moment().format("MMM DD, YYYY [at] hh:mm:ss A");
    $("#currentDay").text(today);
    dateEl.textContent = today;
}

function save(element, saveName) {
    localStorage.setItem(saveName, element.value);
}



dateElement.textContent = today
setInterval(timeUpdate, 1000);
$(".container").on('click' , ".saveBtn", function(event){
console.log($(this).parent().attr("id"))
});