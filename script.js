function locomotiveAndGsap(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}


function loaderAnimation(){
    

const tl = gsap.timeline();

tl.from(".line h1",{
    y:150,
    stagger:0.3,
    delay:1
})

tl.from(".line-part1,.line h2",{
    opacity:0,
    onStart:function(){
        
var h5timer = document.querySelector(".line-part1 h5");

var grow = 0;
setInterval(function(){
    if(grow < 100){
       h5timer.innerHTML = grow++;
    }
    else{
        h5timer.innerHTML = grow
    }
    

},33)

    }

})
tl.to(".line h2",{
    animationName:"anime",
    opacity:1
})
tl.to(".loader",{
    opacity:0,
    duration:0.2,
    delay:4,
})

tl.from(".page1",{
    delay:0.2,
    y:1200,
    opacity:0,
    ease:Power4,
    duration:0.5
})
tl.to(".loader",{
    display:"none",
})
tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero3 h3,#hero4 h1",{
    y:140,
    stagger:0.2,

})
tl.from(".video-container",{
    opacity:0,
})
tl.from(".nav",{
    opacity:0,
    delay:.1
})



 function splitTextAndAdd(element,addto,){
    let heading = element;
    let content = heading.textContent;
    let splitedHeading = content.split("");
    
    var cullter2 = "";
    splitedHeading.forEach(function(elem){
        cullter2 += `<span>${elem}</span>`
        addto.innerHTML = cullter2
    })
 }
 
 let elem1 = document.querySelector(".heading-1")
 let elem2 = document.querySelector(".heading-2");

 splitTextAndAdd(elem2,elem2);
 splitTextAndAdd(elem1,elem1);

 tl.from(".page3 #line-1",{
    width:0,
 duration:1,
 scrollTrigger:{
     trigger:".page3 #line-1",
     scroller:".main",
     start:"top 60%",
     end:"top 50%",
     scrub:5
 }
})


tl.from(".heading-1 span",{
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:".heading-1 span",
        scroller:".main",
        start:"top 40%",
        end:"top 50%",
        scrub:5
    }
})

tl.from(".page4 #line-2",{
    width:0,
 duration:1,
 scrollTrigger:{
     trigger:".page4 #line-2",
     scroller:".main",
     start:"top 60%",
     end:"top 50%",
     scrub:5
 }
})


tl.from(".heading-2 span",{
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:".heading-2 span",
        scroller:".main",
        start:"top 40%",
        end:"top 50%",
        scrub:5
    }
})
tl.from(".page4 .para-1",{
    opacity:0,
    duration:2,
    stagger:0.4,
    scrollTrigger:{
          trigger:".page4 .para-1",
          scroller:".main",
          start: "top 50%",
          end:"top 20%",
          scrub:3,
    }
})



}

function SheryAnimation(){
    Shery.makeMagnet(".nav-part-2 h4", {
      
    });
    Shery.imageEffect(".inside-img-div",{
        style:5,
        
       config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272695760684946},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.99,"range":[0,10]},"metaball":{"value":0.66,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        gooey:true,
    })
    Shery.mouseFollower({
        //Parameters are optional.
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 0.8,
      });

      let videoContainer = document.querySelector(".video-container");
      videoContainer.addEventListener("mouseenter",function(){

    gsap.to(".mousefollower",{
         opacity:0,
         scale:1,
    })
              videoContainer.addEventListener("mousemove",function(e){

         gsap.to(".video-cursor",{
            left:e.x - 440,
            y:e.y - 200,
         })
              })
      })

      videoContainer.addEventListener("mouseleave",function(){

        gsap.to(".mousefollower",{
            opacity:1,
            scale:2,
        })


        gsap.to(".video-cursor",{
            top: "-15%",
            left: "70%",
         })

      })
      let video = document.querySelector(".video-container video");

       var flag = 0;
      videoContainer.addEventListener("click",function(){
 if(flag == 0){

    video.play();
    video.style.opacity = 1;
       document.querySelector(".video-cursor").innerHTML = `<i class="ri-pause-fill"></i>`;
    gsap.to(".video-cursor",{
       scale:0.5,
     })
     flag = 1

 }else{
    video.pause();
    video.style.opacity = 0;
       document.querySelector(".video-cursor").innerHTML = `<i class="ri-play-fill"></i>`;
    gsap.to(".video-cursor",{
       scale:1,
     })
     flag = 0
 }
        
      })
      
}


document.addEventListener("mousemove",function(e){
    gsap.to("#flag",{
          x:e.x,
           y:e.y,
    })
})

document.querySelector("#hero3").addEventListener("mouseenter",function(){

gsap.to("#flag",{
    opacity:1,
})

})

document.querySelector("#hero3").addEventListener("mouseleave",function(){

    gsap.to("#flag",{
        opacity:0,
    })
    
    })

    
let heading = document.querySelector(".footer-heading").textContent;
let splitedHeading = heading.split("");

var cullter = "";
splitedHeading.forEach(function(elem){
    cullter += `<span>${elem}</span>`
    document.querySelector(".footer-heading").innerHTML = cullter
})

document.querySelector(".footer-heading").addEventListener("mouseover",function(){
    gsap.to(".footer-heading span",{
        fontFamily: "silk serif" ,
        fontSize:"7.5vw",
        stagger:0.1,
        duration:0.5,
          ease: "elastic.out(1, 0.3)"
    })
})

document.querySelector(".footer-heading").addEventListener("mouseout",function(){
    gsap.to(".footer-heading span",{
        fontFamily: "Plain Light" ,
        fontSize:"7.5vw",
        stagger:0.1,
        duration:0.5,
        
    })
})



    
SheryAnimation()
locomotiveAndGsap();
loaderAnimation(); 
