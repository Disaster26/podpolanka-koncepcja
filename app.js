// menu mobilne
(function(){
  var b=document.querySelector('.burger'),m=document.getElementById('menu');
  if(b&&m){
    b.addEventListener('click',function(){var o=m.classList.toggle('otw');b.setAttribute('aria-expanded',o)});
    m.addEventListener('click',function(e){if(e.target.tagName==='A'){m.classList.remove('otw');b.setAttribute('aria-expanded','false')}});
  }
})();

// karuzele: strzalki + przeciaganie mysza (palcem dziala natywnie)
document.querySelectorAll('[data-kar]').forEach(function(k){
  var t=k.querySelector('.kar-tor');
  k.querySelectorAll('[data-kier]').forEach(function(btn){
    btn.addEventListener('click',function(){
      var el=t.children[0],krok=el?el.getBoundingClientRect().width+16:300;
      t.scrollBy({left:krok*+btn.dataset.kier,behavior:'smooth'});
    });
  });
  var x0=0,s0=0,wcis=false,ruch=false;
  t.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;wcis=true;ruch=false;x0=e.clientX;s0=t.scrollLeft});
  window.addEventListener('pointermove',function(e){if(!wcis)return;var d=e.clientX-x0;if(Math.abs(d)>4){ruch=true;t.classList.add('ciag')}t.scrollLeft=s0-d});
  window.addEventListener('pointerup',function(){if(!wcis)return;wcis=false;t.classList.remove('ciag')});
  t.addEventListener('click',function(e){if(ruch){e.preventDefault();e.stopPropagation();ruch=false}},true);
  t.addEventListener('dragstart',function(e){e.preventDefault()});
});

// formularz pokazowy
var f=document.getElementById('zapytanie');
if(f)f.addEventListener('submit',function(e){e.preventDefault();f.classList.add('wyslany')});
