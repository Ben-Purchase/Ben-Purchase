// Smooth Scroll Effect
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;
            document.querySelector(hash).scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Contact Form Validation
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#contact-form");
    
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            let name = document.querySelector("#name").value;
            let email = document.querySelector("#email").value;
            let message = document.querySelector("#message").value;
            let errorMessage = "";

            if (name.trim() === "") errorMessage += "Name is required.\n";
            if (!email.includes("@")) errorMessage += "Enter a valid email.\n";
            if (message.trim() === "") errorMessage += "Message cannot be empty.\n";

            if (errorMessage) {
                alert(errorMessage);
            } else {
                
                // Email form backend
                emailjs.sendForm('service_c2qvifk', 'template_cp8wkbd', form, 'MtpsJTPFP2Z87I9Fx')
                .then(() => {
                    alert('Message Sent Successfully!');
                    form.reset();
                }, (error) => {
                    alert('Failed to Send Message.');
                    console.error(error);
                });

                alert("Message Sent Successfully!");
                form.reset();
            }
        });
    }
});

// Scroll Animation for About Page
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".about-section");

    const revealOnScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("reveal");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run on load
});

// Scroll Animation for Education Page
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".education-section");

    const revealOnScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("reveal");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run on load
});

// Scroll Animation for Project Page
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".project-section"); 

    const revealOnScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("reveal");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run on load
});
