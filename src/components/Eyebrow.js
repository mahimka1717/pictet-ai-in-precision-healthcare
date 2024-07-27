import { useState, useEffect } from 'react';
import s from '~/src/components/Eyebrow.module.sass'


import data from '~/src/data/data.json'

const Eyebrow = () => {
    return (
        <div className={s.eyebrow} data-ag={`eyebrow`}>
            <div>
                {data.content[0].h1}
            </div>
        </div>
    );
};

export default Eyebrow;