import s from '~/src/components/Graph.module.sass'

import Graph0 from "~/src/components/charts/Graph0"
import Graph1 from "~/src/components/charts/Graph1"
import Graph2 from "~/src/components/charts/Graph2"
import Graph3 from "~/src/components/charts/Graph3"
import Graph4 from "~/src/components/charts/Graph4"

import { isValidUrl } from '~/src/utils'


const Graph = (p) => {

	const { id, h3, desc, info, legend, data } = p.data	
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

					{ (id===0)&&<Graph0 data={data} info={info}/> }
					{ (id===1)&&<Graph1 data={data} /> }
					{ (id===2)&&<Graph2 data={data} /> }
					{ (id===3)&&<Graph3 data={data} legend={legend} info={info} />}
					{ (id===4)&&<Graph4 data={data} /> }

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