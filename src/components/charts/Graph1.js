import React, { Fragment } from 'react';

import s from '~/src/components/charts/Graph1.module.sass'

const Graph1 = (p) => {





    return (
      <div className={s.graph} data-ag={`graph`} >
        



        <div className={s.box}>
          {
            p.data.map((item, i) => {
                  return (
                      <Fragment key={i}>
                      <div className={s.item} data-id={i}>
                        <div className={s.name} data-ag={`gitemname`} >{item.name}</div>

                        {item.values.length > 0 && (
                          <div className={s.absoluteContainer}>
                            <svg className={s.svgContainer}></svg>
                            <div className={s.flexContainer}>
                              {item.values.map((valueItem, index) => (
                                <div key={index}>
                                  <div className={s.value}>{valueItem.value}</div>
                                  <div>{valueItem.name}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                      </div>
                      {i < p.data.length - 1 && (
                        <svg className={s.arrow} viewBox="0 0 50 50">
                          <polyline points="10,10 40,25 10,40" stroke="black" strokeWidth="2" fill="none" />
                        </svg>
                      )}
                    </Fragment>
                  )
              })
          }
        </div>


       

      </div>
    );
};

export default Graph1;