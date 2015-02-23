<?php
	include ('app/app.php');
	get_head('Form Example');
?>
<!-- CONTENT AREA -->
<header class="wrap masthead">
	<div class="container">
		<div class="col-md-12">
			<div class="row">
				<div class="col-md-12">
					<h1>Hello World.</h1>
					<p class="lead">Let's make some sick forms.</p>
				</div>
			</div>
		</div>
	</div>
</header>
<div class="wrap form">
	<div class="container-fluid">
		<div class="col-sm-10 col-sm-offset-1">
			<div class="row">
				<div class="col-xs-6 col-xs-offset-3">
					<form id="formID">
						<div class="form-group">
							<input class="form-control" type="text" name="first_name" id="first_name" placeholder="Your First Name" />
						</div>
						<div class="form-group">
							<input class="form-control" type="text" name="last_name" id="last_name" placeholder="Your Last Name" />
						</div>
						<div class="form-group">
							<input class="form-control" type="email" name="email" id="email" placeholder="Your Email Address" />
						</div>
						<button type="submit" class="btn btn-primary">Submit</button>
					</form>
					<div id="response" style="display:none;">You have successfully submitted the form... Nice!</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- / CONTENT AREA -->

<!-- Scripts -->
<script src="dist/main.min.js" type="text/javascript"></script>
<script type="text/javascript">
$(document).ready(function(){
	// Page-specific javascript
});
</script>
<!-- End Scripts-->

</body>
</html>