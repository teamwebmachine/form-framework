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
* bower (1.3.12)
* grunt (0.4.2)
* grunt-cli (0.1.13) (not in package.json, install [globally](http://gruntjs.com/getting-started) with `npm install -g grunt-cli`)
* grunt-contrib-concat (0.1.3)
* grunt-contrib-cssmin (0.6.1)
* grunt-contrib-jshint (0.6.3)
* grunt-contrib-less (1.0.0)
* grunt-contrib-nodeunit (0.2.0)
* grunt-contrib-uglify (0.2.2)
* grunt-contrib-watch (0.6.1)

### Install




### AJAX submission w/ jQuery

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
