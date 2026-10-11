(() => {
  // IMPORTANT: Replace these placeholders with the real business numbers.
  const BUSINESS_PHONE = "919999999999";
  const BUSINESS_WHATSAPP = "919999999999";
  const SERVICE_AREA = "Pune";

  const path = window.location.pathname;
  const inPages = /\/pages\//.test(path);
  const prefix = inPages ? "../" : "";
  const pagePrefix = inPages ? "" : "pages/";
  const pageLinks = [
    ["Home", prefix + "index.html", "home"],
    ["Services", pagePrefix + "all-services.html", "services"],
    ["Packages", pagePrefix + "packages.html", "packages"],
    ["Gallery", pagePrefix + "gallery.html", "gallery"],
    ["About Us", pagePrefix + "about.html", "about"],
    ["FAQ", pagePrefix + "faq.html", "faq"],
    ["Contact", pagePrefix + "contact.html", "contact"]
  ];
  const svg = {
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.65 2.62a2 2 0 0 1-.45 2.11L8.04 9.71a16 16 0 0 0 6 6l1.26-1.27a2 2 0 0 1 2.11-.45c.84.31 1.72.53 2.62.65A2 2 0 0 1 22 16.92z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path fill="currentColor" d="M20.52 3.48A11.83 11.83 0 0 0 12.08 0C5.5 0 .15 5.34.15 11.92c0 2.1.55 4.15 1.6 5.96L.05 24l6.28-1.65a11.9 11.9 0 0 0 5.74 1.46h.01c6.57 0 11.92-5.35 11.92-11.93 0-3.18-1.24-6.17-3.48-8.4ZM12.08 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.73.98.99-3.64-.24-.37a9.84 9.84 0 0 1-1.52-5.26c0-5.47 4.45-9.92 9.92-9.92a9.86 9.86 0 0 1 7.02 2.91 9.86 9.86 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.94 9.92Zm5.44-7.43c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.08-.79.38-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.09 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"/></svg>'
  };
  const waLink = (message = "Hi Saf Safaai Pune! Mujhe cleaning service book karni hai.") =>
    `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(message)}`;

  function header() {
    const current = document.body.dataset.page || "";
    return `
      <div class="topbar"><div class="container"><span>✦ Professional Home Cleaning · Pune</span><span>Easy booking on WhatsApp</span></div></div>
      <header class="site-header"><div class="container nav-wrap">
        <a class="brand" href="${prefix}index.html" aria-label="Saf Safaai Pune Home"><img src="${prefix}assets/logo.svg" alt="Saf Safaai Pune"></a>
        <nav class="nav-links" id="main-nav" aria-label="Main navigation">
          ${pageLinks.map(([label,url,key])=>`<a class="${current===key?'active':''}" href="${url}">${label}</a>`).join("")}
        </nav>
        <div class="nav-actions"><button class="btn btn-primary btn-sm" data-open-booking>Book Now <span>↗</span></button><button class="menu-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="main-nav">☰</button></div>
      </div></header>`;
  }
  function footer() {
    const links = [
      ["Flat Cleaning", pagePrefix+"flat-cleaning.html"], ["Bathroom Cleaning",pagePrefix+"bathroom-cleaning.html"],
      ["Sofa Cleaning",pagePrefix+"sofa-cleaning.html"], ["Kitchen Cleaning",pagePrefix+"kitchen-cleaning.html"],
      ["Window & Fan",pagePrefix+"window-fan-cleaning.html"], ["Packages",pagePrefix+"packages.html"]
    ];
    return `<footer class="site-footer"><div class="container">
      <div class="footer-grid">
        <div class="footer-brand"><img src="${prefix}assets/logo.svg" alt="Saf Safaai Pune"><p>Aapke ghar ki safai, hamari responsibility. Apni requirement ke hisaab se service choose karein aur WhatsApp par booking karein.</p><a class="btn btn-light btn-sm" href="${waLink()}" target="_blank" rel="noopener">WhatsApp par baat karein ↗</a></div>
        <div><h4>Quick Links</h4><div class="footer-links">${pageLinks.map(([l,u])=>`<a href="${u}">${l}</a>`).join("")}</div></div>
        <div><h4>Our Services</h4><div class="footer-links">${links.map(([l,u])=>`<a href="${u}">${l}</a>`).join("")}</div></div>
        <div><h4>Contact</h4><div class="footer-links"><a href="tel:+${BUSINESS_PHONE}">Call: +${BUSINESS_PHONE}</a><a href="${waLink()}" target="_blank" rel="noopener">WhatsApp Booking</a><span>Service area: ${SERVICE_AREA}</span><span>Timings: Please confirm on booking</span></div></div>
      </div>
      <div class="footer-bottom"><span>© <span id="year"></span> Saf Safaai Pune. All rights reserved.</span><span>Designed for a cleaner, fresher home.</span></div>
    </div></footer>
    <div class="floating-contact" aria-label="Quick contact">
      <a class="float-btn float-call" href="tel:+${BUSINESS_PHONE}" aria-label="Call Saf Safaai Pune" title="Call">${svg.phone}</a>
      <a class="float-btn float-wa" href="${waLink()}" target="_blank" rel="noopener" aria-label="WhatsApp Saf Safaai Pune" title="WhatsApp">${svg.whatsapp}</a>
    </div>
    ${bookingModal()}`;
  }
  function bookingModal() {
    return `<div class="booking-modal" id="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-title">
      <div class="booking-box"><div class="booking-top"><div><h2 id="booking-title">Book your cleaning</h2><p>Apni service select karein — baaki details WhatsApp par bhej sakte hain.</p></div><button class="close-modal" data-close-booking aria-label="Close booking">×</button></div>
      <div class="progress"><span id="booking-progress"></span></div><div class="booking-body" id="booking-body"></div></div></div>`;
  }
  function setupBooking() {
    const modal = document.getElementById("booking-modal");
    const body = document.getElementById("booking-body");
    if (!modal || !body) return;
    let state = {step:1, service:"", bhk:"", wall:"", name:"", area:"", notes:""};
    const serviceOptions = [
      ["Flat Cleaning","BHK aur wall option choose karein"],["Bathroom Cleaning","Bathroom cleaning service"],
      ["Sofa Cleaning","Sofa cleaning service"],["Hall Cleaning","Hall / living area"],
      ["Kitchen Cleaning","Kitchen cleaning service"],["Window Cleaning","Window cleaning service"],
      ["Fan Cleaning","Fan cleaning service"]
    ];
    const flatPrices = {
      "1 BHK":{"Without Wall":"₹4,000","With Wall":"₹5,500–₹6,000"},
      "2 BHK":{"Without Wall":"₹4,500","With Wall":"₹7,500"},
      "3 BHK":{"Without Wall":"₹6,000","With Wall":"₹9,000"},
      "4 BHK+":{"Without Wall":"₹8,000","With Wall":"₹12,000"}
    };
    const show = () => {
      document.getElementById("booking-progress").style.width = `${state.step*25}%`;
      if (state.step===1) {
        body.innerHTML = `<div class="step-label">Step 1 of 4</div><h3>Kaunsi service chahiye?</h3><div class="choice-grid">${serviceOptions.map(([n,d])=>`<button class="choice ${state.service===n?'selected':''}" data-service="${n}"><strong>${n}</strong><small>${d}</small></button>`).join("")}</div><div class="booking-nav"><span></span><button class="btn btn-primary" id="next-step" ${state.service?'':'disabled'}>Continue →</button></div>`;
      } else if (state.step===2 && state.service==="Flat Cleaning") {
        body.innerHTML = `<div class="step-label">Step 2 of 4</div><h3>Aapka flat kitne BHK ka hai?</h3><div class="choice-grid">${Object.keys(flatPrices).map(n=>`<button class="choice ${state.bhk===n?'selected':''}" data-bhk="${n}"><strong>${n}</strong><small>${n==="4 BHK+"?"4 BHK ya usse bada":"Flat size"}</small></button>`).join("")}</div><div class="booking-nav"><button class="btn btn-outline" id="prev-step">← Back</button><button class="btn btn-primary" id="next-step" ${state.bhk?'':'disabled'}>Continue →</button></div>`;
      } else if (state.step===2) {
        body.innerHTML = `<div class="step-label">Step 2 of 4</div><h3>${state.service} select kiya hai</h3><div class="booking-summary"><strong>Price on request</strong><small>Is service ki price confirm karne ke liye WhatsApp par enquiry bhejein.</small></div><p class="booking-note">Aap next step mein apna naam aur area add kar sakte hain.</p><div class="booking-nav"><button class="btn btn-outline" id="prev-step">← Back</button><button class="btn btn-primary" id="next-step">Continue →</button></div>`;
      } else if (state.step===3 && state.service==="Flat Cleaning") {
        body.innerHTML = `<div class="step-label">Step 3 of 4</div><h3>Wall cleaning ka option</h3><div class="choice-grid"><button class="choice ${state.wall==='Without Wall'?'selected':''}" data-wall="Without Wall"><strong>Without Wall</strong><small>Walls ki cleaning included nahi</small></button><button class="choice ${state.wall==='With Wall'?'selected':''}" data-wall="With Wall"><strong>With Wall</strong><small>Walls ki cleaning included</small></button></div>${state.bhk&&state.wall?`<div class="booking-summary"><small>${state.bhk} · ${state.wall}</small><strong>${flatPrices[state.bhk][state.wall]}</strong><small>1 BHK with wall ki price range hai; final quote confirm karein.</small></div>`:""}<div class="booking-nav"><button class="btn btn-outline" id="prev-step">← Back</button><button class="btn btn-primary" id="next-step" ${state.wall?'':'disabled'}>Continue →</button></div>`;
      } else {
        const stepNo = state.step===4?4:3;
        body.innerHTML = `<div class="step-label">Step ${stepNo} of 4</div><h3>Booking details</h3><div class="form-grid">
          <div class="field"><label for="book-name">Aapka naam</label><input id="book-name" value="${escapeHtml(state.name)}" placeholder="Name"></div>
          <div class="field"><label for="book-area">Area / locality</label><input id="book-area" value="${escapeHtml(state.area)}" placeholder="Jaise: Baner, Kothrud"></div>
          <div class="field full"><label for="book-notes">Extra details (optional)</label><textarea id="book-notes" rows="2" placeholder="Date/time preference ya cleaning requirement">${escapeHtml(state.notes)}</textarea></div>
        </div><div class="booking-nav"><button class="btn btn-outline" id="prev-step">← Back</button><button class="btn btn-primary" id="send-booking">WhatsApp par bhejein ↗</button></div><p class="booking-note">Booking request WhatsApp par open hogi. Message bhejne se pehle aap edit kar sakte hain.</p>`;
      }
      body.querySelectorAll("[data-service]").forEach(b=>b.addEventListener("click",()=>{state.service=b.dataset.service;show()}));
      body.querySelectorAll("[data-bhk]").forEach(b=>b.addEventListener("click",()=>{state.bhk=b.dataset.bhk;state.wall="";show()}));
      body.querySelectorAll("[data-wall]").forEach(b=>b.addEventListener("click",()=>{state.wall=b.dataset.wall;show()}));
      const next=body.querySelector("#next-step");
      if(next) next.addEventListener("click",()=>{if(state.step===1&&!state.service)return;if(state.step===2&&state.service==="Flat Cleaning"&&!state.bhk)return;if(state.step===3&&state.service==="Flat Cleaning"&&!state.wall)return;state.step++;if(state.step>4)state.step=4;show()});
      const prev=body.querySelector("#prev-step");
      if(prev) prev.addEventListener("click",()=>{state.step=Math.max(1,state.step-1);show()});
      const send=body.querySelector("#send-booking");
      if(send) send.addEventListener("click",()=>{
        state.name=body.querySelector("#book-name").value.trim();
        state.area=body.querySelector("#book-area").value.trim();
        state.notes=body.querySelector("#book-notes").value.trim();
        const price=state.service==="Flat Cleaning"&&state.bhk&&state.wall?flatPrices[state.bhk][state.wall]:"Price on request";
        const msg=`Hi Saf Safaai Pune! Mujhe cleaning service book karni hai.\nService: ${state.service}\n${state.bhk?`Flat: ${state.bhk}\nWall option: ${state.wall}\nEstimated listed price: ${price}\n`:""}Name: ${state.name||"Not provided"}\nArea: ${state.area||"Not provided"}\nExtra details: ${state.notes||"None"}\nPlease confirm availability and final price.`;
        window.open(waLink(msg),"_blank","noopener");
      });
    };
    function open(){state={step:1,service:"",bhk:"",wall:"",name:"",area:"",notes:""};show();modal.classList.add("show");document.body.style.overflow="hidden"}
    function close(){modal.classList.remove("show");document.body.style.overflow=""}
    document.querySelectorAll("[data-open-booking]").forEach(b=>b.addEventListener("click",open));
    document.querySelectorAll("[data-close-booking]").forEach(b=>b.addEventListener("click",close));
    modal.addEventListener("click",e=>{if(e.target===modal)close()});
    document.addEventListener("keydown",e=>{if(e.key==="Escape")close()});
  }
  function escapeHtml(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  document.addEventListener("DOMContentLoaded",()=>{
    const headerSlot=document.querySelector("[data-site-header]");
    const footerSlot=document.querySelector("[data-site-footer]");
    if(headerSlot)headerSlot.innerHTML=header();
    if(footerSlot)footerSlot.innerHTML=footer();
    document.querySelectorAll("[data-wa-link]").forEach(a=>a.href=waLink());
    const menu=document.querySelector(".menu-toggle");
    if(menu)menu.addEventListener("click",()=>{const nav=document.querySelector(".nav-links");const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));menu.textContent=open?"×":"☰"});
    document.querySelectorAll(".faq-question").forEach(btn=>btn.addEventListener("click",()=>{const item=btn.closest(".faq-item");item.classList.toggle("open");btn.setAttribute("aria-expanded",String(item.classList.contains("open")))}));
    document.querySelectorAll("[data-contact-form]").forEach(form=>form.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(form);const msg=`Hi Saf Safaai Pune! Enquiry details:\nName: ${d.get("name")}\nPhone: ${d.get("phone")}\nService: ${d.get("service")}\nArea: ${d.get("area")}\nMessage: ${d.get("message")||"None"}`;window.open(waLink(msg),"_blank","noopener")}));
    const year=document.getElementById("year");if(year)year.textContent=new Date().getFullYear();
    setupBooking();
    const revealItems=document.querySelectorAll(".reveal");
    if("IntersectionObserver" in window){const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");io.unobserve(entry.target)}}),{threshold:.12});revealItems.forEach(el=>io.observe(el))}else revealItems.forEach(el=>el.classList.add("visible"));
  });
})();
