window.addEventListener('load',() => {
  document.querySelector('.main').classList.remove('hidden');
  document.querySelector('.home__section').classList.add('active');
  /* loader */
  document.querySelector('.page__loader').classList.add('fade-out');
  setTimeout(() => {
    document.querySelector('.page__loader').style.display = 'none';
  },600)
})

/* Navbar */
const navToggler = document.querySelector('.nav__toggler');
navToggler.addEventListener('click',()=> {
  hideSection();
  toggleNavbar();
  document.body.classList.toggle('hide__scrolling');
})
function hideSection(){
  document.querySelector('section.active').classList.toggle('fade-out');
}
function toggleNavbar(){
  document.querySelector('.header').classList.toggle('active')
}

/* Sessao ativa */

document.addEventListener('click',(e)=> {
  if(e.target.classList.contains('link__item')&& e.target.hash !== ""){
    document.querySelector('.overlay').classList.add('active');
    navToggler.classList.add('hide')
    if(e.target.classList.contains('nav__item')){
      toggleNavbar();
    }
    else{
      hideSection();
      document.body.classList.add('hide__scrolling');
    }
    setTimeout(()=>{
      document.querySelector('section.active').classList.remove("active","fade-out");
      document.querySelector(e.target.hash).classList.add('active');
      window.scrollTo(0,0);
      document.body.classList.remove('hide__scrolling');
      navToggler.classList.remove('hide');
      document.querySelector('.overlay').classList.remove('active');
    },500)
  }
})

/* Sobre Tabelas */
const tabsContainer = document.querySelector('.sobre__tabelas'),
aboutSection = document.querySelector('.sobre__section');

tabsContainer.addEventListener('click',(event)=> {
  if(event.target.classList.contains('tab__item') && !event.target.classList.contains('active')){
    tabsContainer.querySelector('.active').classList.remove('active');
    event.target.classList.add('active');
    const target = event.target.getAttribute('data-target');
    aboutSection.querySelector('.tab__conteudo.active').classList.remove('active');
    aboutSection.querySelector(target).classList.add('active');
  }
});

/* itens do portfolio */
document.addEventListener('click',(e) =>{
  if(e.target.classList.contains('view-project-btn')){
    togglePortfolioPopup();
    document.querySelector('.portfolio__popup').scrollTo(0,0);
    portfolioItemDetalhes(e.target.parentElement);
  }

});
function togglePortfolioPopup (){
  document.querySelector('.portfolio__popup').classList.toggle('open');
  document.body.classList.toggle('hide__scrolling');
  document.querySelector('.main').classList.toggle('fade__out')
}
document.querySelector('.pp__close').addEventListener('click',togglePortfolioPopup);

/* esta funçao e para fechar ao clicar fora  */
document.addEventListener('click',(e) => {
  if(e.target.classList.contains('pp__inner')){
    togglePortfolioPopup()
  }
})
/* esta funçao e para fechar ao dar esc  */
/* document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    togglePortfolioPopup()
  }
});
 */

function portfolioItemDetalhes(portfolioItem) {
  /* imagem */
  document.querySelector('.pp__thumbnail img').src = portfolioItem.querySelector('.protfolio__item__thumbnail img').src;
/* titulo */
  document.querySelector('.pp__header h3').innerHTML = portfolioItem.querySelector('.portfolio__item__title').innerHTML;

/* body */
  document.querySelector('.pp__body').innerHTML = portfolioItem.querySelector('.portfolio__item__detalhes').innerHTML;
}


