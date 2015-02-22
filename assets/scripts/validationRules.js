$(document).ready(function() {
    // All Other Forms
    $('#contact-form').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                message: 'Please enter a first name',
                validators: {
                    notEmpty: {
                        message: 'Your name is required and cannot be empty'
                    }
                }
            },
            last_name: {
                message: 'Please enter a last name',
                validators: {
                    notEmpty: {
                        message: 'Your name is required and cannot be empty'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            }
        }
    });
});