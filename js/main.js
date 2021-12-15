console.log("sanity check")


// const mediaQuery = window.matchMedia('(max-width: 700px)')

// if (mediaQuery.matches) {
//    alert("Media query matched!")
// }

document.addEventListener('DOMContentLoaded', function () {
   var elems = document.querySelectorAll('.dropdown-trigger');
   var instances = M.Dropdown.init(elems, {
      direction: 'bottom',
      coverTrigger: false,
      hover: true,

      // if(mediaQuery.matches){
      //    hover: false,
      // }

});
});
