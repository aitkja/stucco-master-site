(function () {
  var nav = document.getElementById("site-nav");
  var toggle = document.querySelector(".nav-toggle");
  var year = document.getElementById("year");
  var contactForm = document.querySelector(".contact-form");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(contactForm);
      var businessEmail = (contactForm.getAttribute("data-business-email") || "").trim();
      var name = String(fd.get("name") || "").trim();
      var email = String(fd.get("email") || "").trim();
      var phone = String(fd.get("phone") || "").trim();
      var message = String(fd.get("message") || "").trim();

      var body =
        "Name: " +
        name +
        "\n" +
        "Email: " +
        email +
        "\n" +
        "Phone: " +
        (phone || "—") +
        "\n\n" +
        message;

      if (!businessEmail) {
        window.alert(
          "Add the business email address to the contact form in index.html (data-business-email on the <form> tag), or reach out via Google Maps / Instagram."
        );
        return;
      }

      var url =
        "mailto:" +
        encodeURIComponent(businessEmail) +
        "?subject=" +
        encodeURIComponent("Stucco Master website inquiry") +
        "&body=" +
        encodeURIComponent(body);

      window.location.href = url;
    });
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      document.body.style.overflow = open ? "hidden" : "";
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    nav.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        document.body.style.overflow = "";
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      });
    });
  }
})();
