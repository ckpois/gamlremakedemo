export const getScreenWidth = () => {
  return window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
};
export const getScreenHeight = () => {
  return window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
};
export const getLightColor = (col) => {
  if (col[0] === '#') {
    let _s = col.slice(1);
    if (_s.length === 3) {
      _s = _s[0] + _s[0] + _s[1] + _s[1] + _s[2] + _s[2];
    }
    const _rgb_arr = [
      Number.parseInt(`${_s[0]}${_s[1]}`, 16),
      Number.parseInt(`${_s[2]  }${  _s[3]}`, 16),
      Number.parseInt(`${_s[4]  }${  _s[5]}`, 16)
    ];
    devLog('getLightColor1:', col, ':', _rgb_arr.join(','));
    col = `rgb(${  _rgb_arr.join(',')  })`;
  }
  let _st = col.slice(Math.max(0, col.indexOf('(') + 1));
  _st = _st.slice(0, Math.max(0, _st.indexOf(')')));
  const _rgb_string = _st.split(',');
  if (_rgb_string.length >= 3) {
    const _rgb_number = [
      Math.round(Number.parseInt(_rgb_string[0]) * 0.9),
      Math.round(Number.parseInt(_rgb_string[1]) * 0.9),
      Math.round(Number.parseInt(_rgb_string[2]) * 0.9)
    ];
    devLog('getLightColor2:', col, ':', _rgb_number.join(','));
    this.borderColor = `rgb(${  _rgb_number.join(',')  }, 0.3)`;
    return this.borderColor;
  } else {
    this.borderColor = col;
    return col;
  }
};
export const getTextSize = (text) => {
  let width = 0;
  for (const _thisChar of text) {
    const _charCode = _thisChar.charCodeAt(0);
    if (_charCode < 0 || _charCode > 255) {
      width += 2;
    } else {
      width++;
    }
  }
  return width;
};

export const mergeRGObject = (oldObj, newObj) => {
  Object.keys(newObj).forEach(key => {
    oldObj[key] = newObj[key];
  });
  return oldObj;
};

export let isSupportTouch = false;
const isSupportTouchCheck = () => {
  try {
    document.createEvent('TouchEvent');
    isSupportTouch = true;
  } catch {
    // xx
  }
};
isSupportTouchCheck();
export const devLog = (...args) => {
  if ((typeof window !== 'undefined' && window.relationGraphDebug))console.log('[relation-graph:debug]', ...args);
};
