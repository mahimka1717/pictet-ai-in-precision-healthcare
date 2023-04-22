import Text from '~/src/components/Text'
import Graph from '~/src/components/Graph'
import Quote from '~/src/components/Quote'
import Img from '~/src/components/Image'

import s from '~/src/components/Columns.module.sass'

const Columns = (p) => {
	
    // console.log(p.data.data)

    // p.data.data.map((el, i) => {
    //     el.data.map((e, j) => {
    //         console.log(e)
    //     })
    // })
    
    return (
		<div className={s.container}>
        {
            p.data.data.map((el, i) => {
                return (
                    <div key={i} className={s.column} data-id={i}>
                    {
                        el.data.map((e, j) => {
                            switch (e.type) {
                            case 'text':
                                return <Text key={j} data={e} />
                            case 'graph':  
                                return <Graph key={j} data={e} />
                            case 'quote':  
                                return <Quote key={j} data={e} /> 
                            case 'image':
                                return <Img key={j} data={e} />
                            default:
                                return null
                            }
                        })
                    }
                    </div>
                )
            })
        } 
		</div>
	);
};

export default Columns;








