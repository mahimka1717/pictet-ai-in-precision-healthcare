import s from '~/src/components/Text.module.sass'

const Text = (p) => {
  return (
      <div className={`${s.text} ag-fromfade`} data-id={p.dataId}>

        {
          (p.dataId === "21-1") && <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" 
            width="100px" 
            height="100px" 
            className={s.blank} 
            data-id={p.dataId} 
            alt="" 
          />
        }

        <p dangerouslySetInnerHTML={{__html: p.data.data }} />
        
        {
          (p.dataId === "1-2") && <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" 
            width="100px" 
            height="100px" 
            className={s.blank} 
            data-id={p.dataId} 
            alt="" 
          />
        }

      </div>
	);
};

export default Text;