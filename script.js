const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');


let n = 0; // On the first Image

function ChangeSlide(){
  for (let i = 0; i < imgs.length; i++) {
     imgs[i].style.display= 'none'; // Display No image
  }
  imgs[n].style.display = 'block' // Display First image
}

ChangeSlide();

prev_btn.addEventListener('click', (e)=>{
  if (n > 0) {
     n--;
  }else{
    n = imgs.length - 1;
  }
ChangeSlide();
})
next_btn.addEventListener('click', (e)=>{
  if (n < imgs.length - 1) {
     n++;
  }else{
    n = 0;
  }  
  ChangeSlide();
})

const scrollContainer = document.querySelectorAll('.products');
for (const item of scrollContainer) {
    item.addEventListener('wheel', (evt)=>{
       evt.preventDefault();
       item.scrollLeft += evt.deltaY;
    })
}









