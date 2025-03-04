$(document).ready(function() {
    loadSubmissions();

    $("#contactForm").on("submit", function(e) {
        e.preventDefault();

        let formData = {
            name: $("#name").val(),
            email: $("#email").val(),
            mobile: $("#mobile").val(),
            message: $("#message").val()
        };

        $.ajax({
            url: "http://localhost/form_submission_project/submit.php", 
            type: "POST",
            data: formData,
            crossDomain: true,
            success: function(response) {
                if (response.trim() === "Success") {
                    $("#responseMessage").html("<p style='color: green;'>✅ Successfully Submitted!</p>");
                    $("#contactForm")[0].reset();
                    loadSubmissions();
                } else {
                    $("#responseMessage").html("<p style='color: red;'>❌ Submission Failed.</p>");
                }
            },
            error: function(xhr, status, error) {
                console.log("AJAX Error:", error);
            }
        });
    });

    function loadSubmissions() {
        $.ajax({
            url: "http://localhost/form_submission_project/fetch_submissions.php",
            type: "GET",
            crossDomain: true,
            success: function(response) {
                $("#dataDisplay").html(response);
            },
            error: function(xhr, status, error) {
                console.log("AJAX Fetch Error:", error);
            }
        });
    }
});
