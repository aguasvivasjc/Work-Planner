var dateEl = document.getElementById("currentDay");
var dateElement = document.querySelector("#currentDay");
var today = moment();
const description = document.querySelector(".description");
const saveBtn = document.querySelectorAll(".saveBtn");
console.log(saveBtn)

// moment.j -- time & date (local)

function timeUpdate() {
    dateEl.textContent = moment().format("MMM DD, YYYY [at] hh:mm:ss A");
    // $("#currentDay").text(today);
    // dateEl.textContent = today;
}

// save entry to local storage using save button

function save(element, saveName) {
    localStorage.setItem(saveName, element.value);

}

// time comparions function for past & present 



// dateElement.textContent = today
setInterval(timeUpdate, 1000);

$(".saveBtn").click(function (event) {
    event.preventDefault();
    // $(".container").on('click' , ".saveBtn", function(event){
    // console.log($(this).parent().attr("id"))
    // console.log($(this.previousElementSibling).val())
    let hour = $(this).parent().attr("id")
    let description = ($(this.previousElementSibling).val())
    console.log(hour);
    console.log(description);
    localStorage.setItem(hour, description);
    
});

$("#9am .description").val(localStorage.getItem("9am"));




// $("#currentDay").text(today.format("MM Do, YYYY"));
