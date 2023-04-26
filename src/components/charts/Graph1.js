import s from '~/src/components/charts/Graph1.module.sass'

import Arrow from '~/src/assets/g1arrow.svg'

const Graph1 = (p) => {
    return (
      <div className={s.box} data-id={1} data-ag={"g1"}>
        {
            p.data.map((item, index) => {
                return (
                    <div key={index} className={s.item} data-id={index} data-ag={"g1item"}>
                        <div className={s.bar} data-id={index} style={{height: item  + `%`}}>
                            <div className={s.barr} data-ag={'g1bar'}/>
                            <div className={s.val} data-ag={'g1val'}>{item + `%`}</div>
                        </div>
                        <div className={s.year} data-ag={'g1year'}>{2006 + index}</div>
                    </div>
                )
            })
        }

        <div className={s.line} />
        <Arrow />
      </div>
      
    );
};

export default Graph1;