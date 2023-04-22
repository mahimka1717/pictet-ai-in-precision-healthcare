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
			
			this.sources();
			this.parallax();
			this.graph0();
			this.graph1();
			this.initQuotes();
			this.inview();

			setTimeout(function(){
				const root = document.getElementById("ag-infographic");
				if(root)
					root.classList.add("ag-inview");
				
				ScrollTrigger.refresh(); 

			}, 200);

        },

		initQuotes: function(){

			let quotesoff = function(line, svg, autor){
				gsap.killTweensOf(line, svg, autor);
				gsap.set(line, {transformOrigin: 'center center', scaleX: 0});
				gsap.set(svg, {transformOrigin: 'center center', scale: 0});
				gsap.set(autor, {transformOrigin: 'center center', y: -10, opacity: 0});
			}

			let quoteson = function(line, svg, autor){
				gsap.killTweensOf(line, svg, autor);
				gsap.to(line, {scaleX: 1, ease: 'power0', duration: 0.5})
				gsap.to(svg, {scale: 1, ease: 'power1', duration: 0.25})
				gsap.to(autor, {y: 0, opacity: 1, ease: 'power1', duration: 0.5, delay: 0.2})
			}

			const quoteElements = document.querySelectorAll('[data-anim="quote"]');
			quoteElements.forEach((quoteElement) => {
				const line = quoteElement.querySelectorAll('[data-anim="quote-line"]');
				const svg = quoteElement.querySelector('[data-anim="quote-icon"]');
				const autor = quoteElement.querySelector("figcaption");
				quotesoff(line, svg, autor);
				ScrollTrigger.create({
					trigger: svg, 
					start: ()=>{return "top+=100 bottom"},
					end: ()=>{return 'center top'},
					onEnter: ()=>{ quoteson(line, svg, autor) }
				});
				ScrollTrigger.create({
					trigger: svg,
					start: ()=>{return "top-=100 bottom"},
					end: ()=>{return 'top-=100 top'},
					onLeaveBack: ()=>{ quotesoff(line, svg, autor) }
				});
			});

		},

		graph0: function(){
			let off = function(svg, leg, cpath, pieElement){
				if(pieElement.getAttribute('data-testid')!=="0"){
					pieElement.setAttribute("data-testid", "0");

					gsap.killTweensOf(svg, leg);
					cpath.setAttribute("d", ""); 				
					gsap.set(leg, {transformOrigin: 'center center', scale: 0.8, opacity: 0});
				}
			}

			let on = function(svg, leg, cpath, pieElement){

				if(pieElement.getAttribute('data-testid')!=="1"){
					pieElement.setAttribute("data-testid", "1");

					gsap.killTweensOf(svg, leg);
					let RAD  = Math.PI / 180;
					let PI_2 = Math.PI / 2;
					let arc = { start: 0, end: 0, cx: 150, cy: 150, r: 150 };

					function updatePath() {
						cpath.setAttribute("d", getPath(arc.cx, arc.cy, arc.r, arc.start, arc.end)); 
					}
					
					function getPath(cx, cy, r, a1, a2) {
						let delta = a2 - a1;
						if (delta === 360) {	
							return "M " + (cx - r) + " " + cy + " a " + r + " " + r + " 0 1 0 " + r * 2 + " 0 a " + r + " " + r + " 0 1 0 " + -r * 2 + " 0z"; 
						}
						var largeArc = delta > 180 ? 1 : 0;
						a1 = a1 * RAD - PI_2;
						a2 = a2 * RAD - PI_2;
						var x1 = cx + r * Math.cos(a2);   
						var y1 = cy + r * Math.sin(a2);
						var x2 = cx + r * Math.cos(a1); 
						var y2 = cy + r * Math.sin(a1);
							
						return "M " + x1 + " " + y1 + " A " + r + " " + r + " 0 " + largeArc + " 0 " + x2 + " " + y2 + " L " + cx + " " + cy + "z";
					}


					updatePath();

					gsap.to(arc, { end: 360, duration: 1.5, ease: "power1.out",  onUpdate: updatePath });
					gsap.to(leg, {scale: 1, opacity: 1, ease: 'power1.out', duration: 0.5, stagger: 0.3});

				}
			}

			const pieElements = document.querySelectorAll('[data-anim="pie"]');
			pieElements.forEach((pieElement, id) => {
				const svg = pieElement.querySelector("div > svg");
				const leg = pieElement.querySelectorAll('[data-anim="legend"]');
				const cpath = document.querySelector(`#ag-arc${id}`);
				off(svg, leg, cpath, pieElement);
				ScrollTrigger.create({
					trigger: svg, 
					start: ()=>{return "top+=100 bottom"},
					end: ()=>{return 'center top'},
					onEnter: ()=>{ on(svg, leg, cpath, pieElement) }
				});
				ScrollTrigger.create({
					trigger: svg,
					start: ()=>{return "top-=100 bottom"},
					end: ()=>{return 'top-=100 top'},
					onLeaveBack: ()=>{ off(svg, leg, cpath, pieElement) }
				});
			});
		},

		graph1: function(){
			const svg = document.querySelector("#ag-field0");
			const bar = document.querySelectorAll("#ag-field0 > div > div");
			const off = function(){
				gsap.killTweensOf(bar);
				gsap.set(bar, {scaleY: 0, transformOrigin: 'center bottom'});
				// gsap.set(bar, { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' });
			
			}
			const on = function(){
				gsap.killTweensOf(bar);
				gsap.to(bar, {scaleY: 1, ease: 'power1.out', duration: 0.75, stagger: 0.2, delay: 0.2})
				// gsap.to(bar, {clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: 'power1.in', duration: 1.75, stagger: 0.2, delay: 0.2})
			}

			off();

			ScrollTrigger.create({
				trigger: svg, 
				start: ()=>{return "center bottom"},
				end: ()=>{return 'bottom top'},
				onEnter: ()=>{ on() }
			});
			ScrollTrigger.create({
				trigger: svg,
				start: ()=>{return "top bottom"},
				end: ()=>{return 'bottom top'},
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