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
const tabs=[...document.querySelectorAll('[role="tab"]')];
function selectTab(tab){tabs.forEach(item=>{const selected=item===tab;item.setAttribute('aria-selected',String(selected));item.tabIndex=selected?0:-1;document.getElementById(item.getAttribute('aria-controls')).hidden=!selected;});}
tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>selectTab(tab));tab.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight') next=(index+1)%tabs.length;if(event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;if(event.key==='Home')next=0;if(event.key==='End')next=tabs.length-1;if(next!==undefined){event.preventDefault();tabs[next].focus();selectTab(tabs[next]);}});});
const dialog=document.querySelector('#tiktok-dialog');
document.querySelector('#tiktok-open').addEventListener('click',()=>dialog.showModal());
dialog.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
