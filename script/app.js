var tl = gsap.timeline();

tl.from(".header, .intro h5, .intro h2, .intro .btngroup", {
    // opacity: 0,
    scaleY: 0,
    duration: 1,
    delay: .5,
    stagger: .4
});

gsap.from(".servbox", {
    opacity: 0,
    duration: 3,
    stagger: .4,
    scrollTrigger: {
        trigger: ".servbox",
        scroller: "body",
        start: "top 60%",
        end: "bottom 50%",
        scrub: 2
    }
});

gsap.from(".p_box.odd", {
    x: -100,
    rotate: 10,
    duration: 3,
    opacity: .6,
    stagger: .4,
    scrollTrigger: {
        trigger: ".p_box.odd",
        scroller: "body",
        start: "top 60%",
        end: "bottom 50%",
        scrub: 2
    }
});

gsap.from(".p_box.even", {
    x: 100,
    opacity: .6,
    rotate: -10,
    duration: 3,
    stagger: .4,
    scrollTrigger: {
        trigger: ".p_box.even",
        scroller: "body",
        start: "top 60%",
        end: "bottom 50%",
        scrub: 2
    }
});
