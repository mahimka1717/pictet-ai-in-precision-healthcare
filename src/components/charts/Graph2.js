import s from '~/src/components/charts/Graph2.module.sass'

import Icon0 from '~/src/assets/g2icon0.svg'
import Icon1 from '~/src/assets/g2icon1.svg'
import Icon2 from '~/src/assets/g2icon2.svg'
import Icon3 from '~/src/assets/g2icon3.svg'
import Icon4 from '~/src/assets/g2icon4.svg'
import Icon5 from '~/src/assets/g2icon5.svg'
import Icon6 from '~/src/assets/g2icon6.svg'


const Graph2= (p) => {

    return (
      <div className={s.box} data-id={2} data-ag={"g2"}>
        {
            p.data.map((item, index) => {
                return (
                    <div key={index} className={s.item} data-id={index} data-ag={`g2item`}>
                        <div className={s.icon} data-ag={'g2icon'}>
                            {(index===0) && (<Icon0 />)}
                            {(index===1) && (<Icon1 />)}
                            {(index===2) && (<Icon2 />)}
                            {(index===3) && (<Icon3 />)}
                            {(index===4) && (<Icon4 />)}
                            {(index===5) && (<Icon5 />)}
                            {(index===6) && (<Icon6 />)}
                        </div>
                        <div className={s.name} data-id={index}>
                            <div className={s.bar} data-ag={`g2bar`}/>
                            <span data-ag={`g2name`}>{item.name}</span>
                        </div>
                        <div className={s.value} data-ag={`g2val`}>{item.val + `%`}</div>
                    </div>
                )
            })
        }
      </div>
      
    );
};

export default Graph2;