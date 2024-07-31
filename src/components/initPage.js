// import gsap from "./../utils/gsap/dist/gsap";
// import ScrollTrigger from "./../utils/gsap/dist/ScrollTrigger";
// import SplitText from "./../utils/gsap/dist/SplitText";
// import DrawSVGPlugin from "./../utils/gsap/dist/DrawSVGPlugin";

import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
import DrawSVGPlugin from "gsap/dist/DrawSVGPlugin";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import { get } from 'jquery';

// import { getSections } from '~/src/utils/index.js';
// const sections = getSections();

const sections = [1,2,3,4,5,6,7]
const frames = [0, 8, 5, 8, 8, 5, 7, 3]


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(DrawSVGPlugin);
gsap.config({
	force3D: true,
	nullTargetWarn: false,
});
let mm = gsap.matchMedia();

let Page
const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
const breakPoint = 1024


export function initPage() {

    Page = {
        init: function(){
			document.fonts.ready.then(function () {
				setTimeout(function(){

					// show infographic
					const root = document.getElementById("ag-infographic");
					if(root) root.classList.add("ag-inview");

					// smooth scroll
					ScrollSmoother.create({
						smooth: isTouchDevice ? 0 : 1,
						effects: !isTouchDevice,
						smoothTouch: 0.5,
						ignoreMobileResize: true,
					});

					// pin partner content
					let pc = document.querySelector(".pc.m-pc");
					ScrollTrigger.create({
						trigger: pc,
						start: 'top top',
						end: '+=100000 top',
						pin: true,
						pinSpacing: false,
					})

					// pin eyebrow
					let eye = document.querySelector(`[data-ag="eyebrow"]`);
					mm.add(
						{ isDesktop: `(min-width: ${768}px)`, isMobile: `(max-width: ${767}px)`},
						(context) => {
		
							let { isDesktop, isMobile} = context.conditions;
					
							ScrollTrigger.create({
								trigger: eye,
								start: () => `top top+=${isDesktop?40:65}`,
								end: () => `+=100000 top`,
								pin: true,
								pinSpacing: false,
								// markers: true
							})

							return () => {
								// cleanup
							};
						}
					);

					// hero animations
					Page.hero();

					// sections animations
					for (let i = 0; i < sections.length; i++) {
						if (sections[i] >= 1 && sections[i] <= 7) {
							Page['section' + sections[i]]();
							Page['art' + sections[i]]();
						}
					}

					Page.headers();
					Page.quotes();
					Page.splitText();

					// ScrollTrigger.normalizeScroll(true)
					ScrollTrigger.refresh();

				}, 100);
			});
        },



		hero: function(){
			
			let hero = document.querySelector(`[data-ag="hero"]`);
			let heroImg = document.querySelector(`[data-ag="herofigure"] img`);
			let mask = document.querySelector(`[data-ag="hero-mask"]`);
			let svg = document.querySelector(`[data-ag="hero-content"] svg`);
			let arrow = document.querySelector(`[data-ag="hero-arrow"]`);

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

			const tl2 = gsap.timeline({
				scrollTrigger: {
					trigger: hero,
					start: ()=>`top top`,
					end: ()=>`bottom top+=300px`,
					// markers: true,
					scrub: true,
					onUpdate: (self) => {},
				}
			});
			tl2.to(svg, {opacity: 0, duration: 1, ease: 'power1.out'}, 0)
		

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
					end: ()=>`bottom bottom+=50%`,
					// markers: true,
				});
			});
		},

		section2: function(){
			// пин тексту
			let section = document.querySelector(`[data-ag="section"][data-id="2"]`);
			let art = document.querySelector(`[data-ag="art"][data-id="2"]`);
			let text2 = document.querySelector(`[data-ag="textgroup"][data-id="2-1"]`);
			

			let woman = document.querySelector(`[data-ag="art2-woman"]`);

			// mobile setup code here... 
			mm.add("(max-width: 1023px)", () => {


				//
				gsap.set(woman, { x: 0, opacity: 0 })

				let tl = gsap.timeline({
					scrollTrigger: {
						trigger: woman, 
						pin: woman,
						// markers: true,
						start: ()=>`bottom bottom`,
						end: ()=>`bottom+=350 bottom`,
						scrub: true,
						pinSpacer: false,
					}
				});

				tl.to(woman, {x: 0, opacity: 1, duration: 1, ease: 'power1.out'}, 0)
				tl.to(woman, {x: 0, opacity: 1, duration: 1, ease: 'power1.out'}, 2)
				

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
					end: ()=>`top top-=100%`,
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
						gsap.killTweensOf([h1, quotes])
						gsap.to(h1, {opacity: 0, duration: 0})
						gsap.to(quotes, {opacity: 1, duration: 0.5})
					},
					onLeaveBack: function(){
						gsap.killTweensOf([h1, quotes])
						gsap.to(h1, {opacity: 1, duration: 0.5})
						gsap.to(quotes, {opacity: 0, duration: 0})
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



		art1: function(){

			const n = 1;
			let section = document.querySelector(`[data-ag="section"][data-id="${n}"]`);
			let art = document.querySelector(`[data-ag="art"][data-id="${n}"]`);
		
			let art1Header0 = document.querySelector(`[data-ag="art1-header0"]`);
			let art1Header1 = document.querySelector(`[data-ag="art1-header1"]`);
			let art1Cell = document.querySelector(`[data-ag="art1-cell"]`);
			let nucleus = document.querySelector(`[data-ag="art1-nucleus"]`);
			let art1Dna = document.querySelector(`[data-ag="art1-dna"]`);
			let art1DnaSvg = document.querySelector(`[data-ag="art1-dna-svg"]`);
			let art1Colors = document.querySelector(`[data-ag="art1-colors"]`);
			let art1Letters = document.querySelectorAll(`[data-ag="art1-letters"] > text`);
			let art1LabelsD = document.querySelectorAll(`[data-ag="art1-labels-desktop"] > g`);
			let art1LabelsM = document.querySelectorAll(`[data-ag="art1-labels-mobile"] > g`);
			let art1Text0 = document.querySelector(`[data-ag="art1-text0"]`);
			let art1Text1 = document.querySelector(`[data-ag="art1-text1"]`);
			let art1Text2 = document.querySelector(`[data-ag="art1-text2"]`);
			let roundel0 = document.querySelector(`[data-ag="art1-roundel0"]`);
			let roundel1 = document.querySelector(`[data-ag="art1-roundel1"]`);
			let roundel2 = document.querySelector(`[data-ag="art1-roundel2"]`);
			let chemestryHeader = document.querySelector(`[data-ag="art1-chemestry-header"]`);
			let chemestryBoxes = document.querySelectorAll(`[data-ag="art1-chemestry-boxes"] > svg`);
			let source = section.querySelector(`[data-ag="source"]`);

			mm.add(
				{ isDesktop: `(min-width: ${breakPoint}px)`, isMobile: `(max-width: ${breakPoint - 1}px)`},
				(context) => {

					let { isDesktop, isMobile} = context.conditions;
				
					// init
					gsap.set([art1Header0, art1Header1, chemestryHeader, art1Letters, source], { opacity: 0 })

					gsap.set([chemestryBoxes], {opacity: 0, scale: 0.5, transformOrigin: 'center center'})
					gsap.set([art1Text0, art1Text1, art1Text2], { opacity: 0, x: 0, y: 10 })
					gsap.set([roundel0, roundel1, roundel2], {clipPath: 'circle(0% at 50% 50%)'});
					gsap.set(art1Cell, { scale: 0.8 })
					gsap.set(art1Dna, { x: 30, opacity: 0 })
					gsap.set(nucleus, { clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0 100%) '})
					gsap.set(art1LabelsD, { clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0 100%)', opacity: isDesktop?1:0})
					gsap.set(art1LabelsM, { clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0 100%)', opacity: isDesktop?0:1})

					let paths = art1Colors.querySelectorAll('path');
					gsap.set(art1DnaSvg, {transformOrigin: 'center center', scale: isDesktop?0.8:1, y: isDesktop?35:0});
					paths.forEach(path => {
						let fill = path.getAttribute('fill');
						if (fill !== '#FCF5EF' && fill !== '#000') {
						  path.setAttribute('col', fill);
						  path.setAttribute('fill', '#FCF5EF');
						}
					});
					Page.baloons()

	
					// create tl
					const tl = gsap.timeline({ scrollTrigger: {
						trigger: isDesktop?section:art,
						start: ()=>isDesktop?`top bottom`:`top top`,
						end: ()=>isDesktop?`bottom bottom`:`center+=${frames[n]*700} bottom+=100%`,
						pin: art,
						pinSpacing: true,
						scrub: true,
						// markers: true,
						// snap: 1/10,
						onUpdate: (self) => {
							// console.log(self.progress, frames[n]);
						},
					} });

					tl.to(art1Cell, {scale: 1, duration: 1, ease: 'power1.out'}, 0)

					tl.to(art1Header0, {opacity: 1, duration: 1, ease: 'power1.out'}, 1)
					tl.to(art1Text0, {opacity: 1, x: 0, y: 0, duration: 1, ease: 'power1.out'}, 1)
					tl.to(roundel0, {clipPath: 'circle(100% at 50% 50%)', duration: 1, ease: 'power1.out'}, 1)
					tl.to(nucleus, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 1, ease: 'power1.out'}, 1)
					tl.to(source, {opacity: 1, duration: 1, ease: 'power1.out'}, 1)

					tl.to(art1Header0, {opacity: 0, duration: 1, ease: 'power1.out'}, 2)
					tl.to(art1Cell, {opacity: 0, duration: 1, ease: 'power1.out'}, 2)
					tl.to(art1Text0, {opacity: 0, duration: 1, ease: 'power1.out'}, 2)
					tl.to(roundel0, {clipPath: 'circle(0% at 50% 50%)', duration: 1, ease: 'power1.out'}, 2)
	
					tl.to(art1Header1, {opacity: 1, duration: 1, ease: 'power1.out'}, 3)
					tl.to(art1Dna, {opacity: 1, x: 0, duration: 1, ease: 'power1.out'}, 3)
					tl.to(art1Text1, {opacity: 1, x: 0, y: 0, duration: 1, ease: 'power1.out'}, 3)
					tl.to(roundel1, {clipPath: 'circle(100% at 50% 50%)', duration: 1, ease: 'power1.out'}, 3)
			
					tl.to(art1Header1, {opacity: 0, duration: 1, ease: 'power1.out'}, 4)
					tl.to(art1Text1, {opacity: 0, duration: 1, ease: 'power1.out'}, 4)
					tl.to(roundel1, {clipPath: 'circle(0% at 50% 50%)', duration: 1, ease: 'power1.out'}, 4)
	
					tl.to(art1Text2, {opacity: 1, x: 0, y: 0, duration: 1, ease: 'power1.out'}, 5)
					tl.to(chemestryHeader, {opacity: 1, duration: 1, ease: 'power1.out'}, 5)
					tl.to(chemestryBoxes, {opacity: 1, scale: 1, stagger: 0.2,  duration: 1, ease: 'power1.out'}, 5)
					tl.to(art1Letters, {opacity: 1, stagger: 0.025, duration: 1, ease: 'power1.out'}, 5)
					tl.to(art1DnaSvg, {scale: isDesktop?1:1, x: isDesktop?0:0, y: isDesktop?100:0, duration: 1, ease: 'power1.out'}, 5)
					tl.to(art1LabelsM, {clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', stagger: 0.2, duration: 1, ease: 'power1.out'}, 5)
					tl.to(art1LabelsD, {clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', stagger: 0.2, duration: 1, ease: 'power1.out'}, 5)
				
					paths.forEach(path => {
						let fill = path.getAttribute('col');
						if(fill){
							tl.to(path, {fill: fill, duration: 1, ease: 'power1.out'}, 5)
						}
					});
					tl.to(roundel2, {clipPath: 'circle(100% at 50% 50%)', duration: 1, ease: 'power1.out'}, 7)

					// tl.set(roundel2, {opacity: 1}, 10)

					return () => {
						// cleanup
					};
				}
			);







		},

		art2: function(){
			const n = 2;

			let section = document.querySelector(`[data-ag="section"][data-id="${n}"]`);
			let art = document.querySelector(`[data-ag="art"][data-id="${n}"]`);
	
			let art2Header0 = document.querySelector(`[data-ag="art2-header0"]`);
			let roundel0 = document.querySelector(`[data-ag="art2-roundel0"]`);
			let patient = document.querySelector(`[data-ag="art2-patient"]`);
			let scheme = document.querySelector(`[data-ag="art2-scheme"]`);
			let source = section.querySelector(`[data-ag="source"]`);

			mm.add(
				{ isDesktop: `(min-width: ${breakPoint}px)`, isMobile: `(max-width: ${breakPoint - 1}px)`},
				(context) => {

					let { isDesktop, isMobile} = context.conditions;
				
					// init
					gsap.set([art2Header0, patient, source], { opacity: 0 })
					gsap.set([roundel0], {clipPath: 'circle(0% at 50% 50%)'});
					gsap.set([scheme], { opacity: 0, scale: 3.6, transformOrigin: '48% 12%' });

					// create tl
					const tl = gsap.timeline({
						scrollTrigger: {
							trigger: isDesktop?section:art,
							start: ()=>isDesktop?`top bottom`:`top top`,
							end: ()=>isDesktop?`bottom bottom`:`center+=${frames[n]*700} bottom+=100%`,
							pin: art,
							pinSpacing: true,
							scrub: true,
							onUpdate: (self) => {
								// console.log(self.progress);
							},
							// snap: 1 / (frames[n] - 1)
						}
					});
					tl.to(scheme, {opacity: 1, duration: 1, ease: 'power1.out'}, 1)
					tl.to(scheme, {scale: 1, duration: 2, ease: 'power1.out'}, 2)
					tl.to(patient, {opacity: 1, duration: 1, ease: 'power1.out'}, 2)
					tl.to(art2Header0, {opacity: 1, duration: 1, ease: 'power1.out'}, 3)
					tl.to(source, {opacity: 1, duration: 1, ease: 'power1.out'}, 4)
					tl.to(roundel0, {clipPath: 'circle(100% at 50% 50%)', duration: 1, ease: 'power1.out'}, 5)

					return () => {
						// cleanup
					};
				}
			);

		},

		art3: function(){
			const n = 3;

			let section = document.querySelector(`[data-ag="section"][data-id="${n}"]`);
			let art = document.querySelector(`[data-ag="art"][data-id="${n}"]`);
		
			let art3Header0 = document.querySelector(`[data-ag="art3-header0"]`);
			let art3Header1 = document.querySelector(`[data-ag="art3-header1"]`);
			let flowchart = document.querySelector(`[data-ag="art3-flowchart"]`);
			let lvl00 = document.querySelector(`[data-ag="art3-level0-0"]`);
			let lvl01 = document.querySelector(`[data-ag="art3-level0-1"]`);
			let lvl10 = document.querySelector(`[data-ag="art3-level1-0"]`);
			let lvl11 = document.querySelector(`[data-ag="art3-level1-1"]`);
			let lvl12 = document.querySelector(`[data-ag="art3-level1-2"]`);
			let lvl20 = document.querySelector(`[data-ag="art3-level2-0"]`);
			let lvl30 = document.querySelector(`[data-ag="art3-level3-0"]`);
			let lvl31 = document.querySelector(`[data-ag="art3-level3-1"]`);
			let lvl32 = document.querySelector(`[data-ag="art3-level3-2"]`);
			let arrows0 = document.querySelectorAll(`[data-ag="art3-arrows-0"] > g`);
			let arrows1 = document.querySelectorAll(`[data-ag="art3-arrows-1"] > g`);
			let arrows2 = document.querySelectorAll(`[data-ag="art3-arrows-2"]`);
			let art3dots = document.querySelector(`[data-ag="art3-dots"]`);
			let tree0 = document.querySelector(`[data-ag="art3-tree-0"]`);
			let tree1 = document.querySelector(`[data-ag="art3-tree-1"]`);
			let tree2 = document.querySelector(`[data-ag="art3-tree-2"]`);
			let roundel0 = document.querySelector(`[data-ag="art3-roundel0"]`);
			let roundel1 = document.querySelector(`[data-ag="art3-roundel1"]`);
			let source = section.querySelector(`[data-ag="source"]`);

			mm.add(
				{ isDesktop: `(min-width: ${breakPoint}px)`, isMobile: `(max-width: ${breakPoint - 1}px)`},
				(context) => {

					let { isDesktop, isMobile} = context.conditions;
				
					// init
					gsap.set(source, {opacity: 0})
					gsap.set([art3Header0, art3Header1, lvl01, lvl10, lvl11, lvl12, lvl20, lvl30, lvl31, lvl32, arrows0, arrows1, arrows2, art3dots, tree0, tree1, tree2], { opacity: 0 })
					gsap.set([roundel0, roundel1], {clipPath: 'circle(0% at 50% 50%)'});
					gsap.set(flowchart, { scale: 2.0, transformOrigin: 'center 0%' });

					gsap.set([lvl00], { opacity: isDesktop?0:1 })


					let delay = ((isDesktop)?5:0)

					const tl = gsap.timeline({
						scrollTrigger: {
							trigger: isDesktop?section:art,
							start: ()=>isDesktop?`top bottom`:`top top`,
							end: ()=>isDesktop?`bottom bottom`:`center+=${frames[n]*700} bottom+=100%`,
							pin: art,
							pinSpacing: true,
							scrub: true,
							// markers: true,
							onUpdate: (self) => {
								// console.log(self.progress);
							},
							// snap: 1 / (frames[n] - 1)
						}
					});

					tl.to(source, {opacity: 1, duration: 1, ease: 'power1.out'}, 0 + delay + (isMobile?6:0) )

					tl.to(art3Header0, {opacity: 1, duration: 1, ease: 'power1.out'}, 2 + delay )
					tl.to(lvl00, {opacity: 1, duration: 0.5, ease: 'power1.out'}, 2 + delay)
					tl.to(flowchart, {scale: 1, duration: 2, ease: 'power1.out'}, 2 + delay)
					
					tl.to(arrows0, {opacity: 1, duration: 1, stagger: 0.3, ease: 'power1.out'}, 2 + delay)
					tl.to([tree0, tree1, tree2], {opacity: 1, duration: 1, stagger: 0.3, ease: 'power1.out'}, 2 + delay)
					tl.to([lvl10, lvl11, lvl12], {opacity: 1, duration: 1, stagger: 0.3, ease: 'power1.out'}, 2 + delay)
					
					tl.to([art3dots], {opacity: 1, duration: 1, ease: 'power1.out'}, 2.6 + delay)
					
					tl.to(arrows1, {opacity: 1, duration: 1, stagger: 0.3, ease: 'power1.out'}, 3 + delay)
					tl.to(lvl20, {opacity: 1, duration: 1, ease: 'power1.out'}, 3.5 + delay)
					tl.to(arrows2, {opacity: 1, duration: 1, ease: 'power1.out'}, 4 + delay)
					tl.to(lvl30, {opacity: 1, duration: 1, ease: 'power1.out'}, 4.5 + delay)
	
					tl.to(roundel0, {clipPath: 'circle(100% at 50% 50%)', duration: 1, ease: 'power1.out'}, 6 + delay)
					tl.to(roundel0, {clipPath: 'circle(0% at 50% 50%)', duration: 1, ease: 'power1.out'}, 8 + delay)
					
					tl.to(art3Header0, {opacity: 0, duration: 1, ease: 'power1.out'}, 8 + delay)
					
					tl.to(art3Header1, {opacity: 1, duration: 1, ease: 'power1.out'}, 9 + delay)
					tl.to([lvl00,lvl30], {opacity: 0, stagger: 0, ease: 'power1.out'}, 9 + delay)
					tl.to([lvl01,lvl31,lvl32], {opacity: 1, stagger: 0, ease: 'power1.out'}, 9 + delay)
	
					tl.to(roundel1, {clipPath: 'circle(100% at 50% 50%)', duration: 1, ease: 'power1.out'}, 11 + delay)

					return () => {
						// cleanup
					};
				}
			);

		},

		art4: function(){
			const n = 4;

			let section = document.querySelector(`[data-ag="section"][data-id="${n}"]`);
			let art = document.querySelector(`[data-ag="art"][data-id="${n}"]`);
			
			let art4Header0 = document.querySelector(`[data-ag="art4-header0"]`);
			let art4Text0 = document.querySelector(`[data-ag="art4-text0"]`);
			let art4Text1 = document.querySelector(`[data-ag="art4-text1"]`);
			let art4Text2 = document.querySelector(`[data-ag="art4-text2"]`);
			let protein0 = document.querySelector(`[data-ag="art4-protein0"]`);
			let protein1 = document.querySelector(`[data-ag="art4-protein1"]`);
			let art4path = document.querySelector(`[data-ag="art4-path"]`);
			let art4mols = document.querySelectorAll(`[data-ag="art4-mols"] > *`);
			let protein2 = document.querySelector(`[data-ag="art4-protein2"]`);
			let roundel0 = document.querySelector(`[data-ag="art4-roundel0"]`);
			let roundel1 = document.querySelector(`[data-ag="art4-roundel1"]`);
			let roundel2 = document.querySelector(`[data-ag="art4-roundel2"]`);
			let mol = document.querySelectorAll(`[data-ag="art4-mol"]`);
			let labels = document.querySelectorAll(`[data-ag="art4-label"]`);
			let line = document.querySelectorAll(`[data-ag="art4-line"]`);
			let dot = document.querySelectorAll(`[data-ag="art4-dot"]`);
			let art4scheme = document.querySelectorAll(`[data-ag="art4-scheme2"]`);
			let labels2 = document.querySelectorAll(`[data-ag="art4-label2"]`);
			let line2 = document.querySelectorAll(`[data-ag="art4-line2"]`);
			let dot2 = document.querySelectorAll(`[data-ag="art4-dot2"]`);
			let source = section.querySelector(`[data-ag="source"]`);

			mm.add(
				{ isDesktop: `(min-width: ${breakPoint}px)`, isMobile: `(max-width: ${breakPoint - 1}px)`},
				(context) => {

					let { isDesktop, isMobile} = context.conditions;
				
					// init
					gsap.set([art4Text0,art4Text1,art4Text2,source], { opacity: 0 })
					gsap.set(art4mols, { opacity: 1, transformOrigin: '50% 50%', scale: 0 });
					gsap.set(protein0, { scale: 4, rotation: -90, transformOrigin: '17% 0%' });
					gsap.set([roundel0, roundel1, roundel2], {clipPath: 'circle(0% at 50% 50%)'});

					gsap.set(art4path, {drawSVG: '0% 0%'});

					gsap.set(mol,{scale: 0, transformOrigin: '50% 50%'});
					gsap.set(art4scheme,{scale: 0.5, opacity: 0, transformOrigin: '50% 50%'});
					gsap.set([labels, labels2], {opacity: 0});
					gsap.set([dot, dot2], {opacity: 0});
					gsap.set([line], {scaleY: 0, transformOrigin: '50% 0%'});
					gsap.set([line2], {scale: 0, transformOrigin: '50% 50%'});



					// tl

					const tl = gsap.timeline({	
						scrollTrigger: {
							trigger:  isDesktop?section:art,
					
							start: ()=>isDesktop?`top bottom`:`top top`,
							end: ()=>isDesktop?`bottom bottom`:`center+=${frames[n]*700} bottom+=100%`,
							pin: art,
							pinSpacing: true,
							scrub: true,
							onUpdate: (self) => {
								// console.log(self.progress);
							},
							// snap: 1 / (frames[n] - 1)
						}
					});
	
				
					tl.to(art4Text0, {opacity: 1, duration: 1, ease: 'power1.out'}, 2)
					tl.to(protein0, { scale: 1, duration: 2, rotation:0 }, 2);
					tl.to(art4mols, { scale: 1, duration: 0.75, stagger: 0.05, ease: 'power1.out'}, 2)
					tl.to(art4path, {drawSVG: '0% 100%', duration: 2, ease: 'power1.out'}, 2);
	
					tl.to(source, {opacity: 1, duration: 1, ease: 'power1.out'}, 3)
					tl.to(roundel0, {clipPath: 'circle(100% at 50% 50%)', duration: 1, ease: 'power1.out'}, 3)
					tl.to(roundel0, {clipPath: 'circle(0% at 50% 50%)', duration: 1, ease: 'power1.out'}, 5)
					tl.to(art4Text0, {opacity: 0, duration: 1, ease: 'power1.out'}, 5)
					tl.to(protein0, { opacity: 0, duration: 1, rotation:0 }, 5);
	
					tl.to(mol, { scale: 1, duration: 1, stagger: 0.5, ease: 'power1.out'}, 6);
					tl.to(labels, { opacity: 1, duration: 0.5, stagger: 0.5, ease: 'power1.out' }, 6.5);
					tl.to(dot, { opacity: 1, duration: 0.5, stagger: 0.5, ease: 'power1.out' }, 6.5);
					tl.to(line, { scaleY: 1, duration: 1, stagger: 0.5, ease: 'power1.out' }, 6);
					tl.to(art4Text1, {opacity: 1, duration: 1, ease: 'power1.out'}, 6)
	
					tl.to(roundel1, {clipPath: 'circle(100% at 50% 50%)', duration: 1, ease: 'power1.out'}, 8)
					tl.to(roundel1, {clipPath: 'circle(0% at 50% 50%)', duration: 1, ease: 'power1.out'}, 9)
					tl.to(art4Text1, {opacity: 0, duration: 1, ease: 'power1.out'}, 9)
					tl.to(protein1, { opacity: 0, duration: 1, rotation:0 }, 9);
	
	
					tl.to(art4Text2, {opacity: 1, duration: 1, ease: 'power1.out'}, 10)
					tl.to(art4scheme, { scale: 1, opacity: 1, duration: 1, stagger: 0.5, ease: 'power1.out'}, 10);
					tl.to(labels2, { opacity: 1, duration: 0.5, stagger: 0.5, ease: 'power1.out' }, 10.5);
					tl.to(dot2, { opacity: 1, duration: 0.5, stagger: 0.5, ease: 'power1.out' }, 10.5);
					tl.to(line2, { scale: 1, duration: 1, stagger: 0.5, ease: 'power1.out' }, 10);
					tl.to(roundel2, {clipPath: 'circle(100% at 50% 50%)', duration: 1, ease: 'power1.out'}, 12)


					return () => {
						// cleanup
					};
				}
			);

		},

		art5: function(){
			const n = 5;

			let section = document.querySelector(`[data-ag="section"][data-id="${n}"]`);
			let art = document.querySelector(`[data-ag="art"][data-id="${n}"]`);
			let scene = document.querySelector(`[data-ag="art5-scene"]`);
			let art5Header0 = document.querySelector(`[data-ag="art5-header0"]`);
			let roundel0 = document.querySelector(`[data-ag="art5-roundel0"]`);
			let level0 = document.querySelectorAll(`[data-ag="art5-level0"]`);
			let level0Icons = document.querySelectorAll(`[data-ag="art5-level0-icon"]`);
			let level1 = document.querySelectorAll(`[data-ag="art5-level1"]`);
			let level2 = document.querySelectorAll(`[data-ag="art5-level2"]`);
			let arrow = document.querySelector(`[data-ag="art5-arrow"]`);
			let arrows = document.querySelectorAll(`[data-ag="art5-arrows"] > g`);
			let art5x = document.querySelector(`[data-ag="art5-x"]`);
			let source = section.querySelector(`[data-ag="source"]`);

			mm.add(
				{ isDesktop: `(min-width: ${breakPoint}px)`, isMobile: `(max-width: ${breakPoint - 1}px)`},
				(context) => {

					let { isDesktop, isMobile} = context.conditions;
				
					// init
					gsap.set([roundel0], {clipPath: 'circle(0% at 50% 50%)'});
					gsap.set([level1, level2, arrow, arrows, source], { opacity: 0 });
					gsap.set([scene], { y: 100, scale: 1.2, transformOrigin: '50% 20%' });
					gsap.set([art5x], { scale: 0.5, opacity: 0, transformOrigin: '50% 50%' });

					let delay = ((isDesktop)?0:0)

					// tl
					const tl = gsap.timeline({	
						scrollTrigger: {
							trigger: isDesktop?section:art,
							start: ()=>isDesktop?`top bottom`:`top top`,
							end: ()=>isDesktop?`bottom bottom`:`center+=${frames[n]*700} bottom+=100%`,
							pin: art,
							pinSpacing: true,
							scrub: true,
							onUpdate: (self) => {
								// console.log(self.progress);
							},
							// snap: 1 / (frames[n] - 1)
						}
					});
	
					tl.to(scene, { y: 0, scale: 1, y: 0, duration: 2, ease: 'power1.out'}, 1 + delay)
					tl.to(art5x, {opacity: 1, scale: 1, duration: 1, ease: 'power1.out'}, 1 + delay)
					tl.to(arrow, { opacity: 1, duration: 1, ease: 'power1.out'}, 1.5 + delay)
					tl.to(level1, { opacity: 1, duration: 1, ease: 'power1.out'}, 2 + delay)
					tl.to(arrows, { opacity: 1, duration: 1, stagger: 0.3, ease: 'power1.out'}, 3 + delay)
					tl.to(level2, { opacity: 1, duration: 1, stagger: 0.3, ease: 'power1.out'}, 3 + delay)
					tl.to(roundel0, {clipPath: 'circle(100% at 50% 50%)', duration: 1, ease: 'power1.out'}, 5 + delay)
					tl.to(source, {opacity: 1, duration: 1, ease: 'power1.out'}, 5 + delay )

					return () => {
						// cleanup
					};
				}
			);

		},

		art6: function(){
			const n = 6;

			let section = document.querySelector(`[data-ag="section"][data-id="${n}"]`);
			let art = document.querySelector(`[data-ag="art"][data-id="${n}"]`);
	
			let art6header = document.querySelector(`[data-ag="art6-header0"]`);
			let art6greed = document.querySelector(`[data-ag="art6-greed"]`);
		
			let art6level = document.querySelector(`[data-ag="art6-level"]`);
			let art6paths = document.querySelectorAll(`[data-ag="art6-paths"] > path`);
			let art6colors = document.querySelectorAll(`[data-ag="art6-color"] > *`);
			let roundel0 = document.querySelector(`[data-ag="art6-roundel0"]`);
			let roundel1 = document.querySelector(`[data-ag="art6-roundel1"]`);
			let roundel2 = document.querySelector(`[data-ag="art6-roundel2"]`);

			let squares = document.querySelectorAll(`[data-ag="art6-squares"] > g`);

			let art6Colored = document.querySelectorAll(`[data-ag="art6-colored"]`);
			let art6Stacked = document.querySelectorAll(`[data-ag="art6-stacked"]`);
			let source = section.querySelector(`[data-ag="source"]`);

		
			let secondGs = [];
			let secondGs2 = [];
			
			art6Stacked.forEach(element => {
			  let secondG = element.querySelectorAll('g:nth-child(2)');
			  secondGs.push(...secondG);

			  let secondG2 = element.querySelectorAll('g:nth-child(3)');
			  secondGs2.push(...secondG2);
			});
			



			// Преобразуем NodeList в массив
			squares = Array.from(squares);

			// Определяем размер сетки
			let gridSize = 15;

			// Сортируем массив
			squares.sort((a, b) => {
			// Получаем индексы строки и столбца для каждого элемента
			let aIndex = Array.from(a.parentNode.children).indexOf(a);
			let bIndex = Array.from(b.parentNode.children).indexOf(b);

			let aRow = Math.floor(aIndex / gridSize);
			let aCol = aIndex % gridSize;

			let bRow = Math.floor(bIndex / gridSize);
			let bCol = bIndex % gridSize;

			// Сравниваем сумму индексов строки и столбца
			return (aRow + aCol) - (bRow + bCol);
			});




			mm.add(
				{ isDesktop: `(min-width: ${breakPoint}px)`, isMobile: `(max-width: ${breakPoint - 1}px)`},
				(context) => {

					let { isDesktop, isMobile} = context.conditions;
				
					// init
					gsap.set([roundel0,roundel1,roundel2], {clipPath: 'circle(0% at 50% 50%)'});
					// gsap.set([art6cards], { opacity: 1, scale: 0, transformOrigin: '50% 50%' });
					gsap.set([art6level, source], { opacity: 0 });
					gsap.set([art6colors], { opacity: 0 });
					gsap.set(art6paths, { drawSVG: '0% 0%' });
					gsap.set(art6Stacked, { opacity: 0, transformOrigin: '50% 50%', transformStyle: 'preserve-3d' });
					gsap.set([art6header, art6greed], {opacity: isDesktop?0:1});
					
					gsap.set(squares, { autoAlpha: 0, scale: 1.5, x: 20, y: 20, rotation: 10, transformOrigin: '50% 50%' });
					// gsap.set(squares, {display: `none`})

					// tl
					const tl = gsap.timeline({	
						scrollTrigger: {
							trigger: isDesktop?section:art,
							start: ()=>isDesktop?`top bottom`:`top top`,
							end: ()=>isDesktop?`bottom bottom`:`center+=${frames[n]*700} bottom+=100%`,
							pin: art,
							pinSpacing: true,
							scrub: true,
							onUpdate: (self) => {
								// console.log(self.progress);
							},
							// snap: 1 / (frames[n] - 1)
						}
					});
	
					tl.to(squares, {autoAlpha: 1, duration: 0, stagger: 0.0075, ease: 'power1.out'}, 1)
					tl.to(squares, {scale: 1, rotation: 0, x: 0, y: 0, duration: 1, stagger: 0.0075, ease: 'power1.out'}, 1)
	
		
					tl.to(source, {opacity: 1, duration: 1, ease: 'power1.out'}, 3)
					tl.to(roundel0, {clipPath: 'circle(100% at 50% 50%)', duration: 1, ease: 'power1.out'}, 3)
					tl.to(roundel0, {clipPath: 'circle(0% at 50% 50%)', duration: 1, ease: 'power1.out'}, 4)
	
					tl.to(art6Stacked, {opacity: 1, scale: 2, duration: 1, stagger: 0.025, ease: 'power1.out'}, 5)
					tl.to(secondGs, {x: 3, y: -3, duration: 1, stagger: 0.025, ease: 'power1.out'}, 5)
					tl.to(secondGs2, {x: 6, y: -6, duration: 1, stagger: 0.025, ease: 'power1.out'}, 5)
	
					tl.to(roundel1, {clipPath: 'circle(100% at 50% 50%)', duration: 1, ease: 'power1.out'}, 6)
					tl.to(roundel1, {clipPath: 'circle(0% at 50% 50%)', duration: 1, ease: 'power1.out'}, 7)
					tl.to(art6Stacked, {scale: 1, duration: 1, stagger: 0.025, ease: 'power1.out'}, 7)
	
					tl.to(secondGs, {x: 0, y: 0, duration: 1, stagger: 0.025, ease: 'power1.out'}, 7)
					tl.to(secondGs2, {x: 0, y: 0, duration: 1, stagger: 0.025, ease: 'power1.out'}, 7)
	
					tl.to(art6level, {opacity: 1, duration: 1, ease: 'power1.out'}, 8)
					tl.to(art6colors, {opacity: 1, duration: 1, stagger: 0.05, ease: 'power1.out'}, 8)
					tl.to(art6paths, {drawSVG: '0% 100%', duration: 1, stagger: 0.05, ease: 'power1.out'}, 8)
	
					tl.to(roundel2, {clipPath: 'circle(100% at 50% 50%)', duration: 1, ease: 'power1.out'}, 10)


					return () => {
						// cleanup
					};
				}
			);

		},

		art7: function(){
			const n = 7;

			let section = document.querySelector(`[data-ag="section"][data-id="${n}"]`);
			let art = document.querySelector(`[data-ag="art"][data-id="${n}"]`);
	
			let circle = document.querySelector(`[data-ag="art7-circle"]`);
			let arrows = document.querySelectorAll(`[data-ag="art7-arrows"] > g`);
			let els = document.querySelectorAll(`[data-ag="art7-els"] > g`);
			let elstxt = document.querySelectorAll('[data-ag="art7-els"] > g > g:first-child');
			let art7txt = document.querySelectorAll('[data-ag="art7-txt"]');
			let source = section.querySelector(`[data-ag="source"]`);

			mm.add(
				{ isDesktop: `(min-width: ${breakPoint}px)`, isMobile: `(max-width: ${breakPoint - 1}px)`},
				(context) => {

					let { isDesktop, isMobile} = context.conditions;
				
					// init
					gsap.set([circle], { scale: 1.3, transformOrigin: '50% 50%' });
					gsap.set([arrows, source], { opacity: 0 });
					gsap.set([els], { opacity: 0, scale: 0, transformOrigin: '50% 50%' });

					if(isMobile){
						gsap.set(art7txt, {scale: 1.3, x: 10, transformOrigin: '50% 50%'});
	
						gsap.set(elstxt[1], { x: 80, y: 0 });
						gsap.set(elstxt[2], { x: 80, y: 0 });
						gsap.set(elstxt[4], { x: -190, y: 50 });
						gsap.set(elstxt[5], { x: -80, y: 30 });

					}else{
						gsap.set([circle], { scale: 0.9, transformOrigin: '50% 50%' });
					}


		
					//tl
					let delay = ((isDesktop)?0:0)
					const tl = gsap.timeline({	
						scrollTrigger: {
							trigger: isDesktop?section:art,
							start: ()=>isDesktop?`top bottom`:`top top`,
							end: ()=>isDesktop?`bottom bottom`:`center+=${frames[n]*700} top+=200%`,
							pin: art,
							pinSpacing: true,
							scrub: true,
							// markers: true,
							onUpdate: (self) => {
								// console.log(self.progress);
							},
							// snap: 1 / (frames[n] - 1)
						}
					});
	
					tl.to(els, { scale: 1, opacity: 1, duration: 2, stagger: 0.3, ease: 'power1.out'}, 1 + delay)	
					tl.to(arrows, { scale: 1, opacity: 1, duration: 2, stagger: 0.3, ease: 'power1.out'}, 2.15 + delay)	
					tl.to(source, {opacity: 1, duration: 1, ease: 'power1.out'}, 4 + delay)


					return () => {
						// cleanup
					};
				}
			);
		},




		headers: function(){

			let headers = [	
				"[data-ag='text'][data-id='2-0-0'] > p",
				"[data-ag='text'][data-id='3-0-0'] > p",	
				"[data-ag='text'][data-id='6-0-0'] > p"	
			]

			headers.forEach((header) => {

				let h = document.querySelectorAll(header);
				gsap.set(h, {transformOrigin: '0% 100%'});
				
				
				mm.add(
					{ isDesktop: `(min-width: ${breakPoint}px)`, isMobile: `(max-width: ${breakPoint - 1}px)`},
					(context) => {
						let { isDesktop, isMobile} = context.conditions;
						
						if(isMobile){

							gsap.to(h, {
								duration: 0.35,
								scale: 0.7,
								scrollTrigger: {
									trigger: h,
									scrub: 1,
									// markers: true,
									start: () => `bottom 90%`,
									end: () => `top 20%`
								},
							});	

						}
						
						return () => {
							// cleanup
						};
					}
				);
			});
		},
        
		quotes: function(){
			
			let splitTexts = [
				[
					`[data-ag='text'][data-id='5-0-0'] > p`,
					`[data-ag='text'][data-id='5-0-1'] > p`,
					`[data-ag='textgroup'][data-id='5-0'] > div > svg`	
				],
				[
					`[data-ag='text'][data-id='5-3-0'] > p`,
					`[data-ag='text'][data-id='5-3-1'] > p`,
					`[data-ag='textgroup'][data-id='5-3'] > div > svg`	
				]
			]
			
			splitTexts.forEach((splitText) => {

				let t0 = document.querySelectorAll(splitText[0]);
				let t1 = document.querySelectorAll(splitText[1]);
				let t2 = document.querySelectorAll(splitText[2]);

				const split = new SplitText(t0, {
					type: 'lines',
				});
	
				gsap.from(t1, {
					duration: 0.5,
					autoAlpha: 0,
					scrollTrigger: {
						trigger: t1,
						scrub: 1,
						// markers: true,
						end: () => `top 60%`
					},
				});

				gsap.from(t2, {
					duration: 0.5,
					autoAlpha: 0,
					scale: 0.7,
					transformOrigin: '50% 50%',
					scrollTrigger: {
						trigger: t2,
						scrub: 1,
						// markers: true,
						end: () => `top 70%`
					},
				});

				split.lines.forEach((target) => {
					gsap.set(target, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' });
					gsap.from(target, {
						duration: 0.5,
						y: 50,
						autoAlpha: 0,
						scrollTrigger: {
							trigger: target,
							scrub: 1,
							markers: false,
							end: () => `top 70%`
						},
					});
				});

			});

		},

		splitText: function(){

			let splitTexts = [
				"[data-ag='text'][data-id='2-0-2']",
				"[data-ag='text'][data-id='2-1-1']",
				"[data-ag='text'][data-id='6-2-1']",
			]
			
			splitTexts.forEach((splitText) => {

				let t = document.querySelectorAll(splitText);
				gsap.set(t, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' });

				const split = new SplitText(t, {
					type: 'words',
				});
		
				gsap.from(split.words, {
					duration: 0.35,
					y: 40,
					autoAlpha: 0,
					stagger: 0.05,
					scrollTrigger: {
						trigger: t,
						scrub: 1,
						// markers: true,
						end: () => `top 70%`
					},
				});	

			});
			
		},

		baloons: function(){
			
			const randomX = random(1, 5);
			const randomY = random(1, 5);
			const randomDelay = random(0, 1);
			const randomTime = random(3/1.5, 5/1.5);
			const randomTime2 = random(5/1.5, 10/1.5);
			const randomAngle = random(-10, 10);
			
			// let art1Cell = document.querySelector(`[data-ag="art1-ceil-svg"] > *`);


			const cans = gsap.utils.toArray(`[data-ag="art1-ceil-svg"] > *`);
			cans.forEach(can => {
			  gsap.set(can, {
				x: randomX(-1),
				y: randomX(1),
				rotation: randomAngle(-1)
			  });
			
			  moveX(can, 1, 1);
			  moveY(can, -1, 1);
			  rotate(can, 1);
			});


			
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