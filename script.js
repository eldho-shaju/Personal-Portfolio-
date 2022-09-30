/*--To enable tab switch in about section--*/

let tabtitles = document.getElementsByClassName('tab-title');
let tabcontents = document.getElementsByClassName('tab-contents');

function openTab(tabs){
    for(title of tabtitles){
        title.classList.remove('active-tab')
    }
    for(content of tabcontents){
        content.classList.remove('active-content');
    }
    window.event.target.classList.add('active-tab');
    document.getElementById(tabs).classList.add('active-content');
}

/*--Toggle FAQ drop down--*/

let faq = document.getElementsByClassName('content-box');

for(let i=0; i < faq.length; i++){
    faq[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
}

/*--Toggle menu on navbar--*/
/*--To prevent scrolling when menu is open--*/

let closeIcon = document.getElementById('close')
let menuIcon = document.getElementById('open')
let menu = document.getElementById('menu');
let body = document.getElementById("body");

menuIcon.addEventListener('click', function openMenu(){
    menu.classList.toggle('active');
    body.classList.add('disable-scroll');
})

closeIcon.addEventListener('click', function closeMenu(){
    menu.classList.remove('active');
    body.classList.remove("disable-scroll");
})
