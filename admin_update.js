// Get modal elements
const detailsModal = document.getElementById("details-modal");
const closeDetails = document.getElementById("close-details");
const viewButtons = document.querySelectorAll(".view-btn");

// View complaint details
viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const row = button.closest("tr");

    // Set modal content (in a real app, this would come from an API)
    document.getElementById("detail-id").textContent =
      row.querySelector("td:nth-child(1)").textContent;
    document.getElementById("detail-date").textContent =
      row.querySelector("td:nth-child(2)").textContent;
    document.getElementById("detail-citizen").textContent =
      row.querySelector("td:nth-child(3)").textContent;
    document.getElementById("detail-description").textContent =
      row.querySelector("td:nth-child(4)").textContent;
    document.getElementById("detail-updated").textContent =
      row.querySelector("td:nth-child(6)").textContent;

    // Copy status element
    const statusElement = row
      .querySelector("td:nth-child(5) span")
      .cloneNode(true);
    const detailStatus = document.getElementById("detail-status");
    detailStatus.innerHTML = "";
    detailStatus.appendChild(statusElement);

    // Show the modal
    detailsModal.classList.remove("hidden");
  });
});

// Close details modal
closeDetails.addEventListener("click", () => {
  detailsModal.classList.add("hidden");
});

// Close modal when clicking outside
detailsModal.addEventListener("click", (e) => {
  if (e.target === detailsModal) {
    detailsModal.classList.add("hidden");
  }
});
