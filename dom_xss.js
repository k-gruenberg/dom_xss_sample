const userInput = decodeURIComponent(location.hash.substring(1));
document.getElementById('output').innerHTML = 'User input: ' + userInput;
