const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let activity = parseFloat(sampleActivity); 
  if (typeof sampleActivity !== 'string' 
  || activity >= MODERN_ACTIVITY
  || !isFinite(activity) 
  || activity <= 0
  || !sampleActivity) {
    return false;
  }
  let k = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil( Math.log(MODERN_ACTIVITY / activity) / k );
};
