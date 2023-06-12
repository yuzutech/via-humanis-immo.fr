import Rating from '@/components/rating.js'

/**
 * Diagnostic de performance énergétique (DPE) ou Energy Performance Diagnostics (EPD)
 * @param {string} value
 * @constructor
 */
export default function  DiagnosisEnergyPerformance({value}) {
  return <Rating value={(value || '').toLowerCase()} values={{
    a: {bg: '#00a774', fg: '#171717'},
    b: {bg: '#00bb54', fg: '#171717'},
    c: {bg: '#4ac57b', fg: '#171717'},
    d: {bg: '#fdeb00', fg: '#171717'},
    e: {bg: '#ffbc00', fg: '#171717'},
    f: {bg: '#ff882f', fg: '#171717'},
    g: {bg: '#ec0118', fg: '#F7F7F7'},
  }}/>
}
