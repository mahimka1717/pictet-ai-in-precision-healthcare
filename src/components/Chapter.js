import Columns from '~/src/components/Columns' 
import Text from '~/src/components/Text'
import Graph from '~/src/components/Graph'
import Quote from '~/src/components/Quote'
import Img from '~/src/components/Image'
import Art from '~/src/components/Art'

import s from '~/src/components/Chapter.module.sass'


const Chapter = (p) => {
  
  return (
		<div className={s.chapter} data-id={p.dataId}>
        
        {p.data.h2 !== "" &&
          <div className={`${s.h2} ag-fromfade ag-fromright`}>
            <h2>{p.data.h2}</h2>
          </div>
        } 

        {p.dataId === 1 &&
          <div className={s.start}></div>
        } 

        {p.data.data.map((el, i) => {
          switch (el.type) {
            case 'columns':
              return <Columns key={i} data={el} />
            case 'text':
              return <Text key={i} data={el} dataId={`${p.dataId}-${i}`}/>
            case 'graph':  
              return <Graph key={i} data={el} />
            case 'quote':  
              return <Quote key={i} data={el} /> 
            case 'image':
              return <Img key={i} data={el} />
            case 'art':
              return <Art key={i} data={el} />
            default:
              return null
          }
        })}

		</div>
	);
};

export default Chapter;