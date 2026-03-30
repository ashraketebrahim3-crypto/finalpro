// // mobile menu
document.getElementById("menuBtn").onclick = () => {
  document.getElementById("navLinks").classList.toggle("show");
};

// reveal on scroll
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// form
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Message sent successfully!");
});

let form =document.getElementById("form")
let p =document.getElementById("p")
form.addEventListener("submit" , function  valid(e){
e.preventDefault()
let name =  document.getElementById("name"). value
let email =  document.getElementById("email"). value
let password =  document.getElementById("password"). value
let massage = document.getElementById("massage"). value

 if(name =="" || email=="" ||massage==""){
    p.innerHTML="please enter all feiles"
    return;
 }
if (email.indexOf("@") ==-1||email.indexOf(".") ==-1){
    p.innerHTML="plese enter correct emile"
    return;
}
})
p.innerHTML="done"


const cards = document.querySelectorAll('.contact-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.add('active');

    setTimeout(() => {
      card.classList.remove('active');
    }, 300);
  });
});


















