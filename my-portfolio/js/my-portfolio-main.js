
const spyEls = document.querySelectorAll('section.scroll-spy');


const controller = new ScrollMagic.Controller();

spyEls.forEach(function (spyEl) {

  new ScrollMagic.Scene({ 
    triggerElement: spyEl, 
    triggerHook: 0.5 
  })
  .setClassToggle(spyEl, 'show') 
  .addTo(controller); 
});


const swiper = new Swiper('.project .swiper', {

    direction: 'horizontal', 
    loop: true,
    autoplay: { 
    delay: 1500 
    },

    pagination: {
    el: '.project .swiper-pagination',
    clickable: true // 사용자의 페이지네이션 요소 제어 가능 여부
  },
});

const modal = document.querySelector('#modal');
const modalBtn = document.querySelector('.project .btn-modal');
const closeBtn = document.querySelector('#modal .btn-close');

const imageModal = document.querySelector('#imageModal');
const imageModalBtnList = document.querySelectorAll('.project .btn-modal-image');
const imageCloseBtn = document.querySelector('#imageModal .btn-close');
const imageEl = document.querySelector('#imageModal img');

modalBtn.addEventListener('click', function () {
  modal.style.display = 'flex';
});
closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
});

imageModalBtnList.forEach(function (imageModalBtn) {
  imageModalBtn.addEventListener('click', function () {
    imageEl.src = imageModalBtn.dataset.imageSrc;
    imageModal.style.display = 'flex';
  });
});
imageCloseBtn.addEventListener('click', function () {
  imageModal.style.display = 'none';
});

modal.addEventListener('click', function (e) { 
  console.log(e.target); 
  console.log(e.currentTarget); 
  
  if (e.target === e.currentTarget) { 
    modal.style.display = 'none';
  }
});

imageModal.addEventListener('click', function (e) {
  if (e.target === e.currentTarget) { 
    imageModal.style.display = 'none';
  }
});

document.addEventListener('keydown',function (e) {
  if (e.key === 'Escape') {
    modal.style.display = 'none';
    imageModal.style.display = 'none';
  }
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

const toTopEl = document.querySelector('#toTop');
const visualSpanEls = document.querySelectorAll('.animate-flash');
const header = document.querySelectorAll('.header__text');
const headerMat = document.querySelectorAll('.material-symbols-outlined');
const port = document.querySelectorAll('.port');

window.addEventListener('scroll',function () {
    console.log(window.scrollY); 
    header.forEach(function (a) {
        if (window.scrollY > 1890 && 2600 > window.scrollY) {
            a.style.color = '#fff';
            a.classList.add('shadow-wi');
        } else {
            a.style.color = '#000';
            a.classList.remove('shadow-wi');
        }
    });

    port.forEach(function (a) {
        if (window.scrollY > 2600) {
            a.style.transform = 'translateX(0)';
            a.style.opacity = '1';
        }else {
            toTopEl.style.transform = 'translateX(100px)';
            toTopEl.style.opacity = '0';
        }
    });

    headerMat.forEach(function (a) {
        if (window.scrollY > 1890 && 2600 > window.scrollY) {
            a.classList.add('shadow-wi');
        } else {
            a.classList.remove('shadow-wi');
        }
    });
    if (window.scrollY > 500) {
        toTopEl.style.transform = 'translateX(0)';
        toTopEl.style.opacity = '1';
        
        visualSpanEls.forEach(function (visualSpanEl) {
        visualSpanEl.classList.remove('animate-flash');
        });
    } else {
        toTopEl.style.transform = 'translateX(100px)';
        toTopEl.style.opacity = '0';

        visualSpanEls.forEach(function (visualSpanEl) {
        visualSpanEl.classList.add('animate-flash');
        });
    }
});
const sp = document.querySelector('.port > .btn');
const portImg = document.querySelector('.port__img');
const portText = document.querySelector('.port__text');
let count = 0;
sp.addEventListener('click',function () {
    count++
    if (count%2 === 1) {
        portImg.classList.add('sp');
        portText.classList.add('sp');
    } else {
        portImg.classList.remove('sp');
        portText.classList.remove('sp');
    }
});
