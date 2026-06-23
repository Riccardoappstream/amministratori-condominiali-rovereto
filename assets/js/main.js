const WHATSAPP_NUMBER = '393398182865';
const WA_TEXT = encodeURIComponent('Buongiorno, vorrei richiedere informazioni per amministrazione condominiale.');
document.querySelectorAll('[data-whatsapp]').forEach(el=>{el.href=`https://wa.me/${WHATSAPP_NUMBER}?text=${WA_TEXT}`;el.target='_blank';el.rel='noopener'});
const burger=document.querySelector('.burger');const nav=document.querySelector('.navlinks');if(burger){burger.addEventListener('click',()=>nav.classList.toggle('open'))}
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')})},{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
const form=document.querySelector('#contactForm');if(form){form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const subject=encodeURIComponent('Richiesta contatto dal sito - Amministratori Condominiali Rovereto');const body=encodeURIComponent(`Nome: ${d.get('nome')}\nTelefono: ${d.get('telefono')}\nMessaggio:\n${d.get('messaggio')}`);window.location.href=`mailto:info@amministrazionicondominialirovereto.it?subject=${subject}&body=${body}`})}
