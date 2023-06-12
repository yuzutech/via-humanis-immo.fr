import Rating from '@/components/rating.js'

/**
 * Gaz à Effet de Serre (GES) ou Green House Gaz (GHG)
 * @param {string} value
 * @returns {JSX.Element}
 * @constructor
 */
export default function  GreenHouseGas({value}) {
  return <Rating value={(value || '').toLowerCase()} values={{
    a: "#a3dbfc",
    b: "#8ab5d2",
    c: "#7692b1",
    d: "#5e708d",
    e: "#4d5272",
    f: "#393550",
    g: "#291b35",
  }}/>
}
