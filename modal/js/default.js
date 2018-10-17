
/* Button Row Template */
var button_row = $(".row");


$(function() {

	

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

	$(".add").on("click", function(){
		addRow();
		event.preventDefault();
	});
	$(".remove").on("click", function(e){
		removeRow( e.target);
	});

	// Close when close button is clicked
	$("#closeBtn").on("click", function(){
		closeModal();
	});


	// Close when esc key is pressed
	$(document).on('keyup',function(evt) {
	    if (evt.keyCode == 27) {
	       closeModal();
	    }
	});


	//Set to close when the document is clicked anywhere...Except for when the modal itself is clicked
	$(document).click(function() { closeModal(); });
	$("#myModal").click(function(event) { event.stopPropagation(); });



	$( "form" ).submit(function( event ) {


		//Set the title
		$( "#_title" ).text( $('input[name="title"]').val() || "No title provided" );


		//Set the content
		$( "#_content" ).html( $('input[name="content"]').val() || "No content provided" );
		//TODO: Depending on the context of this form, we may need to sanitize the html input to safeguard against malicious script insertions!!!


		//Add the buttons
		var button_labels = $('input[name="button-label"]');
		var button_styles = $('select[name="button-style"]');
		var button_callbacks = $('select[name="button-callback"]');

		//console.log(button_labels[0].value);

		var arrayLength = button_labels.length;
		for (var i = 0; i < arrayLength; i++) {
			//console.log(button_labels[i].value + "|" + button_styles[i].value + "|" + button_callbacks[i].value);
		    var btn = $('<button class="button">' + button_labels[i].value + '</button>');
		    if (button_styles[i].value == "primary") btn.addClass("button--primary");
		    btn.on("click", eval(button_callbacks[i].value) );
		    $(".modal-footer .button-group").append(btn);
		}






	  var fields = $( this ).serializeArray();

	  console.log(fields);

	  $.each( fields, function( i, field ) {
	    //console.log( field.name + " = " + field.value);
	    if (field.name == "title") {
		    $( "#_title" ).text( field.value || "Default " + field.name );
		}
		else if (field.name == "content") {
		    $( "#_content" ).html( field.value || "Default " + field.name );
		}
		// else if (field.name == "button-label") {
		//     //$( "#_" + field.name ).html( field.value || "Default " + field.name );
		//     var btn = $('<button class="button">' + field.value + '</button>');
		//     //btn.addClass("button--primary");
		//     btn.on("click", closeModal);
		//     $(".modal-footer .button-group").append(btn);
		// }
	    



	 });









	  
	  openModal();
	  
	  event.preventDefault();
	});



});