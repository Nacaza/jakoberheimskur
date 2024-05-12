
document.getElementById('toggleButton').addEventListener('click', function() {
    const valueDisplay = document.getElementById('valueDisplay');
    // Toggle the value between 0 and 1
    valueDisplay.textContent = valueDisplay.textContent === '0' ? '1' : '0';
});
