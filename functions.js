function toggleGamedevDropdown() {
    // Toggle the "show" class on our dropdown menu
    document.getElementById("gamedevDropdown").classList.toggle("show");
}

function toggleProjectDropdown() {
    // Toggle the "show" class on our dropdown menu
    document.getElementById("projectDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.gamedev-dropdown-button')) {
        var dropdowns = document.getElementsByClassName("gamedev-dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.project-dropdown-button')) {
        var dropdowns = document.getElementsByClassName("project-dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}