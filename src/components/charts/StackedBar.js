import s from '~/src/components/charts/StackedBar.module.sass'
import gsap from "gsap/dist/gsap";

const StackedBar = (p) => {
    const data = p.data
    const id = p.dataid

    const colors = [ `#E3731A`, `#FFB96C`, `#FFD1A5`, `#893378`, `#AC86A6`, `#7B7B7B` ]
    const yaxis = [0, 100, 200, 300, 400, 500, 600, 700]

    return (
        <div className={s.sbar} data-id={id}>
            <div className={s.box}>
                <div className={s.chart}>

                    <div className={s.greed}>
                        {yaxis.reverse().map((e, i) => { 
                            return <div key={i} className={s.axis}>
                                <p className={s.label} dangerouslySetInnerHTML={{__html: e }} /> 
                            </div>
                        })}
                    </div>

                    <div className={s.field} id={"ag-field"+id}>
                        {data[0].val.map((e, i) => {
                            let year = 17 + i
                            return <div key={i} className={s.bar}>
                                    <div className={s.barvals}>
                                        {data.map((e, j) => {
                                            const col = colors[j]
                                            const height = e.val[i]
                                            return <div key={j} className={s.sbar} style={{backgroundColor: col, height: `${height}px`}} />  
                                        })}
                                    </div>
                                    <p className={s.p} dangerouslySetInnerHTML={{__html: year }} /> 
                                </div>
                        })}
                    </div>

                </div>
            </div>
            <div className={s.legend}>
                {data.map((e, i) => {
                    const col = colors[i]
                    return <div key={i} className={s.name}>
                        <div className={s.color} style={{backgroundColor: col}} />
                        <p className={s.p} dangerouslySetInnerHTML={{__html: e.name }} /> 
                        </div>
                })}
            </div>
        </div>
    );
};

export default StackedBar;