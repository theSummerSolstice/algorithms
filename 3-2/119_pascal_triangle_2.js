/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const dic = {};
  dic[0] = [1];
  dic[1] = [1, 1];

  function getArray(index) {
    if (dic[index]) return dic[index];

    for (let i = 0; i <= index; i++) {
      if (dic[i]) {
        continue;
      } else {
        dic[i] = new Array(i + 1).fill(1).reduce((acc, curr, idx) => {
          if (idx === 0 || idx === i) {
            acc.push(1);
          } else {
            acc.push(dic[i - 1][idx - 1] + dic[i - 1][idx]);
          }
          return acc;
        }, []);
      }
    }

    return dic[index];
  }

  return getArray(rowIndex);
};
