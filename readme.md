Global Cleveland - Salesforce Web-to-Lead
=========================================

These are Salesforce-connected forms for usage on GlobalCleveland.org. Questions? Contact CJ at [cj@webmachine.io](mailto:cj@webmachine.io)

## Included

* Volunteer Form (.html)
* Volunteer Orientation Form (.html)
* Volunteer Confirmation page (.html)
* International Newcomer Support Form (.html)
* International Newcomer Support Confirmation page (.html)
* Newsletter Form

## Dependencies & Plugins

A number of jQuery plugins are used to provided various features and functionality:

* jQuery & jQuery UI (cdn)
* Multiselect
* ASMSelect
* Validation Engine

Critical:

`https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js` and `https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.18/jquery-ui.min.js` should be called on every page. Pages are styled with `assets/css/bootstrap.min.css` and `assets/css/app.css`.

## Processing

Grunt (on node.js) minifies and compiles js/css/html/less for the project. 


## Staging 
*Staging may not be fully up-to-date*

Staging URL: `https://s3.amazonaws.com/globalcleveland-salesforce/build/`

*Here are some of the form pages:*

* [https://s3.amazonaws.com/globalcleveland-salesforce/build/volunteer.html](https://s3.amazonaws.com/globalcleveland-salesforce/build/volunteer.html)
* [https://s3.amazonaws.com/globalcleveland-salesforce/build/volunteer-orientation.html](https://s3.amazonaws.com/globalcleveland-salesforce/build/volunteer-orientation.html)
* [https://s3.amazonaws.com/globalcleveland-salesforce/build/newsletter.html](https://s3.amazonaws.com/globalcleveland-salesforce/build/newsletter.html)
* [https://s3.amazonaws.com/globalcleveland-salesforce/build/international-newcomer.html](https://s3.amazonaws.com/globalcleveland-salesforce/build/international-newcomer.html)
* [https://s3.amazonaws.com/globalcleveland-salesforce/build/thankyou/thankyou-volunteer.html](https://s3.amazonaws.com/globalcleveland-salesforce/build/thankyou/thankyou-volunteer.html)
* [https://s3.amazonaws.com/globalcleveland-salesforce/build/thankyou/thankyou-international.html](https://s3.amazonaws.com/globalcleveland-salesforce/build/thankyou/thankyou-international.html)

## Production 

Production URL: `https://s3.amazonaws.com/globalcleveland-salesforce/production/`

*Here are some of the form pages:*

* [http://globalcleveland-salesforce.s3-website-us-east-1.amazonaws.com/production/volunteer.html](http://globalcleveland-salesforce.s3-website-us-east-1.amazonaws.com/production/volunteer.html)
* [http://globalcleveland-salesforce.s3-website-us-east-1.amazonaws.com/production/volunteer-orientation.html](http://globalcleveland-salesforce.s3-website-us-east-1.amazonaws.com/production/volunteer-orientation.html)
* [http://globalcleveland-salesforce.s3-website-us-east-1.amazonaws.com/production/newsletter.html](http://globalcleveland-salesforce.s3-website-us-east-1.amazonaws.com/production/newsletter.html)
* [http://globalcleveland-salesforce.s3-website-us-east-1.amazonaws.com/production/international-newcomer.html](http://globalcleveland-salesforce.s3-website-us-east-1.amazonaws.com/production/international-newcomer.html)
* [http://globalcleveland-salesforce.s3-website-us-east-1.amazonaws.com/production/thankyou/thankyou-volunteer.html](http://globalcleveland-salesforce.s3-website-us-east-1.amazonaws.com/production/thankyou/thankyou-volunteer.html)
* [http://globalcleveland-salesforce.s3-website-us-east-1.amazonaws.com/production/thankyou/thankyou-international.html](http://globalcleveland-salesforce.s3-website-us-east-1.amazonaws.com/production/thankyou/thankyou-international.html)
* [http://globalcleveland-salesforce.s3-website-us-east-1.amazonaws.com/production/thankyou/thankyou-sponsorship.html](http://globalcleveland-salesforce.s3-website-us-east-1.amazonaws.com/production/thankyou/thankyou-sponsorship.html)
* [http://globalcleveland-salesforce.s3-website-us-east-1.amazonaws.com/production/sponsorship.html](http://globalcleveland-salesforce.s3-website-us-east-1.amazonaws.com/production/sponsorship.html)
* [http://globalcleveland-salesforce.s3-website-us-east-1.amazonaws.com/production/artcontact.html](http://globalcleveland-salesforce.s3-website-us-east-1.amazonaws.com/production/artcontact.html)

### Website Pages

* **Sponsorship** [http://globalcleveland.org/sponsors/sponsorship-opportunities/talent-attraction-campaign-sponsor](http://globalcleveland.org/sponsors/sponsorship-opportunities/talent-attraction-campaign-sponsor)
* **Newsletter** [http://globalcleveland.org/newsletter](http://globalcleveland.org/newsletter)
* **International Newcomers** [http://globalcleveland.org/int-resource/newcomer/international-newcomer-support-services](http://globalcleveland.org/int-resource/newcomer/international-newcomer-support-services)
* **Volunteer** [http://globalcleveland.org/volunteer/volunteer-overview](http://globalcleveland.org/volunteer/volunteer-overview)

## Usage

#### Iframe

The production version of the forms can be brought into the website or other web properties via an iframe. The forms will be responsive to any width. Below is a code example of embedding the iframe:

`<iframe frameborder="0" width="100%" scrolling="no" src="http://globalcleveland-salesforce.s3-website-us-east-1.amazonaws.com/production/volunteer.html">Your browser doesn't support iframes. Please <a href="http://browsehappy.com/" alt="Update your browser">update</a>.</iframe>`

*Iframes + heights = suck!* I've been through it and there really isn't a cross-domain iframe autoheight solution out there (to my knowledge at least!). So here's some recommended safe heights for each form (sampled at a 600px width).

Volunteer Form: `1400px`
International Newcomer: `1950px`
Newsletter: `300px`
Volunteer Orientation: `550px`
Sponsorship: `1000px`

#### Modal Window (Pop-up)

The pop-up uses the Bootstrap 3.0 modal window and has some UX extras.

```
<p class="hidden-xs"><button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#SponsorshipForm">SPONSOR ENROLLMENT</button></p>

<div class="modal fade hide" id="SponsorshipForm" tabindex="-1" role="dialog" aria-labelledby="VolunteerSignupForm" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-body">
				<iframe frameborder="0" width="100%" height="1950px" scrolling="no" src="http://globalcleveland-salesforce.s3-website-us-east-1.amazonaws.com/production/sponsorship.html">Your browser doesn't support iframes. Please <a href="http://browsehappy.com/" alt="Update your browser">update</a>.</iframe>
			</div>
			<div class="modal-footer">
				<a class="btn btn-warning" src="#" onclick="window.open('http://globalcleveland-salesforce.s3-website-us-east-1.amazonaws.com/production/sponsorship.html','_blank');">Having trouble?</a>
				<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
			</div>
		</div>
	</div>
</div>
```