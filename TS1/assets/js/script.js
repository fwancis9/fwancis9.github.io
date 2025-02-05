document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.querySelector('.checkbox');
    const themeLink = document.querySelector('#theme-style');
    
    toggleSwitch.addEventListener('change', function() {
        if (this.checked) {
            themeLink.href = 'assets/css/dark/style.css';
        } else {
            themeLink.href = 'assets/css/light/style.css';
        }
    });
});