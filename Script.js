document.addEventListener("DOMContentLoaded", () => {

    // =========================================
    // ELEMENTOS
    // =========================================

    const openGiftButton = document.getElementById("openGift");
    const welcomeScreen = document.getElementById("welcome-screen");
    const giftScreen = document.getElementById("gift-screen");
    const storyScreen = document.getElementById("story-screen");

    const nextButtons = document.querySelectorAll(".next-button");


    // =========================================
    // ABRIR REGALO
    // =========================================

    if (openGiftButton) {

        openGiftButton.addEventListener("click", () => {

            console.log("Botón Abrir mi regalo presionado");


            // Evitar múltiples clics
            openGiftButton.disabled = true;


            // -----------------------------------------
            // ANIMACIÓN DE LA PORTADA
            // -----------------------------------------

            welcomeScreen.style.transition =
                "opacity 0.8s ease, transform 0.8s ease";

            welcomeScreen.style.opacity = "0";
            welcomeScreen.style.transform = "scale(1.05)";


            // -----------------------------------------
            // MOSTRAR PANTALLA DEL SOBRE
            // -----------------------------------------

            setTimeout(() => {

                welcomeScreen.classList.add("hidden");

                giftScreen.classList.remove("hidden");

                giftScreen.style.opacity = "0";

                requestAnimationFrame(() => {

                    giftScreen.style.transition =
                        "opacity 0.8s ease";

                    giftScreen.style.opacity = "1";

                });

            }, 800);


            // -----------------------------------------
            // PASAR A NUESTRA HISTORIA
            // -----------------------------------------

            setTimeout(() => {

                giftScreen.style.transition =
                    "opacity 0.8s ease";

                giftScreen.style.opacity = "0";

            }, 3500);


            setTimeout(() => {

                giftScreen.classList.add("hidden");

                storyScreen.classList.remove("hidden");

                storyScreen.style.opacity = "0";

                requestAnimationFrame(() => {

                    storyScreen.style.transition =
                        "opacity 1s ease";

                    storyScreen.style.opacity = "1";

                });

            }, 4300);

        });

    }


    // =========================================
    // BOTONES DE LOS PASOS
    // =========================================

    nextButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const nextStepId = button.dataset.next;

            const currentStep = button.closest(".story-step");

            const nextStep = document.getElementById(nextStepId);


            // Verificar que existan
            if (!currentStep || !nextStep) {

                console.error(
                    "No se encontró el paso:",
                    nextStepId
                );

                return;
            }


            // -----------------------------------------
            // SALIDA DEL PASO ACTUAL
            // -----------------------------------------

            currentStep.style.transition =
                "opacity 0.5s ease, transform 0.5s ease";

            currentStep.style.opacity = "0";

            currentStep.style.transform =
                "translateY(-20px)";


            // -----------------------------------------
            // ENTRADA DEL SIGUIENTE PASO
            // -----------------------------------------

            setTimeout(() => {

                currentStep.classList.remove("active");

                currentStep.style.opacity = "";
                currentStep.style.transform = "";
                currentStep.style.transition = "";


                nextStep.classList.add("active");

                nextStep.style.opacity = "0";

                nextStep.style.transform =
                    "translateY(20px)";


                requestAnimationFrame(() => {

                    nextStep.style.transition =
                        "opacity 0.7s ease, transform 0.7s ease";

                    nextStep.style.opacity = "1";

                    nextStep.style.transform =
                        "translateY(0)";

                });

            }, 500);

        });

    });
// =========================================
// VISOR DE FOTOS
// =========================================

const photoCards = document.querySelectorAll(
    ".photo-card, .memory-image"
);

const photoModal = document.getElementById("photo-modal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closePhoto = document.getElementById("closePhoto");
const photoModalOverlay = document.querySelector(".photo-modal-overlay");


photoCards.forEach((card) => {

    card.addEventListener("click", () => {

        const image = card.dataset.image;
        const title = card.dataset.title;
        const text = card.dataset.text;

        modalImage.src = image;
        modalImage.alt = title;

        modalTitle.textContent = title;
        modalText.textContent = text;

        photoModal.classList.remove("hidden");

        document.body.style.overflow = "hidden";

    });

});


function closePhotoModal() {

    photoModal.classList.add("hidden");

    document.body.style.overflow = "";

}


closePhoto.addEventListener(
    "click",
    closePhotoModal
);


photoModalOverlay.addEventListener(
    "click",
    closePhotoModal
);


// Cerrar con ESC
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closePhotoModal();
    }

});
});