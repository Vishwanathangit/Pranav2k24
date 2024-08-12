const home=document.getElementById("home");
const event=document.getElementById("eve");
const about=document.getElementById("abt");
const work=document.getElementById("work");
const inno=document.getElementById("inno");
const con=document.getElementById("con");
const color1= "url(high.png)";
home.onclick= function(){
  home.style.backgroundImage= color1;
  event.style.backgroundImage= "none";
  about.style.backgroundImage= "none";
  work.style.backgroundImage= "none";
  inno.style.backgroundImage= "none";
  con.style.backgroundImage= "none";
}

event.onclick= function(){
  home.style.backgroundImage="none";
  event.style.backgroundImage= color1;
  about.style.backgroundImage= "none";
  work.style.backgroundImage= "none";
  inno.style.backgroundImage= "none";
  con.style.backgroundImage= "none";


}

about.onclick= function(){
  home.style.backgroundImage="none";
  event.style.backgroundImage= "none";
  about.style.backgroundImage= color1;
  work.style.backgroundImage= "none";
  inno.style.backgroundImage= "none";
  con.style.backgroundImage= "none";
}

work.onclick= function(){
  home.style.backgroundImage="none";
  event.style.backgroundImage= "none";
  about.style.backgroundImage= "none";
  work.style.backgroundImage= color1;
  inno.style.backgroundImage= "none";
  con.style.backgroundImage= "none";
}

inno.onclick= function(){
  home.style.backgroundImage="none";
  event.style.backgroundImage= "none";
  about.style.backgroundImage= "none";
  work.style.backgroundImage= "none";
  inno.style.backgroundImage= color1;
  con.style.backgroundImage= "none";
}

con.onclick= function(){
  home.style.backgroundImage="none";
  event.style.backgroundImage= "none";
  about.style.backgroundImage= "none";
  work.style.backgroundImage= "none";
  inno.style.backgroundImage= "none";
  con.style.backgroundImage= color1;
}
/*--------huihuhi---------------*/
const home_color=document.getElementById("h_color");
const event_color=document.getElementById("e_color");
const about_color=document.getElementById("a_color");
const work_color=document.getElementById("w_color");
const inno_color=document.getElementById("i_color");
const con_color=document.getElementById("c_color");
home_color.onclick= function(){
  home_color.style.color= "azure";
  event_color.style.color= "#3B2E20";
  about_color.style.color= "#3B2E20";
  work_color.style.color= "#3B2E20";
  inno_color.style.color= "#3B2E20";
  con_color.style.color= "#3B2E20";
}

event_color.onclick= function(){
  home_color.style.color="#3B2E20";
  event_color.style.color= "azure";
  about_color.style.color= "#3B2E20";
  work_color.style.color= "#3B2E20";
  inno_color.style.color= "#3B2E20";
  con_color.style.color= "#3B2E20";

  
}

about_color.onclick= function(){
  home_color.style.color="#3B2E20";
  event_color.style.color= "#3B2E20";
  about_color.style.color= "azure";
  work_color.style.color= "#3B2E20";
  inno_color.style.color= "#3B2E20";
  con_color.style.color= "#3B2E20";
}

work_color.onclick= function(){
  home_color.style.color="#3B2E20";
  event_color.style.color= "#3B2E20";
  about_color.style.color= "#3B2E20";
  work_color.style.color= "azure";
  inno_color.style.color= "#3B2E20";
  con_color.style.color= "#3B2E20";
}

inno_color.onclick= function(){
  home_color.style.color="#3B2E20";
  event_color.style.color= "#3B2E20";
  about_color.style.color= "#3B2E20";
  work_color.style.color= "#3B2E20";
  inno_color.style.color= "azure";
  con_color.style.color= "#3B2E20";
}

con_color.onclick= function(){
  home_color.style.color="#3B2E20";
  event_color.style.color= "#3B2E20";
  about_color.style.color= "#3B2E20";
  work_color.style.color= "#3B2E20";
  inno_color.style.color= "#3B2E20";
  con_color.style.color= "azure";
}

/*------------uhiuhiuh------------*/
/*------------transition------------*/
const observer= new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
    else
    {
      entry.target.classList.remove('show');
    }
    });
 }); 

 const hiddenelements =document.querySelectorAll('.hidden');
 hiddenelements.forEach((el) => observer.observe(el));


 /*--------- go_to_top----------*/
 // Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 190|| document.documentElement.scrollTop > 190) {
    mybutton.style.width = "70px" ;
    mybutton.style.height = "70px" ;
  } else {
    mybutton.style.width = "0%" ;
    mybutton.style.height = "0%" ;
  }
}

function topFunction() {
    document.body.scrollTop =0;
    document.documentElement.scrollTop =0;
}
