let anchorlinks = document.querySelectorAll('.header__link[href^="#"]');
 
for (let item of anchorlinks) {  
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval);
        if (target){
          var headerOffset = 70;
          var elementPosition = target.getBoundingClientRect().top;
          var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
          window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
          });   

          // target.scrollIntoView({
          //     behavior: 'smooth',
          //     block: 'start'
          // })
          history.pushState(null, null, hashval)
          e.preventDefault()
        }
    })
}