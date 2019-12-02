 
 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems,"right");
    console.log("output");
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.menu');
    var instances = M.Dropdown.init(elems);
  });
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.logbook');
    var instances = M.Dropdown.init(elems);
  });

  // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
  // var collapsibleElem = document.querySelector('.collapsible');
  // var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);
