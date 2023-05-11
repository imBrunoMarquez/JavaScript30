// This function removes the 'playing' class from a key element after the 'transitionend' event fires on that element
function removeTransition(e) {
  // Check if the 'transitionend' event fired on the 'transform' property
  if (e.propertyName !== "transform") return;
  // If the event fired on the 'transform' property, remove the 'playing' class from the target element
  e.target.classList.remove("playing");
}

// This function plays a sound when a key is pressed
function playSound(e) {
  // Get the audio element that matches the key code of the pressed key
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // Get the key element that matches the key code of the pressed key
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  // If there is no audio element that matches the key code of the pressed key, exit the function
  if (!audio) return;

  // Add the 'playing' class to the key element
  key.classList.add("playing");
  // Set the audio element's current time to 0 (so the sound starts from the beginning if it's already playing) and play the sound
  audio.currentTime = 0;
  audio.play();
}

// Get an array of all the elements with a class of 'key' and add a 'transitionend' event listener to each one
const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

// Add a 'keydown' event listener to the window that calls the 'playSound' function when a key is pressed
window.addEventListener("keydown", playSound);
