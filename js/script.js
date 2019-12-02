  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.menu');
    var options = {
    	'closeOnClick' : false
    }
    var instances = M.Dropdown.init(elems, options);
  });
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.logbook');
    var options = {
    	'closeOnClick' : false
    }
    var instances = M.Dropdown.init(elems,options);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.comet');
    var instances = M.Modal.init(elems);
  });

 //  const input = document.getElementById("autocomplete-input")
 //  input.addEventListener("keyup", function(event) {
	//   // Number 13 is the "Enter" key on the keyboard
	//   if (event.keyCode === 13) {
	//     // Cancel the default action, if needed
	//  		console.log("te");
	//     // Trigger the button element with a click
	//     var elems = document.querySelectorAll('.modal');
 //    var instances = M.Modal.init(elems);
	//   }
	// }); 
  // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
  // var collapsibleElem = document.querySelector('.collapsible');
  // var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);
