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
