const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let num1 = parseFloat(sampleActivity);
  let num = Math.log(MODERN_ACTIVITY / num1);
  let num2 = 0.693 / HALF_LIFE_PERIOD;
  let num3 = num / num2;
  let number = Math.ceil(num3);
  if (!isFinite(number) || number < 1 || typeof sampleActivity !== 'string') {
    return false;
  }
  return number;
};
