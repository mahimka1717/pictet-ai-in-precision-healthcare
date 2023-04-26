import s from '~/src/components/charts/Graph0.module.sass'

import Arrow from '~/src/assets/g0arrow.svg'

const Graph0 = (p) => {

    return (
      <div className={s.box} data-id={0} data-ag={"g0"}>
        {
            p.data.map((item, index) => {
                return (
                    <div key={index} className={s.item} data-id={index}>
                        <div className={s.name} data-ag={`g0name`}>
                          {item.name}
                        </div>
                        <div className={s.val} style={{width: item.val  + `%` }}>
                            <div className={s.bar} data-ag={`g0bar`} />
                            <div className={s.span} data-ag={`g0val`}>{item.val + `%`}</div>
                        </div>
                    </div>
                )
            })
        }

        <div className={s.line} />
        <div className={s.legend} data-ag={`g0legend`}>
          <Arrow />
          <span>{`35%`}</span>
          <p dangerouslySetInnerHTML={{ __html: p.info }} />
        </div>
      </div>
    );
};

export default Graph0;