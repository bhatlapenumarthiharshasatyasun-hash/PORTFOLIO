// 🎬 VIDEO POPUP
function openVideo(videoSrc) {
    const popup = document.getElementById("videoPopup");
    const video = document.getElementById("popupVideo");

    video.src = videoSrc;
    popup.style.display = "flex";
}

function closeVideo() {
    const popup = document.getElementById("videoPopup");
    const video = document.getElementById("popupVideo");

    video.pause();
    video.src = "";
    popup.style.display = "none";
}

// 📩 CONTACT FORM (optional)
document.getElementById("contactForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("formStatus").innerText = "Message sent successfully!";
});
