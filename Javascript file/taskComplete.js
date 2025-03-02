window.onload = function () {
  // Get elements
  let completeButtons = document.getElementsByClassName("complete-btn");
  let taskNumberElement = document.getElementById("task-number");
  let countNumberElement = document.getElementById("count-number");
  let clearHistoryBtn = document.getElementById("clear-history-btn");

  // Add click event to all complete buttons
  for (let i = 0; i < completeButtons.length; i++) {
    completeButtons[i].onclick = function () {
      // Get the task title
      let taskCard = this.parentNode.parentNode;
      let taskTitle = taskCard.getElementsByTagName("h1")[0].innerText;

      // Show alert
      alert("Bord updated successfully!");

      // Update counts
      let taskCount = parseInt(taskNumberElement.innerText);
      let completedCount = parseInt(countNumberElement.innerText);

      taskCount = taskCount - 1;
      if (taskCount < 0) {
        taskCount = 0;
      }
      completedCount = completedCount + 1;

      // Update the count
      taskNumberElement.innerText = padZero(taskCount);
      countNumberElement.innerText = completedCount;

      // Add log entry
      addActivityLogEntry(taskTitle);

      // Disable the button
      this.innerText = "Completed";
      this.disabled = true;
      this.style.backgroundColor = "#cccccc";

      // Check if all tasks are completed
      if (taskCount === 0) {
        alert("Congrates!!! You have completed all the current tasks");
      }
    };
  }

  // Function to add zero padding
  function padZero(num) {
    if (num < 10) {
      return "0" + num;
    } else {
      return num.toString();
    }
  }

  // Function to add activity log entry
  function addActivityLogEntry(taskTitle) {
    // Create activity log element
    let logEntry = document.createElement("div");
    logEntry.className =
      "px-4 py-3 bg-[#f4f7ff] rounded-[8px] mx-[8px] mb-[8px] font-bold allClear";

    // Get current time
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let timeString = hours + ":" + minutes + ":" + seconds + " " + ampm;

    console.log(timeString);

    // Set log entry content
    logEntry.innerHTML =
      '<p class="poppins text-sm text-gray-700">' +
      "You have completed the task " +
      taskTitle +
      "</span> at " +
      timeString +
      "</p>";

    // Get activity log container
    let logContainer = document.getElementById("activity-container");

    // Insert after the border line
    let borderLine = logContainer.querySelector(".logs-update");
    logContainer.insertBefore(logEntry, borderLine.nextSibling);
  }

  // Clear history button functionality
  clearHistoryBtn.onclick = function () {
    // Get all log entries
    let logEntries = document.querySelectorAll(".allClear");

    // Remove each entry
    for (let i = 0; i < logEntries.length; i++) {
      logEntries[i].remove();
    }
  };
};
