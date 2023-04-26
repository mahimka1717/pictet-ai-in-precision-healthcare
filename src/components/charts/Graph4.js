import s from '~/src/components/charts/Graph4.module.sass'

import Pie from '~/src/assets/g4pie.svg'

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
        <Pie />
      </div>
      
    );
};

export default Graph4;