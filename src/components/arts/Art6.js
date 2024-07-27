import { useState, useEffect } from 'react';
import s from '~/src/components/arts/Art6.module.sass'

import Greed from '~/src/assets/greed.svg'


const Art6 = () => {   
    return (
        <div className={s.illustration} data-id={6} data-ag={`illustration`}>
            
            <div className={s.frame} data-id={"6-0"}>
                <div className={s.artheader} data-ag="art6-header0">From <mark>precise to personalised medicine</mark>: tumour DNA </div>
                <div className={s.greed} data-ag="art6-greed">
                    <Greed />
                </div>
                <div className={s.roundel} data-ag="art6-roundel0"><div>First, oncologists sequence the DNA of an individual’s blood sample</div></div>
                <div className={s.roundel} data-ag="art6-roundel1"><div>Scientists then do the same for a sample taken from the tumour</div></div>
                <div className={s.roundel} data-ag="art6-roundel2"><div>By layering one over the other, <mark>AI</mark> can be used to identify rogue cells </div></div>
            </div>
        
        </div>
    );
};

export default Art6;