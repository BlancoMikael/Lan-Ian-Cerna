const menuToggle=document.querySelector(".menu-toggle");const nav=document.querySelector(".nav");const contactForm=document.querySelector("#contactForm");const formNote=document.querySelector("#formNote");menuToggle?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));});document.querySelectorAll(".nav a").forEach(link=>link.addEventListener("click",()=>{nav.classList.remove("open");menuToggle?.setAttribute("aria-expanded","false");}));contactForm?.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(contactForm);const subject=encodeURIComponent(`Portfolio inquiry from ${d.get("name")}`);const body=encodeURIComponent(`Name: ${d.get("name")}\nEmail: ${d.get("email")}\n\nMessage:\n${d.get("message")}`);window.location.href=`mailto:lanianjayc@gmail.com?subject=${subject}&body=${body}`;if(formNote)formNote.textContent="Opening your email app…";});const year=document.querySelector("#year");if(year)year.textContent=new Date().getFullYear();

// Centered video viewer: clicking a video opens the same Drive player in a larger, centered modal.
const videoModal=document.querySelector("#videoModal");
const videoModalScreen=document.querySelector("#videoModalScreen");
const closeVideo=()=>{if(!videoModal)return;videoModal.classList.remove("open");videoModal.setAttribute("aria-hidden","true");document.body.classList.remove("video-modal-open");videoModalScreen.innerHTML="";};
document.querySelectorAll(".video-card").forEach(card=>{
  const open=card.querySelector(".video-expand");
  const iframe=card.querySelector("iframe");
  open?.addEventListener("click",()=>{
    if(!videoModal||!videoModalScreen||!iframe)return;
    const clone=iframe.cloneNode(true);
    clone.removeAttribute("loading");
    clone.style.width="100%";clone.style.height="100%";
    videoModalScreen.innerHTML="";videoModalScreen.appendChild(clone);
    videoModal.classList.add("open");videoModal.setAttribute("aria-hidden","false");document.body.classList.add("video-modal-open");
  });
});
videoModal?.querySelector(".video-modal-close")?.addEventListener("click",closeVideo);
videoModal?.querySelector("[data-close-video]")?.addEventListener("click",closeVideo);
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeVideo();});
