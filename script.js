document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("formStatus").innerText = "Message sent successfully!";
});
