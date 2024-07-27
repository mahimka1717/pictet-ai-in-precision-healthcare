// import gsap from "./../utils/gsap/dist/gsap";
// import ScrollTrigger from "./../utils/gsap/dist/ScrollTrigger";
// import SplitText from "./../utils/gsap/dist/SplitText";
// import DrawSVGPlugin from "./../utils/gsap/dist/DrawSVGPlugin";


import { getSections } from '~/src/utils/index.js';


import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
import DrawSVGPlugin from "gsap/dist/DrawSVGPlugin";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import { get } from 'jquery';



gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(DrawSVGPlugin);
gsap.config({
	force3D: true,
	nullTargetWarn: false,
	// trialWarn: false,
});
let mm = gsap.matchMedia();

// const sections = [1,2,3,4,5,6,7]
const sections = getSections();

let Page

export function initPage() {

    Page = {
        init: function(){

			this.inview();

			document.fonts.ready.then(function () {
				setTimeout(function(){
					const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
					const root = document.getElementById("ag-infographic");
					if(root)
						root.classList.add("ag-inview");

					ScrollSmoother.create({
						smooth: isTouchDevice ? 0 : 1,
						effects: !isTouchDevice,
						smoothTouch: 0.1,
						ignoreMobileResize: true,
					});

					Page.hero();

					for (let i = 0; i < sections.length; i++) {
						if (sections[i] >= 1 && sections[i] <= 7) {
							Page.section(sections[i])
							Page['section' + sections[i]]();
						}
					}

					// find element with classes "pc m-pc"
					let pc = document.querySelector(".pc.m-pc");
					ScrollTrigger.create({
						trigger: pc,
						start: 'top top',
						end: '+=100000 top',
						pin: true,
						pinSpacing: false,
					})

					ScrollTrigger.refresh();

				}, 100);
			});

        },

		hero: function(){
			
			let heroFigure = document.querySelector(`[data-ag="herofigure"]`);
			let heroImg = document.querySelector(`[data-ag="herofigure"] img`);

			let mask = document.querySelector(`[data-ag="hero-mask"]`);
			let svg = document.querySelector(`[data-ag="hero-content"] svg`);


			// let herodesc = document.querySelector(`[data-ag="hero-desc"]`);
			// let heroh1 = document.querySelector(`[data-ag="hero-h1"]`);
			// let herotext = document.querySelector(`[data-ag="hero-text"]`);
			// let heroh1split = new SplitText(heroh1, {type:"lines"})
			// heroh1split.lines.forEach(line => {
			// 	// Add a mask to the line
			// 	line.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
			// });



			ScrollTrigger.create({
				trigger: heroImg, 
				pin: true,
				start: ()=>{return "0 40px"},
				end: ()=>{return "bottom 40px"},
			});


			let tl = gsap.timeline({})
			tl.from(mask, { clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0 100%) ', duration: 1.5, ease: 'power2.out' }, 0)
			tl.from(svg, { scale: 0, y: -150, opacity: 0, duration: 0.75, ease: 'power3.inOut' }, 0)
			tl.from(heroImg, { scale: 1.2, opacity: 0, duration: 1.0, ease: 'power1.out' }, 0)
			// tl.from(imgs[0], { opacity: 0, duration: 0, ease: 'power1.out' }, 1)




			// tl.from(heroFigure, {opacity: 0, duration: 1	, ease: 'power2.out'}, 0)
			// tl.from(herodesc, {opacity: 0, y: 0, duration: 1, ease: 'power1.out'}, 0.5)
			// tl.from(heroh1split.lines, {opacity: 0, y: 20, duration: 1, ease: 'power1.out', stagger: 0.1}, 0.75)
			// tl.from(herotext, {opacity: 0, y: 0, duration: 1, ease: 'power2.out'}, 1.25)




			// let TL = gsap.timeline({
			// 	scrollTrigger: {
			// 		trigger: heroFigure,
			// 		start: ()=>{return "0 40px"},
			// 		end: ()=>{return "bottom 40px"},
			// 		scrub: 1,
			// 		// markers: true
			// 	}
			// })
			// .to(circleimg, { opacity: 1, clipPath: 'circle(100%)', duration: 1, ease: 'none' }, 0)

		},

		section: function(n){

			let section = document.querySelector(`[data-ag="section"][data-id="${n}"]`);
			let art = document.querySelector(`[data-ag="art"][data-id="${n}"]`);
			let imgs = art.querySelectorAll(`img`);
			let slide = 0
			const ln = imgs.length
			

			// if(n===1)
			// 	Page['art' + n + 'Init']();

			

			 // mobile setup code here... 
			mm.add("(max-width: 1023px)", () => {

				ScrollTrigger.create({
					trigger: art,
					endTrigger: art,
					start: ()=>`center center`,
					end: ()=>`center+=${ln*700} bottom`,
					pin: art,
					pinSpacing: true,
					scrub: true,
					// onUpdate: (self) => {
					// 	let newSlide = Math.floor(self.progress * ln);
					// 	if(newSlide === ln) newSlide = ln - 1;
					// 	if(newSlide !== slide){
					// 		// if(n===1)
					// 		// 	Page['art' + n](slide, newSlide);
					// 		imgs[slide].style.opacity = 0;
					// 		slide = newSlide;
					// 		imgs[newSlide].style.opacity = 1;
					// 	}
					// 	console.log(slide, self.progress);
					// },
				});


				// let start = (n!==1)?`center center`:`center center-=${1*100}%`;

				// ScrollTrigger.create({
				// 	trigger: art,
				// 	endTrigger: art,
				// 	start: ()=> start,
				// 	end: ()=>`center+=${ln*700} bottom`,
				// 	onUpdate: (self) => {
				// 		let newSlide = Math.floor(self.progress * ln);
				// 		if(newSlide === ln) newSlide = ln - 1;
				// 		if(newSlide !== slide){
				// 			if(n===1)
				// 				Page['art' + n](slide, newSlide);
				// 			imgs[slide].style.opacity = 0;
				// 			slide = newSlide;
				// 			imgs[newSlide].style.opacity = 1;
				// 		}
				// 		console.log(slide, self.progress);
				// 	},

				// });

			});

			// desktop setup code here...
			mm.add("(min-width: 1024px)", () => {
				
				ScrollTrigger.create({
					trigger: section, 
					endTrigger: section,
					pin: art,
					start: ()=>`top bottom`,
					end: ()=>`bottom bottom`,
				});


				if(n===3){
					gsap.set(art, { opacity: 0 })
					ScrollTrigger.create({
						trigger: section,
						start: ()=>`top top-=${2*100}%`,
						onEnter: function(){
							gsap.to(art, {opacity: 1, duration: 0.5})
						},
						onLeaveBack: function(){
							gsap.to(art, {opacity: 0, duration: 0.5})
						},
						scrub: true,
					});
				}

				if(n===5){
					// gsap.set(art, { opacity: 0 })
					ScrollTrigger.create({
						trigger: section,
						start: ()=>`top top-=${1.5*100}%`,
						onEnter: function(){
							gsap.to(art, {opacity: 0, duration: 0.5})
						},
						onLeaveBack: function(){
							gsap.to(art, {opacity: 1, duration: 0.5})
						},
						scrub: true,
					});
				}

				if(n===6){
					gsap.set(art, { opacity: 0 })
					ScrollTrigger.create({
						trigger: section,
						start: ()=>`top top-=${1*100}%`,
						onEnter: function(){
							gsap.to(art, {opacity: 1, duration: 0.5})
						},
						onLeaveBack: function(){
							gsap.to(art, {opacity: 0, duration: 0.5})
						},
						scrub: true,
					});
				}

				if(n===7){
					// gsap.set(art, { opacity: 0 })
					ScrollTrigger.create({
						trigger: section,
						start: ()=>`top top-=${1*100}%`,
						onEnter: function(){
							gsap.to(art, {opacity: 0, duration: 0.5})
						},
						onLeaveBack: function(){
							gsap.to(art, {opacity: 1, duration: 0.5})
						},
						scrub: true,
					});
				}


				let start = (n!==3)?`top top`:`top top-=${2*100}%`;
				let end = (n!==5)?`bottom bottom`:`bottom bottom+=${2*100}%`;
				if(n===6) start = `top top-=${1*100}%`;

				ScrollTrigger.create({
					trigger: section,
					start: ()=>start,
					end: ()=>end,
					onUpdate: (self) => {
						let newSlide = Math.floor(self.progress * ln);
						if(newSlide === ln) newSlide = ln - 1;
						if(newSlide !== slide){
							
							if(n===1)
								Page['art' + n](slide, newSlide);
							
							imgs[slide].style.opacity = 0;
							slide = newSlide;
							imgs[newSlide].style.opacity = 1;
						}
						// console.log(slide, self.progress);
					},
					scrub: true,
				});
	
			});

		},

		section1: function(){
			let section = document.querySelector(`[data-ag="section"][data-id="1"]`);
			let art = document.querySelector(`[data-ag="art"][data-id="1"]`);
			let text = document.querySelector(`[data-ag="textgroup"][data-id="1-0"]`);
			


			// mobile setup code here... 
			mm.add("(max-width: 1023px)", () => {

			});


			// desktop setup code here...
			mm.add("(min-width: 1024px)", () => {
				ScrollTrigger.create({
					trigger: text, 
					endTrigger: section,
					pin: text,
					start: ()=>`center center`,
					end: ()=>`bottom bottom`,
					// markers: true,
				});
			});

			// Page.art1();
		},

		section2: function(){
			// пин тексту
			let section = document.querySelector(`[data-ag="section"][data-id="2"]`);
			let art = document.querySelector(`[data-ag="art"][data-id="2"]`);
			let text2 = document.querySelector(`[data-ag="textgroup"][data-id="2-1"]`);


			// mobile setup code here... 
			mm.add("(max-width: 1023px)", () => {

			});



			// desktop setup code here...
			mm.add("(min-width: 1024px)", () => {
				ScrollTrigger.create({
					trigger: text2, 
					endTrigger: section,
					pin: text2,
					start: ()=>`center center`,
					end: ()=>`bottom bottom`,
				});
			});
		},

		section3: function(){
			// пин тексту
			let section = document.querySelector(`[data-ag="section"][data-id="3"]`);
			let art = document.querySelector(`[data-ag="art"][data-id="3"]`);
			let h1 = document.querySelector(`[data-ag="textgroup"][data-id="3-0"]`);
			let quotes = document.querySelector(`[data-ag="textgroup"][data-id="3-1"]`);
			let txtgroup3 = document.querySelector(`[data-ag="textgroup"][data-id="3-3"]`);
			let txtgroup4 = document.querySelector(`[data-ag="textgroup"][data-id="3-4"]`);

			mm.add("(max-width: 1023px)", () => {

			});

			// desktop setup code here...
			mm.add("(min-width: 1024px)", () => {

				gsap.set(quotes, { opacity: 0 })

				ScrollTrigger.create({
					trigger: h1, 
					endTrigger: section,
					pin: h1,
					start: ()=>`center center`,
					end: ()=>`top top-=50%`,
					pinSpacing: false,
				});

				ScrollTrigger.create({
					trigger: quotes, 
					endTrigger: section,
					pin: quotes,
					start: ()=>`center center`,
					end: ()=>`top top-=150%`,
					pinSpacing: false,
				});

				ScrollTrigger.create({
					trigger: section,
					start: ()=>`top top-=50%`,
					onEnter: function(){
						gsap.to(h1, {opacity: 0, duration: 0.5})
						gsap.to(quotes, {opacity: 1, duration: 0.5})
					},
					onLeaveBack: function(){
						gsap.to(h1, {opacity: 1, duration: 0.5})
						gsap.to(quotes, {opacity: 0, duration: 0.5})
					},
					scrub: true,
				});


				ScrollTrigger.create({
					trigger: txtgroup3, 
					// endTrigger: section,
					pin: txtgroup3,
					start: ()=>`center center`,
					end: ()=>`center center-=150%`,
					pinSpacing: true,
					// markers: true,
				});

				ScrollTrigger.create({
					trigger: txtgroup4, 
					endTrigger: section,
					pin: txtgroup4,
					start: ()=>`center center`,
					end: ()=>`bottom bottom`,
					pinSpacing: false,
					// markers: true,
				});


			});

		},

		section4: function(){
			// пин тексту
			let section = document.querySelector(`[data-ag="section"][data-id="4"]`);
			let text = document.querySelector(`[data-ag="textgroup"][data-id="4-0"]`);

			// desktop setup code here...
			mm.add("(min-width: 1024px)", () => {
				ScrollTrigger.create({
					trigger: text, 
					endTrigger: section,
					pin: text,
					start: ()=>`center center`,
					end: ()=>`bottom bottom`,
				});
			});

		},

		section5: function(){
			let section = document.querySelector(`[data-ag="section"][data-id="5"]`);
			let quotes = document.querySelector(`[data-ag="textgroup"][data-id="5-3"]`);

			// desktop setup code here...
			mm.add("(min-width: 1024px)", () => {

				ScrollTrigger.create({
					trigger: quotes, 
					endTrigger: section,
					pin: quotes,
					start: ()=>`center center`,
					end: ()=>`bottom bottom`,
					pinSpacing: false,
				});

			});

		},

		section6: function(){

			let section = document.querySelector(`[data-ag="section"][data-id="6"]`);
			let h1 = document.querySelector(`[data-ag="textgroup"][data-id="6-0"]`);
			let txtgroup = document.querySelector(`[data-ag="textgroup"][data-id="6-2"]`);

			// desktop setup code here...
			mm.add("(min-width: 1024px)", () => {

				ScrollTrigger.create({
					trigger: h1, 
					endTrigger: section,
					pin: h1,
					start: ()=>`center center`,
					end: ()=>`top top-=50%`,
					pinSpacing: false,
				});

				ScrollTrigger.create({
					trigger: txtgroup, 
					endTrigger: section,
					pin: txtgroup,
					start: ()=>`center center`,
					end: ()=>`bottom bottom`,
					pinSpacing: false,
					// markers: true,
				});

			});

		},

		section7: function(){
		},



		art1Init(){
			let art1Header0 = document.querySelector(`[data-ag="art1-header0"]`);
			let art1Header1 = document.querySelector(`[data-ag="art1-header1"]`);
			let art1Cell = document.querySelector(`[data-ag="art1-cell"]`);
			let nucleus = document.querySelector(`[data-ag="art1-nucleus"]`);
			let art1Dna = document.querySelector(`[data-ag="art1-dna"]`);
			let art1DnaSvg = document.querySelector(`[data-ag="art1-dna-svg"]`);
			let art1Colors = document.querySelector(`[data-ag="art1-colors"]`);
			let art1Letters = document.querySelectorAll(`[data-ag="art1-letters"] > text`);
			let art1Labels = document.querySelectorAll(`[data-ag="art1-labels"] > g`);
			let art1Text0 = document.querySelector(`[data-ag="art1-text0"]`);
			let art1Text1 = document.querySelector(`[data-ag="art1-text1"]`);
			let art1Text2 = document.querySelector(`[data-ag="art1-text2"]`);
			let roundel0 = document.querySelector(`[data-ag="art1-roundel0"]`);
			let roundel1 = document.querySelector(`[data-ag="art1-roundel1"]`);
			let roundel2 = document.querySelector(`[data-ag="art1-roundel2"]`);
			let chemestry = document.querySelector(`[data-ag="art1-chemestry"]`);
			gsap.set(
				[art1Header1, art1Dna, art1Text1, art1Text2, chemestry,
					art1Letters, art1Labels
				],
				{ opacity: 0 }
			)
			gsap.set([roundel0], {clipPath: 'circle(100% at 50% 50%)'});
			gsap.set([roundel1, roundel2], {clipPath: 'circle(0% at 50% 50%)'});

			let paths = art1Colors.querySelectorAll('path');
			paths.forEach(path => {
				let fill = path.getAttribute('fill');
				if (fill !== '#FCF5EF' && fill !== '#000') {
				  path.setAttribute('col', fill);
				  path.setAttribute('fill', '#FCF5EF');
				}
			});

		},

		art1: function(prev, next){
			
			let art1Header0 = document.querySelector(`[data-ag="art1-header0"]`);
			let art1Header1 = document.querySelector(`[data-ag="art1-header1"]`);
			let art1Cell = document.querySelector(`[data-ag="art1-cell"]`);
			let nucleus = document.querySelector(`[data-ag="art1-nucleus"]`);
			let art1Dna = document.querySelector(`[data-ag="art1-dna"]`);
			let art1DnaSvg = document.querySelector(`[data-ag="art1-dna-svg"]`);
			let art1Colors = document.querySelector(`[data-ag="art1-colors"]`);
			let paths = art1Colors.querySelectorAll('path');
			let art1Letters = document.querySelectorAll(`[data-ag="art1-letters"] > text`);
			let art1Labels = document.querySelectorAll(`[data-ag="art1-labels"] > g`);
			let art1Text0 = document.querySelector(`[data-ag="art1-text0"]`);
			let art1Text1 = document.querySelector(`[data-ag="art1-text1"]`);
			let art1Text2 = document.querySelector(`[data-ag="art1-text2"]`);
			let roundel0 = document.querySelector(`[data-ag="art1-roundel0"]`);
			let roundel1 = document.querySelector(`[data-ag="art1-roundel1"]`);
			let roundel2 = document.querySelector(`[data-ag="art1-roundel2"]`);
			let chemestry = document.querySelector(`[data-ag="art1-chemestry"]`);
			
			if(prev === 0 && next === 1){

				gsap.killTweensOf([
					art1Header0,
					art1Cell,
					art1Text0,
					nucleus,
					roundel0,
					art1Header1,
					art1Dna,
					art1Text1,
					roundel1
				])

				let tl = gsap.timeline()
				tl.add(gsap.to(art1Header0, {opacity: 0, duration: 0.25, ease: 'power1.out'}), 0)
				tl.add(gsap.to(art1Cell, {opacity: 0, duration: 0.25, ease: 'power1.out'}), 0)
				tl.add(gsap.to(art1Text0, {opacity: 0, duration: 0.25, ease: 'power1.out'}), 0)
				tl.add(gsap.to(nucleus, {opacity: 0, duration: 0.25, ease: 'power1.out'}), 0)
				tl.add(gsap.to(roundel0, {clipPath: 'circle(0% at 50% 50%)', duration: 0.25, ease: 'power1.out'}), 0)

				tl.add(gsap.to(art1Header1, {opacity: 1, duration: 0.75, ease: 'power1.out'}), 0)
				tl.add(gsap.to(art1Dna, {opacity: 1, duration: 0.75, ease: 'power1.out'}), 0)
				tl.add(gsap.to(art1Text1, {opacity: 1, duration: 0.75, ease: 'power1.out'}), 0)
				tl.add(gsap.to(roundel1, {clipPath: 'circle(100% at 50% 50%)', duration: 0.75, ease: 'power1.out'}), 0.5)
			}

			if(prev === 1 && next === 0){

				gsap.killTweensOf([
					art1Header0,
					art1Cell,
					art1Text0,
					nucleus,
					roundel0,
					art1Header1,
					art1Dna,
					art1Text1,
					roundel1
				])


				let tl = gsap.timeline()
				tl.add(gsap.to(art1Header0, {opacity: 1, duration: 0.75, ease: 'power1.out'}), 0)
				tl.add(gsap.to(art1Cell, {opacity: 1, duration: 0.75, ease: 'power1.out'}), 0)
				tl.add(gsap.to(art1Text0, {opacity: 1, duration: 0.75, ease: 'power1.out'}), 0)
				tl.add(gsap.to(nucleus, {opacity: 1, duration: 0.75, ease: 'power1.out'}), 0)
				tl.add(gsap.to(roundel0, {clipPath: 'circle(100% at 50% 50%)', duration: 0.75, ease: 'power1.out'}), 0.5)

				tl.add(gsap.to(art1Header1, {opacity: 0, duration: 0.25, ease: 'power1.out'}), 0)
				tl.add(gsap.to(art1Dna, {opacity: 0, duration: 0.25, ease: 'power1.out'}), 0)
				tl.add(gsap.to(art1Text1, {opacity: 0, duration: 0.25, ease: 'power1.out'}), 0)
				tl.add(gsap.to(roundel1, {clipPath: 'circle(0% at 50% 50%)', duration: 0.25, ease: 'power1.out'}), 0)
			}

			if(prev === 1 && next === 2){

				gsap.killTweensOf([
					art1Header1,
					art1Text1,
					roundel1,
					art1Text2,
					roundel2,
					chemestry,
					art1Letters,
					art1DnaSvg,
					art1Labels,
					paths,
					art1DnaSvg
				])



				let tl = gsap.timeline()
				tl.add(gsap.to(art1Header1, {opacity: 0, duration: 0.25, ease: 'power1.out'}), 0)
				tl.add(gsap.to(art1Text1, {opacity: 0, duration: 0.25, ease: 'power1.out'}), 0)
				tl.add(gsap.to(roundel1, {clipPath: 'circle(0% at 50% 50%)', duration: 0.25, ease: 'power1.out'}), 0)

				tl.add(gsap.to(art1Text2, {opacity: 1, duration: 0.75, ease: 'power1.out'}), 0)
				tl.add(gsap.to(roundel2, {clipPath: 'circle(100% at 50% 50%)', duration: 0.75, ease: 'power1.out'}), 0.5)
				tl.add(gsap.to(chemestry, {opacity: 1, duration: 0.75, ease: 'power1.out'}), 0)
				tl.add(gsap.to(art1Letters, {opacity: 1, stagger: 0.025, duration: 0.75, ease: 'power1.out'}), 0)
				tl.add(gsap.to(art1DnaSvg, {scale: 0.8, x: -30, y: -40, duration: 0.75, ease: 'power1.out'}), 0)
				tl.add(gsap.to(art1Labels, {opacity: 1, stagger: 0.05, duration: 0.75, ease: 'power1.out'}), 0)
				paths.forEach(path => {
					let fill = path.getAttribute('col');
					if(fill){
						tl.add(gsap.to(path, {fill: fill, duration: 0.5, ease: 'power1.out'}), 0)
					}
				});

			}

			if(prev === 2 && next === 1){

				gsap.killTweensOf([
					art1Header1,
					art1Text1,
					roundel1,
					art1Text2,
					roundel2,
					chemestry,
					art1Letters,
					art1DnaSvg,
					art1Labels,
					paths,
					art1DnaSvg
				])


				let tl = gsap.timeline()
				tl.add(gsap.to(art1Text2, {opacity: 0, duration: 0.25, ease: 'power1.out'}), 0)
				tl.add(gsap.to(roundel2, {clipPath: 'circle(0% at 50% 50%)', duration: 0.25, ease: 'power1.out'}), 0)
				tl.add(gsap.to(chemestry, {opacity: 0, duration: 0.25, ease: 'power1.out'}), 0)
				tl.add(gsap.to(art1Letters, {opacity: 0, duration: 0.25, ease: 'power1.out'}), 0)

				tl.add(gsap.to(art1Header1, {opacity: 1, duration: 0.75, ease: 'power1.out'}), 0)
				tl.add(gsap.to(art1Text1, {opacity: 1, duration: 0.75, ease: 'power1.out'}), 0)
				tl.add(gsap.to(roundel1, {clipPath: 'circle(100% at 50% 50%)', duration: 0.75, ease: 'power1.out'}), 0.5)

				tl.add(gsap.to(art1Letters, {opacity: 0, duration: 0.25, ease: 'power1.out'}), 0)
				tl.add(gsap.to(art1DnaSvg, {scale: 1, x: 0, y: 0, duration: 0.75, ease: 'power1.out'}), 0)
				tl.add(gsap.to(art1Labels, {opacity: 0, duration: 0.25, ease: 'power1.out'}), 0)
				paths.forEach(path => {
					let fill = path.getAttribute('col');
					if(fill && fill!=="none"){
						tl.add(gsap.to(path, {fill: "#FCF5EF", duration: 0.25, ease: 'power1.out'}), 0)
					}
				});


			}



		},



        inview: function(){

			const agFromElements = document.querySelectorAll("[class*='ag-from']");
			agFromElements.forEach((agFromElement) => {
				ScrollTrigger.create({
				trigger: agFromElement, 
				id: "inview",
				start: () => `100px bottom`,
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

        },

		baloons: function(){
			
			const randomX = random(1, 10);
			const randomY = random(1, 10);
			const randomDelay = random(0, 1);
			const randomTime = random(3/1.5, 5/1.5);
			const randomTime2 = random(5/1.5, 10/1.5);
			const randomAngle = random(-10, 10);
			
			// const cans = gsap.utils.toArray('[data-ag="art1-cell"]');
			// cans.forEach(can => {
			//   gsap.set(can, {
			// 	x: randomX(-1),
			// 	y: randomX(1),
			// 	rotation: randomAngle(-1)
			//   });
			
			//   moveX(can, 1, 1);
			//   moveY(can, -1, 1);
			//   rotate(can, 1);
			// });

			// const cans2 = gsap.utils.toArray('[data-ag="baloon2"]');
			// cans2.forEach(can => {
			//   gsap.set(can, {
			// 	x: randomX(-1),
			// 	y: randomX(1),
			// 	// rotation: randomAngle(-1)
			//   });
			
			//   moveX(can, 1, 2);
			//   moveY(can, -1, 2);
			// //   rotate(can, 1);
			// });


			
			function rotate(target, direction) {
			  
			  gsap.to(target, randomTime2(), {
				rotation: randomAngle(direction),
				// delay: randomDelay(),
				ease: `Sine.easeInOut`,
				onComplete: rotate,
				onCompleteParams: [target, direction * -1]
			  });
			}
			
			function moveX(target, direction, k) {
			  
			  gsap.to(target, k*randomTime(), {
				x: randomX(direction),
				ease: `Sine.easeInOut`,
				onComplete: moveX,
				onCompleteParams: [target, direction * -1, k]
			  });
			}
			
			function moveY(target, direction, k) {
			  gsap.to(target, k*randomTime(), {
				y: randomY(direction),
				ease: `Sine.easeInOut`,
				onComplete: moveY,
				onCompleteParams: [target, direction * -1, k]
			  });
			}
			
			function random(min, max) {
			  const delta = max - min;
			  return (direction = 1) => (min + delta * Math.random()) * direction;
			}

		},
    }

    Page.init();

}