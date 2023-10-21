console.log("sanity check")


document.addEventListener('DOMContentLoaded', function () {
   var elems = document.querySelectorAll('.dropdown-trigger');
   console.log(elems)
   var instances = M.Dropdown.init(elems, {
      direction: 'bottom',
      coverTrigger: false,
      hover: true

});
});
