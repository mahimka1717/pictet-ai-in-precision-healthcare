import Text from '~/src/components/Text'
import Graph from '~/src/components/Graph'
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

        {p.data.data.map((el, i) => {
          switch (el.type) {
            case 'text':
              return <Text key={i} data={el} dataId={`${p.dataId}-${i}`}/>
            case 'graph':  
              return <Graph key={i} data={el} />
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