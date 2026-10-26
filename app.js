'use strict';
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
function closeMenu(){menu.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}
menuButton.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape' && menu.classList.contains('open')){closeMenu();menuButton.focus();}});
matchMedia('(min-width:801px)').addEventListener('change',closeMenu);
document.querySelectorAll('[data-level]').forEach(link=>link.addEventListener('click',()=>{document.querySelector('#level').value=link.dataset.level;}));
document.querySelector('#admission-form').addEventListener('submit',event=>{
  event.preventDefault();
  const level=document.querySelector('#level').value;
  const interest=document.querySelector('#interest').value;
  const message=`Hola, me gustaría conocer CECUBI. Me interesa ${level || 'recibir orientación sobre los niveles educativos'}. Mi consulta: ${interest.toLowerCase()}.`;
  const url=`https://wa.me/529991511136?text=${encodeURIComponent(message)}`;
  window.open(url,'_blank','noopener,noreferrer');
  const status=document.querySelector('#form-status');
  const retry=document.createElement('a');
  retry.href=url;retry.target='_blank';retry.rel='noopener noreferrer';retry.textContent='Abrir mi consulta en WhatsApp ↗';retry.className='text-link';
  status.replaceChildren(document.createTextNode('Consulta preparada. Si no se abrió la aplicación: '),retry);
});
document.querySelector('#year').textContent=new Date().getFullYear();
