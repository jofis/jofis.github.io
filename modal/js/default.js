
$(function() {

	// Button Row Template
	var button_row = $(".row");


	/**********************************
		Functions
	**********************************/

	function openModal(){
		$("#myModal").addClass("show");
	}
	function closeModal(){
		$("#myModal").removeClass("show");
		$(".modal-footer .button-group").empty();
	}
	function helloWorld() {
		alert("Hello World!");
	}
	function addRow() {
		button_row.clone(true, true).appendTo("#buttonRows");
	}
	function removeRow(button) {
		button.closest(".row").remove();
	}


	/**********************************
		Event Listeners
	**********************************/

	// Add button row
	$(".add").on("click", function(){
		addRow();
		event.preventDefault();
	});

	// Remove button row
	$(".remove").on("click", function(e){
		removeRow( e.target);
	});

	// Close modal when close button is clicked
	$("#closeBtn").on("click", function(){
		closeModal();
	});

	// Close modal when esc key is pressed
	$(document).on('keyup',function(evt) {
	    if (evt.keyCode == 27) {
	       closeModal();
	    }
	});

	// Set to close when the document is clicked anywhere...Except for when the modal itself is clicked
	$(document).click(function() { closeModal(); });
	$("#myModal").click(function(event) { event.stopPropagation(); });



	/**********************************
		Form Submitted
	**********************************/

	$( "form" ).submit(function( event ) {

		//Set the title
		$( "#_title" ).text( $('input[name="title"]').val() || "No title provided" );

		//Set the content
		$( "#_content" ).html( $('textarea[name="content"]').val() || "No content provided" );
		//TODO: Depending on the context of this form, we may need to sanitize the html input to safeguard against malicious script insertions!!!

		//Add the buttons
		var button_labels = $('input[name="button-label"]');
		var button_styles = $('select[name="button-style"]');
		var button_callbacks = $('select[name="button-callback"]');

		var arrayLength = button_labels.length;
		for (var i = 0; i < arrayLength; i++) {
			var btn = $('<button class="button">' + button_labels[i].value + '</button>');
		    if (button_styles[i].value == "primary") btn.addClass("button--primary");
		    btn.on("click", eval(button_callbacks[i].value) );
		    $(".modal-footer .button-group").append(btn);
		}

		//Adjust footer appearance if no buttons
		$(".modal-footer").toggleClass("has-buttons", arrayLength > 0)

		//Open the modal
		openModal();
	  
		event.preventDefault();
	});



});

