import s from '~/src/components/Graph.module.sass'

import SelectIcon from "~/src/assets/select.svg"

import Pie from "~/src/components/charts/Pie"
import StackedBar from "~/src/components/charts/StackedBar"

import { isValidUrl } from '~/src/utils'


const Graph = (p) => {

	const { id, h3, desc, info, infotouch, data } = p.data	
	let { source } = p.data	
	source = isValidUrl(source) ? `<a target="_blank" href="${source}">${source}</a>` : source

	return (
		<div className={`${s.graph} ag-fromfade`}>
			<div className={s.shadowbox} data-id={id}>
				<figure className={s.figure} data-id={id}>
					
					{
						(!Array.isArray(h3)) && 
						<figcaption className={s.h3} dangerouslySetInnerHTML={{__html: h3 }} />
					}
					
					{
						(desc) && 
						<p className={s.desc} dangerouslySetInnerHTML={{__html: desc }} />
					}
				
					{
						(info && infotouch) && 

						<div className={s.infobox}>
							<SelectIcon />
							<p className={s.info} dangerouslySetInnerHTML={{__html: info }} />
							<p className={s.infotouch} dangerouslySetInnerHTML={{__html: infotouch }} />
						</div>
					}

					{ (id===0)&&<Pie data={data} dataid={0}/> }
					{ (id===1)&&<StackedBar data={data} dataid={0} /> }
					{ (id===2)&&<Pie data={data} dataid={1}/> }
					{ (id===3)&& 
						<div className={s.columns}>
							<div className={s.column}>
								<figcaption className={s.h3} dangerouslySetInnerHTML={{__html: h3[0] }} />
								<Pie data={data[0]} dataid={2}/>
							</div>
							<div className={s.line}></div>
							<div className={s.column}>
								<figcaption className={s.h3} dangerouslySetInnerHTML={{__html: h3[1] }} />
								<Pie data={data[1]} dataid={3}/>
							</div>
						</div>
					}

					{
						(source) && 
						<p className={s.source} dangerouslySetInnerHTML={{__html: 'Source: ' + source }} />
					}

				</figure>

			</div>
		</div>
	);
};

export default Graph;