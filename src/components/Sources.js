import s from '~/src/components/Sources.module.sass'
// import { isValidUrl } from '~/src/utils'

const Sources = (p) => {

	return (
		<div className={s.sources} id={"ag-sources"}>
			<div className={s.hr + ` ag-fromfade ag-fromscale2`} />
			<p className={s.date + ` ag-fromfade`}>{p.data.data}</p>
		</div>
	);
};

export default Sources;