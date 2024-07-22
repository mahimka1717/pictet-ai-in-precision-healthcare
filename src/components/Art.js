import { useState, useEffect } from 'react';
import s from '~/src/components/Art.module.sass'

import data from '~/src/data/data.json'


import Art1 from '~/src/components/arts/Art1'

const Art = ({id}) => {
    const images1 = Array.from({length: 3}, (_, i) => `/img/s1/g${i}.png`);
    const images2 = Array.from({length: 3}, (_, i) => `/img/s2/g${i}.png`);
    const images3 = Array.from({length: 4}, (_, i) => `/img/s3/g${i}.png`);
    const images4 = Array.from({length: 7}, (_, i) => `/img/s4/g${i}.png`);
    const images5 = Array.from({length: 2}, (_, i) => `/img/s5/g${i}.png`);
    const images6 = Array.from({length: 3}, (_, i) => `/img/s6/g${i}.png`);
    const images7 = Array.from({length: 2}, (_, i) => `/img/s7/g${i}.png`);

    const images = [images1, images2, images3, images4, images5, images6, images7]
    return (
        <div className={s.art} data-id={id} data-ag={`art`}>
            {images[id-1].map((src, index) => (
                <img key={index} src={src} alt={`Art ${index+1}`} data-id={index} />
            ))}

            <div className={s.artbox} data-id={id} data-ag={`artbox`}>
                { (id===1) && <Art1 />}
                <div className={s.source}>
                    Source: <a href={data.art[id-1].src} target="_blank">{data.art[id-1].text}</a>
                </div>
            </div>

        </div>
    );
};

export default Art;