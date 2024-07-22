import s from '~/src/components/charts/Graph0.module.sass'

// import G0 from '~/src/assets/g0.svg'

const Graph0 = (p) => {



  const pathData = p.data.map((item, i) => {
    const x = (i / (p.data.length - 1)) * 100; // Scale x based on the total number of data points
    const y = 100 - (100 * item.value / 427.5);
    return `${x},${y}`;
  }).join(' ');

  // const pathData = p.data.map((item, i, arr) => {
  //   const x = (i / (arr.length - 1)) * 100;
  //   const y = 100 - (100 * item.value / 427.5);
  
  //   if (i === 0) {
  //     return `M ${x},${y}`;
  //   } else {
  //     const prevX = ((i - 1) / (arr.length - 1)) * 100;
  //     const prevY = 100 - (100 * arr[i - 1].value / 427.5);
  //     const nextX = (i === arr.length - 1) ? x : ((i + 1) / (arr.length - 1)) * 100;
  //     const nextY = (i === arr.length - 1) ? y : 100 - (100 * arr[i + 1].value / 427.5);
  //     const cp1x = prevX + (nextX - prevX) / 3;
  //     const cp1y = prevY + (nextY - prevY) / 3;
  //     const cp2x = prevX + 2 * (nextX - prevX) / 3;
  //     const cp2y = prevY + 2 * (nextY - prevY) / 3;
  
  //     return `C ${cp1x},${cp1y} ${cp2x},${cp2y} ${x},${y}`;
  //   }
  // }).join(' ');



    return (
      <div className={s.graph} data-ag={`graph`}>
        
        <div className={s.legend} data-ag={`glegend`}>
            {
                p.legend.map((item, i) => {
                    return (
                        <div key={i} className={s.country} data-id={i}>
                            <div className={s.text}>{item}</div>
                        </div>
                    )
                })
            }  
        </div>  

        <div className={s.box}>
          <div className={s.yaxis} data-ag={`g0yaxis`}>{p.yaxis}</div>

          <svg className={s.g0} viewBox="0 0 100 100" preserveAspectRatio="none">
            <polyline points={pathData} fill="none" stroke="#804940" vectorEffect="non-scaling-stroke" strokeWidth="2" />
            {/* <path d={pathData} fill="none" stroke="#804940" vectorEffect="non-scaling-stroke" strokeWidth="2" /> */}
          </svg>

          <div className={s.values}>
          {   
              p.data.map((item, i) => {
                return (
                  <div key={i} className={s.value} data-ag={`g0value`} >
                    {/* <span>{item.value}</span> */}
                   
                    {
                      (i % 4 === 0) && <div className={s.dot} style={{bottom: `${ 100*item.value/427.5 }%`}}></div>
                    }

                    <div className={s.bar} style={{height: `${ 100*item.value/427.5 }%`}}></div>
                  </div>
                )
              }) 
          }
          </div>

          <div className={s.years}>
          {
              p.data.map((item, i) => {
                return (
                  <div key={i} className={s.year} data-ag={`g0year`}>
                    {item.year}
                  </div>
                )
              }) 
          }
          </div>
          
        </div>

      </div>
    );
};

export default Graph0;