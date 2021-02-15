console.log("sanity check")


 document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('.dropdown-trigger');
   var instances = M.Dropdown.init(elems, {
      direction: 'bottom',
      coverTrigger: false,
      hover: true,

   });
 });

 document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('.collapsible');
   var instances = M.Collapsible.init(elems);
 });