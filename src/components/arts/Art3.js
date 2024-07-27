import { useState, useEffect } from 'react';
import s from '~/src/components/arts/Art3.module.sass'

import Forest from '~/src/assets/forest.svg'


const Art3 = () => {   
    return (
        <div className={s.illustration} data-id={3} data-ag={`illustration`}>
            
            <div className={s.frame} data-id={"3-0"}>
                
                <div className={s.headers}>
                    <div className={s.artheader} data-ag="art3-header0">The <mark>“random forest”</mark> model is a machine learning algorithm that combines multiple decision trees into one predictive model</div>
                    <div className={s.artheader} data-ag="art3-header1"><mark>Random forest model</mark></div>
                </div>
                
                <div className={s.forest} data-ag="art3-forest">
                    <Forest />
                </div>

                <div className={s.roundel} data-ag="art3-roundel0"><div>It helps translate big data sets into practical insights</div></div>
                <div className={s.roundel} data-ag="art3-roundel1"><div>Random forest is just one tool used by <mark>AI</mark> in medical science to swiftly analyse complex data</div></div>

            </div>
        
        </div>
    );
};

export default Art3;