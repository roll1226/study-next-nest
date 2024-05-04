import { FIGMA_HEIGHT_PX, FIGMA_WIDTH_PX, MAX_WIDTH } from "@/consts/aspect";

export type pxStr = `${number}px`;

/**
 * MAX_WIDTHの時のwidthの値を算出する
 */
export const calculateMaxWidth = (px: number | pxStr) => {
  const numPx = typeof px === "string" ? Number(px.replace("px", "")) : px;
  const figmaWidthRatio = numPx / FIGMA_WIDTH_PX;

  return `${figmaWidthRatio * MAX_WIDTH}px`;
};

/**
 * Figma の画面設計で指定されている px を、画面設計上の height (900px) 準拠でvh に変換し、
 * 画面サイズが 1440px 以上だったら px, それ未満だったら vw になるような
 * css の min 関数を返却する
 * @param {number | pxStr} px - number | '${number}px'
 * @returns {string}
 */
export const calculateMinSizeBasedOnFigmaHeight = (
  px: number | pxStr
): string => {
  const numPx = typeof px === "string" ? Number(px.replace("px", "")) : px;
  const vh = `${(numPx / FIGMA_HEIGHT_PX) * 100}vh`;

  if (numPx > 0) {
    return `min(${numPx}px, ${vh}, ${calculateMaxWidth(px)})`;
  } else {
    return `max(${numPx}px, ${vh})`;
  }
};

/**
 * Figma の画面設計で指定されている px を、画面設計上の height (1440px) 準拠でvw に変換し返却
 * @param {number | pxStr} px - number | '${number}px'
 * @returns {string}
 */
export const calculateVwBasedOnFigma = (px: number | pxStr): string => {
  const numPx = typeof px === "string" ? Number(px.replace("px", "")) : px;
  const vw = `${(numPx / FIGMA_WIDTH_PX) * 100}vw`;
  const cssFunc = numPx > 0 ? "min" : "max";

  return `${cssFunc}(${vw}, ${calculateMaxWidth(px)})`;
};

/**
 * Figma の画面設計で指定されている px を、画面設計上の height (900px) 準拠でvhに変換し返却
 * @param {number | pxStr} px - number | '${number}px'
 * @returns {string}
 */
export const calculateVhBasedOnFigma = (px: number | pxStr): string => {
  const numPx = typeof px === "string" ? Number(px.replace("px", "")) : px;
  const vh = `${(numPx / FIGMA_HEIGHT_PX) * 100}vh`;
  const cssFunc = numPx > 0 ? "min" : "max";

  return `${cssFunc}(${vh}, ${calculateMaxWidth(px)})`;
};
