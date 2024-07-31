import { useState, useEffect } from 'react';
import s from '~/src/components/Art.module.sass'

import Art1 from '~/src/components/arts/Art1'
import Art2 from '~/src/components/arts/Art2'
import Art3 from '~/src/components/arts/Art3'
import Art4 from '~/src/components/arts/Art4'
import Art5 from '~/src/components/arts/Art5'
import Art6 from '~/src/components/arts/Art6'
import Art7 from '~/src/components/arts/Art7'

import data from '~/src/data/data.json'

const Art = ({id}) => {

    return (
        <div className={s.art} data-id={id} data-ag={`art`}>
            <div className={s.artbox} data-id={id} data-ag={`artbox`}>
                { (id===1) && <Art1 />}
                { (id===2) && <Art2 />}
                { (id===3) && <Art3 />}
                { (id===4) && <Art4 />}
                { (id===5) && <Art5 />}
                { (id===6) && <Art6 />}
                { (id===7) && <Art7 />}
                <div className={s.source} data-ag={"source"}>
                    Source: <a href={data.art[id-1].src} target="_blank">{data.art[id-1].text}</a>
                </div>
            </div>

        </div>
    );
};

export default Art;