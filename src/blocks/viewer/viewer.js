import Viewer from 'viewerjs';


window.addEventListener('DOMContentLoaded', function () {
  var images = document.querySelectorAll('.card__img');

  images.forEach(img => {
    new Viewer(img,{

    })
  });
});
