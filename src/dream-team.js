module.exports = function createDreamTeam(members) {
  let arr = [];
  if (members === null || members === undefined) {
    return false;
  }
  for (i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      arr.push(members[i].trim());
    }
  }
  let str = '';
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      str += arr[i].slice(0, 1);
    }
  }
  let result = str.toUpperCase().split('').sort().join('');
  return result;
};
// remove line with error and write your code here
