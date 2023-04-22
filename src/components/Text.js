import s from '~/src/components/Text.module.sass'

const Text = (p) => {
  return (
      <div className={`${s.text} ag-fromfade`} data-id={p.dataId}>
        <p dangerouslySetInnerHTML={{__html: p.data.data }} />
      </div>
	);
};

export default Text;