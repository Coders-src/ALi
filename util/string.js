const list = new Intl.ListFormat('en');

function textTruncate(str = '', length = 100, end = '...'){
  return String(str).substring(0, length - end.length) + (str.length > length ? end : '');
};

function truncate(...options){
  return textTruncate(...options);
};

/**
 * Appends ordinal suffixes to input numbers. Max input before failing is 10e307
 * @param {number|string} n the Number to append ordinal suffix to
 * @example ordinalize(10) -> returns `10th`; ordinalize(22) -> returns `22nd`
 * @returns {string} Ordinalized number
 * @note Does not support negative numbers!
 */
function ordinalize(n = 0){
  return Number(n)+[,'st','nd','rd'][n/10%10^1&&n%10]||Number(n)+'th';
};

function commatize(number, maximumFractionDigits = 2){
  return Number(number || '')
  .toLocaleString('en-US', { maximumFractionDigits });
};

function compactNum(number, maximumFractionDigits = 2){
  return Number(number || '')
  .toLocaleString('en-US', {
    notation: 'compact', maximumFractionDigits
  });
};

function joinArray(array = []){
  return list.format(array.map(x => String(x)));
};

function joinArrayAndLimit(array = [], limit = 1000, connector = '\n'){
  return array.reduce((a,c,i,x) => a.text.length + String(c).length > limit
  ? { text: a.text, excess: a.excess + 1 }
  : { text: a.text + (!!i ? connector : '') + String(c), excess: a.excess }
  , { text: '', excess: 0});
};

function clean(text){
  return String(text).replace(/`/g, `\`${String.fromCharCode(8203)}`).replace(/@/g, `@${String.fromCharCode(8203)}`)
};

module.exports = {
  textTruncate,
  truncate,
  ordinalize,
  commatize,
  compactNum,
  joinArray,
  joinArrayAndLimit,
  clean
};
