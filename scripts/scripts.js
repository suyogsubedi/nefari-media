// Script FOr Contact.html
var brandToggle = document.querySelector("#brandToggle");
var brandingHidden = document.querySelector("#brandingHidden");

brandToggle.addEventListener("click", () => {
  if (brandingHidden.style.display === "none") {
    brandingHidden.style.display = "block";
  } else {
    brandingHidden.style.display = "none";
  }
});


// Function lai hidden class ko naam dine 
