const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function fp(){


    var tl = gsap.timeline();
    tl.from("#nav"  ,  {
        y:'-10',
        opacity:0,
        duration:1.5,
        ease: Expo.easeInOut
    })

    .to(".boundingelem",{
        y:0,
duration:2,
ease:Expo.easeInOut,
delay:-1,
stagger:.2

    })


   .from("#herofooter",{

    duration:1.2,
    ease:Expo. easeInOut ,
    y:-10,
    opacity:0,
    delay:-1

})

}



var timer;
function chpta(){

var xscale=1
var yscale=2

var prevx=0
var prevy=0


window.addEventListener("mousemove",function(dets){
clearTimeout(timer)

    xscale=gsap.utils.clamp(0.8,1.5,dets.clientX-prevx)
    yscale=gsap.utils.clamp(0.8,1.5,dets.clientX-prevy)
    prevx=dets.clientX
    prevy=dets.clientY

    minimousefollower(xscale,yscale)


    setTimeout(function(){

        timer=document.querySelector('#mini-circle').style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`

    },100)

})






}




function minimousefollower(xscale,yscale){

    window.addEventListener("mousemove",function(dets){
        document.querySelector('#mini-circle').style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale}, ${yscale} )`
    }
    
    
    )
}
minimousefollower()

fp()
chpta()


// document.querySelectorAll(".elem")
// .forEach(function(elem){
//     elem.addEventListener('mousemove',function(det){

//      gsap.to(elem.querySelector('.img'),{

//              opacity:1,
//             ease: Power1
//         })
 
//     })
//  })

// const elementsWorks = document.querySelectorAll(".item-work");
// const slidePicWorks = document.querySelector("#gallery-work");
// const slidePicsWorks = document.querySelector("#work-images");

// gsap.set(slidePicWorks, { autoAlpha: 0 });

// elementsWorks.forEach((element, index) => {
//   element.addEventListener("mouseenter", function () {
//     gsap.to(slidePicsWorks, {
//       marginTop: `-${280 * index}px`,
//       duration: 0.2,
//       ease: "power1",
//     });
//   });

//   element.addEventListener("mouseleave", function () {
//     gsap.to(element, { color: "initial", duration: 0.2, ease: "power1" });
//   });
// });

// window.addEventListener("mousemove", function (e) {
//   gsap.to(slidePicWorks, {
//     top: `${e.clientY}px`,
//     left: `${e.clientX}px`,
//     xPercent:-10,
//     yPercent:-20,
//     duration: 0.2,
//     ease: "power1",
//   });
// });

// document
//   .querySelector(".items-works")
//   .addEventListener("mouseenter", function () {
//     gsap.to(slidePicWorks, {
//       autoAlpha: 1,
//       duration: 0.2,
//       ease: "power1",
//     });
//   });

// document
//   .querySelector(".items-works")
//   .addEventListener("mouseleave", function () {
//     gsap.to(slidePicWorks, {
//       autoAlpha: 0,
//       duration: 0.2,
//       ease: "power1",
//     });
//   });



const items = document.querySelectorAll('.item')

items.forEach((el) => {
  const image = el.querySelector('img')
  
  el.addEventListener('mouseenter', (e) => {
    gsap.to(image, { autoAlpha: 1 })
  })
  
   el.addEventListener('mouseleave', (e) => {
    gsap.to(image, { autoAlpha: 0 })
  })
  
  el.addEventListener('mousemove', (e) => {
    gsap.set(image, { x: e.offsetX - 200 })
  })
})