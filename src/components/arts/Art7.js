import { useState, useEffect } from 'react';
import s from '~/src/components/arts/Art7.module.sass'

import Circle from '~/src/assets/circle.svg'

const Art7 = () => {   
    return (
        <div className={s.illustration} data-id={7} data-ag={`illustration`}>
            
            <div className={s.frame} data-id={"7-0"}>
                <div className={s.circle} data-ag="art7-circle">
                    <Circle />
                </div>
            </div>
        
        </div>
    );
};

export default Art7;