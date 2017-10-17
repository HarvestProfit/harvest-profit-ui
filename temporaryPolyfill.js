// TODO: REMOVE THIS THING, UPDATE JEST!!!

/* eslint-disable no-multi-assign */
const raf = global.requestAnimationFrame = (cb) => {
  setTimeout(cb, 0);
};
/* eslint-enable no-multi-assign */

export default raf;
