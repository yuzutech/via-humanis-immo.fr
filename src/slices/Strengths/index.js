import styles from './strengths.module.css'
import Image from 'next/image'

/**
 * @typedef {import('@prismicio/client').Content.StrengthsSlice} StrengthsSlice
 * @typedef {import('@prismicio/react').SliceComponentProps<StrengthsSlice>} StrengthsProps
 * @param {StrengthsProps}
 */
const Strengths = ({slice}) => {
  return (
    <section className={styles.container} data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      {slice.items.map((item) => {
        return (
          <div className={styles.item} key={item._key}>
            <Image className={styles.icon} src={item.icon.url} alt={item.icon.alt || ''} width="40" height="40" aria-hidden={true}/>
            <h4 className={styles.title}>{item.title}</h4>
            <p className={styles.description}>{item.description}</p>
          </div>
        )
      })}

    </section>
  )
}

export default Strengths
