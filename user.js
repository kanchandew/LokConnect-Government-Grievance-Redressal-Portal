// Mobile menu toggle
document
	.getElementById("mobile-menu-button")
	.addEventListener("click", function () {
		const menu = document.getElementById("mobile-menu");
		menu.classList.toggle("hidden");
	});

// Complaint modal handling
const modal = document.getElementById("complaint-modal");
const openModalBtn = document.getElementById("new-complaint-btn");
const closeModalBtn = document.getElementById("close-modal");
const cancelModalBtn = document.getElementById("cancel-modal");
const departmentSelect = document.getElementById("department");

// Open modal when "Register New Complaint" is clicked
openModalBtn.addEventListener("click", function () {
	modal.classList.remove("hidden");
	document.body.style.overflow = "hidden";
});

// Close modal when X or Cancel is clicked
closeModalBtn.addEventListener("click", closeModal);
cancelModalBtn.addEventListener("click", closeModal);

function closeModal() {
	modal.classList.add("hidden");
	document.body.style.overflow = "auto";
}

// Set department when department card is clicked
const deptButtons = document.querySelectorAll("[data-dept]");
deptButtons.forEach((button) => {
	button.addEventListener("click", function () {
		const dept = this.getAttribute("data-dept");
		departmentSelect.value = dept;
		modal.classList.remove("hidden");
		document.body.style.overflow = "hidden";
	});
});

// Close modal when clicking outside
window.addEventListener("click", function (event) {
	if (event.target === modal) {
		closeModal();
	}
});

// Form submission
document
	.querySelector('#complaint-modal button[type="button"]')
	.addEventListener("click", function () {
		// Here you would normally submit the form data
		alert("Complaint submitted successfully!");
		closeModal();
		document.getElementById("complaint-form").reset();
	});

// Animate elements when they come into view
const observerOptions = {
	threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("fade-in");
			observer.unobserve(entry.target);
		}
	});
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((element) => {
	observer.observe(element);
});
