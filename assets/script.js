// Get the current date
var currentDate = moment().format("dddd, MMMM Do YYYY");

// Display the current date at the top of the calendar
document.getElementById("currentDay").textContent = currentDate;

// Get the current hour
var currentHour = moment().format("H");

// Function to update the time block colors
function updateTimeBlocks() {
  var timeBlocks = document.getElementsByClassName("time-block");

  for (var i = 0; i < timeBlocks.length; i++) {
    var timeBlockHour = parseInt(timeBlocks[i].id);

    // Add classes based on the current hour
    if (timeBlockHour < currentHour) {
      timeBlocks[i].classList.add("past");
    } else if (timeBlockHour == currentHour) {
      timeBlocks[i].classList.add("present");
    } else {
      timeBlocks[i].classList.add("future");
    }
  }
}

// Update the time block colors on page load
updateTimeBlocks();

// Save event to local storage
function saveEvent(hour, eventText) {
  localStorage.setItem(hour, eventText);
}

// Load events from local storage and display them on the calendar
function loadEvents() {
  var timeBlocks = document.getElementsByClassName("time-block");

  for (var i = 0; i < timeBlocks.length; i++) {
    var hour = timeBlocks[i].id;
    var eventText = localStorage.getItem(hour);

    if (eventText) {
      timeBlocks[i].querySelector(".event-text").textContent = eventText;
    }
  }
}

// Load events from local storage on page load
loadEvents();

// Event listener for save buttons
var saveButtons = document.getElementsByClassName("save-btn");

for (var i = 0; i < saveButtons.length; i++) {
  saveButtons[i].addEventListener("click", function() {
    var hour = this.parentElement.id;
    var eventText = this.previousElementSibling.value;

    saveEvent(hour, eventText);
  });
}
