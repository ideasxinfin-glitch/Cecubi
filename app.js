'use strict';
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
function closeMenu(){menu.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}
menuButton.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape' && menu.classList.contains('open')){closeMenu();menuButton.focus();}});
matchMedia('(min-width:1041px)').addEventListener('change',closeMenu);
// Resalta en el menú la sección visible
const links=[...menu.querySelectorAll('a')];
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(!entry.isIntersecting)return;links.forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+entry.target.id));});},{rootMargin:'-45% 0px -50% 0px'});
links.forEach(link=>{const section=document.querySelector(link.getAttribute('href'));if(section)observer.observe(section);});
document.querySelector('#year').textContent=new Date().getFullYear();
// Entrada escalonada de los botones del teléfono al llegar a la vista
const phone=document.querySelector('.phone');
if(phone && 'IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion:reduce)').matches){
  phone.classList.add('anim');
  new IntersectionObserver((entries,obs)=>{entries.forEach(entry=>{if(entry.isIntersecting){phone.classList.add('in');obs.disconnect();}});},{threshold:.35}).observe(phone);
}
// Con "reducir movimiento" el logo del encabezado queda quieto (se ve el cuadro inicial)
const logoVideo=document.querySelector('.logo-video');
if(logoVideo && matchMedia('(prefers-reduced-motion:reduce)').matches){logoVideo.removeAttribute('autoplay');logoVideo.pause();}
