/* ---- bloque 1 ---- */
(function(){
  var job=document.getElementById('caseToggle'),panel=document.getElementById('caseSR'),
      t=document.getElementById('caseTrack'),p=document.getElementById('caseCPrev'),n=document.getElementById('caseCNext');
  if(!job||!panel||!t)return;
  function step(){var c=t.querySelector('.case-card');return c?c.getBoundingClientRect().width+14:340;}
  function upd(){p.disabled=t.scrollLeft<4;n.disabled=t.scrollLeft+t.clientWidth>=t.scrollWidth-4;}
  function toggle(){
    var open=!job.classList.contains('open');
    job.classList.toggle('open',open);panel.classList.toggle('open',open);
    job.setAttribute('aria-expanded',open);panel.setAttribute('aria-hidden',!open);var lb=job.querySelector('.job-cta');if(lb)lb.firstChild.nodeValue=open?'CERRAR CASE STUDY ':'VER CASE STUDY ';
    if(open){t.scrollLeft=0;setTimeout(upd,60);}
  }
  job.addEventListener('click',toggle);
  job.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();toggle();}});
  p.addEventListener('click',function(){t.scrollBy({left:-step(),behavior:'smooth'});});
  n.addEventListener('click',function(){t.scrollBy({left:step(),behavior:'smooth'});});
  t.addEventListener('scroll',upd,{passive:true});window.addEventListener('resize',upd);
  var paused=0,vis=false,mq=window.matchMedia('(max-width:850px)'),rm=window.matchMedia('(prefers-reduced-motion: reduce)');
  ['touchstart','pointerdown','wheel'].forEach(function(e){t.addEventListener(e,function(){paused=Date.now()+7000;},{passive:true});});
  if('IntersectionObserver' in window){new IntersectionObserver(function(en){vis=en[0].isIntersecting;},{threshold:.3}).observe(t);}else{vis=true;}
  setInterval(function(){
    if(!mq.matches||rm.matches||!vis||!panel.classList.contains('open')||Date.now()<paused)return;
    var atEnd=t.scrollLeft+t.clientWidth>=t.scrollWidth-6;
    t.scrollTo({left:atEnd?0:t.scrollLeft+step(),behavior:'smooth'});
  },3600);
})();

/* ---- bloque 2 ---- */
(function(){
    var items=[].slice.call(document.querySelectorAll('.caso'));
    function setOpen(it,open){
      var b=it.querySelector('.caso-head'),body=it.querySelector('.caso-body');
      it.classList.toggle('open',open);b.setAttribute('aria-expanded',open?'true':'false');body.setAttribute('aria-hidden',open?'false':'true');
    }
    items.forEach(function(it){
      it.querySelector('.caso-head').addEventListener('click',function(){
        var open=!it.classList.contains('open');
        items.forEach(function(o){if(o!==it)setOpen(o,false);});
        setOpen(it,open);
      });
    });
  })();

/* ---- bloque 3 ---- */
(function(){
  var t=document.getElementById('vidTrack'),p=document.getElementById('vidPrev'),n=document.getElementById('vidNext'),c=document.getElementById('vidCount');
  if(!t||!p||!n)return;
  /* En el visor de Claude los iframes externos se bloquean: se muestra el póster con enlace a YouTube. En un sitio normal (GitHub Pages) se reproduce embebido. */
  var wrap=t.parentNode;if(window.claude||/claude|anthropic/i.test(location.hostname)){wrap.classList.add('no-embed');}
  function step(){var f=t.querySelector('.video-frame');return f?f.getBoundingClientRect().width+14:400;}
  function pad(x){return x<10?'0'+x:''+x;}
  function upd(){
    p.disabled=t.scrollLeft<4;n.disabled=t.scrollLeft+t.clientWidth>=t.scrollWidth-4;
    var total=t.querySelectorAll('.video-frame').length,cur=Math.min(total,Math.round(t.scrollLeft/step())+1);
    if(c)c.textContent=pad(cur)+' / '+pad(total);
  }
  p.addEventListener('click',function(){t.scrollBy({left:-step(),behavior:'smooth'});});
  n.addEventListener('click',function(){t.scrollBy({left:step(),behavior:'smooth'});});
  t.addEventListener('scroll',upd,{passive:true});window.addEventListener('resize',upd);upd();
})();

