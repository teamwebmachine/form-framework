<?php
	include ('app/app.php');
	get_head('Form Example');
?>
<!-- CONTENT AREA -->
<div class="wrap form">
	<div class="container-fluid">
		<div class="col-sm-10 col-sm-offset-1">
			<div class="row header">
				<div class="col-xs-6 col-xs-offset-3">
					<h1>Hello World</h1>
					<p class="lead">Nice form bro</p>
				</div>
			</div>
			<div class="row form">
				<div class="col-xs-6 col-xs-offset-3">
					<form id="formID" action="https://www.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
						<div class="row name">
							<div class="col-sm-6">
								<div class="form-group">
									<input class="form-control" type="text" name="first_name" id="first_name" placeholder="Your First Name" />
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<input class="form-control" type="text" name="last_name" id="last_name" placeholder="Your Last Name" />
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-12">
								<div class="form-group">
									<input class="form-control" type="email" name="email" id="email" placeholder="Your Email Address" />
								</div>
							</div>
							<div class="col-sm-12">
								<button type="submit" class="btn btn-primary">Submit</button>
							</div>
						</div>
					</form>
					<div id="response" style="display:none;">
						<div class="alert alert-warning alert-dismissible fade in" role="alert">
					      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
					      <strong>Nice!</strong> You have successfully submitted the form...
					    </div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- / CONTENT AREA -->

<!-- Scripts -->
<script type="text/javascript">
$(document).ready(function(){
	// Page-specific javascript
});
</script>
<!-- End Scripts-->

</body>
</html>