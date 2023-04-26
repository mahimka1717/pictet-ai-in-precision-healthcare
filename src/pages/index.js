import packageJson from '~/package.json'
import data from '~/src/data/data.json'

import React, { useState, useEffect } from 'react';

import Head from 'next/head'

import gs from '~/src/pages/global.sass'
import as from '~/src/styles/utils/_animate.sass'
import s from '~/src/pages/index.module.sass'

import Hero from "~/src/components/Hero"
import Chapter from "~/src/components/Chapter"
import Sources from "~/src/components/Sources"

import { initPage } from '../components/initPage';

export default function Home() {  
  
  useEffect(() => {
    initPage()
  },[]);

  return (
    <>
        <Head>
          <title>{packageJson.name}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/png" href="https://www.ft.com/__origami/service/image/v2/images/raw/ftlogo-v1%3Abrand-ft-logo-square-coloured?source=update-logos&amp;width=32&amp;height=32&amp;format=png" sizes="32x32" />
        </Head>

        <div id="ag-infographic">

          <article className={s.main}>
            {data.content.map((el, i) => {
              switch (el.type) {
                case 'hero':
                  return <Hero key={i} data={el} />;
                case 'chapter':
                  return <Chapter key={i} data={el} dataId={i}/>;
                case 'sources':
                  return <Sources key={i} data={el} />;        
              }
            })}
          </article>

          {/* <img alt="" className={s.tmp} src="img/xd.jpg" /> */}

        </div>
    </>
  )
}