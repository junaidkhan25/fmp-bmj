
var modalImg = document.getElementById("modalImg");
var modalProductName = document.getElementById("modalProductName");
var modalProductDetails = document.getElementById("modalProductDetails");

function openModal(img, prodName ,prodetails) {
  console.log("helloo");
  modalImg.src = img;
  modalProductName.innerHTML = prodName;
  modalProductDetails.innerHTML=prodetails;

}
