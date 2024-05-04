import { FIGMA_WIDTH_PX } from "@/consts/aspect";
import { pxStr, calculateMaxWidth } from "./calculateSizeBasedOnFigma";

/**
 * Figma の画面設計で指定されている px を、画面設計上の width (1440px) 準拠で vw に変換し、
 * 画面サイズが 1440px 以上だったら マイナスのpx, それ未満だったら vw になるような
 * css の min 関数を返却する
 * @param {number | pxStr} px - number | '${number}px'
 * @returns {string}
 */

export const calculateMinNegativeSizeBasedOnFigmaWidth = (
  px: number | pxStr
) => {
  const numPx = typeof px === "string" ? Number(px.replace("px", "")) : px;
  const vw = `${(numPx / FIGMA_WIDTH_PX) * 100}vw`;

  return `min(-${numPx}px, ${vw}, ${calculateMaxWidth(px)})`;
};
