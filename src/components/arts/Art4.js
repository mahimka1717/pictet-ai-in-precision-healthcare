import { useState, useEffect } from 'react';
import s from '~/src/components/arts/Art4.module.sass'
import Protein from '~/src/assets/protein.svg'

const Art4 = () => {   
    return (
        <div className={s.illustration} data-id={4} data-ag={`illustration`}>
            <div className={s.frame} data-id={"4-0"}>
                <div className={s.artheader} data-ag="art4-header0"><mark>The protein folding problem</mark></div>
                
                <div className={s.texts}>
                    <div className={s.text} data-ag="art4-text0">{`Protein molecules, the building blocks of cells, are vital for the body’s structure, function and regulation`}</div>
                    <div className={s.text} data-ag="art4-text1">{`The amino acids in the chain “fold” into shapes such as helixes and sheets, forming the structure of the protein (there are about four stages of this complex folding process)`}</div>
                    <div className={s.text} data-ag="art4-text2">{`Understanding how proteins fold helps structural biologists determine where diseases disrupt these interactions`}</div>
                </div>

                <div className={s.protein} data-ag="art4-protein">
                    <Protein />
                </div>

                <div className={s.roundel} data-ag="art4-roundel0"><div>Proteins are complex 3D structures made up of a chain of 21 amino acids</div></div>
                <div className={s.roundel} data-ag="art4-roundel1"><div>The shape of a protein determines its function</div></div>
                <div className={s.roundel} data-ag="art4-roundel2"><div>Complex protein structures take years to analyse. <mark>AI</mark> can dramatically speed up this process</div></div>
           
            </div>

        
        </div>
    );
};

export default Art4;