
$(function() {
    //console.log( "ready!" );

	function openModal(){
		$("#myModal").addClass("show");
	}
	function closeModal(){
		$("#myModal").removeClass("show");
	}


	$("#myBtn").on("click", function(){
		openModal();
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


	//Set to close when the document is clicked anywhere...
	$(document).click(function() {
	    closeModal();
	});
	//...Except for when the modal itself is clicked
	$("#myModal,#myBtn").click(function(event) {
	    event.stopPropagation();
	});

});