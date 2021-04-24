var checks = document.querySelectorAll('.check');
for (let ch of checks) {
    ch.addEventListener('click', function() {
        this.parentNode.style.color = '#ccc';
    });
}