/* ---- bloque 4 ---- */
(function(){
    var t=document.getElementById('albTrack'),p=document.getElementById('albPrev'),n=document.getElementById('albNext');
    if(!t||!p||!n)return;
    function step(){var c=t.querySelector('.album-card');return c?c.getBoundingClientRect().width+14:260;}
    function upd(){p.disabled=t.scrollLeft<4;n.disabled=t.scrollLeft+t.clientWidth>=t.scrollWidth-4;}
    p.addEventListener('click',function(){t.scrollBy({left:-step()*2,behavior:'smooth'});});
    n.addEventListener('click',function(){t.scrollBy({left:step()*2,behavior:'smooth'});});
    t.addEventListener('scroll',upd,{passive:true});window.addEventListener('resize',upd);upd();
  })();

/* ---- bloque 5 ---- */
(function(){
  var btn=document.getElementById('noraToggle'),panel=document.getElementById('caseNora'),card=document.getElementById('noraCard'),
      t=document.getElementById('noraTrack'),p=document.getElementById('noraPrev'),n=document.getElementById('noraNext');
  if(!btn||!panel||!t)return;
  function step(){var c=t.querySelector('.case-card');return c?c.getBoundingClientRect().width+14:340;}
  function upd(){p.disabled=t.scrollLeft<4;n.disabled=t.scrollLeft+t.clientWidth>=t.scrollWidth-4;}
  btn.addEventListener('click',function(){
    var open=!panel.classList.contains('open');
    panel.classList.toggle('open',open);btn.setAttribute('aria-expanded',open);panel.setAttribute('aria-hidden',!open);
    btn.firstChild.nodeValue=open?'CERRAR CASE STUDY ':'VER CASE STUDY ';card.classList.toggle('open',open);
    if(open){t.scrollLeft=0;setTimeout(upd,60);setTimeout(function(){var r=panel.getBoundingClientRect();if(r.top>window.innerHeight*.6)window.scrollBy({top:r.top-window.innerHeight*.45,behavior:'smooth'});},480);}
  });
  p.addEventListener('click',function(){t.scrollBy({left:-step(),behavior:'smooth'});});
  n.addEventListener('click',function(){t.scrollBy({left:step(),behavior:'smooth'});});
  t.addEventListener('scroll',upd,{passive:true});window.addEventListener('resize',upd);
  var paused=0,vis=false,mq=window.matchMedia('(max-width:850px)'),rm=window.matchMedia('(prefers-reduced-motion: reduce)');
  ['touchstart','pointerdown','wheel'].forEach(function(e){t.addEventListener(e,function(){paused=Date.now()+7000;},{passive:true});});
  if('IntersectionObserver' in window){new IntersectionObserver(function(en){vis=en[0].isIntersecting;},{threshold:.3}).observe(t);}else{vis=true;}
  setInterval(function(){
    if(!mq.matches||rm.matches||!vis||!panel.classList.contains('open')||Date.now()<paused)return;
    var atEnd=t.scrollLeft+t.clientWidth>=t.scrollWidth-6;
    t.scrollTo({left:atEnd?0:t.scrollLeft+step(),behavior:'smooth'});
  },3600);
})();
(function(){
  var t=document.querySelector('.dev-grid'),p=document.getElementById('devPrev'),n=document.getElementById('devNext'),c=document.getElementById('devCount');
  if(!t||!p||!n)return;
  function step(){var f=t.querySelector('.dev-card');return f?f.getBoundingClientRect().width+18:380;}
  function pad(x){return x<10?'0'+x:''+x;}
  function upd(){
    p.disabled=t.scrollLeft<4;n.disabled=t.scrollLeft+t.clientWidth>=t.scrollWidth-4;
    var total=t.querySelectorAll('.dev-card').length,cur=Math.min(total,Math.round(t.scrollLeft/step())+1);
    if(c)c.textContent=pad(cur)+' / '+pad(total);
  }
  p.addEventListener('click',function(){t.scrollBy({left:-step(),behavior:'smooth'});});
  n.addEventListener('click',function(){t.scrollBy({left:step(),behavior:'smooth'});});
  t.addEventListener('scroll',upd,{passive:true});window.addEventListener('resize',upd);upd();
})();

