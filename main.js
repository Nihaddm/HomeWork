const button3 = document.querySelector(".button3")
const pictures = document.querySelector(".pictures")

button3.addEventListener("click",()=> {
  
  if ( pictures.style.height=="480px" ||  pictures.style.height =="") {
      pictures.style.height = pictures.scrollHeight + "px"
  } else {
    pictures.style.height="480px"
  }
})









const sual = document.querySelectorAll('.card');

sual.forEach(item => {
  const kecid = item.querySelector('.kecid');
  const cavab = item.querySelector('.cavab');

  kecid.addEventListener('click', () => {
    const isOpen = cavab.style.display === 'block';

   
    cavab.style.display = isOpen ? 'none' : 'block';

    
    kecid.textContent = isOpen ? '+' : 'x';
  });
});