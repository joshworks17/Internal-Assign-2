$(document).ready(function () {

    // Display current year in footer
    $("#year").text(new Date().getFullYear());

    // Contact form submission
    $("#contactForm").submit(function (event) {

        // Prevent page refresh
        event.preventDefault();

        // Get customer name
        let name = $("#name").val().trim();

        // Display confirmation message
        $("#result")
            .removeClass("text-danger")
            .addClass("text-success")
            .text("Thank you, " + name + "! Your enquiry has been noted.");

        // Clear form fields
        this.reset();

    });

    // Close mobile navigation after clicking a link
    $(".navbar-nav .nav-link").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

});