/* ---- bloque 6 ---- */
(function(){
  var mq=window.matchMedia('(max-width:850px)'),rm=window.matchMedia('(prefers-reduced-motion: reduce)');
  function auto(track,sel){
    if(!track)return;var paused=0,visible=false;
    function next(){
      if(!mq.matches||rm.matches||!visible||Date.now()<paused)return;
      var cards=track.querySelectorAll(sel);if(!cards.length)return;
      var gap=cards.length>1?cards[1].offsetLeft-cards[0].offsetLeft:cards[0].offsetWidth;
      var atEnd=track.scrollLeft+track.clientWidth>=track.scrollWidth-6;
      track.scrollTo({left:atEnd?0:track.scrollLeft+gap,behavior:'smooth'});
    }
    function hold(){paused=Date.now()+7000;}
    ['touchstart','pointerdown','wheel'].forEach(function(e){track.addEventListener(e,hold,{passive:true});});
    if('IntersectionObserver' in window){new IntersectionObserver(function(en){visible=en[0].isIntersecting;},{threshold:.4}).observe(track);}else{visible=true;}
    setInterval(next,3200);
  }
  auto(document.querySelector('.dev-grid'),'.dev-card');
  auto(document.querySelector('.skill-grid'),'.skill');
  auto(document.getElementById('albTrack'),'.album-card');
})();

/* ---- bloque 7 ---- */
(function(){
  var mqD=window.matchMedia('(min-width:851px)'),rm=window.matchMedia('(prefers-reduced-motion: reduce)');
  var S=[['inicio','Inicio'],['perfil','Perfil'],['resultados','Resultados'],['cv','CV'],['experiencia','Experiencia'],['casos','Publicidad'],['proyectos','Proyectos'],['desarrollo','Desarrollo web'],['contacto','Contacto']];
  var items=[];S.forEach(function(x,i){var el=document.getElementById(x[0]);if(el)items.push({id:x[0],name:x[1],el:el,n:i});});
  var dots=document.getElementById('dots'),wipe=document.getElementById('wipe'),wt=document.getElementById('wipeText');
  items.forEach(function(it){
    var a=document.createElement('a');a.href='#'+it.id;a.setAttribute('data-id',it.id);a.setAttribute('aria-label',it.name);
    a.innerHTML='<span>'+it.name+'</span><i></i>';dots.appendChild(a);
  });
  var busy=false;
  function go(id){
    var it=items.filter(function(x){return x.id===id;})[0];if(!it||busy)return;
    if(!mqD.matches||rm.matches){it.el.scrollIntoView({behavior:rm.matches?'auto':'smooth'});return;}
    busy=true;
    wt.textContent=it.n?((it.n<10?'0'+it.n:it.n)+' — '+it.name.toUpperCase()):it.name.toUpperCase();
    wipe.className='wipe in';
    setTimeout(function(){
      var y=0,n=it.el;while(n){y+=n.offsetTop;n=n.offsetParent;}
      window.scrollTo({top:y,behavior:'instant'});
      try{history.replaceState(null,'','#'+id);}catch(e){}
      wipe.className='wipe hold';
      setTimeout(function(){wipe.className='wipe out';setTimeout(function(){wipe.className='wipe';busy=false;},700);},260);
    },780);
  }
  document.addEventListener('click',function(e){
    var a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a)return;
    var id=a.getAttribute('href').slice(1);
    if(!id||!items.some(function(x){return x.id===id;}))return;
    if(!mqD.matches||rm.matches)return;
    e.preventDefault();go(id);
  });
  function spy(){
    var cur=items[0],mid=window.innerHeight*0.4;
    items.forEach(function(it){var n=it.el,y=0;while(n){y+=n.offsetTop;n=n.offsetParent;}if(y-window.pageYOffset<=mid)cur=it;});
    dots.querySelectorAll('a').forEach(function(a){a.classList.toggle('on',a.getAttribute('data-id')===cur.id);});
  }
  window.addEventListener('scroll',spy,{passive:true});window.addEventListener('resize',spy);spy();
})();

