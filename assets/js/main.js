emailjs.init('ODcQTFUkQ1IRCOrT8')
document.querySelector(".btn--menu").addEventListener('click', function() {
    document.querySelector(".navbar__menu").classList.toggle("show--menu");
})

document.querySelector(".btn--close").addEventListener('click', function() {
    document.querySelector(".navbar__menu").classList.toggle("show--menu");
})

document.querySelector(".loa").style.display = "none";

// document.querySelector(".btn--dark").addEventListener('click', function() {
//     document.documentElement.classList.toggle('dark')
//     const i = document.querySelector("#dark");
//     if (document.documentElement.classList.contains('dark')) {
//         // localStorage.setItem('dark-mode','true')
//         i.classList.add('fa-sun')
//         i.classList.remove('fa-moon')
//     }else{
//         // localStorage.setItem('dark-mode','false')
//         i.classList.remove('fa-sun')
//         i.classList.add('fa-moon')
//     }
// })



const typed = new Typed('#text-animated', {
    strings: ['<span>Frontend</span>', '<span>Backend</span>','<span>FullStack</span>'],
    typeSpeed: 75,
    startDelay: 500,
    backSpeed: 75,
    smartBackspace: true,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor:true,
    cursorChar:'|',
    contentType: 'html'
  });
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/js/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

  document.getElementById('formulario')
  .addEventListener('submit', function(event) {
    event.preventDefault();
 
    //btn.value = 'Sending...';
    document.querySelector(".loa").style.display = "flex";

    const serviceID = 'default_service';
    const templateID = 'template_5xuhz4q';
 
    emailjs.sendForm(serviceID, templateID, this)
     .then(() => {
       //btn.value = 'Send Email';
       document.querySelector(".loa").style.display = "none";
       Toastify({
        text: "Send email. I will contact you soon!",
        duration: 3000
        }).showToast();
       clearForm();
     }, (err) => {
       //btn.value = 'Send Email';
       Toastify({
        text: err,
        duration: 3000
        }).showToast();
     });
 });

 function clearForm(){
    document.querySelector("#email_name").value = "";
    document.querySelector("#email_email").value = "";
    document.querySelector("#email_subject").value = "";
    document.querySelector("#email_message").value = "";
 }