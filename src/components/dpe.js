import Rating from '@/components/rating.js'

/**
 * Diagnostic de performance énergétique (DPE) ou Energy Performance Diagnostics (EPD)
 * @param {string} value
 * @constructor
 */
export default function  DiagnosisEnergyPerformance({value}) {
  return <Rating value={(value || '').toLowerCase()} values={{
    a: "#00a774",
    b: "#00bb54",
    c: "#4ac57b",
    d: "#fdeb00",
    e: "#ffbc00",
    f: "#ff882f",
    g: "#ec0118",
  }}/>
}