(function(){
  var mqD=window.matchMedia('(min-width:851px)'),rm=window.matchMedia('(prefers-reduced-motion: reduce)');
  if(rm.matches)return;
  /* Títulos: cada línea sube desde una máscara al entrar en pantalla */
  var heads=document.querySelectorAll('.hero h1,.statement h2,.metrics h2,.cv-intro h2,.experience-section>h2,.casos-section h2,.proyectos-section h2,.dev-section h2,.selection h2,.closing h2');
  heads.forEach(function(h){
    var parts=h.innerHTML.split(/<br\s*\/?>/i);
    h.innerHTML=parts.map(function(p,i){return '<span class="hl"><span class="hi" style="transition-delay:'+(i*0.12)+'s">'+p+'</span></span>';}).join('');
    h.classList.add('hsplit');
  });
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(en){en.forEach(function(e){e.target.classList.toggle('hs-in',e.isIntersecting);});},{threshold:.2,rootMargin:'0px 0px -8% 0px'});
    heads.forEach(function(h){io.observe(h);});
  }else{heads.forEach(function(h){h.classList.add('hs-in');});}
  /* Secciones: se desvanecen al entrar y al salir (solo escritorio) */
  var secs=[].slice.call(document.querySelectorAll('main > section')),ticking=false;
  function clamp(x){return x<0?0:x>1?1:x;}
  function fade(){
    ticking=false;
    if(!mqD.matches){secs.forEach(function(s){s.style.opacity='';s.style.transform='';});return;}
    var vh=window.innerHeight,edge=vh*0.32;
    secs.forEach(function(s,i){
      var r=s.getBoundingClientRect();
      var inn=i===0?1:clamp((vh-r.top)/edge);
      var out=i===secs.length-1?1:clamp(r.bottom/edge);
      var o=Math.min(inn,out);
      s.style.opacity=o>=0.995?'':o.toFixed(3);
      s.style.transform=o>=0.995?'':'translateY('+((1-o)*(inn<out?28:-18)).toFixed(1)+'px)';
    });
  }
  function onScroll(){if(!ticking){ticking=true;requestAnimationFrame(fade);}}
  window.addEventListener('scroll',onScroll,{passive:true});window.addEventListener('resize',onScroll);fade();
})();

/* ---- bloque 8 ---- */
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isDesktop = window.matchMedia("(min-width: 851px)").matches;

/* barra de progreso */
const progressBar=document.getElementById("progressBar");
window.addEventListener("scroll",()=>{
  const max=document.documentElement.scrollHeight-window.innerHeight;
  progressBar.style.width=(window.scrollY/max*100)+"%";
},{passive:true});

/* reveal-on-scroll (toda la página) */
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

