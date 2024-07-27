import { useState, useEffect } from 'react';
import s from '~/src/components/arts/Art2.module.sass'

import Patients from '~/src/assets/patients.svg'


const Art2 = () => {   
    return (
        <div className={s.illustration} data-id={2} data-ag={`illustration`}>
            
            <div className={s.frame} data-id={"2-0"}>
                <div className={s.artheader} data-ag="art2-header0">Modern medicine has been built around a <mark>“one size fits most”</mark> approach</div>
                <div className={s.patients} data-ag="art2-patients">
                    <Patients />
                </div>
                <div className={s.roundel} data-ag="art2-roundel0"><div>Some benefit, others do not</div></div>
            </div>
        
        </div>
    );
};

export default Art2;