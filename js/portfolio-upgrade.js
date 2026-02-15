(function(){
  function highlight(el){
    el.classList.add('anchor-highlight');
    setTimeout(()=>el.classList.remove('anchor-highlight'), 900);
  }

  function scrollToTarget(href){
    const target = document.querySelector(href);
    if(target){
      target.scrollIntoView({behavior:'smooth', block:'start'});
      highlight(target);
    }
  }

  document.querySelectorAll('a.details-link').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href') || '';
      if(href.startsWith('#details-')){
        e.preventDefault();
        scrollToTarget(href);
      }
    });
  });

  // Make tile area clickable without breaking zoom/lightbox clicks
  document.querySelectorAll('.portfolio-item').forEach(item=>{
    item.addEventListener('click', (e)=>{
      const anchor = e.target.closest('a');
      if(anchor && (anchor.classList.contains('glightbox') || anchor.classList.contains('preview-link'))){
        return; // allow lightbox behaviour
      }
      const details = item.querySelector('a.details-link');
      if(!details) return;
      const href = details.getAttribute('href') || '';
      if(href.startsWith('#details-')){
        e.preventDefault();
        scrollToTarget(href);
      }
    });
  });
})();