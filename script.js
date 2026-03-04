const root = document.documentElement;
const themeBtn = document.getElementById("themeBtn");

function setTheme(t){
  if(t === "light"){
    root.setAttribute("data-theme","light");
    themeBtn.textContent = "☀️";
  }else{
    root.removeAttribute("data-theme");
    themeBtn.textContent = "🌙";
  }
  localStorage.setItem("theme", t);
}

(function init(){
  document.getElementById("year").textContent = new Date().getFullYear();
  const saved = localStorage.getItem("theme");
  if(saved) setTheme(saved);
})();

themeBtn.addEventListener("click", () => {
  const isLight = root.getAttribute("data-theme") === "light";
  setTheme(isLight ? "dark" : "light");
});

function sendMailto(e){
  e.preventDefault();
  const f = e.target;
  const name = encodeURIComponent(f.name.value.trim());
  const email = encodeURIComponent(f.email.value.trim());
  const msg = encodeURIComponent(f.message.value.trim());

  const subject = encodeURIComponent(`Contact Portfolio — ${decodeURIComponent(name)}`);
  const body = encodeURIComponent(`Nom: ${decodeURIComponent(name)}\nEmail: ${decodeURIComponent(email)}\n\nMessage:\n${decodeURIComponent(msg)}`);

  window.location.href = `mailto:ralitera.toky7@gmail.com?subject=${subject}&body=${body}`;
  return false;
}
window.sendMailto = sendMailto;