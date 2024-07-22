import NextImage from 'next/image'
import s from '~/src/components/Hero.module.sass'


import Arrow from '~/src/assets/arrow.svg'

const { imageQuality } = require('~/package.json');

const Hero = (p) => {
	return (
		<div className={`${s.hero} ag-fadein`} data-ag={`hero`}>
			
			<div className={s.media}>
				<figure data-ag={`herofigure`}>
					<NextImage
                        src={`./img/hero.jpg`} 
                        alt={p.data.h1}
						fill
						sizes="(max-width: 768px) 300vw, 100vw"
                        quality={imageQuality} 
                        priority
						loading="eager"
                      /> 
				</figure>
				<div className={s.gradient} data-ag={`hero-gradient`}/>
			</div>

			<div className={s.content} data-ag={`hero-content`}>
				<div className={s.mask} data-ag={`hero-mask`}>
					<div className={s.desc} data-ag={`hero-desc`}>{p.data.desc}</div>
					<h1 className={s.h1} data-ag={`hero-h1`}>{p.data.h1}</h1>
					<div className={s.text} data-ag={`hero-text`}>{p.data.text}</div>
				</div>
				<Arrow data-lag="0.3" />
			</div>

		</div>
	);
};

export default Hero;