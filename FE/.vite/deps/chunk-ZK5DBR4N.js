import {
  defaultTheme_default,
  identifier_default,
  useTheme_default
} from "./chunk-EKRZK5VT.js";
import {
  require_react
} from "./chunk-5TQB74YF.js";
import {
  __toESM
} from "./chunk-TIUEEL27.js";

// node_modules/@mui/material/styles/useTheme.js
var React = __toESM(require_react());
function useTheme() {
  const theme = useTheme_default(defaultTheme_default);
  if (true) {
    React.useDebugValue(theme);
  }
  return theme[identifier_default] || theme;
}

// node_modules/@mui/material/styles/getOverlayAlpha.js
var getOverlayAlpha = (elevation) => {
  let alphaValue;
  if (elevation < 1) {
    alphaValue = 5.11916 * elevation ** 2;
  } else {
    alphaValue = 4.5 * Math.log(elevation + 1) + 2;
  }
  return (alphaValue / 100).toFixed(2);
};
var getOverlayAlpha_default = getOverlayAlpha;

export {
  useTheme,
  getOverlayAlpha_default
};
//# sourceMappingURL=chunk-ZK5DBR4N.js.map
