Form Frame
=========================================================

Form Frame is a web form start kit that includes several magic plugins and frameworks to help you make awesome forms quickly. 

### Included

#### Vendor Plugins
* Bootstrap (~3.3.2)
* Font Awesome (~4.3.0)
* Form Validation (~0.6.0) (non-bower package)
* jQuery (~2.1.3)
* jQuery UI (~1.11.2) (not enabled by default)

#### Node NPM Packages
"bower": "^1.3.12",
"del": "^1.2.0",
"gulp": "^3.8.11",
"gulp-autoprefixer": "^2.3.0",
"gulp-concat-css": "^2.2.0",
"gulp-less": "^3.0.3",
"gulp-minify-css": "^1.1.1",
"gulp-notify": "^2.2.0",
"gulp-plumber": "^1.0.1",
"gulp-rename": "^1.2.2",
"gulp-sass": "^2.0.1",
"gulp-sourcemaps": "^1.5.2"



### AJAX submission w/ jQuery

If you are submitting the form with ajax, you may want to reference [formvalidation.io](http://formvalidation.io/examples/ajax-submit/) as that is the validation engine. As you see below, you can trap on the on success event and prevent the default action in order to do what you need with the post submission. See the `assets/js/validationRules.js` javascript file for usage of the form validation plugin.

```
$(document).ready(function() {
    $(form)
        .formValidation({
            ... options ...
        })
        .on('success.form.fv', function(e) {
            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the FormValidation instance
            var bv = $form.data('formValidation');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                // ... Process the result ...
            }, 'json');
        });
});
```
