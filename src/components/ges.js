import Rating from '@/components/rating.js'

/**
 * Gaz à Effet de Serre (GES) ou Green House Gaz (GHG)
 * @param {string} value
 * @returns {JSX.Element}
 * @constructor
 */
export default function  GreenHouseGas({value}) {
  return <Rating value={(value || '').toLowerCase()} values={{
    a: {bg: '#a3dbfc', fg: '#171717'},
    b: {bg: '#8ab5d2', fg: '#171717'},
    c: {bg: '#7692b1', fg: '#171717'},
    d: {bg: '#5e708d', fg: '#F7F7F7'},
    e: {bg: '#4d5272', fg: '#F7F7F7'},
    f: {bg: '#393550', fg: '#F7F7F7'},
    g: {bg: '#291b35', fg: '#F7F7F7'},
  }}/>
}
