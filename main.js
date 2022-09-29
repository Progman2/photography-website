//change nav style on scroll
window.addEventListener('scroll', ()=>{
    document.querySelector('nav').class list.toggle('window-scrolled', window.ScrollY> 0);
})
//Contact button texts 
const textButtons = document.querySelectorAll('.contact_btn');

textButtons.forEach(textButton =>{
     let text = textButton.querySelector('p');
     text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform: rotate(${index * 12deg)">${character}</span>`).join('')
})

//Swiper
var swiper = new Swiper(".mySwiper", {
   slidesPerView: 5,
   space between: 25,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
 },
});
