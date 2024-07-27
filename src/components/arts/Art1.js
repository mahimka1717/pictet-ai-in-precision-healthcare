import { useState, useEffect } from 'react';
import s from '~/src/components/arts/Art1.module.sass'

import Cell from '~/src/assets/cell.svg'
import Dna from '~/src/assets/dna.svg'

import Chemestry0 from '~/src/assets/chemestry/0.svg'
import Chemestry1 from '~/src/assets/chemestry/1.svg'
import Chemestry2 from '~/src/assets/chemestry/2.svg'
import Chemestry3 from '~/src/assets/chemestry/3.svg'

const Art1 = () => {   
    return (
        <div className={s.illustration} data-id={1} data-ag={`illustration`}>
            
            <div className={s.frame} data-id={"1-0"}>
                <div className={s.artheader} data-ag="art1-header0">{`Human cell structure`}</div>
                <div className={s.cell} data-ag="art1-cell">
                    <Cell />
                </div>
                <div className={s.text} data-ag="art1-text0">{`It’s amazing how much genetic information (DNA) fits into a cell’s nucleus. The secret is in the genome’s highly structured and tightly packed organisation`}</div>
                <div className={s.roundel} data-ag="art1-roundel0"><div>To understand <mark>precision medicine</mark>, we first need to understand DNA and human physiology</div></div>
            </div>
            
            <div className={s.frame} data-id={"1-1"}>
                <div className={s.artheader} data-ag="art1-header1">Deoxyribonnucleic acid <mark>(DNA)</mark></div>
                <div className={s.dna} data-ag="art1-dna">
                    <Dna />
                </div>
                <div className={s.text} data-ag="art1-text1">{`The double helix structure of DNA holds unique genetic information that essentially forms the “blueprint” of each person`}</div>
                <div className={s.roundel} data-ag="art1-roundel1"><div>Generally, humans have 46 DNA molecules within the nucleus of a cell</div></div>
            </div>
            
            <div className={s.frame} data-id={"1-2"}>
                <div className={s.text} data-ag="art1-text2">{`Each “rung” of the DNA ladder is a nucleotide, which (in simple terms) comes in two parts: a sugar backbone and nitrogenous bases (A,T,C,G)`}</div>
               
                <div className={s.chemestry} data-ag="art1-chemestry">
                    <div className={s.chemestryHeader}>Nitrogenous bases</div>
                    <div className={s.chemestryBox}>
                        <Chemestry0 />
                        <Chemestry1 />
                        <Chemestry2 />
                        <Chemestry3 />
                    </div>
                </div>

                <div className={s.roundel} data-ag="art1-roundel2"><div>These bases act like a code, instructing our cells how to build and function</div></div>
            </div>
        </div>
    );
};

export default Art1;