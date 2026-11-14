$(function () {
    const quotes = [
        "The galaxy has many jobs. Apply before your confidence invents another excuse.",
        "A small course completed today beats a perfect learning plan scheduled for never.",
        "Your CV is not a sacred scroll. Update it, improve it and send it into space.",
        "You do not need to know everything. You need to know the next useful thing.",
        "Tiny progress is still progress, even when your inner villain calls it boring."
    ];

    // jQuery element 1: change the motivation quote with a fade effect.
    $("#quoteButton").on("click", function () {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        $("#motivationQuote").fadeOut(180, function () {
            $(this).text(`“${randomQuote}”`).fadeIn(260);
        });
    });

    // jQuery element 2: add a personal goal dynamically.
    $("#goalForm").on("submit", function (event) {
        event.preventDefault();
        const goal = $("#goalInput").val().trim();

        if (goal) {
            $("<li>").text(goal).hide().appendTo("#goalList").slideDown(250);
            $("#goalInput").val("").focus();
        }
    });

    // jQuery element 3: animate the confidence meter.
    $("#confidenceRange").on("input", function () {
        const level = Number($(this).val());
        let message = "nervous, but wearing professional shoes.";

        if (level >= 75) {
            message = "ready to negotiate with the entire galaxy.";
        } else if (level >= 45) {
            message = "brave enough to press Send on the application.";
        }

        $("#meterFill").stop().animate({ width: `${level}%` }, 180);
        $("#meterMessage").text(`${level}% — ${message}`);
    });

    // jQuery element 4: hide or reveal the doubt message.
    $("#doubtButton").on("click", function () {
        $("#doubtMessage").slideToggle(240);
        const isHidden = $("#doubtMessage").is(":hidden");
        $(this).text(isHidden ? "Reveal the doubt" : "Hide the doubt");
    });

    // jQuery element 5: launch the rocket and show a result message.
    $("#launchButton, #careerShip").on("click", function () {
        $("#careerShip")
            .stop(true)
            .animate({ right: "-8%", bottom: "130px", opacity: 0 }, 700)
            .animate({ right: "4%", bottom: "18px", opacity: 1 }, 0);

        $("#launchResult").stop(true, true).fadeIn(250).delay(1800).fadeOut(450);
    });
});
