/**
 * A helper function to be used to access random index positions in your new property arrays.
 * @param {Integer} min Minimum number you want to begin at
 * @param {Integer} max Maximum number you want to hit
 * @returns {Integer}
 */
export default function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
