lucide.createIcons();

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".nav-link").forEach(button => {
        button.addEventListener("click", function () {
            const section = this.getAttribute("data-section");
            let page = "";

            switch (section) {
                case "home":
                    page = "index.html";
                    break;
                case "experience":
                    page = "exp.html";
                    break;
                case "projects":
                    page = "project.html";
                    break;
                case "education":
                    page = "edu.html";
                    break;
                case "contact":
                    page = "contact.html";
                    break;
            }

            // Navigate correctly to the HTML folder
            window.location.href = `../html/${page}`;
        });
    });
});

