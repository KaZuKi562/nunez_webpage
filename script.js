// This block handles the popup modal that appears after submitting a message in contact us.
document.addEventListener("DOMContentLoaded", function() {
    // Get references to form, popup modal, and popup close button
    const form = document.getElementById("contactForm");
    const popup = document.getElementById("popupModal");
    const popupClose = document.getElementById("popupClose");

    // When the contact form is submitted:
    // - Prevent the page from reloading
    // - Show the popup modal
    // - Reset the form fields
    form.addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent actual form submission
        popup.style.display = "block";
        form.reset();
    });

    // When the close button is clicked, hide the popup modal
    popupClose.addEventListener("click", function() {
        popup.style.display = "none";
    });

    // Optional: If the user clicks outside the modal content, close the popup
    window.addEventListener("click", function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    });
});

// --- Image Modal Logic ---
// This block enables clicking a testimonial item to open an image modal with navigation for multiple images.
document.addEventListener("DOMContentLoaded", function () {
    let currentImages = []; // Array to hold images for the current testimonial
    let currentIndex = 0;   // Track which image is currently shown

    // Attach click event to each testimonial item (card)
    document.querySelectorAll('.testimonial-item').forEach(item => {
        item.addEventListener('click', function() {
            // Get the array of images from data-images attribute
            const images = JSON.parse(this.getAttribute('data-images') || '[]');
            if (!images.length) return;
            currentImages = images;
            currentIndex = 0;
            showModalImage();
            document.getElementById('img-modal').style.display = "flex";
        });
    });

    // Show the current image in the modal
    function showModalImage() {
        const modalImg = document.getElementById('img-modal-content');
        if (!currentImages.length) return;
        modalImg.src = currentImages[currentIndex];
    }

    // Next button: show the next image (wraps around)
    document.getElementById('img-modal-next').onclick = function(e) {
        e.stopPropagation();
        if (!currentImages.length) return;
        currentIndex = (currentIndex + 1) % currentImages.length;
        showModalImage();
    }
    // Previous button: show the previous image (wraps around)
    document.getElementById('img-modal-prev').onclick = function(e) {
        e.stopPropagation();
        if (!currentImages.length) return;
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        showModalImage();
    }
    // Close button: hides the image modal
    document.getElementById('img-modal-close').onclick = function() {
        document.getElementById('img-modal').style.display = "none";
    }
    // If user clicks outside the image, close the modal
    document.getElementById('img-modal').onclick = function(e) {
        if (e.target === this) this.style.display = "none";
    };
});

/*
    --- Alternate Image Modal for Direct Image Clicks ---
    This block is for cases where images have the .testimonial-img class.
    Clicking on them will open the modal showing only that image.
*/
document.addEventListener('DOMContentLoaded', function() {
    // Attach click event to all images with .testimonial-img
    document.querySelectorAll('.testimonial-img').forEach(img => {
        img.style.cursor = "pointer";
        img.addEventListener('click', function(e) {
            const modal = document.getElementById('img-modal');
            const modalImg = document.getElementById('img-modal-content');
            modal.style.display = "flex";
            modalImg.src = this.src;
        });
    });

    // Close modal logic
    document.getElementById('img-modal-close').onclick = function() {
        document.getElementById('img-modal').style.display = "none";
    }
    document.getElementById('img-modal').onclick = function(e) {
        if (e.target === this) this.style.display = "none";
    };
});

// This block toggles the visibility of the navigation menu on small screens 
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    navbar.classList.toggle('active'); // Show/hide navbar on click
};