import s from '~/src/components/Graph.module.sass'

import Graph0 from "~/src/components/charts/Graph0"
import Graph1 from "~/src/components/charts/Graph1"
import Graph2 from "~/src/components/charts/Graph2"

import { isValidUrl } from '~/src/utils'



const Graph = (p) => {

	const { id, h3, desc, desct, info, legend, yaxis, data } = p.data	
	let { source } = p.data	
	source = isValidUrl(source) ? `<a target="_blank" href="${source}">${source}</a>` : source

	return (
		<div className={`${s.graph} ag-fromfade`} data-id={id}>
			<div className={s.shadowbox} data-id={id} data-ag={`shadowbox`}>
				<figure className={s.figure} data-id={id}>
					
					{
						<figcaption className={s.h3} data-ag={`gheader`} dangerouslySetInnerHTML={{__html: h3 }} />
					}
					
					{
						(desc) && 
						<div className={s.desc} data-ag={`gdesc`}>
							<p dangerouslySetInnerHTML={{__html: desc }} />
						</div>
					}

					{ (id===0)&&<Graph0 data={data} legend={legend} /> }
					{ (id===1)&&<Graph1 data={data} legend={legend} /> }
					{ (id===2)&&<Graph2 data={data} legend={legend} /> }

					{
						(source) && 
						<div className={s.source} data-ag={`gsource`} dangerouslySetInnerHTML={{__html: 'Source: ' + source }} />
					}

				</figure>
				
			</div>

		</div>
	);
};

export default Graph;