function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = "Hello, " + name + "!";
}