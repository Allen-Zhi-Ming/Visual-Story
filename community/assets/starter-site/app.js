'use strict';
const navToggle=document.querySelector('#navToggle');
const nav=document.querySelector('#primaryNav');
const progress=document.querySelector('#readingProgress');
const filters=[...document.querySelectorAll('[data-filter]')];
const cards=[...document.querySelectorAll('.project-card')];
const empty=document.querySelector('#emptyState');
function closeMenu(){nav.classList.remove('open');navToggle.setAttribute('aria-expanded','false');navToggle.setAttribute('aria-label','開啟導覽選單');}
navToggle.addEventListener('click',()=>{const opening=!nav.classList.contains('open');nav.classList.toggle('open',opening);navToggle.setAttribute('aria-expanded',String(opening));navToggle.setAttribute('aria-label',opening?'關閉導覽選單':'開啟導覽選單');});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){closeMenu();navToggle.focus();}});
window.addEventListener('resize',()=>{if(window.innerWidth>760)closeMenu();});
function updateProgress(){const max=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(max<=0?100:Math.min(100,Math.max(0,window.scrollY/max*100)))+'%';}
window.addEventListener('scroll',updateProgress,{passive:true});window.addEventListener('resize',updateProgress);updateProgress();
filters.forEach(button=>button.addEventListener('click',()=>{const value=button.dataset.filter;filters.forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});let count=0;cards.forEach(card=>{const visible=value==='all'||card.dataset.category===value;card.hidden=!visible;if(visible)count++;});empty.hidden=count>0;}));
