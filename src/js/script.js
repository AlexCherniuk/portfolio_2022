$(document).ready(function () {
	//jquery validator
	function validateForms(forms) {
		$(forms).validate({
			rules: {
				name: {
					required: true,
					minlength: 2,
				},
				email: {
					required: true,
					email: true,
				},
				text: {
					required: true,
					minlength: 10,
				},
				checkbox: {
					required: true,
				}
			},
			messages: {
				name: {
					required: "* Please enter your name",
					minlength: jQuery.validator.format("Minimum {0} characters!"),
				},
				email: {
					required: "* Please enter your email",
					email: "Incorrect email address",
				},
				text: {
					required: "* Please enter your message",
					minlength: jQuery.validator.format("Minimum {0} characters!"),
				},
				checkbox: {
					required: "* Please confirm politic"
				}
			},
		});
	};

	validateForms("form");

	$("form").submit(function (e) {
		e.preventDefault();
		if (!$(this).valid()) {
			return;
		}
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function () {
			$(this).find("input").val("");
			$('.overlay, #thaаnks').fadeIn('slow');
			$('form').trigger('reset');
		});
		return false;
	});

	// pageup

	$(window).scroll(function () {
		if (screen.width < 500) {
			$('.pageup').fadeOut();
		}
		else if ($(this).scrollTop() > 1500) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		};
	});

	// Smooth scroll
	$("a").on('click', function (event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function () {

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});
});
