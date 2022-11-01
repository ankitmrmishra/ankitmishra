const navbar = document.querySelectorAll('.navbar');
const navItems = document.querySelectorAll('.nav-items');





for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', function() {
      let current = document.querySelectorAll(".active-btn");
      current[0].className = current[0].className.replace(" active-btn", " ");
      this.className += ' active-btn';
    });
  }

//   for(let i = 0; i < sectBtn.length; i++){
//     sectBtn[i].addEventListener('click', function(){
//         let currentBtn = document.querySelectorAll('.active-btn');
//         currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
//         this.className += ' active-btn';
//     })
// }