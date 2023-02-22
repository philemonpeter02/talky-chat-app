import React from 'react';
import Svg, {
  G,
  Path,
  Line,
  Defs,
  Stop,
  Circle,
  LinearGradient,
  Rect,
} from 'react-native-svg';

export function LogoWhite({width}) {
  return (
    <Svg
      width={width}
      height="76"
      viewBox="0 0 227 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M0.840909 10.9602V0.81818H48.625V10.9602H30.8125V59H18.6534V10.9602H0.840909ZM62.7727 59.8239C59.9886 59.8239 57.5076 59.3409 55.3295 58.375C53.1515 57.3902 51.428 55.9413 50.1591 54.0284C48.9091 52.0966 48.2841 49.6913 48.2841 46.8125C48.2841 44.3883 48.7292 42.3523 49.6193 40.7045C50.5095 39.0568 51.7216 37.7311 53.2557 36.7273C54.7898 35.7235 56.5322 34.9659 58.483 34.4545C60.4527 33.9432 62.517 33.5833 64.6761 33.375C67.214 33.1098 69.2595 32.8636 70.8125 32.6364C72.3655 32.3902 73.4924 32.0303 74.1932 31.5568C74.8939 31.0833 75.2443 30.3826 75.2443 29.4545V29.2841C75.2443 27.4848 74.6761 26.0928 73.5398 25.108C72.4223 24.1231 70.8314 23.6307 68.767 23.6307C66.589 23.6307 64.8561 24.1136 63.5682 25.0795C62.2803 26.0265 61.428 27.2197 61.0114 28.6591L49.8182 27.75C50.3864 25.0985 51.5038 22.8068 53.1705 20.875C54.8371 18.9242 56.9867 17.428 59.6193 16.3864C62.2708 15.3258 65.339 14.7955 68.8239 14.7955C71.2481 14.7955 73.5682 15.0795 75.7841 15.6477C78.0189 16.2159 79.9981 17.0966 81.7216 18.2898C83.464 19.483 84.8371 21.017 85.8409 22.892C86.8447 24.7481 87.3466 26.9735 87.3466 29.5682V59H75.8693V52.9489H75.5284C74.8277 54.3125 73.8902 55.5152 72.7159 56.5568C71.5417 57.5795 70.1307 58.3845 68.483 58.9716C66.8352 59.5398 64.9318 59.8239 62.7727 59.8239ZM66.2386 51.4716C68.0189 51.4716 69.5909 51.1212 70.9545 50.4205C72.3182 49.7008 73.3883 48.7348 74.1648 47.5227C74.9413 46.3106 75.3295 44.9375 75.3295 43.4034V38.7727C74.9508 39.0189 74.4299 39.2462 73.767 39.4545C73.1231 39.6439 72.3939 39.8239 71.5795 39.9943C70.7652 40.1458 69.9508 40.2879 69.1364 40.4205C68.322 40.5341 67.5833 40.6383 66.9205 40.733C65.5 40.9413 64.2595 41.2727 63.1989 41.7273C62.1383 42.1818 61.3144 42.7973 60.7273 43.5739C60.1402 44.3314 59.8466 45.2784 59.8466 46.4148C59.8466 48.0625 60.4432 49.322 61.6364 50.1932C62.8485 51.0455 64.3826 51.4716 66.2386 51.4716ZM108.838 0.81818V59H96.7358V0.81818H108.838ZM129.499 46.4432L129.527 31.9261H131.288L145.266 15.3636H159.158L140.379 37.2955H137.51L129.499 46.4432ZM118.533 59V0.81818H130.635V59H118.533ZM145.805 59L132.964 39.9943L141.033 31.4432L159.982 59H145.805ZM173.27 75.3636C171.736 75.3636 170.296 75.2405 168.952 74.9943C167.626 74.767 166.527 74.4735 165.656 74.1136L168.384 65.0795C169.804 65.5152 171.082 65.7519 172.219 65.7898C173.374 65.8277 174.368 65.5625 175.202 64.9943C176.054 64.4261 176.745 63.4602 177.276 62.0966L177.986 60.25L162.332 15.3636H175.06L184.094 47.4091H184.548L193.668 15.3636H206.48L189.52 63.7159C188.705 66.0644 187.598 68.1098 186.196 69.8523C184.813 71.6136 183.062 72.9678 180.94 73.9148C178.819 74.8807 176.262 75.3636 173.27 75.3636Z"
        fill="white"
      />
      <Path
        d="M0.840909 10.9602V0.81818H48.625V10.9602H30.8125V59H18.6534V10.9602H0.840909ZM62.7727 59.8239C59.9886 59.8239 57.5076 59.3409 55.3295 58.375C53.1515 57.3902 51.428 55.9413 50.1591 54.0284C48.9091 52.0966 48.2841 49.6913 48.2841 46.8125C48.2841 44.3883 48.7292 42.3523 49.6193 40.7045C50.5095 39.0568 51.7216 37.7311 53.2557 36.7273C54.7898 35.7235 56.5322 34.9659 58.483 34.4545C60.4527 33.9432 62.517 33.5833 64.6761 33.375C67.214 33.1098 69.2595 32.8636 70.8125 32.6364C72.3655 32.3902 73.4924 32.0303 74.1932 31.5568C74.8939 31.0833 75.2443 30.3826 75.2443 29.4545V29.2841C75.2443 27.4848 74.6761 26.0928 73.5398 25.108C72.4223 24.1231 70.8314 23.6307 68.767 23.6307C66.589 23.6307 64.8561 24.1136 63.5682 25.0795C62.2803 26.0265 61.428 27.2197 61.0114 28.6591L49.8182 27.75C50.3864 25.0985 51.5038 22.8068 53.1705 20.875C54.8371 18.9242 56.9867 17.428 59.6193 16.3864C62.2708 15.3258 65.339 14.7955 68.8239 14.7955C71.2481 14.7955 73.5682 15.0795 75.7841 15.6477C78.0189 16.2159 79.9981 17.0966 81.7216 18.2898C83.464 19.483 84.8371 21.017 85.8409 22.892C86.8447 24.7481 87.3466 26.9735 87.3466 29.5682V59H75.8693V52.9489H75.5284C74.8277 54.3125 73.8902 55.5152 72.7159 56.5568C71.5417 57.5795 70.1307 58.3845 68.483 58.9716C66.8352 59.5398 64.9318 59.8239 62.7727 59.8239ZM66.2386 51.4716C68.0189 51.4716 69.5909 51.1212 70.9545 50.4205C72.3182 49.7008 73.3883 48.7348 74.1648 47.5227C74.9413 46.3106 75.3295 44.9375 75.3295 43.4034V38.7727C74.9508 39.0189 74.4299 39.2462 73.767 39.4545C73.1231 39.6439 72.3939 39.8239 71.5795 39.9943C70.7652 40.1458 69.9508 40.2879 69.1364 40.4205C68.322 40.5341 67.5833 40.6383 66.9205 40.733C65.5 40.9413 64.2595 41.2727 63.1989 41.7273C62.1383 42.1818 61.3144 42.7973 60.7273 43.5739C60.1402 44.3314 59.8466 45.2784 59.8466 46.4148C59.8466 48.0625 60.4432 49.322 61.6364 50.1932C62.8485 51.0455 64.3826 51.4716 66.2386 51.4716ZM108.838 0.81818V59H96.7358V0.81818H108.838ZM129.499 46.4432L129.527 31.9261H131.288L145.266 15.3636H159.158L140.379 37.2955H137.51L129.499 46.4432ZM118.533 59V0.81818H130.635V59H118.533ZM145.805 59L132.964 39.9943L141.033 31.4432L159.982 59H145.805ZM173.27 75.3636C171.736 75.3636 170.296 75.2405 168.952 74.9943C167.626 74.767 166.527 74.4735 165.656 74.1136L168.384 65.0795C169.804 65.5152 171.082 65.7519 172.219 65.7898C173.374 65.8277 174.368 65.5625 175.202 64.9943C176.054 64.4261 176.745 63.4602 177.276 62.0966L177.986 60.25L162.332 15.3636H175.06L184.094 47.4091H184.548L193.668 15.3636H206.48L189.52 63.7159C188.705 66.0644 187.598 68.1098 186.196 69.8523C184.813 71.6136 183.062 72.9678 180.94 73.9148C178.819 74.8807 176.262 75.3636 173.27 75.3636Z"
        fill="url(#paint0_linear_1_430)"
      />
      <Path
        d="M219.747 59.7386C217.872 59.7386 216.262 59.0758 214.918 57.75C213.592 56.4053 212.929 54.7955 212.929 52.9205C212.929 51.0644 213.592 49.4735 214.918 48.1477C216.262 46.822 217.872 46.1591 219.747 46.1591C221.565 46.1591 223.156 46.822 224.52 48.1477C225.884 49.4735 226.565 51.0644 226.565 52.9205C226.565 54.1705 226.243 55.3163 225.599 56.358C224.974 57.3807 224.151 58.2045 223.128 58.8295C222.105 59.4356 220.978 59.7386 219.747 59.7386Z"
        fill="#243443"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1_430"
          x1="115"
          y1="-19"
          x2="115"
          y2="78"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="white" />
          <Stop offset="1" stopColor="white" stopOpacity="0" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
export function LogoDark({width}) {
  return (
    <Svg
      width={width}
      height="57"
      viewBox="0 0 170 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M0.130682 7.97017H13.4901V44H22.6094V7.97017H35.9688V0.363635H0.130682V7.97017ZM46.5795 44.6179C51.4162 44.6179 54.5483 42.5085 56.1463 39.4616H56.402V44H65.0099V21.9261C65.0099 14.1278 58.4048 10.8466 51.1179 10.8466C43.277 10.8466 38.1207 14.5966 36.8636 20.5625L45.2585 21.2443C45.8764 19.071 47.8153 17.473 51.0753 17.473C54.1648 17.473 55.9332 19.0284 55.9332 21.7131V21.8409C55.9332 23.9503 53.696 24.2273 48.0071 24.7812C41.5298 25.3778 35.7131 27.5511 35.7131 34.8594C35.7131 41.3366 40.3366 44.6179 46.5795 44.6179ZM49.179 38.3537C46.3878 38.3537 44.3849 37.054 44.3849 34.5611C44.3849 32.0043 46.4943 30.7472 49.6903 30.2997C51.6719 30.0227 54.9105 29.554 55.9972 28.8295V32.3026C55.9972 35.733 53.1634 38.3537 49.179 38.3537ZM81.1286 0.363635H72.0518V44H81.1286V0.363635ZM88.3995 44H97.4762V33.6023L99.9265 30.8111L108.854 44H119.486L106.723 25.4418L118.868 11.2727H108.449L97.9663 23.6946H97.4762V0.363635H88.3995V44ZM129.452 56.2727C136.207 56.2727 139.786 52.821 141.64 47.5369L154.36 11.2727H144.751L137.911 35.3068H137.57L130.795 11.2727H121.249L132.989 44.9375L132.457 46.3224C131.263 49.3906 128.984 49.5398 125.788 48.5597L123.742 55.3352C125.042 55.8892 127.151 56.2727 129.452 56.2727Z"
        fill="#243443"
      />
      <Path
        d="M164.31 44.554C167.038 44.554 169.403 42.2741 169.424 39.4403C169.403 36.6491 167.038 34.3693 164.31 34.3693C161.498 34.3693 159.175 36.6491 159.197 39.4403C159.175 42.2741 161.498 44.554 164.31 44.554Z"
        fill="#377DFF"
      />
    </Svg>
  );
}
