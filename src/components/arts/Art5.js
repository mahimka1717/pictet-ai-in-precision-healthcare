import { useState, useEffect } from 'react';
import s from '~/src/components/arts/Art5.module.sass'

import Dnatest from '~/src/assets/dnatest.svg'


const Art5 = () => {   
    return (
        <div className={s.illustration} data-id={5} data-ag={`illustration`}>
            
            <div className={s.frame} data-id={"5-0"}>
                <div className={s.artheader} data-ag="art5-header0">Unlike traditional medicine, <mark>precision medicine</mark> tailors treatments based on DNA and other physiological indicators so each patient benefits</div>
                <div className={s.dnatest} data-ag="art5-dnatest">
                    <Dnatest />
                </div>
                <div className={s.roundel} data-ag="art5-roundel0"><div>AI’s analytic abilities can help speed and scale these types of therapies</div></div>
            </div>
        
        </div>
    );
};

export default Art5;