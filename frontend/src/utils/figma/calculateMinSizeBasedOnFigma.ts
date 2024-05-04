import { FIGMA_HEIGHT_PX, FIGMA_WIDTH_PX } from "@/consts/aspect";
import { pxStr, calculateMaxWidth } from "./calculateSizeBasedOnFigma";

/**
 * Figma の画面設計で指定されている px を、画面設計上の画面サイズ準拠で vw, vh に変換し、
 * 指定したピクセル数, vw, vh で一番小さい値が適用されるように css の min 関数を返却する
 * @param {number | pxStr} px - number | '${number}px'
 * @returns {string}
 */

export const calculateMinSizeBasedOnFigma = (px: number | pxStr) => {
  const numPx = typeof px === "string" ? Number(px.replace("px", "")) : px;
  const vw = `${(numPx / FIGMA_WIDTH_PX) * 100}vw`;
  const vh = `${(numPx / FIGMA_HEIGHT_PX) * 100}vh`;

  if (numPx > 0) {
    return `min(${numPx}px, ${vw}, ${vh}, ${calculateMaxWidth(px)})`;
  } else {
    return `max(${numPx}px, ${vw}, ${vh})`;
  }
};
