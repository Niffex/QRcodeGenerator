const wrapper = document.querySelector(".wrapper"); //The querySelector() method returns the first element that matches a CSS selector.To return all matches (not only the first), use the querySelectorAll() instead.
generateButton= wrapper.querySelector(".form button");
qrInput = wrapper.querySelector(".form input");
qrImage = wrapper.querySelector(".qr-code img");

generateButton.addEventListener("click", ()=> {
  let qrValue=qrInput.value;
  if(!qrValue) return;//If the input is empty then return from here
  generateButton.innerText ="Generating QR Code...";
  qrImage.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
  qrImage.addEventListener("load",()=>{
  wrapper.classList.add("active");
  generateButton.innerText="Generate QR Code";
});
});

qrInput.addEventListener("keyup", ()=> {
  if(!qrInput.value){
    wrapper.classList.remove("active");
  }
});