/* contador de métricas */
const counters=document.querySelectorAll("[data-count]");
let counted=false;
function formatCounter(el,target,value){
  const prefix=target===18?"+":target===12?"−":"";
  const suffix=(target===18||target===12)?"%":"";
  el.textContent=prefix+value.toLocaleString("es-CO")+suffix;
}
if(reduceMotion){
  counters.forEach(el=>formatCounter(el,Number(el.dataset.count),Number(el.dataset.count)));
}else{
  const metricObserver=new IntersectionObserver(entries=>{
    if(entries.some(e=>e.isIntersecting)&&!counted){
      counted=true;
      counters.forEach(el=>{
        const target=Number(el.dataset.count);
        const duration=1000;
        const startTime=performance.now();
        function tick(now){
          const p=Math.min((now-startTime)/duration,1);
          const value=Math.floor((1-Math.pow(1-p,3))*target);
          formatCounter(el,target,value);
          if(p<1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
    }
  },{threshold:.3});
  metricObserver.observe(document.querySelector(".metric-grid"));
}

/* parallax de hero, solo desktop y sin reduced-motion (efecto tipo Apple) */
if(isDesktop && !reduceMotion){
  const heroVisual=document.querySelector(".hero-visual");
  const heroCopy=document.querySelector(".hero-copy");
  const heroSection=document.getElementById("inicio");
  let ticking=false;
  window.addEventListener("scroll",()=>{
    if(ticking) return;
    ticking=true;
    requestAnimationFrame(()=>{
      const y=window.scrollY;
      const heroH=heroSection.offsetHeight||800;
      const p=Math.min(y/heroH,1);
      heroVisual.style.transform="translateY("+(y*0.12)+"px) scale("+(1-p*0.06)+")";
      heroCopy.style.opacity=String(Math.max(1-p*1.15,0));
      heroCopy.style.transform="translateY("+(p*30)+"px)";
      ticking=false;
    });
  },{passive:true});
}

/* menú móvil: accesible + bloquea scroll + Esc */
const navEl=document.querySelector(".nav");
const menuBtn=document.getElementById("menuBtn");
const modal=document.getElementById("modal");
function updateScrollLock(){
  const locked=navEl.classList.contains("nav-open")||modal.classList.contains("open");
  document.body.style.overflow=locked?"hidden":"";
}
function setMenu(open){
  navEl.classList.toggle("nav-open",open);
  menuBtn.setAttribute("aria-expanded",open?"true":"false");
  menuBtn.setAttribute("aria-label",open?"Cerrar menú":"Abrir menú");
  updateScrollLock();
}
menuBtn.addEventListener("click",()=>setMenu(!navEl.classList.contains("nav-open")));
document.querySelectorAll(".nav nav a").forEach(a=>a.addEventListener("click",()=>setMenu(false)));
window.addEventListener("resize",()=>{ if(window.innerWidth>850) setMenu(false); });

/* descargas: en la página publicada las descargas directas están bloqueadas,
   se usa la capability "downloads" del visor (pide confirmación al usuario) */
let downloadsApi=null;
try{
  if(window.claude&&typeof window.claude.use==="function"){
    window.claude.use("downloads").then(api=>{downloadsApi=api}).catch(()=>{});
  }
}catch(_){}
function uriToBlob(uri){
  const parts=uri.split(",");
  const mime=(parts[0].match(/:(.*?);/)||[])[1]||"application/octet-stream";
  const bin=atob(parts[1]);
  const arr=new Uint8Array(bin.length);
  for(let i=0;i<bin.length;i++) arr[i]=bin.charCodeAt(i);
  return new Blob([arr],{type:mime});
}
function toast(msg){
  let t=document.getElementById("toast");
  if(!t){t=document.createElement("div");t.id="toast";t.setAttribute("role","status");document.body.appendChild(t);}
  t.textContent=msg;t.classList.add("show");
  clearTimeout(toast._t);toast._t=setTimeout(()=>t.classList.remove("show"),3500);
}
document.addEventListener("click",async e=>{
  const a=e.target.closest("a[download]");
  if(!a||!downloadsApi) return;
  e.preventDefault();
  try{
    await downloadsApi.save({filename:a.getAttribute("download"),data:uriToBlob(a.getAttribute("href"))});
    toast("Descarga lista ✓");
  }catch(err){
    if(err&&err.code==="declined") return;
    toast("No se pudo descargar aquí. Abre la página en una pestaña nueva e inténtalo de nuevo.");
  }
});

/* cartas: contenido real + modal accesible */
const LETTERS = {
  presentation: {
    label: "01 — CARTA DE PRESENTACIÓN",
    title: "PRESENTAR. CONECTAR. CONVENCER.",
    paragraphs: [
      "Soy Julián David Ospina, publicista y estudiante de noveno semestre de Publicidad en la Universidad Central, con experiencia en el desarrollo de proyectos creativos y digitales.",
      "Me postulo al cargo de Analista Creativo Junior – Campañas y Diseño porque mi experiencia se ha desarrollado en un punto donde convergen la creatividad, la estrategia y la ejecución: conectar diseño, fotografía, desarrollo y contenido para transformar una idea en una pieza o campaña coherente, funcional y alineada con los objetivos de comunicación.",
      "Actualmente, en Droguerías Santa Rosa, trabajo en el desarrollo de contenidos y campañas digitales, elaboro briefs y referencias visuales para orientar los desarrollos y realizo benchmarking de tendencias y competencia como insumo para la construcción de contenidos. También he incorporado herramientas de inteligencia artificial generativa en la creación de assets visuales para marca.",
      "Paralelamente, como fotógrafo publicitario freelance, he desarrollado una visión integral del proceso de producción visual, participando en diferentes etapas que van desde la interpretación del brief y la búsqueda de referencias hasta la definición de locación, dirección de arte, producción y edición.",
      "Me interesa Azzorti por la posibilidad de desarrollar esta experiencia en un entorno de mayor escala y con presencia en diferentes mercados, aportando criterio visual, pensamiento creativo y capacidad para convertir conceptos en ejecuciones concretas."
    ],
    file: "PRES_PDF",
    filename: "Carta-Presentacion-Azzorti.pdf"
  },
  intention: {
    label: "02 — CARTA DE INTENCIÓN",
    title: "POR QUÉ ESTA OPORTUNIDAD.",
    paragraphs: [
      "Escribo para expresar mi interés en formar parte de Azzorti como Analista Creativo Junior – Campañas y Diseño, una oportunidad que considero coherente con el camino que he venido construyendo como publicista y con la manera en que entiendo el trabajo creativo.",
      "Actualmente curso noveno semestre de Publicidad en la Universidad Central. Durante mi práctica profesional en Droguerías Santa Rosa he descubierto que lo que más me interesa no es una disciplina aislada —diseño, fotografía o desarrollo—, sino el punto en el que todas convergen: transformar un brief en una pieza o campaña terminada, coherente y funcional.",
      "En ese proceso, he encontrado especial interés en la coordinación entre diferentes áreas, el seguimiento de entregables, la resolución de cuellos de botella y el cuidado de la calidad visual de principio a fin.",
      "Elegí postularme a Azzorti porque quiero llevar esta experiencia a proyectos de mayor escala y en un entorno donde la creatividad tenga una conexión directa con las necesidades del consumidor y del negocio, particularmente en categorías como moda y consumo.",
      "Desde mi experiencia en e-commerce puedo aportar disciplina en el seguimiento de catálogos, contenidos y cronogramas, y desde la fotografía publicitaria, una sensibilidad especial por la composición y la comunicación visual.",
      "Más que ocupar un cargo, busco integrarme a un equipo en el que pueda contribuir a que las ideas se conviertan en campañas ejecutadas con orden, calidad y una intención clara."
    ],
    file: "INTEN_PDF",
    filename: "Carta-Intencion-Azzorti.pdf"
  }
};
const PDF_DATA = { PRES_PDF: "assets/docs/cartas/Carta-Presentacion-Azzorti.pdf", INTEN_PDF: "assets/docs/cartas/Carta-Intencion-Azzorti.pdf" };

let lastFocused=null;
function showModal(type){
  const label=document.getElementById("modalLabel");
  const title=document.getElementById("modalTitle");
  const text=document.getElementById("modalText");
  const dl=document.getElementById("modalDownload");
  const data=LETTERS[type];
  label.textContent=data.label;
  title.textContent=data.title;
  text.innerHTML=data.paragraphs.map(p=>"<p>"+p+"</p>").join("");
  dl.href=PDF_DATA[data.file];
  dl.download=data.filename;
  lastFocused=document.activeElement;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  updateScrollLock();
  document.querySelector(".modal-box").focus();
}
function closeModal(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  updateScrollLock();
  if(lastFocused) lastFocused.focus();
}
modal.addEventListener("click",e=>{ if(e.target.id==="modal") closeModal(); });
document.addEventListener("keydown",e=>{
  if(e.key==="Escape"){
    if(modal.classList.contains("open")) closeModal();
    else if(navEl.classList.contains("nav-open")) setMenu(false);
  }
});


/* ---- descarga protegida con contraseña (AES-GCM + PBKDF2 en el navegador) ---- */
(function(){
  var enc=new TextEncoder();
  async function descifrar(buf,pass){
    var b=new Uint8Array(buf), salt=b.slice(0,16), iv=b.slice(16,28), data=b.slice(28);
    var base=await crypto.subtle.importKey('raw',enc.encode(pass),'PBKDF2',false,['deriveKey']);
    var key=await crypto.subtle.deriveKey({name:'PBKDF2',salt:salt,iterations:200000,hash:'SHA-256'},base,{name:'AES-GCM',length:256},false,['decrypt']);
    return crypto.subtle.decrypt({name:'AES-GCM',iv:iv},key,data);
  }
  document.querySelectorAll('.caso-lock').forEach(function(box){
    var btn=box.querySelector('.caso-dl'), form=box.querySelector('.caso-pw'),
        input=form.querySelector('input'), go=form.querySelector('button'), msg=form.querySelector('.caso-msg');
    btn.addEventListener('click',function(){ form.hidden=!form.hidden; if(!form.hidden) input.focus(); });
    form.addEventListener('submit',async function(e){
      e.preventDefault(); msg.className='caso-msg'; msg.textContent='Descifrando…'; go.disabled=true;
      try{
        if(!(window.crypto&&crypto.subtle)) throw new Error('nocrypto');
        var r=await fetch(btn.dataset.file); if(!r.ok) throw new Error('fetch');
        var plain=await descifrar(await r.arrayBuffer(),input.value);
        var url=URL.createObjectURL(new Blob([plain],{type:'application/zip'}));
        var a=document.createElement('a'); a.href=url; a.download=btn.dataset.name; document.body.appendChild(a); a.click(); a.remove();
        setTimeout(function(){URL.revokeObjectURL(url)},4000);
        msg.textContent='Listo, tu descarga empezó.'; input.value='';
      }catch(err){
        msg.className='caso-msg err';
        msg.textContent=(err.message==='nocrypto')?'Abre la página con https para descargar.':(err.message==='fetch')?'No se pudo traer el archivo. Intenta de nuevo.':'Contraseña incorrecta.';
      }
      go.disabled=false;
    });
  });
})();
