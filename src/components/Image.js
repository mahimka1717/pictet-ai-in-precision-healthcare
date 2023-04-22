import s from '~/src/components/Image.module.sass'
import NextImage from 'next/image'

const { imageQuality } = require('~/package.json');

const Image = (p) => {
	const { id, src, alt, objectfit, loading } = p.data;
    return (
        <div className={`${s.media} ag-fadein`} data-id={id}>
            <figure className={s.figure}>
                <NextImage 
                    src={`./img/${src}`}
                    alt={alt?alt:`img`}
                    fill
                    sizes="100vw"
                    loading='lazy'
                    quality={imageQuality}
                    onLoadingComplete={() => {
                        // console.log('Image loaded!!!!!!')
                    }}
                />
            </figure>
        </div>
	);
};

export default Image;