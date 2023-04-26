import s from '~/src/components/charts/Graph1.module.sass'

const Graph1 = (p) => {
    return (
      <div className={s.box} data-id={1} data-ag={"g1"}>
        {
            p.data.map((item, index) => {
                return (
                    <div key={index} className={s.item} data-id={index} data-ag={"g1item"}>
                        <div className={s.bar} data-id={index} style={{height: item  + `%`}}>
                            <div className={s.barr} data-ag={'g1bar'}/>
                            <div className={s.val} data-ag={'g1val'}>{item + `%`}</div>
                        </div>
                   
                        <div className={s.year} data-ag={'g1year'}>
                            <span className='ag-mobile' dangerouslySetInnerHTML={{ __html: (2006 + index).toString().slice(2)}} />
                            <span className='ag-desktop' dangerouslySetInnerHTML={{ __html: 2006 + index}} />
                        </div>
                    </div>
                )
            })
        }

        <div className={s.line} />
        {/* <Arrow /> */}


        <svg xmlns="http://www.w3.org/2000/svg" width="537.597" height="74.432" viewBox="0 0 537.597 74.432">
        <defs>
            <clipPath id="g1mask"><rect data-ag="g1mask" width="537.597" height="74.432" fill="none"/></clipPath>
        </defs>
        <g clipPath="url(#g1mask)">
        <g transform="translate(0 -6)" >
            <path d="M0,79.932H322.429a237.181,237.181,0,0,0,87.614-16.776l126.9-50.445" fill="none" stroke="#707070" strokeWidth="1"/>
            <path d="M507.992.461l15.2,6.419-6.419,15.2" transform="translate(13.745 6)" fill="none" stroke="#707070" strokeWidth="1"/>
        </g>
        </g>
        </svg>




      </div>
      
    );
};

export default Graph1;