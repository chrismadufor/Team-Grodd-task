const toggleBtn = document.getElementById('toggle-btn');
const dropdownMenu = document.getElementById('navlinks');

const toggleFunction = () => {
    dropdownMenu.classList.toggle('active');
}

toggleBtn.addEventListener('click', toggleFunction);