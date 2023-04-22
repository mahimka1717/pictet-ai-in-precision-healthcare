import Image from 'next/image'
import s from '~/src/components/Hero.module.sass'

const { imageQuality } = require('~/package.json');

const Hero = (p) => {
	return (
		<div className={`${s.hero} ag-fadein`}>
			<div className={s.media}>
				<figure>
					<Image
						className={`rellax`}
						data-rellax-speed="-2"
						data-rellax-desktop-speed="-4"
						// data-rellax-percentage="-0.15"
                        src={`./img/hero.jpg`} 
                        alt={p.data.h1}
						fill
                        quality={imageQuality} 
                        priority
						loading="eager"
                      /> 
				</figure>
			</div>
			<div className={s.content}>
				<div className={s.box}>
					<h1 className={s.h1}>{p.data.h1}</h1>
					<p className={s.desc}>{p.data.desc}</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;