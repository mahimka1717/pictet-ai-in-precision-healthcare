import s from '~/src/components/Art.module.sass'
import NextImage from 'next/image'
const { imageQuality } = require('~/package.json');


const Art = (p) => {
	const { id } = p.data	

	return (
		<div className={s.art} data-id={id}>
            <div className={s.box}>

            {
                (id===0) && <></>
            }

            </div>
		</div>
	);
};

export default Art;