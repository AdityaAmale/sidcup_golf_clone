

var crsr = document.querySelector(".cursor")
var crsrblur = document.querySelector(".cursor-blur")
document.addEventListener("mousemove", function (det) {
    crsr.style.left = det.x +"px"
    crsr.style.top = det.y + "px"
    crsrblur.style.left = det.x - 150 + "px"
    crsrblur.style.top = det.y - 150 + "px"

})
var h4all = document.querySelectorAll(".nav h4")
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 3
        crsr.style.border = "0.5px solid white"
        crsr.style.backgroundColor = "transparent"
    })

    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1
        crsr.style.border = "0px solid greenyellow"
        crsr.style.backgroundColor = "greenyellow"
    })
})
var arro=document.querySelector(".arrow")
gsap.from(".arrow",{
})

//     backgroundColor:"greenyellow",
//     height:"50px",
//     width:"50px",
//     color:"white",
//     duration:2,
    
    //  document.addEventListener("mouseenter",function(){
    //    arro.style.backgroundColor="greenyellow"
    //    arro.style.width="50px"
    //    arro.style.height="50px" 
    //    arro.style.color="white"
       
    // })
    // document.addEventListener("mouseleave",function(){
    //     arro.style.backgroundColor="transperant"
    //     arro.style.width="100px"
    //     arro.style.height="100px" 
    //     arro.style.color="white"
        
    //  })




gsap.to(".nav", {
    backgroundColor: "black",
    duration: 0.5,
    height: "120px",
    scrollTrigger: {
        trigger: ".nav",
        scroll: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})
gsap.to(".main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        start: "top -30%",
        end: "top -70%",
        scrub: 2
    }

})
gsap.from(".page3 img",".page3text",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 57%",
        scrub:3
    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:3
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:3
    }
})
gsap.from(".fourth h1",{
    y:50,
    scrollTrigger:{
        trigger:".fourth h1",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:3
    }
})


