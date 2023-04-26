import Rellax from "rellax";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

let Page

export function initPage() {

    Page = {
        init: function(){
			
			// this.sources();
			// this.parallax();
			this.graph0();
			this.graph1();
			this.graph2();
			this.graph3();
			this.graph4();
		
			this.inview();

			setTimeout(function(){
				const root = document.getElementById("ag-infographic");
				if(root)
					root.classList.add("ag-inview");
				
				ScrollTrigger.refresh(); 

			}, 200);

        },

		graph0: function(){
			const g = document.querySelector(`[data-ag="g0"]`);
			const name = document.querySelectorAll(`[data-ag="g0name"]`);
			const bar = document.querySelectorAll(`[data-ag="g0bar"]`);
			const val = document.querySelectorAll(`[data-ag="g0val"]`);

			const legend = document.querySelector(`[data-ag="g0legend"]`);
			const svg = legend.querySelector(`svg`);
			const span = legend.querySelector(`span`);
			const p = legend.querySelector(`p`);



			const off = function(){
				gsap.killTweensOf([name, bar, val, svg, span, p]);
				gsap.set(name, {y: 10, opacity: 0});
				gsap.set(bar, {scaleX: 0, transformOrigin: 'left center'});
				gsap.set(val, {x: 10, opacity: 0});
				
				gsap.set(svg, {y: 0, opacity: 0, clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"});
				gsap.set(span, {scale: 0, opacity: 0, transformOrigin: 'center center'});
				gsap.set(p, {opacity: 0});

			}
			const on = function(){
				gsap.killTweensOf([name, bar, val, svg, span, p]);
				gsap.to(name, {y: 0, opacity: 1,  ease: 'power1.out', duration: 1, stagger: 0.1, delay: 0})
				gsap.to(bar, {scaleX: 1, ease: 'power1.out', duration: 1, stagger: 0.1, delay: 0})
				gsap.to(val, {x: 0, opacity: 1,  ease: 'power1.out', duration: 1, stagger: 0.1, delay: 0})
				
				gsap.to(span, {scale: 1, opacity: 1,  ease: 'power1.out', duration: 0.5, delay: 0.5})
				gsap.to(svg, {y: 0, opacity: 1,  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", ease: 'power1.out', duration: 0.5, delay: 0.6})
				gsap.to(p, {opacity: 1,  ease: 'power1.out', duration: 0.5, delay: 0.6})


			}

			off();

			ScrollTrigger.create({
				trigger: g, 
				start: ()=>{return "top 90%"},
				onEnter: ()=>{ on() }
			});
			ScrollTrigger.create({
				trigger: g,
				start: ()=>{return "top bottom"},
				onLeaveBack: ()=>{ off() }
			});
		},

		graph1: function(){
			const g = document.querySelector(`[data-ag="g1"]`);
			const bar = document.querySelectorAll(`[data-ag="g1bar"]`);
			const val = document.querySelectorAll(`[data-ag="g1val"]`);
			const year = document.querySelectorAll(`[data-ag="g1year"]`);
			const arrow = g.querySelector(`svg`);

			const off = function(){
				gsap.killTweensOf([bar, val, year, arrow]);
				gsap.set(bar, {scaleY: 0, transformOrigin: 'center bottom'});
				gsap.set(val, {opacity: 0, y: 10});
				gsap.set(year, {opacity: 0, y: 0});
				gsap.set(arrow, {clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"});
			}
			const on = function(){
				gsap.killTweensOf([bar, val, year, arrow]);
				gsap.to(bar, {scaleY: 1, ease: 'power1.out', duration: 0.5, stagger: 0.1, delay: 0})
				gsap.to(val, {opacity: 1, y: 0, ease: 'power1.out', duration: 0.5, stagger: 0.1, delay: 0})
				gsap.to(year, {opacity: 1, y: 0, ease: 'power1.out', duration: 0.5, stagger: 0.1, delay: 0})
				gsap.to(arrow, {clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", ease: 'power1.out', duration: 2.5, delay: 0})
			}

			off();

			ScrollTrigger.create({
				trigger: g, 
				start: ()=>{return "top 90%"},
				onEnter: ()=>{ on() }
			});
			ScrollTrigger.create({
				trigger: g,
				start: ()=>{return "top bottom"},
				onLeaveBack: ()=>{ off() }
			});
		},

		graph2: function(){
			const g = document.querySelector(`[data-ag="g2"]`);
			const bar = document.querySelectorAll(`[data-ag="g2bar"]`);
			const val = document.querySelectorAll(`[data-ag="g2val"]`);
			const icon = document.querySelectorAll(`[data-ag="g2icon"]`);
			const item = document.querySelectorAll(`[data-ag="g2item"]`);

			const off = function(){
				gsap.killTweensOf([bar, val, icon]);
				gsap.set(bar, {scaleX: 0, transformOrigin: 'left center'});
				gsap.set(val, {opacity: 0, x: -100});
				gsap.set(icon, {opacity: 0, scale: 0});
				gsap.set(item, {opacity: 0});
			}
			const on = function(){
				gsap.killTweensOf([bar, val, icon]);
				gsap.to(bar, {scaleX: 1, ease: 'power1.out', duration: 1, stagger: 0.1, delay: 0})
				gsap.to(val, {opacity: 1, x: 0, ease: 'power1.out', duration: 1, stagger: 0.1, delay: 0})
				gsap.to(icon, {opacity: 1, scale: 1, ease: 'power1.out', duration: 0.5, stagger: 0.1, delay: 0})
				gsap.to(item, {opacity: 1, ease: 'power1.out', duration: 0.5, stagger: 0.1, delay: 0})
			}

			off();

			ScrollTrigger.create({
				trigger: g, 
				start: ()=>{return "top 90%"},
				onEnter: ()=>{ on() }
			});
			ScrollTrigger.create({
				trigger: g,
				start: ()=>{return "top bottom"},
				onLeaveBack: ()=>{ off() }
			});

		},

		graph3: function(){
			const g = document.querySelector(`[data-ag="g3"]`);
			
			const box = document.querySelector(`[data-ag="g3box"]`);
			const mask = document.querySelectorAll(`[data-ag="g3mask"]`);
			const color = document.querySelectorAll(`[data-ag="g3color"]`);
			const label = document.querySelectorAll(`[data-ag="g3label"]`);
			const info = document.querySelectorAll(`[data-ag="g3info"]`);

			const off = function(){
				gsap.killTweensOf([box, mask, color, label, info]);
				gsap.set(box, {opacity: 0});
				gsap.set(info, {opacity: 0, x: 10});
				gsap.set(mask, {scaleX: 0, transformOrigin: 'left center'});
				gsap.set(color, {opacity: 0, scale: 0, transformOrigin: 'center center'});
				gsap.set(label, {opacity: 0, x: -10});
			}
			const on = function(){
				gsap.killTweensOf([box, mask, color, label, info]);
				gsap.to(box, {opacity: 1, ease: 'power1.out', duration: 0.75, delay: 0})
				gsap.to(info, {x: 0, opacity: 1, ease: 'power1.out', duration: 0.5, stagger: 0.1, delay: 0.2})

				gsap.to(mask, {scaleX: 1, ease: 'power1.out', duration: 1, stagger: 0.1, delay: 0.2})
				gsap.to(color, {scale: 1, opacity: 1, ease: 'power1.out', duration: 0.5, stagger: 0.1, delay: 0.2})
				gsap.to(label, {x: 0, opacity: 1, ease: 'power1.out', duration: 0.5, stagger: 0.1, delay: 0.2})
			}

			off();

			ScrollTrigger.create({
				trigger: g, 
				start: ()=>{return "top 90%"},
				onEnter: ()=>{ on() }
			});
			ScrollTrigger.create({
				trigger: g,
				start: ()=>{return "top bottom"},
				onLeaveBack: ()=>{ off() }
			});
		},

		graph4: function(){
			const g = document.querySelector(`[data-ag="g4"]`);
			
			const color = document.querySelectorAll(`[data-ag="g4color"]`);
			const val = document.querySelectorAll(`[data-ag="g4val"]`);
			const desc = document.querySelectorAll(`[data-ag="g4desc"]`);
			
			const g4pie0 = document.querySelectorAll(`[data-ag="g4pie0"]`);
			const g4pie1 = document.querySelectorAll(`[data-ag="g4pie1"]`);
			const g4pie2 = document.querySelectorAll(`[data-ag="g4pie2"]`);
			
			const g4pietext0 = document.querySelectorAll(`[data-ag="g4pietext0"]`);
			const g4pietext1 = document.querySelectorAll(`[data-ag="g4pietext1"]`);

			const off = function(){
				gsap.killTweensOf([color,val,desc,g4pie0,g4pie1,g4pie2,g4pietext0,g4pietext1]);

				gsap.set(color, {opacity: 0, scale: 0, transformOrigin: 'center center'});
				gsap.set(val, {opacity: 0, x: -10});
				gsap.set(desc, {opacity: 0, y: 0});

				gsap.set(g4pie0, {opacity: 0, scale: 0, transformOrigin: 'center center'});
				gsap.set(g4pie1, {opacity: 0, scale: 0, transformOrigin: 'center center'});
				gsap.set(g4pie2, {opacity: 0, scale: 0, transformOrigin: 'center center'});

				gsap.set(g4pietext0, {opacity: 0, x: 10});
				gsap.set(g4pietext1, {opacity: 0, y: 10});
			}
			const on = function(){
				gsap.killTweensOf([color,val,desc,g4pie0,g4pie1,g4pie2,g4pietext0,g4pietext1]);
	
				gsap.to(color, {scale: 1, opacity: 1, ease: 'power1.out', duration: 0.5, stagger: 0.5, delay: 0})
				gsap.to(val, {x: 0, opacity: 1, ease: 'power1.out', duration: 0.5, stagger: 0.5, delay: 0})
				gsap.to(desc, {opacity: 1, y: 0, ease: 'power1.out', duration: 0.5, stagger: 0.5, delay: 0.2})
				
				gsap.to(g4pie0, {opacity: 1, scale: 1, ease: 'power1.out', duration: 0.5, delay: 0})
				gsap.to(g4pie2, {opacity: 1, scale: 1, ease: 'power1.out', duration: 0.5, delay: 0.5})
				gsap.to(g4pie1, {opacity: 1, scale: 1, ease: 'power1.out', duration: 0.5, delay: 0.75})
				
				gsap.to(g4pietext0, {opacity: 1, x: 0, ease: 'power1.out', duration: 0.5, delay: 1.0})
				gsap.to(g4pietext1, {opacity: 1, y: 0, ease: 'power1.out', duration: 0.5, delay: 1.2})
			}

			off();

			ScrollTrigger.create({
				trigger: g, 
				start: ()=>{return "top 90%"},
				onEnter: ()=>{ on() }
			});
			ScrollTrigger.create({
				trigger: g,
				start: ()=>{return "top bottom"},
				onLeaveBack: ()=>{ off() }
			});
		},


		parallax: function () {
			let rellax = new Rellax('.rellax', {
				center: true,
				breakpoints: [640, 768, 1024]	
				// xs (xs) < 640 <= sm (mobile) < 768 <= md (tablet) < 1024 <= lg (desktop)
			});
		},

		sources: function(){
			const supElements = document.querySelectorAll("#ag-infographic sup");
			supElements.forEach((supElement) => {
			  supElement.addEventListener("click", (e) => {
				const id = parseFloat(e.target.innerHTML) - 1;
				const tag = document.querySelector(`#ag-sources li[data-id="${id}"]`);
				gsap.to(window, {
					duration: 0.5, 
					scrollTo: {y: tag, autoKill: true, offsetY: 200},
					onUpdate: () => {}
				});
			  });
			});
		},

        inview: function(){

			const agFromElements = document.querySelectorAll("[class*='ag-from']");
			agFromElements.forEach((agFromElement) => {
				ScrollTrigger.create({
				trigger: agFromElement, 
				id: "inview",
				start: "top bottom",
				onEnter: function() {
					if (!agFromElement.classList.contains('ag-inview')) {
						agFromElement.classList.add('ag-inview');
					}
				}
				});
			});
            
			const agFromFade2Elements = document.querySelectorAll("[class*='ag-fromfade2']");
			agFromFade2Elements.forEach((agFromFade2Element) => {
			  ScrollTrigger.create({
				trigger: agFromFade2Element, 
				id: "inview",
				start: "top bottom",
				onEnter: function() {
				  if (!agFromFade2Element.classList.contains('ag-inview')) {
					agFromFade2Element.classList.add('ag-inview');
				  }
				},
				onLeaveBack: function() {
				  if (agFromFade2Element.classList.contains('ag-inview')) {
					agFromFade2Element.classList.remove('ag-inview');
				  }
				}
			  });
			});

        }
    }

    Page.init();

}