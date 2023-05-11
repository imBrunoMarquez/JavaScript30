// Select the elements that represent the second, minute, and hour hands
const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

// Function to update the time on the clock
function setDate() {
  // Get the current date and time
  const now = new Date();

  // Update the second hand
  const seconds = now.getSeconds(); // Get the current seconds
  const secondsDegrees = (seconds / 60) * 360 + 90; // Convert seconds to degrees
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // Update the CSS transform property

  // Update the minute hand
  const mins = now.getMinutes(); // Get the current minutes
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90; // Convert minutes to degrees
  minsHand.style.transform = `rotate(${minsDegrees}deg)`; // Update the CSS transform property

  // Update the hour hand
  const hour = now.getHours(); // Get the current hour
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90; // Convert hour to degrees
  hourHand.style.transform = `rotate(${hourDegrees}deg)`; // Update the CSS transform property
}

// Call the setDate() function every second
setInterval(setDate, 1000);

// Call the setDate() function once when the page loads
setDate();
