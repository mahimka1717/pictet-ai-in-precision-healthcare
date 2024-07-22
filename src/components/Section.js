import Text from '~/src/components/Text'
import Art from '~/src/components/Art'

import s from '~/src/components/Section.module.sass'

import Quotes from '~/src/assets/quotes.svg'

const Section = ({ data, dataId }) => {
  
  
  // console.log('section ' + dataId + ' rendered')
  
  return (
		<div className={s.section} data-id={dataId} data-ag={`section`}>
       
        

        {data.map((el, i) => {
          return (
            <div 
              key={i} 
              className={s.textgroup} 
              data-ag="textgroup" 
              data-id={`${dataId}-${i}`} 
            >
              {
                ((dataId === 3 && i === 1) || (dataId === 5 && i === 0) || (dataId === 5 && i === 3)) && <div className={s.svg}><Quotes /></div>
              }
              
              {
                el.map((e, j) => {
                  return <Text key={j} data={e} dataId={`${dataId}-${i}-${j}`}/>
                })
              }
            </div>
          )
        })}

        <Art id={dataId}/>
        
       
		</div>
	);
};

export default Section;