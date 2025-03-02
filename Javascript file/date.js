function updateDate() {
  let today = new Date();

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let dayName = days[today.getDay()];
  let monthName = months[today.getMonth()];
  let date = today.getDate();
  let year = today.getFullYear();

  document.getElementById(
    "date"
  ).innerHTML = `<p class="text-[#00303C] text-[1.375rem] font-normal">${dayName}, <br>
           <span class="font-bold text-[1.375rem]">${monthName} ${date} ${year}</span>
       </p>`;
}

function scheduleMidnightUpdate() {
  let now = new Date();
  let midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  let timeUntilMidnight = midnight - now;

  setTimeout(function () {
    updateDate();
    scheduleMidnightUpdate();
  }, timeUntilMidnight);
}

updateDate();
scheduleMidnightUpdate();
