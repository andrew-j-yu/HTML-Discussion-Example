function handleSubmit(event) {
    event.preventDefault();  // Prevent form submission
    
    // Get the value from the input field
    const name = document.getElementById('name').value;
    
    // Find the div where we want to display the name
    const resultDiv = document.getElementById('result');
    
    // Set the content of the div to the name entered by the user
    resultDiv.textContent = "Hello, " + name + "!";
}