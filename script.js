var num = document.querySelector(".loader h1 span")

setTimeout(function(){
    document.querySelector(".loader").style.top = "-110%"
},2000)




var tl = gsap.timeline();

tl

    .from(".nav1",{
        y:-3000,
        // delay:-2,
       duration:3.5
    })
    .from(".horizontal1",{
        x:-3000,
       duration:1
    })
    .from(".vertical1",{
        y:-3000,
        // delay:-1,
       duration:.5
    })
    .from(".container1L",{
        x:3000,
       duration:1
    })
    .from(".container1R",{
        x:-3000,
       duration:1
    })


    let con6b=document.querySelector(".con6b")
    let con6bi=document.querySelector(".con6bi")
    
    con6b.addEventListener("mouseover",function(){
        con6bi.style.display="initial";
    })
    
    con6b.addEventListener("mouseleave",function(){
        con6bi.style.display="none"
    })
    
    let con6c=document.querySelector(".con6c")
    let con6ci=document.querySelector(".con6ci")
    
    con6c.addEventListener("mouseover",function(){
        con6ci.style.display="initial";
    })
    
    con6c.addEventListener("mouseleave",function(){
        con6ci.style.display="none"
    })
    
    
    let con6d=document.querySelector(".con6d")
    let con6di=document.querySelector(".con6di")
    
    con6d.addEventListener("mouseover",function(){
        con6di.style.display="initial";
    })
    
    con6d.addEventListener("mouseleave",function(){
        con6di.style.display="none"
    })

    let con6e=document.querySelector(".con6e")
    let con6ei=document.querySelector(".con6ei")
    
    con6e.addEventListener("mouseover",function(){
        con6ei.style.display="initial";
    })
    
    con6e.addEventListener("mouseleave",function(){
        con6ei.style.display="none"
    })

    let con6f=document.querySelector(".con6f")
    let con6fi=document.querySelector(".con6fi")
    
    con6f.addEventListener("mouseover",function(){
        con6fi.style.display="initial";
    })
    
    con6f.addEventListener("mouseleave",function(){
        con6fi.style.display="none"
    })



    let con6g=document.querySelector(".con6g")
    let con6gi=document.querySelector(".con6gi")
    
    con6g.addEventListener("mouseover",function(){
        con6gi.style.display="initial";
    })
    
    con6g.addEventListener("mouseleave",function(){
        con6gi.style.display="none"
    })

    let con6h=document.querySelector(".con6h")
    let con6hi=document.querySelector(".con6hi")
    
    con6h.addEventListener("mouseover",function(){
        con6hi.style.display="initial";
    })
    
    con6h.addEventListener("mouseleave",function(){
        con6hi.style.display="none"
    })

    let con6i=document.querySelector(".con6i")
    let con6ii=document.querySelector(".con6ii")
    
    con6i.addEventListener("mouseover",function(){
        con6ii.style.display="initial";
    })
    
    con6i.addEventListener("mouseleave",function(){
        con6ii.style.display="none"
    })

    let con6j=document.querySelector(".con6j")
    let con6ji=document.querySelector(".con6ji")
    
    con6j.addEventListener("mouseover",function(){
        con6ji.style.display="initial";
    })
    
    con6j.addEventListener("mouseleave",function(){
        con6ji.style.display="none"
    })
















const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});
