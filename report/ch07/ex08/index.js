/* eslint-disable prefer-const */
function reverseGraphemes(str) {
  const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
  const graphemes = Array.from(segmenter.segment(str), (s) => s.segment);
  return graphemes.reverse().join("");
}

let original = "家族 👨‍👨‍👧‍👧";
console.log(original);
console.log(reverseGraphemes(original)); // "👨‍👨‍👧‍👧 族家"
