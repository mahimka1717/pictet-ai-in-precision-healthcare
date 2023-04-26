import NextImage from 'next/image'
import s from '~/src/components/Hero.module.sass'

const { imageQuality } = require('~/package.json');

const Hero = (p) => {
	return (
		<div className={`${s.hero} ag-fadein`}>
			<div className={s.media}>
				<figure>
					<NextImage
						// className={`rellax`}
						// data-rellax-speed="-2"
						// data-rellax-desktop-speed="-4"
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
					<div className={s.hr  + ` ag-fromfade ag-fromscale2`} />
					<p className={s.desc}>{p.data.desc}</p>
				</div>
			</div>

			<div className={s.art} data-id={0}>
				<div className={s.box}>
					<NextImage 
						className={s.image + ` ag-fromfade ag-fromscale2`}
						src={`./img/art0.png`}
						alt={`img`}
						width={977/2}
						height={1196/2}
						loading='lazy'
						quality={imageQuality}
						onLoadingComplete={() => {
							// console.log('Image loaded!!!!!!')
						}}
					/>
			
				</div>
			</div>


			<div className={s.art} data-id={1}>
				<div className={s.box}>

					<NextImage 
						className={s.image + ` ag-fromfade ag-fromscale2`}
						src={`./img/art0.png`}
						alt={`img`}
						width={825/2}
						height={1025/2}
						loading='lazy'
						quality={imageQuality}
						onLoadingComplete={() => {
							// console.log('Image loaded!!!!!!')
						}}
					/>
			
				</div>
			</div>

		</div>
	);
};

export default Hero;