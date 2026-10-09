// =================================
// TECHKATHON REGISTRATION
// =================================

const registrationForm = document.getElementById("registrationForm");

if (registrationForm) {

    registrationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const registerCard = document.querySelector(".register-card");

        registerCard.innerHTML = `
            <div class="success-message">

                <div class="success-icon">
                    🎉
                </div>

                <h2>Registration Successful!</h2>

                <p>
                    You are officially registered for TECHKATHON 2026.
                </p>

                <p>
                    🚀 Get ready to innovate, compete and create!
                </p>

                <a href="index.html">
                    ← Back to Home
                </a>

            </div>
        `;

    });

}
// =================================
// EVENT CARD INTERACTION
// =================================

const eventCards = document.querySelectorAll(".events-page .event-card");

eventCards.forEach(function(card) {

    card.addEventListener("click", function(event) {

        if (event.target.tagName === "A") {
            return;
        }

        const eventName = card.querySelector("h3").textContent;
        const eventDescription = card.querySelector("p").textContent;
        const eventTag = card.querySelector(".event-tag").textContent;

        const modal = document.createElement("div");

        modal.className = "event-modal";

        modal.innerHTML = `
            <div class="event-modal-box">

                <button class="event-modal-close">&times;</button>

                <div class="modal-icon">⚡</div>

                <span class="modal-tag">${eventTag}</span>

                <h2>${eventName}</h2>

                <p>${eventDescription}</p>

                <div class="modal-message">
                    🚀 Get ready to compete at TECHKATHON 2026!
                </div>

                <a href="register.html" class="modal-register">
                    Register for this Event →
                </a>

            </div>
        `;

        document.body.appendChild(modal);

        const closeButton =
            modal.querySelector(".event-modal-close");

        closeButton.addEventListener("click", function() {
            modal.remove();
        });

        modal.addEventListener("click", function(event) {
            if (event.target === modal) {
                modal.remove();
            }
        });

    });

});
// =================================
// CONTACT FORM
// =================================

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const contactBox = document.querySelector(".contact-form");

        contactBox.innerHTML = `
            <div class="contact-success">

                <div class="contact-success-icon">
                    📡
                </div>

                <h3>Message Sent!</h3>

                <p>
                    Thank you for contacting TECHKATHON 2026.
                </p>

                <p>
                    Our team will get back to you soon. 🚀
                </p>

                <button onclick="location.reload()">
                    Send Another Message →
                </button>

            </div>
        `;

    });

}