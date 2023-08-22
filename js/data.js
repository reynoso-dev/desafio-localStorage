document.addEventListener('DOMContentLoaded', function() {
    const dataSpan = document.getElementById('data');
    
    const savedData = localStorage.getItem('savedData');
    if (savedData) {
        dataSpan.textContent = savedData;
    }
});
