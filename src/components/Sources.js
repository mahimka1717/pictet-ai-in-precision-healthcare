import s from '~/src/components/Sources.module.sass'
// import { isValidUrl } from '~/src/utils'

const Sources = (p) => {
	return (
		<div className={s.sources} id={"ag-sources"}>
			<div className={s.hr} />
			{/* <div className={s.date}>{p.data.data}</div> */}
		</div>
	);
};

export default Sources;