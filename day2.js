const form = document.getElementById("registrationForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let department = document.getElementById("department").value.trim();
    let year = document.getElementById("year").value.trim();
    let projectTitle = document.getElementById("projectTitle").value.trim();

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !department || !year || !projectTitle) {
        form.parentElement.classList.add("error-shake");
        setTimeout(() => form.parentElement.classList.remove("error-shake"), 400);
        alert("Please fill all fields.");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Hide form and show success animation
    form.style.display = "none";
    successMessage.classList.remove("hidden");

    // Reset form after 3 seconds and show again (optional)
    setTimeout(() => {
        form.reset();
        form.style.display = "block";
        successMessage.classList.add("hidden");
    }, 3000);
});
