import s from '~/src/components/Sources.module.sass'
import { isValidUrl } from '~/src/utils'

const Sources = (p) => {
	return (
		<div className={s.sources} id={"ag-sources"}>
			<ol className={s.ol}>
	        {p.data.data.map((el, i) => 
	         	<li className={`${s.li} ag-fromfade ag-frombottom`} key={i} data-id={i}>
					{ isValidUrl(el.url) && <a target="_blank" rel="noreferrer" href={el.url}>{el.name}</a> }
					{!isValidUrl(el.url) && <span>{el.name}</span> }					
				</li>
	        )}
			</ol>
		</div>
	);
};

export default Sources;