console.log("sanity check")

// document.addEventListener('DOMContentLoaded', function() {
//    const elems = document.getElementById('contacts');
//    const instances = M.FloatingActionButton.init(elems, {
//       direction: 'bottom',
      

//    });
//  });

 document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('.dropdown-trigger');
   var instances = M.Dropdown.init(elems, {
      direction: 'bottom',
      coverTrigger: false,
      hover: true,

   });
 });