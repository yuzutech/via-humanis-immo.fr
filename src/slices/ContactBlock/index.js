/**
 * @typedef {import('@prismicio/client').Content.ContactBlockSlice} ContactBlockSlice
 * @typedef {import('@prismicio/react').SliceComponentProps<ContactBlockSlice>} ContactBlockProps
 * @param {ContactBlockProps}
 */
const ContactBlock = ({slice}) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for contact_block (variation: {slice.variation})
      Slices
    </section>
  )
}

export default ContactBlock
