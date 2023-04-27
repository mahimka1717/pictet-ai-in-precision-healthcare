import s from '~/src/components/charts/Graph4.module.sass'

// import Pie from '~/src/assets/g4pie.svg'

const Graph4 = (p) => {

    return (
      <div className={s.box} data-id={4} data-ag={"g4"}>
        <div className={s.legend}>
        {
            p.data.map((item, index) => {
                return (
                    <div key={index} className={s.item} data-id={index}>
                        <div className={s.color} data-ag={`g4color`}/>
                        <div className={s.valbox}>
                            <div className={s.val} data-ag={`g4val`} dangerouslySetInnerHTML={{ __html: item.val }}/>
                            <div className={s.desc} data-ag={`g4desc`} dangerouslySetInnerHTML={{ __html: item.desc }}/>
                        </div>
                    </div>
                )
            })
        }
        </div>
        {/* <Pie /> */}


        <svg xmlns="http://www.w3.org/2000/svg" width="236" height="209.044" viewBox="0 0 236 209.044">
            
            <defs>
                <clipPath id={`g4mask0`}><path data-ag={`g4mask0`} d="" fill="#ffcc00" /></clipPath>
                <clipPath id={`g4mask1`}><path data-ag={`g4mask1`} d="" fill="#ffcc00" /></clipPath>
                <clipPath id={`g4mask2`}><path data-ag={`g4mask2`} d="" fill="#ffcc00" /></clipPath>
            </defs>    
               
            <g clipPath={`url(#g4mask2)`}>
                <path data-ag="g4pie2" d="M159.578,80.47A79.789,79.789,0,1,1,79.789.681,79.789,79.789,0,0,1,159.578,80.47" transform="translate(0 48.785)" fill="#dfdfdf"/>
            </g>
            <g clipPath={`url(#g4mask1)`}>
                <path data-ag="g4pie1" d="M59.3,79.649V0A73.562,73.562,0,0,1,78.567,2.366Z" transform="translate(22.296 46.089)" fill="#017373"/>
            </g>
            <g clipPath={`url(#g4mask0)`}>
                <path data-ag="g4pie0" d="M141.356,79.635a62.4,62.4,0,1,1-62.4-62.4,62.4,62.4,0,0,1,62.4,62.4" transform="translate(0.922 49.706)" fill="#ffffff"/>
            </g>
      
            <g data-ag="g4pietext0">
                <text fill="#017373" fontSize="50" fontFamily="LexiconD" letterSpacing="0.003em"><tspan x="109" y="39">&lt;4%</tspan></text>
            </g>
            <g data-ag="g4pietext1">
                <text transform="translate(115 70)" fill="#017373" fontSize="16" fontFamily="LexiconD" letterSpacing="0.002em"><tspan x="0" y="0">Digital Spend</tspan></text>
            </g>



            {/* <path data-ag={`g4mask2`} d="" fill="#ffcc00" /> */}

        </svg>


      </div>
      
    );
};

export default Graph4;