document.addEventListener("DOMContentLoaded", function() {
    const modal = document.querySelector(".modal");
    const profileCard = document.querySelector(".profile-card");
    const closeButton = document.querySelector(".close");
    const profileImage = document.querySelector(".modal-profile-image");

    const openModal = () => {
        modal.classList.remove("hidden");
    };

    const closeModal = () => {
        modal.classList.add("hidden");
    };

    profileCard.addEventListener("click", openModal);
    closeButton.addEventListener("click", closeModal);

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});
