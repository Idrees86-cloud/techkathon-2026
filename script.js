// =================================
// TECHKATHON REGISTRATION
// =================================

const registrationForm = document.getElementById("registrationForm");

if (registrationForm) {

    registrationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.querySelector('input[name="name"]').value.trim();
        const email = document.querySelector('input[name="email"]').value.trim();
        const department = document.querySelector('input[name="department"]').value.trim();
        const phone = document.querySelector('input[name="phone"]').value.trim();
        const selectedEvent = document.querySelector('input[name="event"]:checked').value;

        const registrationData = new URLSearchParams();

        registrationData.append("name", name);
        registrationData.append("email", email);
        registrationData.append("dept", department);
        registrationData.append("phone", phone);
        registrationData.append("event", selectedEvent);

        const submitButton = registrationForm.querySelector("button[type='submit']");

        submitButton.disabled = true;
        submitButton.textContent = "Registering... ⏳";

        fetch("https://script.google.com/macros/s/AKfycbyIDzr-jM_7LZqS2-A6FUR8LxfedYu6wF260HB6RQduaftulj0Pen2Nfx3CvaBJaSoa/exec", {
            method: "POST",
            body: registrationData
        })
        .then(function(response) {

            if (!response.ok) {
                throw new Error("Server error: " + response.status);
            }

            return response.text();

        })
        .then(function() {

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

        })
        .catch(function(error) {

            console.error("Registration error:", error);

            submitButton.disabled = false;
            submitButton.textContent = "Register for TECHKATHON →";

            alert("Registration failed. Please try again.");

        });

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
