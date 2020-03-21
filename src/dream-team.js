module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  
  let letters = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == 'string') {
      letters.push( members[i].trim().toUpperCase().slice(0, 1) );
    } 
  
  }
  return letters.sort().join('');
};