var logo = document.getElementById('logo');

logo.addEventListener('mouseover', ()=>{
    let text = document.getElementById('footer-text');
    logo.style.marginLeft = "200px";
});

logo.addEventListener('mouseout', ()=>{
    let text = document.getElementById('footer-text');
    logo.style.marginLeft = "0px";
});