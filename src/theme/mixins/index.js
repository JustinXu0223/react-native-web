/**
 * @component index.js
 * @description 混合 styles
 * @time 2018/5/4
 * @author JUSTIN XU
 */
import { css, keyframes } from 'styled-components';

const animateOpacity = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

export default {
  boxShadow: css`
    background-color: #ffffff;
    box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.04);
  `,
  singleEllipsis: css`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  opacityAnimation: css`
    animation: ${animateOpacity} 1s linear;
  `,
};
