import s from '~/src/components/Text.module.sass'

const Text = ({data, dataId}) => {
  
  return (
      <div className={s.text} data-ag={`text`} data-id={dataId}>
        <p dangerouslySetInnerHTML={{__html: data }} />
      </div>
	);
};

export default Text;