navbar = document.getElementById('navIcon')
navItems = document.getElementById('navItems')

// Navbar On Click 
navbar.addEventListener("click", (e)=>{
   if(navItems.style.display="hidden"){
    navItems.style.display="block"
    console.log("Not hiding")
    
   }else{
    navItems.style.display="hidden"
    console.log("Hello")
   }
})

