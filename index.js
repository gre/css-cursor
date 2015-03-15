
var cache = {};
var prefix = ["-webkit-", "-moz-"];

function isSupported (value) {
    var a = document.createElement("a");
    a.style.cursor = value;
    return a.style.cursor === value;
}

module.exports = function (value) {
  if (value in cache) return cache[value];
  if (isSupported(value)) return (cache[value] = value);
  for (var p=0; p<prefix.length; ++p) {
    var pvalue = prefix[p]+value;
    if (isSupported(pvalue)) return (cache[value] = pvalue);
  }
  // Value is not supported. undefined is returned.
};
