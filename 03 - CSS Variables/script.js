// Get all the input elements with a class of 'controls'
const inputs = document.querySelectorAll(".controls input");

// Define a function to handle updates to the input values
function handleUpdate() {
  // Get the 'data-sizing' attribute of the input, or an empty string if it doesn't exist
  const suffix = this.dataset.sizing || "";

  // Set a CSS custom property to the value of the input, with the property name derived from the input's 'name' attribute
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

// Add event listeners to all the input elements when the 'change' event,
// or when the 'mousemove' event 
// call the handleUpdate function
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
