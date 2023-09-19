var tl = gsap.timeline();

tl.from(".header, .intro h5, .intro h2, .intro .btngroup", {
    // opacity: 0,
    scaleY: 0,
    duration: 1,
    delay: .5,
    stagger: .4
});