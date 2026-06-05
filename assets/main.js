(function(){
'use strict';
var nav=document.getElementById('nav');
if(nav){
var onScroll=function(){nav.classList.toggle('scrolled',window.scrollY>20)};
window.addEventListener('scroll',onScroll,{passive:true});
onScroll();
}
var ham=document.getElementById('ham-btn'),mn=document.getElementById('navmenu');
if(ham&&mn){
ham.addEventListener('click',function(){
var open=mn.classList.toggle('open');
ham.classList.toggle('open',open);
ham.setAttribute('aria-expanded',open);
document.body.style.overflow=open?'hidden':'';
});
mn.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){mn.classList.remove('open');ham.classList.remove('open');document.body.style.overflow='';})});
}
var rv=document.querySelectorAll('.reveal');
if(rv.length&&'IntersectionObserver' in window){
var ro=new IntersectionObserver(function(entries){
entries.forEach(function(x){if(x.isIntersecting){x.target.classList.add('up');ro.unobserve(x.target)}});
},{threshold:.08,rootMargin:'0px 0px -50px 0px'});
rv.forEach(function(el){ro.observe(el)});
}else{
rv.forEach(function(el){el.classList.add('up')});
}
var dnav=document.getElementById('dept-nav');
if(dnav){
var sections=document.querySelectorAll('.dept-block'),navLinks=dnav.querySelectorAll('a');
var updateActive=function(){
var fromTop=window.scrollY+200;
sections.forEach(function(sec){
if(sec.offsetTop<=fromTop&&sec.offsetTop+sec.offsetHeight>fromTop){
navLinks.forEach(function(a){a.classList.remove('active')});
var link=dnav.querySelector('a[href="#'+sec.id+'"]');
if(link)link.classList.add('active');
}
});
};
window.addEventListener('scroll',updateActive,{passive:true});
navLinks.forEach(function(link){link.addEventListener('click',function(e){
e.preventDefault();
var id=link.getAttribute('href').slice(1),target=document.getElementById(id);
if(target){
var off=window.innerWidth>=960?140:110;
window.scrollTo({top:target.offsetTop-off,behavior:'smooth'});
}
})});
}
var tabs=document.querySelectorAll('.fs-tab');
if(tabs.length){
var panes=document.querySelectorAll('.fs-pane');
var activateTab=function(target){
tabs.forEach(function(x){x.classList.remove('active')});
panes.forEach(function(p){p.classList.remove('active')});
var tab=document.querySelector('.fs-tab[data-tab="'+target+'"]'),pane=document.querySelector('.fs-pane[data-pane="'+target+'"]');
if(tab&&pane){tab.classList.add('active');pane.classList.add('active');pane.querySelectorAll('.reveal').forEach(function(r){r.classList.add('up')})}
};
tabs.forEach(function(t){t.addEventListener('click',function(){var target=t.dataset.tab;activateTab(target);history.replaceState(null,'','#'+target)})});
var hash=window.location.hash.slice(1);
if(hash==='cases'||hash==='case-feed')activateTab('cases');
else if(hash==='articles')activateTab('articles');
else if(hash==='publications')activateTab('publications');
else if(hash==='notices')activateTab('notices');
}
var cf=document.getElementById('cf-submit');
if(cf){cf.addEventListener('click',function(e){
e.preventDefault();
var s=document.getElementById('cf-success');
if(s){s.style.display='block';cf.textContent='Sent';cf.disabled=true;cf.style.opacity='.6'}
});}
})();