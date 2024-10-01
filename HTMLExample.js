function handleSubmit(event) {
    event.preventDefault();  // Prevent form submission
    const name = document.getElementById('name').value;
    alert('Hello, ' + name + '!');
}