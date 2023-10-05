console.log("sanity check")


let mediaQuery = window.matchMedia('(max-width: 700px)')
 console.log(mediaQuery.matches)
// if (mediaQuery.matches) {
//    // alert("Media query matched!")
// }

document.addEventListener('DOMContentLoaded', function () {
   var elems = document.querySelectorAll('.dropdown-trigger');
   var instances = M.Dropdown.init(elems, {
      direction: 'bottom',
      coverTrigger: false,
      hover: true

      // if(mediaQuery.matches){
      //    hover: false,
      // }

});
});

// window.onscroll = function() {stickynav()}

// const navbar = document.getElementById("navbar");

// const stickyHeight = navbar.offsetTop;

// const stickynav =()=>{
//    if(window.pageYOffset >= stickyHeight){
//       navbar.classList.add("sticky")
//    } else navbar.classList.remove("sticky")
// }