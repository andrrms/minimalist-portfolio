import { FC } from "react";

import { SignatureContainer } from "./styles";
import { SignatureProps } from "./types";

const Signature: FC<SignatureProps> = ({
  duration = 4,
  width,
  height,
  strokeWidth = 4,
}) => {
  return (
    <SignatureContainer>
      <svg
        width={width}
        height={height}
        viewBox="0 0 596 187"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animationDuration: `${duration}s` }}
        strokeWidth={strokeWidth}
      >
        <path
          d="M30.5755 161.201C26.5397 160.192 35.2731 125.478 35.7877 122.873C38.5081 102.026 40.7877 97.3727 42.7877 79.3725C44.2028 66.6371 48.2877 42.8725 52.7103 29.6041C55.2875 21.8727 54.1357 20.3727 58.6938 29.9952C66.4953 46.4651 74.7886 62.4319 84.3483 77.98C98.1894 100.492 113.395 122.112 127.132 144.697C134.857 157.399 145.763 171.486 149.227 186.308C150.066 189.896 136.266 181.601 135.853 181.38C115.029 170.245 94.1576 159.332 72.0294 150.954C50.4255 142.776 27.7347 135.829 4.76464 132.809C-7.38112 131.212 7.1351 133.175 10.4352 133.395C76.3871 137.792 141.604 122.441 206.559 113.763C280.121 103.936 354.127 101.156 428.181 97.5337C472.095 95.3855 515.982 92.6832 559.934 91.5112"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M106.6 95.735C112.866 95.735 120.068 93.4719 126.154 95.5786C130.994 97.2539 131.238 109.428 131.238 113.646C131.238 122.843 138.216 95.9609 144.965 89.7124C152.051 83.151 166.502 80.2466 174.882 85.176C178.543 87.3295 178.091 92.2986 179.809 95.735C181.543 99.2025 184.206 104.196 188.257 105.434C192.665 106.781 195.448 106.436 198.503 102.618C202.205 97.9896 205.077 92.4845 209.727 88.6957C214.314 84.9574 215.288 81.3727 225.788 78.2569C232.788 76.7991 235.248 76.2477 242.288 76.2477C242.785 76.2477 249.399 77.8238 253.788 80.2876C255.738 81.3826 248.903 77.6054 248.639 77.4327C245.311 75.257 238.118 76.7288 234.364 76.7288C229.52 76.7288 223.954 78.8819 219.269 80.2876C216.17 81.2173 211.486 85.285 211.486 88.7348C211.486 102.689 225.347 107.851 237.688 104.573C250.769 101.099 254.737 85.6192 256.538 73.913C258.837 58.9738 262.551 44.4928 265.689 29.7217C267.468 21.3528 269.384 13.1635 272.181 5.08398C273.263 1.95945 272.497 7.3778 272.181 8.29079C271.252 10.9752 270.389 13.0421 269.874 15.8776C267.791 27.3314 261.315 38.3153 260.019 49.9793C259.122 58.0499 258.025 65.9277 258.689 74.2259C259.115 79.5507 259.778 85.9729 264.673 88.8521C266.295 89.8062 267.347 91.8806 269.209 92.7628C271.145 93.6799 274.834 94.2648 276.952 94.3271C285.834 94.5883 293.871 91.9998 295.255 81.9692C295.71 78.6678 297.811 69.8284 295.489 66.8737C293.603 64.473 289.665 63.7796 286.807 64.0971C284.596 64.3428 282.59 68.355 284.735 69.9632C287.499 72.0362 292.149 71.8737 295.411 71.8012C301.142 71.6739 306.204 69.6776 311.788 68.2816C315.073 67.4603 320.003 65.6939 323.288 64.8727C325.717 64.2653 329.288 63.3727 331.976 61.6724C335.288 58.3727 325.51 67.5313 323.803 71.4102C322.123 75.2281 322.004 77.8932 322.004 82.0474C322.004 87.3048 325.197 87.2498 329.747 88.8521C335.058 90.7219 341.863 90.694 347.346 89.3996C359.459 86.5395 371.647 78.3688 378.984 68.2816C379.696 67.3015 383.079 61.8127 381.486 60.5383C379.997 59.3471 377.288 59.3727 374.095 60.5383C369.788 63.3727 367.828 65.6565 365.648 69.6895C363.389 73.8693 362.8 78.0194 361.112 82.3603C357.921 90.5639 366.935 91.2913 372.687 90.7683C383.254 89.8078 392.461 79.5278 399.124 72.5052C402.624 68.8156 413.994 54.7467 404.755 51.3872C399.154 49.3503 417.072 37.7659 418.443 36.8001C430.683 28.179 443.459 20.3142 455.986 12.1233C461.26 8.67515 466.296 4.93485 471.942 2.11182"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M535.296 0C533.935 0 532.854 0.285207 531.581 0.821256C524.476 3.81289 517.398 6.89757 510.345 10.0115C504.176 12.7359 449.331 37.0481 460.835 48.063C463.625 50.7335 468.347 51.3258 471.942 51.7782C479.244 52.6972 486.694 52.6843 494.038 52.7559C507.046 52.8828 520.058 52.795 533.067 52.795C535.751 52.795 543.721 51.233 542.805 56.1583C541.543 62.9394 533.618 69.07 528.961 73.4437C517.58 84.1315 505.334 93.7734 492.2 102.227C469.171 117.048 444.595 131.203 419.069 141.256C409.75 144.926 400.074 148.056 390.129 149.469C387.049 149.906 380.182 151.131 377.302 148.452C370.658 142.272 391.449 129.718 394.196 127.96C434.408 102.224 476.989 79.0149 522.312 63.8233C543.095 56.8573 565.044 51.8741 584.962 42.5489C588.864 40.7222 593.143 38.5603 595.834 35.1967"
          stroke="currentColor"
          strokeLinecap="round"
        />
      </svg>
    </SignatureContainer>
  );
};

export default Signature;