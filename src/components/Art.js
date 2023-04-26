import s from '~/src/components/Art.module.sass'
import NextImage from 'next/image'
const { imageQuality } = require('~/package.json');






const Art = (p) => {
	const { id, w, h } = p.data	

	return (
		<div className={s.art} data-id={id}>
            <div className={s.box}>

                <NextImage 
                    className={s.image + ` ag-fromfade ag-fromscale2`} 
                    src={`./img/art${id}.png`}
                    alt={`img`}
                    width={w/2}
                    height={h/2}
                    loading='lazy'
                    quality={imageQuality}
                    onLoadingComplete={() => {
                        // console.log('Image loaded!!!!!!')
                    }}
                />
        
            </div>
		</div>
	);
};

export default Art;