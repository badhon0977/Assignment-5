function updateDate() {
    let today = new Date();

    
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let dayName = days[today.getDay()];

     
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let monthName = months[today.getMonth()];

    // Get Date and Year
    let date = today.getDate();
    let year = today.getFullYear();

    // Set the date inside the div
    document.getElementById("date").innerHTML = 
        `<p class="text-[#00303C] text-[1.375rem] font-normal">${dayName}, <br>
            <span class="font-bold text-[1.375rem]">${monthName} ${date} ${year}</span>
        </p>`;
}

// Call it when the page loads
window.onload = updateDate;