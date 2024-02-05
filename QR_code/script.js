const qrText = document.querySelector('#qr-text');
const sizes = document.querySelector('#sizes')

const generateBtn = document.querySelector('#generateBtn');
const downloadBtn = document.querySelector('#downloadBtn');

const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;

generateBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (qrText.value.length > 0) {
    generateQRCode();
  }
  else {
    alert("Enter the Text or URL to generate your QR code")

  }
  generateQRCode();
  isEmptyInput();
  console.log(generateBtn);
});


sizes.addEventListener('change', (e) => {
  size = e.target.value;
  isEmptyInput();
  // generateQRCode();
})


downloadBtn.addEventListener('click', () => {
  let img = document.querySelector('.qr-body img');
  if (img !== null) {
    let imgAtrr = img.getAttribute('src')
    downloadBtn.setAttribute("href", imgAtrr);
  } else {
    downloadBtn.setAttribute("href", `${document.querySelector("canvas".toDateURL())}`);
  }
})

const isEmptyInput = () => {
  if (qrText.value.length > 0) {
    generateQRCode();
  }
  else {
    alert("Enter the Text or URL to generate your QR code")

  }
}

const generateQRCode = () => {
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: qrText.value,
    width: size,
    height: size,
    colorDark: "#000000",
    colorLight: "#ffffff",
  });
};