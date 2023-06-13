import {PrismicNextImage} from '@prismicio/next'
import {PrismicRichText} from '@prismicio/react'
import clsx from 'clsx'

import styles from './newsBlock.module.css'

export default function NewsBlock({data, className}) {
  return (<div className={clsx(styles.container, className)}>
    <div className={styles.content}>
      <div className={styles.illustration}>
        <PrismicNextImage field={data.illustration} width="120px" height="120px"/>
      </div>
      <div className={styles.main}>
        <h3 className={styles.title}>{data.title}</h3>
        <div className={styles.text}>
          <PrismicRichText
            field={data.text}
            components={{
              paragraph: ({children}) => <p className={styles.paragraph}>{children}</p>,
            }}/>
        </div>
      </div>
    </div>
  </div>)
}
