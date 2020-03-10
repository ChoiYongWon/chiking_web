import { CountUp } from './countUp.js';

window.onload = function() {
  var countUp = new CountUp('count', 407059,{duration:2.5});
  countUp.start();
}