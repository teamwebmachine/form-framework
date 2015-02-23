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
It's preferred to have grunt command line tools installed globally, see above for information on this. Clone this repo with `git clone https://cjmosure@bitbucket.org/teamwebmachine/form-starter-kit.git` and run `sudo npm install` in the directory. 


#### Bower

Bower has already installed packages, however, you can create a bower.json file with the dependencies as below (iframe resizer omitted) (try `bower init`):

```
"dependencies": {
	"bootstrap-multiselect": "~0.9.10",
	"bootstrap": "~3.3.2",
	"font-awesome": "~4.3.0",
	//"form.validation": "~0.5.3",
	"jquery-ui": "~1.11.2",
	"jquery": "~2.1.3"
}
```


#### Grunt

See the `gruntfile.js` file for more information on standard grunt tasks. Run `grunt` via terminal to run all tasks or `grunt watch` to watch for changes and run tasks accordingly. 



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
