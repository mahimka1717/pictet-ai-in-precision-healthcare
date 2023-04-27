import s from '~/src/components/charts/Graph3.module.sass'

const colors = [
  `#017373`,
  `#0A2D6E`,
  `#5F143C`,
  `#2E2E2E`,
  `#15C0C0`,
  `#4F7AC8`,
  `#CD71A2`,
  `#958B8B`
]

const years = [ `2017`, `2018`, `2019`, `2020`, `2021`, `2022`, `2023`, `2024`, `2025`, `2026`, `2027`, `2028`, `2029`, `2030`]
const percents = [ `25`, `20`, `15`, `10`, `5`, `0`, `-5`, `-10`]

const Graph3 = (p) => {

    return (
      <div className={s.box} data-id={3} data-ag={"g3"}>

        <div className={s.graph}>

          <div className={s.gbox} data-ag={`g3box`}>
            <div className={s.svgbox}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              preserveAspectRatio="none"
              // width="570.259" 
              // height="258.047" 
              viewBox="0 0 570.259 258.047"
            >
              <defs>
                <clipPath id="g3mask0"><rect data-ag="g3mask" data-id="0" width="570.259" height="258.047" fill="none"/></clipPath>
                <clipPath id="g3mask1"><rect data-ag="g3mask" data-id="1" width="570.259" height="258.047" fill="none"/></clipPath>
                <clipPath id="g3mask2"><rect data-ag="g3mask" data-id="2" width="570.259" height="258.047" fill="none"/></clipPath>
                <clipPath id="g3mask3"><rect data-ag="g3mask" data-id="3" width="570.259" height="258.047" fill="none"/></clipPath>
                <clipPath id="g3mask4"><rect data-ag="g3mask" data-id="4" width="570.259" height="258.047" fill="none"/></clipPath>
                <clipPath id="g3mask5"><rect data-ag="g3mask" data-id="5" width="570.259" height="258.047" fill="none"/></clipPath>
                <clipPath id="g3mask6"><rect data-ag="g3mask" data-id="6" width="570.259" height="258.047" fill="none"/></clipPath>
                <clipPath id="g3mask7"><rect data-ag="g3mask" data-id="7" width="570.259" height="258.047" fill="none"/></clipPath>
              </defs>

              <path d="M0,0H569.786" transform="translate(0.473 185.033)" fill="none" stroke="#707070" strokeWidth="1"/>
              <g opacity="0.5">
                  <line x2="570.088" transform="translate(0.171 149.166)" fill="none" stroke="#707070" strokeMiterlimit="10" strokeWidth="1"/>
                  <line x2="570.088" transform="translate(0.171 112)" fill="none" stroke="#707070" strokeMiterlimit="10" strokeWidth="1"/>
                  <line x2="570.088" transform="translate(0.171 74.833)" fill="none" stroke="#707070" strokeMiterlimit="10" strokeWidth="1"/>
                  <line x2="570.088" transform="translate(0.171 37.667)" fill="none" stroke="#707070" strokeMiterlimit="10" strokeWidth="1"/>
                  <line x2="570.088" transform="translate(0.171 0.5)" fill="none" stroke="#707070" strokeMiterlimit="10" strokeWidth="1"/>
                  <line x2="570.088" transform="translate(0 257.547)" fill="none" stroke="#707070" strokeMiterlimit="10" strokeWidth="1"/>
                  <line x2="570.088" transform="translate(0 220.381)" fill="none" stroke="#707070" strokeMiterlimit="10" strokeWidth="1"/>
              </g>
              <g clipPath="url(#g3mask0)">
                <path data-ag="g3path" d="M617.366,150.239,575.958,159.6l-41.325,9.01-41.022,8.317-41.282,5.891-41.238,4.158-81.654,5.545-40.325,2.772-41.2,2.08-41.325-1.387-40.546,1.04-41.325-1.733-42.458.547" transform="translate(-62.821 -11.122)" fill="none" stroke="#017373" strokeMiterlimit="10" strokeWidth="2"/>
              </g>

              <g clipPath="url(#g3mask1)">
                <path data-ag="g3path" d="M82.267,195.289l42.455,11.089,41.325,12.129,40.545,10.4,41.325,7.277,41.2,2.079,40.325-.693,40.656-7.624,41-12.822,41.239-19.406,41.282-27.377,41.022-36.04,41.325-39.506,41.408-48.516" transform="translate(-62.821 -11.122)" fill="none" stroke="#0a2d6e" strokeMiterlimit="10" strokeWidth="2"/>
              </g>
              <g clipPath="url(#g3mask2)">
                <path data-ag="g3path" d="M82.267,195.289l42.455,6.584,41.325,6.931,40.545,5.545,41.325,3.812,41.2.693,40.325-1.733,40.656-5.545,41-9.7,41.239-13.515,41.282-21.832,41.022-26.684,41.325-33.614L617.367,63.6" transform="translate(-62.821 -11.122)" fill="none" stroke="#5f143c" strokeMiterlimit="10" strokeWidth="2"/>
              </g>
              <g clipPath="url(#g3mask3)">
              <path data-ag="g3path" d="M82.3,196.038l42.419-3.175,41.325,1.04h40.545l41.325-2.079,41.2-4.159,40.325-3.812,40.656-3.119,41-5.2,41.239-4.851,41.282-6.238,41.022-6.238,41.325-6.584,41.408-7.971" transform="translate(-62.821 -11.122)" fill="none" stroke="#2e2e2e" strokeMiterlimit="10" strokeWidth="2"/>
              </g>
              <g clipPath="url(#g3mask4)">
              <path data-ag="g3path" d="M617.366,168.952l-41.408,4.158-41.325.694-41.022,3.465-41.282,3.119-41.238,2.079-41,2.772-40.657,1.733-40.325,4.5-41.2,2.079-41.325-.346-40.546.346-41.325-.346-42.448,2.775" transform="translate(-62.821 -11.122)" fill="none" stroke="#15c0c0" strokeMiterlimit="10" strokeWidth="2"/>
              </g>
              <g clipPath="url(#g3mask5)">
              <path data-ag="g3path" d="M82.21,196.1l42.512-.813,41.325.346,40.545.347,41.325.346,41.2-1.039,40.325-.694,40.656-2.425,41-5.2,41.239-6.931,41.282-5.545,41.022-8.317,41.325-10.4,41.408-12.129" transform="translate(-62.821 -11.122)" fill="none" stroke="#4f7ac8" strokeMiterlimit="10" strokeWidth="2"/>
              </g>

              <g clipPath="url(#g3mask6)">
              <path data-ag="g3path" d="M617.366,147.12l-41.408,14.9-41.325,10.4-41.022,7.623-41.282,9.011L411.091,193.9l-41,4.5-40.657,1.733-40.325.693-41.2-.693-41.325-.693-40.546-.693-41.325-1.04-42.337-1.968" transform="translate(-62.821 -11.122)" fill="none" stroke="#cd71a2" strokeMiterlimit="10" strokeWidth="2"/>
              
              </g>
              <g clipPath="url(#g3mask7)">
              <path data-ag="g3path" d="M617.366,162.368,575.958,169.3l-41.325,5.891-41.022,5.891-41.282,2.773-41.238,3.118-41,1.733-40.657,1.733-40.325,2.426-41.2.693-41.325,1.386-40.546.346-41.325-.346-42.359,1.071" transform="translate(-62.821 -11.122)" fill="none" stroke="#958b8b" strokeMiterlimit="10" strokeWidth="2"/>
              </g>

            </svg>
            </div>

            <div className={s.years}>
              {
                years.map((d,i) => {
                  return (
                    <div key={i} className={s.year}>
                      <span className='ag-mobile' dangerouslySetInnerHTML={{ __html: d.slice(d.length - 2)}} />
                      <span className='ag-desktop' dangerouslySetInnerHTML={{ __html: d}} />
                    </div>
                  )
                })
              }
            </div>

            <div className={s.percents}>
              {
                percents.map((d,i) => {
                  return (
                    <div key={i} className={s.percent}>{d}</div>
                  )
                })
              }
            </div>

            <div className={s.info} data-ag={`g3info`}>{p.info}</div>

          </div>


        </div>




        <div className={s.legend}>
        {
          p.legend.map((d,i) => {
            return (
              <div key={i} className={s.legendItem} data-ag={`g3legenditem`} data-id={i}>
                <div className={s.color} style={{backgroundColor: colors[i]}} data-ag={`g3color`}></div>
                <div className={s.label} data-ag={`g3label`}>{d}</div>
              </div>
            )
          })
        }
        </div>

      </div>
      
    );
};

export default Graph3;