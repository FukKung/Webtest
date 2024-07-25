const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeButton = document.querySelector(".close");
const zoomButtons = document.querySelectorAll(".zoom-button");

// เพิ่ม Event Listener สำหรับปุ่มซูม
zoomButtons.forEach(button => {
    button.addEventListener("click", () => {
        const imageContainer = button.parentElement;
        const image = imageContainer.querySelector(".product-image");

        modalImage.src = image.src;
        modal.style.display = "block";
    });
});

// เพิ่ม Event Listener สำหรับปุ่มปิดหน้าต่างซูม
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// เพิ่ม Event Listener สำหรับการคลิกนอกหน้าต่างซูม
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}