import s from '~/src/components/charts/Graph0.module.sass'

// import Arrow from '~/src/assets/g0arrow.svg'

const Graph0 = (p) => {

    return (
      <div className={s.box} data-id={0} data-ag={"g0"}>
        {
            p.data.map((item, index) => {
                
              let k = item.val/35
              
              return (
                    <div key={index} className={s.item} data-id={index}>
                        <div className={s.name} data-ag={`g0name`}>
                          {item.name}
                        </div>
                        <div className={s.val}>
                            <div className={s.valbox} style={{width: k*100+`%`}}>
                              <div className={s.bar} data-ag={`g0bar`} />
                              <div className={s.span} data-ag={`g0val`}>{item.val + `%`}</div>

                              {
                              (index === 0) && <div className={s.legend} data-ag={`g0legend`}>
                                                {/* <Arrow /> */}

                                                <svg xmlns="http://www.w3.org/2000/svg" width="73.841" height="94.371" viewBox="0 0 73.841 94.371">
                                                  <defs>
                                                    <clipPath id="g0mask"><rect data-ag="g0mask" width="74" height="94" fill="none"/></clipPath>
                                                  </defs>
                                                  <g clipPath="url(#g0mask)">
                                                    <g transform="translate(30.3 93.079) rotate(-111)">
                                                      <path d="M0,0A45.256,45.256,0,0,0,45.256,45.256,45.17,45.17,0,0,0,80.539,28.343" transform="translate(0 0)" fill="none" stroke="#017373" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                                                      <path d="M7.253,7.253V0H0" transform="translate(73.326 28.106)" fill="none" stroke="#017373" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                                                    </g>
                                                  </g>
                                                </svg>

                                                <span>{`35%`}</span>
                                                <p dangerouslySetInnerHTML={{ __html: p.info }} />
                                              </div>
                              }
                            </div>
                        </div>
                    </div>
                )
            })
        }

        <div className={s.line} />

      </div>
    );
};

export default Graph0;