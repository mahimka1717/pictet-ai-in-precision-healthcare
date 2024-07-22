import s from '~/src/components/Quote.module.sass'
import NextImage from 'next/image'
const { imageQuality } = require('~/package.json');


const Quote = (p) => {
	return (
		<figure className={s.quote} data-ag={`quote`} data-id={p.data.id}>
            <div className={s.container} data-id={p.data.id}>

                <div className={s.box} data-id={p.data.id} data-ag={`qbox`} >
                    <div className={s.quotes}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="109.451" height="79.136" viewBox="0 0 109.451 79.136">
                        <g transform="translate(-2560.996 77.312)">
                            <path d="M2613.023-21.989c0,13.364-11.583,23.463-23.759,23.463-14.851,0-27.918-9.5-27.918-30,0-24.651,20.79-45.737,50.786-48.411l.891,5.643c-19.9,3.267-30,13.959-30,25.542C2597.876-48.422,2613.023-39.512,2613.023-21.989Zm57.024,0c0,13.364-11.583,23.463-23.76,23.463-14.85,0-27.918-9.5-27.918-30,0-24.651,20.79-45.737,50.786-48.411l.892,5.643c-19.9,3.267-30,13.959-30,25.542C2654.9-48.422,2670.047-39.512,2670.047-21.989Z" fill="#804941" stroke="none" strokeWidth="0.7"/>
                        </g>
                    </svg>
                    </div>
                    <blockquote className={s.blockquote} dangerouslySetInnerHTML={{ __html: p.data.data }} data-ag={`blockquote`}/>
                    <figcaption className={s.autor} data-ag={`autor`} data-id={p.data.id} dangerouslySetInnerHTML={{__html: p.data.autor[0] }} />
                </div>
                
            </div>
		</figure>
	);
};

export default Quote;