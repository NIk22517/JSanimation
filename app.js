const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to('.text',1 ,{y:'0%', stagger:0.25});
tl.to('.slider', 1.5, {y:'-100%', delay:0.5});
tl.to('.intro', 1,{y:"-100%"},'-=1');
tl.fromTo('nav',{opacity:0},{opacity:1, duration:1});
tl.fromTo('.big-text',{opacity:0},{opacity:1, duration:1},'-=1');
