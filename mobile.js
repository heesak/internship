var hamburger=document.querySelector(".hamburger-menu")
var mobile_link=document.querySelector(".mobile_link-holder")
var backdrop=document.querySelector (".backdrop")

function Addclass(){
    hamburger.classList.toggle('show')
    mobile_link.classList.toggle('showlist')
    backdrop.classList.toggle('showlist')
    
}