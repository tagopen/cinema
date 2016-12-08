$(function() {

    $(".contactForm input,.contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            $("[type=submit]").prop("disabled", true).button('loading'); //prevent submit behaviour
            // get values from FORM
            var form = $form.attr('name');
            var name = $form.find("[name=name]").val();
            var email = $form.find("[name=email]").val();
            var phone = $form.find("[name=phone]").val();
            var message = $form.find("[name=message]").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            $.ajax({
                url: "./mail/mail.php",
                type: "POST",
                data: {
                    form: form,
                    name: name,
                    phone: phone,
                    email: email,  
                    message: message
                },
                cache: false,
                success: function() {
                    // Redirect success
                    if (form == "Регистрация") {
                      document.location.href="./pdf.html";
                    } else {
                      document.location.href="./thanks.html";
                    }
                    // remove prevent submit behaviour
                    $("[type=submit]").prop("disabled", false).button('loading');  

                    //clear all fields
                    $('.contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message

                    // remove prevent submit behaviour
                    $("[type=submit]").prop("disabled", false).button('loading'); 

                    //clear all fields
                    $('.contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('.success').html('');
});
