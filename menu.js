const toggleBtn = document.getElementById('toggle-btn');
const dropdownMenu = document.getElementById('navlinks-sm');

const toggleFunction = () => {
    dropdownMenu.classList.toggle('active');
}

toggleBtn.addEventListener('click', toggleFunction);