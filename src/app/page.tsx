import Image from "next/image";

export default function Home() {
  return (
    <div className="flex md:h-screen w-screen flex-col items-center justify-between gap-4 overflow-y-auto md:overflow-y-hidden">
      {/* Top Navigation Desktop Bar */}
      <div className="md:flex w-full items-center justify-evenly max-w-4xl hidden">
        <div className=" in-touch-btn selected-menu rounded-lg bg-gray-800 px-5 py-1 text-white backdrop-blur-2xl">
          Hello
        </div>
        <a
          href="/"
          className="px-5 py-1 text-neutral-500 hover:rounded-lg hover:bg-gray-800 hover:text-white hover:backdrop-blur-2xl group relative"
        >
          Experience
          <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 px-2 py-1 bg-gray-800 rounded-lg text-center text-neutral-500">
            Coming Soon
          </div>
        </a>
        {/* Logo */}
        <div className="logo-btn relative flex h-28 w-32 items-end justify-center rounded-b-full bg-neutral-200 pb-6 shadow">
          <div className="h-16 w-20">
            <svg
              width={89}
              height={79}
              viewBox="0 0 89 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_ii_204_66)">
                <path
                  d="M54 30.5H34.5L16 29.5L9 37.5L7.5 49L15 62L25.5 64.5L39.5 65.5L54 64L63 62L68.5 53L69 44.5L66 34L54 30.5Z"
                  fill="#E3E3E3"
                />
              </g>
              <g filter="url(#filter1_di_204_66)">
                <path
                  d="M26.3227 42C24.837 42 23.563 42.6658 22.5345 44.0252C21.5059 45.3846 21 47.0302 21 48.9898C21 50.9493 21.5227 52.627 22.5345 53.9718C23.5463 55.3166 24.8202 56 26.3227 56C27.7093 56 28.9131 55.3196 29.931 53.9748C30.949 52.63 31.4655 50.9698 31.4655 48.9927C31.4655 47.0156 30.9429 45.37 29.931 44.0282C28.9192 42.6863 27.7154 42 26.3227 42ZM51.8404 42C50.3714 42 49.0808 42.6658 48.0522 44.0252C47.0236 45.3846 46.5177 47.0302 46.5177 48.9898C46.5177 50.9493 47.0404 52.627 48.0522 53.9718C49.064 55.3166 50.3547 56 51.8404 56C53.2286 56 54.4309 55.3196 55.4655 53.9748C56.5002 52.63 57 50.9698 57 48.9927C57 47.0156 56.4773 45.37 55.4655 44.0282C54.4537 42.6863 53.2453 42 51.8404 42Z"
                  fill="black"
                />
              </g>
              <g filter="url(#filter2_di_204_66)">
                <path
                  d="M69.4277 22.7188C69.4109 22.7188 69.8672 20.3729 69.4763 16.287C69.1174 12.1981 68.2597 8.44531 66.8529 5C66.8529 5 66.1351 5.13175 64.7663 5.47553C63.3976 5.8193 61.1604 6.51442 58.102 7.90466C55.0877 9.29793 51.9107 11.1516 48.6029 13.4005C46.3536 12.7599 42.9971 12.4328 38.5 12.4328C34.2143 12.4328 30.8578 12.7599 28.3971 13.4005C21.1306 8.33022 15.0417 5.53005 10.1304 5C8.73019 8.44582 7.86129 12.2193 7.52367 16.3203C7.13281 20.4093 7.58906 22.7687 7.58906 22.7687C3.62881 27.0833 2 33.3015 2 38.4354C2 42.4062 2.11406 45.9985 2.99463 49.1878C3.90713 52.3545 5.06296 54.9426 6.43171 56.9326C7.84785 58.9449 9.58773 60.7107 11.5813 62.1589C13.6176 63.6854 15.4913 64.7849 17.187 65.4739C18.898 66.1948 20.837 66.7203 23.0529 67.0974C24.6951 67.4138 26.3547 67.6333 28.023 67.7547C28.023 67.7547 32.5855 68 38.5167 68C44.448 68 48.9938 67.7547 48.9938 67.7547C50.6619 67.6292 52.3214 67.4077 53.9638 67.0913C55.9683 66.7692 57.9302 66.2247 59.813 65.4679C61.5087 64.7622 63.3824 63.6794 65.44 62.1528C67.4327 60.7067 69.1677 58.9381 70.5729 56.9205C71.9416 54.9351 73.0974 52.3424 74.0099 49.1757C74.9224 46.0091 75 42.3896 75 38.4188C75 33.4484 73.3712 27.1484 69.4277 22.7188ZM58.7712 61.0443C54.2239 63.1932 47.5429 64.0625 38.6795 64.0625H38.3373C29.4723 64.0625 22.7913 63.2099 18.3277 61.0443C13.864 58.8786 11.598 54.4641 11.598 47.8037C11.598 43.8177 12.9987 40.5859 15.7529 38.1113C16.9589 37.0513 18.425 36.3062 20.25 35.8639C22.075 35.4217 23.7373 35.4096 25.3007 35.4535C26.8337 35.5187 28.9841 35.814 31.7049 36.0275C34.4257 36.241 36.4788 36.5197 38.5167 36.5197C40.4223 36.5197 42.9484 36.1911 47.006 35.8639C51.0636 35.5368 54.0946 35.3718 56.0489 35.6989C58.0534 36.0275 59.7978 36.7166 61.2806 38.1113C64.1641 40.703 65.6089 43.9338 65.6149 47.8037C65.5982 54.4641 63.3002 58.8953 58.7712 61.0443Z"
                  fill="black"
                />
              </g>
              <defs>
                <filter
                  id="filter0_ii_204_66"
                  x="6.5"
                  y="28.5"
                  width="63.5"
                  height={38}
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx={-1} dy={-1} />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2={-1}
                    k3={1}
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_204_66"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx={1} dy={1} />
                  <feGaussianBlur stdDeviation="3.5" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2={-1}
                    k3={1}
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.682353 0 0 0 0 0.682353 0 0 0 0 0.752941 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_innerShadow_204_66"
                    result="effect2_innerShadow_204_66"
                  />
                </filter>
                <filter
                  id="filter1_di_204_66"
                  x={20}
                  y={40}
                  width={44}
                  height={22}
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx={3} dy={2} />
                  <feGaussianBlur stdDeviation={2} />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_204_66"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_204_66"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx={2} dy={3} />
                  <feGaussianBlur stdDeviation={2} />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2={-1}
                    k3={1}
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect2_innerShadow_204_66"
                  />
                </filter>
                <filter
                  id="filter2_di_204_66"
                  x={0}
                  y={0}
                  width={89}
                  height={79}
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx={6} dy={3} />
                  <feGaussianBlur stdDeviation={4} />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_204_66"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_204_66"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx={8} dy={10} />
                  <feGaussianBlur stdDeviation={5} />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2={-1}
                    k3={1}
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.837028 0 0 0 0 0.837028 0 0 0 0 0.837028 0 0 0 0.2 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect2_innerShadow_204_66"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <a
          href=""
          className="px-5 py-1 text-neutral-500 hover:rounded-lg hover:bg-gray-800 hover:text-white hover:backdrop-blur-2xl group relative min-w-[120px] text-center"
        >
          Projects
          <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 px-1 py-1 bg-gray-800 rounded-lg text-center text-neutral-500">
            Coming Soon
          </div>
        </a>
        <a
          href="mailto:aiman_saharudin@yahoo.com"
          className="px-5 py-1 text-neutral-500 hover:rounded-lg hover:bg-gray-800 hover:text-white hover:backdrop-blur-2xl"
        >
          Contact
        </a>
      </div>
      {/* Top Navigation Mobile Bar */}
      <div className="mobile-nav flex gap-[26px] px-[24px] items-center md:hidden  rounded-b-3xl py-3">
        {/* Home Icon */}
        <a href="/" className="">
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.75 19.5H12.25C11.5595 19.5 11 18.9405 11 18.25V13.75C11 13.1975 10.5525 12.75 10 12.75H8C7.4475 12.75 7 13.1975 7 13.75V18.25C7 18.9405 6.4405 19.5 5.75 19.5H1.25C0.5595 19.5 0 18.9405 0 18.25V8.7065C0 7.557 0.527 6.471 1.4295 5.76L8.5355 0.1605C8.808 -0.0535 9.192 -0.0535 9.464 0.1605L16.571 5.76C17.4735 6.471 18 7.5565 18 8.7055V18.25C18 18.9405 17.4405 19.5 16.75 19.5Z"
              fill="#2B373B"
            />
          </svg>
        </a>
        {/* Ecperience Icon */}
        <a href="/" className="">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.57761 1.0796C6.84428 1.77219 6.68131 3.2796 7.33317 3.2796C7.53687 3.2796 7.90354 2.91294 8.14798 2.46479C8.51465 1.77219 9.00354 1.64997 10.9998 1.64997C12.9961 1.64997 13.485 1.77219 13.8517 2.46479C14.4221 3.48331 15.0739 3.52405 15.0739 2.50553C15.0739 0.99812 13.9739 0.42775 10.9998 0.42775C9.00354 0.42775 8.02576 0.590713 7.57761 1.0796Z"
              fill="#6B6E70"
            />
            <path
              d="M1.34444 4.82778C0.366667 5.43889 0 7.55741 0 13.0167C0 19.5352 0.366667 20.9611 2.11852 21.5722C3.78889 22.1426 18.2111 22.1426 19.8815 21.5722C21.6333 20.9611 22 19.5352 22 13.0167C22 7.55741 21.6333 5.43889 20.6556 4.82778C20.0037 4.42037 1.9963 4.42037 1.34444 4.82778ZM4.48148 11.5093C7.7 12.7722 14.3 12.7722 17.5185 11.5093C20.1667 10.45 20.3704 10.45 20.3704 11.1833C20.3704 12.3241 15.2778 13.6685 11 13.6685C6.72222 13.6685 1.62963 12.3241 1.62963 11.1833C1.62963 10.45 1.83333 10.45 4.48148 11.5093Z"
              fill="#6B6E70"
            />
          </svg>
        </a>
        {/* Logo Icon */}
        <a href="" className="relative w-[40px] h-[35px]  translate-x-2">
          <svg
            width="57"
            height="52"
            viewBox="0 0 57 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-1 -left-1"
          >
            <g filter="url(#filter0_ii_265_780)">
              <path
                d="M31.1201 19.2025H20.2001L9.84008 18.6456L5.92008 23.1013L5.08008 29.5063L9.28008 36.7468L15.1601 38.1392L23.0001 38.6962L31.1201 37.8608L36.1601 36.7468L39.2401 31.7342L39.5201 27L37.8401 21.1519L31.1201 19.2025Z"
                fill="#E3E3E3"
              />
            </g>
            <g filter="url(#filter1_di_265_780)">
              <path
                d="M15.6208 25.6076C14.7888 25.6076 14.0754 25.9784 13.4994 26.7356C12.9234 27.4927 12.6401 28.4093 12.6401 29.5006C12.6401 30.592 12.9328 31.5265 13.4994 32.2755C14.0661 33.0245 14.7794 33.4051 15.6208 33.4051C16.3974 33.4051 17.0715 33.0261 17.6415 32.2771C18.2116 31.5281 18.5008 30.6034 18.5008 29.5023C18.5008 28.4011 18.2081 27.4846 17.6415 26.7372C17.0749 25.9898 16.4008 25.6076 15.6208 25.6076ZM29.9108 25.6076C29.0881 25.6076 28.3654 25.9784 27.7894 26.7356C27.2134 27.4927 26.9301 28.4093 26.9301 29.5006C26.9301 30.592 27.2227 31.5265 27.7894 32.2755C28.356 33.0245 29.0788 33.4051 29.9108 33.4051C30.6881 33.4051 31.3614 33.0261 31.9408 32.2771C32.5202 31.5281 32.8001 30.6034 32.8001 29.5023C32.8001 28.4011 32.5074 27.4846 31.9408 26.7372C31.3742 25.9898 30.6975 25.6076 29.9108 25.6076Z"
                fill="black"
              />
            </g>
            <g filter="url(#filter2_di_265_780)">
              <path
                d="M39.7595 14.8687C39.7501 14.8687 40.0056 13.5621 39.7867 11.2864C39.5858 9.00904 39.1054 6.91891 38.3176 5C38.3176 5 37.9156 5.07338 37.1491 5.26485C36.3826 5.45632 35.1298 5.84348 33.4171 6.61779C31.7291 7.39378 29.95 8.4262 28.0976 9.67876C26.838 9.32197 24.9584 9.13978 22.44 9.13978C20.04 9.13978 18.1604 9.32197 16.7824 9.67876C12.7131 6.8548 9.30333 5.29522 6.55301 5C5.76891 6.91919 5.28232 9.02085 5.09325 11.305C4.87437 13.5824 5.12987 14.8965 5.12987 14.8965C2.91213 17.2996 2 20.7629 2 23.6223C2 25.8339 2.06388 27.8346 2.55699 29.6109C3.06799 31.3747 3.71526 32.8162 4.48176 33.9245C5.27479 35.0452 6.24913 36.0287 7.3655 36.8353C8.50588 37.6855 9.55513 38.2979 10.5047 38.6817C11.4629 39.0832 12.5487 39.3759 13.7896 39.5859C14.7093 39.7621 15.6386 39.8843 16.5729 39.952C16.5729 39.952 19.1279 40.0886 22.4494 40.0886C25.7709 40.0886 28.3165 39.952 28.3165 39.952C29.2507 39.8821 30.18 39.7587 31.0997 39.5825C32.2222 39.4031 33.3209 39.0998 34.3753 38.6783C35.3249 38.2853 36.3741 37.6822 37.5264 36.8319C38.6423 36.0265 39.6139 35.0415 40.4008 33.9177C41.1673 32.8119 41.8146 31.3679 42.3256 29.6042C42.8366 27.8405 42.88 25.8246 42.88 23.613C42.88 20.8447 41.9679 17.3358 39.7595 14.8687ZM33.7919 36.2145C31.2454 37.4114 27.504 37.8956 22.5405 37.8956H22.3489C17.3845 37.8956 13.6431 37.4207 11.1435 36.2145C8.64385 35.0083 7.37487 32.5496 7.37487 28.84C7.37487 26.62 8.15925 24.82 9.70162 23.4418C10.377 22.8513 11.198 22.4363 12.22 22.19C13.242 21.9437 14.1729 21.937 15.0484 21.9615C15.9069 21.9977 17.1111 22.1622 18.6348 22.2811C20.1584 22.4001 21.3081 22.5553 22.4494 22.5553C23.5165 22.5553 24.9311 22.3722 27.2034 22.19C29.4756 22.0079 31.173 21.9159 32.2674 22.0981C33.3899 22.2811 34.3667 22.6649 35.1971 23.4418C36.8119 24.8852 37.621 26.6846 37.6244 28.84C37.615 32.5496 36.3281 35.0176 33.7919 36.2145Z"
                fill="black"
              />
            </g>
            <defs>
              <filter
                id="filter0_ii_265_780"
                x="4.08008"
                y="17.6456"
                width="36.4399"
                height="22.0507"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-1" dy="-1" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_265_780"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="1" dy="1" />
                <feGaussianBlur stdDeviation="3.5" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.682353 0 0 0 0 0.682353 0 0 0 0 0.752941 0 0 0 0.15 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_innerShadow_265_780"
                  result="effect2_innerShadow_265_780"
                />
              </filter>
              <filter
                id="filter1_di_265_780"
                x="11.6401"
                y="23.6076"
                width="28.1602"
                height="15.7975"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="3" dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_265_780"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_265_780"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="2" dy="3" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect2_innerShadow_265_780"
                />
              </filter>
              <filter
                id="filter2_di_265_780"
                x="0"
                y="0"
                width="56.8799"
                height="51.0886"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="6" dy="3" />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_265_780"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_265_780"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="8" dy="10" />
                <feGaussianBlur stdDeviation="5" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.837028 0 0 0 0 0.837028 0 0 0 0 0.837028 0 0 0 0.2 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect2_innerShadow_265_780"
                />
              </filter>
            </defs>
          </svg>
        </a>
        {/* Projects Icon */}
        <a href="" className="">
          <svg
            width="21"
            height="23"
            viewBox="0 0 21 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21 7.71974C21.0009 7.35844 20.9598 7.00374 20.8463 6.66103C20.5154 5.6614 19.9592 4.83236 19.0273 4.29357C16.8618 3.04177 14.6946 1.79387 12.5343 0.534581C11.9469 0.191874 11.3212 0.0194707 10.6487 0.00178066C9.90736 -0.0174085 9.20314 0.116616 8.55105 0.495303C6.37034 1.76149 4.17615 3.00609 2.00534 4.28937C0.711058 5.05484 0.0299056 6.23138 0.0137234 7.73443C-0.0126477 10.2476 0.00743018 12.7608 0.00563215 15.274C0.00533248 15.6611 0.0529803 16.0395 0.18124 16.4044C0.522864 17.3758 1.07456 18.1815 1.98766 18.7077C4.1363 19.946 6.28554 21.1837 8.42669 22.434C8.98917 22.7626 9.58192 22.9569 10.2283 22.9919C11.0179 23.0354 11.7689 22.9071 12.4642 22.5029C14.6305 21.2451 16.7971 19.9882 18.9706 18.7427C19.5768 18.3949 20.0449 17.9218 20.4006 17.3296C20.7441 16.7588 20.9859 16.1483 20.9919 15.474C21.003 14.1499 20.9952 12.8259 20.9952 11.5018H20.9988C20.9988 10.241 20.9973 8.98023 21 7.71974ZM8.11773 14.4144C8.28794 14.5952 8.27985 14.8797 8.09915 15.05C8.01224 15.1319 7.90136 15.1726 7.79079 15.1726C7.67152 15.1726 7.55225 15.1253 7.46384 15.0314L4.42338 11.8076C4.25976 11.6343 4.25976 11.3636 4.42338 11.19L7.46384 7.968C7.63436 7.7872 7.91904 7.77941 8.09945 7.94971C8.27985 8.12031 8.28794 8.40515 8.11773 8.58565L5.36825 11.4988L8.11773 14.4144ZM11.7072 8.42524L10.166 14.7868C10.1159 14.9927 9.93224 15.1304 9.72936 15.1304C9.6943 15.1304 9.65894 15.1262 9.62327 15.1178C9.38204 15.0593 9.2337 14.8161 9.29244 14.5745L10.8336 8.21296C10.8924 7.9716 11.1351 7.82438 11.3766 7.88195C11.6176 7.94071 11.7659 8.18358 11.7072 8.42524ZM16.5768 11.8097L13.5364 15.0317C13.448 15.1256 13.329 15.1726 13.2094 15.1726C13.0986 15.1726 12.9877 15.1319 12.9008 15.05C12.7204 14.8794 12.7123 14.5946 12.8825 14.4141L15.632 11.5009L12.8825 8.58565C12.7123 8.40485 12.7204 8.12031 12.9011 7.95001C13.0818 7.77971 13.3662 7.7881 13.5364 7.9686L16.5768 11.1924C16.7405 11.3657 16.7405 11.6364 16.5768 11.8097Z"
              fill="#6B6E70"
            />
          </svg>
        </a>
        {/* Email Icon */}
        <a href="" className="">
          <svg
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.03233 0.815838C0.439274 3.43913 -1.59007 9.97261 1.3302 15.7637C3.11206 19.2779 8.40814 21.6042 12.9123 20.8618C14.4467 20.6143 14.6941 20.3668 14.5952 19.5254C14.4467 18.6344 14.0507 18.4364 10.9324 18.189C6.92326 17.892 4.89392 16.7536 3.60702 14.0808C1.82516 10.3191 3.35954 5.122 6.82427 3.38964C10.487 1.50878 15.3376 2.44921 17.169 5.46847C18.6043 7.74529 18.4064 12.5464 16.9215 12.5464C16.0305 12.5464 15.8821 12.1504 15.6841 9.08169C15.4861 6.16142 15.2881 5.61696 14.4962 5.46847C13.9517 5.31998 13.2093 5.66646 12.8628 6.16142C12.2688 6.95335 12.1698 6.95335 11.3284 6.21091C9.99202 5.02301 7.91318 5.17149 6.52729 6.60688C5.53737 7.54731 5.28989 8.28975 5.28989 10.3191C5.28989 12.4969 5.53737 13.0909 6.72528 14.3283C8.40814 15.9616 10.3385 16.2091 11.6254 14.8727C12.4173 14.0313 12.5163 14.0313 13.8032 14.9222C15.4861 16.1596 18.0104 15.7637 19.6438 14.0313C21.2771 12.2494 21.5741 8.24025 20.2377 5.22099C18.7528 1.85526 16.0305 0.221886 11.5264 0.023901C8.90311 -0.0750904 7.51721 0.122894 6.03233 0.815838ZM11.8729 9.42816C12.2688 10.0221 12.2688 10.6161 11.8234 11.507C11.0809 13.0909 9.89303 13.1404 9.20008 11.606C8.11117 9.23017 10.5365 7.25033 11.8729 9.42816Z"
              fill="#6B6E70"
            />
          </svg>
        </a>
      </div>
      {/* Main Content */}
      <div className="flex h-full w-full flex-col gap-11 px-12 max-w-screen-xl md:mt-0 mt-[66px]">
        {/* First Row */}
        <div className="flex h-full w-full gap-[39px] md:flex-row flex-col">
          {/* About Container */}
          <div className="work-container relative flex h-full w-full md:w-1/2 flex-col items-center justify-center rounded-3xl px-4 py-5">
            {/* Image */}
            <div
              className="absolute md:-left-8 md:-top-8 -top-12 h-[100px] w-[100px] md:h-[130px] md:w-[130px] rounded-full border-8 border-[#2B373B] overflow-hidden bg-cover bg-center profile-image"
              style={{
                backgroundImage: 'url("../../public/am-edited.jpg")',
              }}
            >
              <Image
                src="/am-edited.jpg" // Reference the image in the public directory
                alt="Profile Image"
                layout="fill" // or specify width and height
                objectFit="cover" // Apply the cover aspect ratio
                // className={styles.image} // Additional styling, if needed
              />
            </div>
            {/* Title */}
            <div className="md:mt-2 mt-[58px] w-72 text-center">
              <span className="font-['Inter'] text-3xl font-bold text-neutral-500">
                HELLO. I AM
              </span>
              <span className="font-['Inter'] text-3xl font-bold text-neutral-700">
                {" "}
                AIMAN
              </span>
            </div>
            {/* Position */}
            <div className="mt-1 w-96 text-center font-['Inter'] text-lg font-medium text-neutral-500">
              Full Stack &amp; App Developer
            </div>
            {/* About Me Description */}
            <div className="mt-5 md:w-96 w-full text-center font-['Inter'] md:text-base text-sm font-normal leading-relaxed tracking-wider text-neutral-500">
              Experienced full-stack and app developer with a passion for
              crafting efficient digital solutions that enhance user
              experiences.
            </div>
            {/* Social Media Container */}
            <div className="mt-5 flex w-8/12 max-w-md justify-evenly">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/aiman-saharudin/"
                className="circle-social flex md:h-14 md:w-14 w-11 h-11 items-center justify-center rounded-full bg-neutral-200"
              >
                {/* LinkedIn Icon */}
                <svg
                  className="hover:scale-110 transition-all md:w-[28px] md:h-[28px] w-[20px] h-[20px]"
                  width={28}
                  height={28}
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    clipPath="url(#clip0_230_303)"
                    filter="url(#filter0_i_230_303)"
                  >
                    <path
                      d="M25.9273 0H2.06719C0.924219 0 0 0.902344 0 2.01797V25.9766C0 27.0922 0.924219 28 2.06719 28H25.9273C27.0703 28 28 27.0922 28 25.982V2.01797C28 0.902344 27.0703 0 25.9273 0ZM8.30703 23.8602H4.15078V10.4945H8.30703V23.8602ZM6.22891 8.67344C4.89453 8.67344 3.81719 7.59609 3.81719 6.26719C3.81719 4.93828 4.89453 3.86094 6.22891 3.86094C7.55781 3.86094 8.63516 4.93828 8.63516 6.26719C8.63516 7.59062 7.55781 8.67344 6.22891 8.67344ZM23.8602 23.8602H19.7094V17.3633C19.7094 15.8156 19.682 13.8195 17.5492 13.8195C15.3891 13.8195 15.0609 15.5094 15.0609 17.2539V23.8602H10.9156V10.4945H14.8969V12.3211H14.9516C15.5039 11.2711 16.8602 10.1609 18.8781 10.1609C23.0836 10.1609 23.8602 12.9281 23.8602 16.5266V23.8602Z"
                      fill="#2B373B"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_i_230_303"
                      x={0}
                      y={0}
                      width={28}
                      height={32}
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy={4} />
                      <feGaussianBlur stdDeviation={2} />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2={-1}
                        k3={1}
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_230_303"
                      />
                    </filter>
                    <clipPath id="clip0_230_303">
                      <rect width={28} height={28} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              {/* Github */}
              <a
                href="https://github.com/evoaiman"
                className="circle-social flex md:h-14 md:w-14 w-11 h-11 items-center justify-center rounded-full bg-neutral-200"
              >
                {/* Github Icon */}
                <svg
                  className="hover:scale-110 transition-all md:w-[28px] md:h-[28px] w-[20px] h-[20px]"
                  width={28}
                  height={28}
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    clipPath="url(#clip0_230_313)"
                    filter="url(#filter0_i_230_313)"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.0116 0C6.26354 0 0 6.30972 0 14.1157C0 20.3554 4.01327 25.6372 9.58073 27.5066C10.2768 27.6472 10.5318 27.2029 10.5318 26.8292C10.5318 26.502 10.5088 25.3803 10.5088 24.2115C6.61115 25.053 5.79949 22.5288 5.79949 22.5288C5.17311 20.8929 4.245 20.4724 4.245 20.4724C2.96929 19.6077 4.33793 19.6077 4.33793 19.6077C5.75303 19.7012 6.49557 21.0567 6.49557 21.0567C7.74804 23.2066 9.76629 22.5991 10.5782 22.2251C10.6941 21.3136 11.0655 20.6827 11.4599 20.3322C8.3512 20.005 5.08047 18.7898 5.08047 13.3677C5.08047 11.8253 5.63687 10.5633 6.51851 9.58188C6.37941 9.2314 5.89213 7.78217 6.6579 5.84251C6.6579 5.84251 7.84097 5.46852 10.5085 7.29145C11.6506 6.98246 12.8284 6.82528 14.0116 6.82396C15.1947 6.82396 16.4007 6.98772 17.5143 7.29145C20.1822 5.46852 21.3653 5.84251 21.3653 5.84251C22.131 7.78217 21.6435 9.2314 21.5044 9.58188C22.4092 10.5633 22.9427 11.8253 22.9427 13.3677C22.9427 18.7898 19.672 19.9814 16.5401 20.3322C17.0506 20.7762 17.4911 21.6174 17.4911 22.9496C17.4911 24.8425 17.4682 26.3617 17.4682 26.8289C17.4682 27.2029 17.7234 27.6472 18.4192 27.5069C23.9867 25.6369 27.9999 20.3554 27.9999 14.1157C28.0229 6.30972 21.7364 0 14.0116 0Z"
                      fill="#2B373B"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_i_230_313"
                      x={0}
                      y={0}
                      width={28}
                      height={32}
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy={4} />
                      <feGaussianBlur stdDeviation={2} />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2={-1}
                        k3={1}
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_230_313"
                      />
                    </filter>
                    <clipPath id="clip0_230_313">
                      <rect width={28} height={28} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              {/* Dribble */}
              <a
                href="https://dribbble.com/iamaiman"
                className="circle-social flex md:h-14 md:w-14 w-11 h-11 items-center justify-center rounded-full bg-neutral-200"
              >
                {/* Dribble Icon */}
                <svg
                  className="hover:scale-110 transition-all md:w-[28px] md:h-[28px] w-[20px] h-[20px]"
                  width={28}
                  height={28}
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_i_230_317)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14 0C6.27115 0 0 6.27115 0 14C0 21.7289 6.27115 28 14 28C21.7136 28 28 21.7289 28 14C28 6.27115 21.7136 0 14 0ZM23.2473 6.45336C24.9176 8.48807 25.9198 11.0846 25.9501 13.8937C25.5553 13.8178 21.6073 13.013 17.6291 13.5141C17.538 13.3167 17.462 13.1041 17.3709 12.8916C17.128 12.3146 16.8547 11.7224 16.5813 11.1605C20.9848 9.3688 22.9891 6.78742 23.2473 6.45336ZM14 2.06508C17.0369 2.06508 19.8156 3.20391 21.9263 5.07159C21.7136 5.37527 19.9067 7.78959 15.6551 9.38394C13.6963 5.78525 11.525 2.83948 11.1909 2.38395C12.0867 2.17137 13.0282 2.06508 14 2.06508ZM8.91327 3.18872C9.23212 3.61388 11.3579 6.57484 13.3471 10.0976C7.75922 11.5857 2.8243 11.5553 2.29284 11.5553C3.06724 7.85033 5.57266 4.76789 8.91327 3.18872ZM2.03471 14.0152C2.03471 13.8937 2.03471 13.7722 2.03471 13.6508C2.55098 13.6659 8.35141 13.7419 14.3189 11.9501C14.6682 12.6182 14.987 13.3015 15.2907 13.9848C15.1388 14.0304 14.9718 14.0759 14.82 14.1214C8.6551 16.1106 5.37527 21.5466 5.10195 22.0021C3.2039 19.8916 2.03471 17.0825 2.03471 14.0152ZM14 25.9653C11.2364 25.9653 8.68547 25.0239 6.66594 23.4447C6.87852 23.0044 9.30799 18.3276 16.0499 15.974C16.0802 15.9588 16.0955 15.9588 16.1258 15.9436C17.8112 20.3015 18.4946 23.9609 18.6768 25.0086C17.2343 25.6312 15.6551 25.9653 14 25.9653ZM20.6659 23.9154C20.5445 23.1865 19.9067 19.6942 18.3427 15.3969C22.0933 14.8047 25.3731 15.7766 25.7831 15.9133C25.2668 19.2386 23.3536 22.1084 20.6659 23.9154Z"
                      fill="#2B373B"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_i_230_317"
                      x={0}
                      y={0}
                      width={28}
                      height={32}
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy={4} />
                      <feGaussianBlur stdDeviation={2} />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2={-1}
                        k3={1}
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_230_317"
                      />
                    </filter>
                  </defs>
                </svg>
              </a>
              {/* Discord */}
              {/* <a href="" className="circle-social flex h-14 w-14 items-center justify-center rounded-full bg-neutral-200"> */}
              {/* Discord Icon */}
              {/* <svg className="hover:scale-110 transition-all"
                  width={35}
                  height={35}
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_i_230_326)">
                    <path
                      d="M29.629 6.06019C27.3982 5.03661 25.006 4.28249 22.5049 3.85057C22.4593 3.84223 22.4138 3.86306 22.3903 3.90473C22.0827 4.45192 21.7419 5.16577 21.5033 5.72685C18.8131 5.32411 16.1367 5.32411 13.5017 5.72685C13.263 5.1533 12.9099 4.45192 12.6008 3.90473C12.5774 3.86445 12.5319 3.84362 12.4863 3.85057C9.98654 4.28111 7.59436 5.03523 5.3622 6.06019C5.34287 6.06852 5.32631 6.08242 5.31532 6.10047C0.777863 12.8793 -0.465136 19.4916 0.144638 26.0218C0.147397 26.0538 0.165331 26.0843 0.190164 26.1038C3.18385 28.3022 6.08374 29.6369 8.92978 30.5216C8.97533 30.5355 9.02359 30.5188 9.05258 30.4813C9.72581 29.562 10.3259 28.5926 10.8405 27.5731C10.8709 27.5134 10.8419 27.4426 10.7798 27.419C9.8279 27.0579 8.9215 26.6176 8.04961 26.1177C7.98064 26.0774 7.97512 25.9787 8.03856 25.9315C8.22204 25.794 8.40557 25.651 8.58077 25.5065C8.61246 25.4802 8.65663 25.4746 8.6939 25.4913C14.4219 28.1064 20.6231 28.1064 26.2835 25.4913C26.3207 25.4732 26.3649 25.4788 26.398 25.5052C26.5732 25.6496 26.7567 25.794 26.9416 25.9315C27.005 25.9787 27.0009 26.0774 26.9319 26.1177C26.06 26.6273 25.1536 27.0579 24.2003 27.4176C24.1383 27.4412 24.1107 27.5134 24.141 27.5731C24.6666 28.5911 25.2667 29.5605 25.9276 30.4799C25.9552 30.5188 26.0048 30.5355 26.0504 30.5216C28.9102 29.6369 31.8101 28.3022 34.8038 26.1038C34.83 26.0843 34.8465 26.0551 34.8493 26.0232C35.5791 18.4735 33.627 11.9155 29.6745 6.10185C29.6648 6.08242 29.6483 6.06852 29.629 6.06019ZM11.6959 22.0456C9.97135 22.0456 8.5504 20.4623 8.5504 18.518C8.5504 16.5736 9.9438 14.9904 11.6959 14.9904C13.4617 14.9904 14.8689 16.5875 14.8413 18.518C14.8413 20.4623 13.4479 22.0456 11.6959 22.0456ZM23.3257 22.0456C21.6012 22.0456 20.1803 20.4623 20.1803 18.518C20.1803 16.5736 21.5736 14.9904 23.3257 14.9904C25.0915 14.9904 26.4987 16.5875 26.4711 18.518C26.4711 20.4623 25.0915 22.0456 23.3257 22.0456Z"
                      fill="#2B373B"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_i_230_326"
                      x={0}
                      y="3.84875"
                      width={35}
                      height="30.6777"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy={4} />
                      <feGaussianBlur stdDeviation={2} />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2={-1}
                        k3={1}
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_230_326"
                      />
                    </filter>
                  </defs>
                </svg>
              </a> */}
            </div>
          </div>
          {/* Tools Container */}
          <div className="work-container md:h-full md:min-h-0 min-h-[432px] md:w-1/2 w-full rounded-3xl bg-[#2B373B]">
            <div className="transitioninner-work-container flex h-full w-full flex-col items-center justify-between md:justify-evenly rounded-3xl bg-[#2B373B] px-8 py-5">
              {/* Title */}
              <div className="w-72 text-center">
                <span className="font-['Inter'] text-3xl font-bold text-neutral-400">
                  THE
                </span>
                <span className="font-['Inter'] text-3xl font-bold text-neutral-200">
                  {" "}
                  TOOLS
                </span>
              </div>
              {/* Grid Container */}
              <div className="mb-4 md:mt-4 mt-[20px] grid md:grid-cols-5 grid-cols-3 place-items-center gap-x-4 md:gap-y-3 gap-y-[28px]">
                {/* Icon Flutter */}
                <div>
                  <svg
                    width={44}
                    height={52}
                    viewBox="0 0 44 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_235_484)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21.9532 43.9295L10.2156 32.1202L16.7028 25.4355L35.0001 43.9295H21.9532Z"
                        fill="#464646"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.0706 32.1294L21.704 20.3475H34.7826L16.6846 38.6763L10.0706 32.1294Z"
                        fill="#E6E6E6"
                        fillOpacity="0.85"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 21.8523L6.60497 28.537L34.7826 0H21.636L0 21.8523Z"
                        fill="#E6E6E6"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_235_484"
                        x={0}
                        y={0}
                        width={44}
                        height="51.9296"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx={5} dy={4} />
                        <feGaussianBlur stdDeviation={2} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_235_484"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_235_484"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                {/* Icon Android Studio */}
                <div>
                  <svg
                    width={49}
                    height={52}
                    viewBox="0 0 49 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_235_392)">
                      <mask
                        id="mask0_235_392"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={40}
                        height={45}
                      >
                        <path
                          d="M40 20.3903C40 9.13002 31.0447 0 20 0C8.95526 0 0 9.13002 0 20.3903C0 26.5825 2.71053 32.1254 6.98421 35.8628L4.58421 40.0991V43.4635C4.58421 43.7586 4.82105 44.0001 5.11053 44.0001C5.20789 44.0001 5.29737 43.9733 5.37632 43.9277L8.23158 42.2481L10.4605 38.315C13.2947 39.8872 16.5447 40.7806 20 40.7806C23.4553 40.7806 26.7053 39.8872 29.5421 38.315L31.7711 42.2481L34.6263 43.9277C34.7053 43.9733 34.7947 44.0001 34.8921 44.0001C35.1816 44.0001 35.4184 43.7586 35.4184 43.4635V40.0991L33.0184 35.8628C37.2895 32.1254 40 26.5825 40 20.3903Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_235_392)">
                        <path
                          d="M20 40.7806C31.0457 40.7806 40 31.6515 40 20.3903C40 9.12904 31.0457 0 20 0C8.95431 0 0 9.12904 0 20.3903C0 31.6515 8.95431 40.7806 20 40.7806Z"
                          fill="#DDDDDD"
                        />
                      </g>
                      <mask
                        id="mask1_235_392"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={40}
                        height={45}
                      >
                        <path
                          d="M40 20.3903C40 9.13002 31.0447 0 20 0C8.95526 0 0 9.13002 0 20.3903C0 26.5825 2.71053 32.1254 6.98421 35.8628L4.58421 40.0991V43.4635C4.58421 43.7586 4.82105 44.0001 5.11053 44.0001C5.20789 44.0001 5.29737 43.9733 5.37632 43.9277L8.23158 42.2481L10.4605 38.315C13.2947 39.8872 16.5447 40.7806 20 40.7806C23.4553 40.7806 26.7053 39.8872 29.5421 38.315L31.7711 42.2481L34.6263 43.9277C34.7053 43.9733 34.7947 44.0001 34.8921 44.0001C35.1816 44.0001 35.4184 43.7586 35.4184 43.4635V40.0991L33.0184 35.8628C37.2895 32.1254 40 26.5825 40 20.3903Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask1_235_392)">
                        <path
                          d="M20 40.5123C30.9579 40.5123 39.8526 31.5271 39.9921 20.3903H40C40 31.6505 31.0447 40.7805 20 40.7805C8.95526 40.7805 0 31.6505 0 20.3903H0.00789474C0.147368 31.5271 9.04211 40.5123 20 40.5123Z"
                          fill="#263238"
                          fillOpacity="0.2"
                        />
                      </g>
                      <mask
                        id="mask2_235_392"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={40}
                        height={45}
                      >
                        <path
                          d="M40 20.3903C40 9.13002 31.0447 0 20 0C8.95526 0 0 9.13002 0 20.3903C0 26.5825 2.71053 32.1254 6.98421 35.8628L4.58421 40.0991V43.4635C4.58421 43.7586 4.82105 44.0001 5.11053 44.0001C5.20789 44.0001 5.29737 43.9733 5.37632 43.9277L8.23158 42.2481L10.4605 38.315C13.2947 39.8872 16.5447 40.7806 20 40.7806C23.4553 40.7806 26.7053 39.8872 29.5421 38.315L31.7711 42.2481L34.6263 43.9277C34.7053 43.9733 34.7947 44.0001 34.8921 44.0001C35.1816 44.0001 35.4184 43.7586 35.4184 43.4635V40.0991L33.0184 35.8628C37.2895 32.1254 40 26.5825 40 20.3903Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask2_235_392)">
                        <path
                          d="M20 0C8.95526 0 0 9.13002 0 20.3903H40C40 9.13002 31.0447 0 20 0Z"
                          fill="#E4E4E4"
                        />
                      </g>
                      <mask
                        id="mask3_235_392"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={40}
                        height={45}
                      >
                        <path
                          d="M40 20.3903C40 9.13002 31.0447 0 20 0C8.95526 0 0 9.13002 0 20.3903C0 26.5825 2.71053 32.1254 6.98421 35.8628L4.58421 40.0991V43.4635C4.58421 43.7586 4.82105 44.0001 5.11053 44.0001C5.20789 44.0001 5.29737 43.9733 5.37632 43.9277L8.23158 42.2481L10.4605 38.315C13.2947 39.8872 16.5447 40.7806 20 40.7806C23.4553 40.7806 26.7053 39.8872 29.5421 38.315L31.7711 42.2481L34.6263 43.9277C34.7053 43.9733 34.7947 44.0001 34.8921 44.0001C35.1816 44.0001 35.4184 43.7586 35.4184 43.4635V40.0991L33.0184 35.8628C37.2895 32.1254 40 26.5825 40 20.3903Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask3_235_392)">
                        <path
                          d="M20 19.8537C21.4534 19.8537 22.6316 18.6525 22.6316 17.1707C22.6316 15.689 21.4534 14.4878 20 14.4878C18.5466 14.4878 17.3684 15.689 17.3684 17.1707C17.3684 18.6525 18.5466 19.8537 20 19.8537Z"
                          fill="#E4E4E4"
                        />
                      </g>
                      <mask
                        id="mask4_235_392"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={40}
                        height={45}
                      >
                        <path
                          d="M40 20.3903C40 9.13002 31.0447 0 20 0C8.95526 0 0 9.13002 0 20.3903C0 26.5825 2.71053 32.1254 6.98421 35.8628L4.58421 40.0991V43.4635C4.58421 43.7586 4.82105 44.0001 5.11053 44.0001C5.20789 44.0001 5.29737 43.9733 5.37632 43.9277L8.23158 42.2481L10.4605 38.315C13.2947 39.8872 16.5447 40.7806 20 40.7806C23.4553 40.7806 26.7053 39.8872 29.5421 38.315L31.7711 42.2481L34.6263 43.9277C34.7053 43.9733 34.7947 44.0001 34.8921 44.0001C35.1816 44.0001 35.4184 43.7586 35.4184 43.4635V40.0991L33.0184 35.8628C37.2895 32.1254 40 26.5825 40 20.3903Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask4_235_392)">
                        <path
                          d="M40 20.3902H0V20.1219H40V20.3902Z"
                          fill="#263238"
                          fillOpacity="0.05"
                        />
                      </g>
                      <mask
                        id="mask5_235_392"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={40}
                        height={45}
                      >
                        <path
                          d="M40 20.3903C40 9.13002 31.0447 0 20 0C8.95526 0 0 9.13002 0 20.3903C0 26.5825 2.71053 32.1254 6.98421 35.8628L4.58421 40.0991V43.4635C4.58421 43.7586 4.82105 44.0001 5.11053 44.0001C5.20789 44.0001 5.29737 43.9733 5.37632 43.9277L8.23158 42.2481L10.4605 38.315C13.2947 39.8872 16.5447 40.7806 20 40.7806C23.4553 40.7806 26.7053 39.8872 29.5421 38.315L31.7711 42.2481L34.6263 43.9277C34.7053 43.9733 34.7947 44.0001 34.8921 44.0001C35.1816 44.0001 35.4184 43.7586 35.4184 43.4635V40.0991L33.0184 35.8628C37.2895 32.1254 40 26.5825 40 20.3903Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask5_235_392)">
                        <path
                          d="M40 20.6586H0V20.3903H40V20.6586Z"
                          fill="white"
                          fillOpacity="0.05"
                        />
                      </g>
                      <mask
                        id="mask6_235_392"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={40}
                        height={45}
                      >
                        <path
                          d="M40 20.3903C40 9.13002 31.0447 0 20 0C8.95526 0 0 9.13002 0 20.3903C0 26.5825 2.71053 32.1254 6.98421 35.8628L4.58421 40.0991V43.4635C4.58421 43.7586 4.82105 44.0001 5.11053 44.0001C5.20789 44.0001 5.29737 43.9733 5.37632 43.9277L8.23158 42.2481L10.4605 38.315C13.2947 39.8872 16.5447 40.7806 20 40.7806C23.4553 40.7806 26.7053 39.8872 29.5421 38.315L31.7711 42.2481L34.6263 43.9277C34.7053 43.9733 34.7947 44.0001 34.8921 44.0001C35.1816 44.0001 35.4184 43.7586 35.4184 43.4635V40.0991L33.0184 35.8628C37.2895 32.1254 40 26.5825 40 20.3903Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask6_235_392)">
                        <path
                          d="M15.7448 20.3903L5.1106 44.0001H40.0001V25.7562L22.1053 7.51221L17.8948 10.7317L15.7448 20.3903Z"
                          fill="url(#paint0_linear_235_392)"
                        />
                      </g>
                      <mask
                        id="mask7_235_392"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={40}
                        height={45}
                      >
                        <path
                          d="M40 20.3903C40 9.13002 31.0447 0 20 0C8.95526 0 0 9.13002 0 20.3903C0 26.5825 2.71053 32.1254 6.98421 35.8628L4.58421 40.0991V43.4635C4.58421 43.7586 4.82105 44.0001 5.11053 44.0001C5.20789 44.0001 5.29737 43.9733 5.37632 43.9277L8.23158 42.2481L10.4605 38.315C13.2947 39.8872 16.5447 40.7806 20 40.7806C23.4553 40.7806 26.7053 39.8872 29.5421 38.315L31.7711 42.2481L34.6263 43.9277C34.7053 43.9733 34.7947 44.0001 34.8921 44.0001C35.1816 44.0001 35.4184 43.7586 35.4184 43.4635V40.0991L33.0184 35.8628C37.2895 32.1254 40 26.5825 40 20.3903Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask7_235_392)">
                        <path
                          d="M20 0.268293C30.9579 0.268293 39.8526 9.25344 39.9921 20.3903H40C40 9.13002 31.0447 0 20 0C8.95526 0 0 9.13002 0 20.3903H0.00789474C0.147368 9.25344 9.04211 0.268293 20 0.268293Z"
                          fill="white"
                          fillOpacity="0.2"
                        />
                      </g>
                      <mask
                        id="mask8_235_392"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={40}
                        height={45}
                      >
                        <path
                          d="M40 20.3903C40 9.13002 31.0447 0 20 0C8.95526 0 0 9.13002 0 20.3903C0 26.5825 2.71053 32.1254 6.98421 35.8628L4.58421 40.0991V43.4635C4.58421 43.7586 4.82105 44.0001 5.11053 44.0001C5.20789 44.0001 5.29737 43.9733 5.37632 43.9277L8.23158 42.2481L10.4605 38.315C13.2947 39.8872 16.5447 40.7806 20 40.7806C23.4553 40.7806 26.7053 39.8872 29.5421 38.315L31.7711 42.2481L34.6263 43.9277C34.7053 43.9733 34.7947 44.0001 34.8921 44.0001C35.1816 44.0001 35.4184 43.7586 35.4184 43.4635V40.0991L33.0184 35.8628C37.2895 32.1254 40 26.5825 40 20.3903Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask8_235_392)">
                        <path
                          d="M24.2552 20.3903H19.3921L31.771 42.2481L34.6263 43.9276C34.7052 43.9732 34.7947 44.0001 34.8921 44.0001C35.1816 44.0001 35.4184 43.7586 35.4184 43.4635V40.0991L24.2552 20.3903Z"
                          fill="white"
                        />
                        <path
                          opacity="0.3"
                          d="M24.2552 20.3903H19.3921L31.771 42.2481L34.6263 43.9276C34.7052 43.9732 34.7947 44.0001 34.8921 44.0001C35.1816 44.0001 35.4184 43.7586 35.4184 43.4635V40.0991L24.2552 20.3903Z"
                          fill="#BDBDBD"
                        />
                        <path
                          d="M35.4157 40.0991L24.2552 20.3903H24.1025L35.4157 40.3674V40.0991Z"
                          fill="white"
                          fillOpacity="0.2"
                        />
                        <path
                          d="M34.8895 43.7318C34.7921 43.7318 34.7026 43.7049 34.6237 43.6593L31.7684 41.9798L19.5447 20.3903H19.3921L31.771 42.2481L34.6263 43.9276C34.7052 43.9732 34.7947 44.0001 34.8921 44.0001C35.1816 44.0001 35.4184 43.7586 35.4184 43.4635V43.1952C35.4158 43.4903 35.1789 43.7318 34.8895 43.7318Z"
                          fill="#212121"
                          fillOpacity="0.1"
                        />
                      </g>
                      <mask
                        id="mask9_235_392"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={40}
                        height={45}
                      >
                        <path
                          d="M40 20.3903C40 9.13002 31.0447 0 20 0C8.95526 0 0 9.13002 0 20.3903C0 26.5825 2.71053 32.1254 6.98421 35.8628L4.58421 40.0991V43.4635C4.58421 43.7586 4.82105 44.0001 5.11053 44.0001C5.20789 44.0001 5.29737 43.9733 5.37632 43.9277L8.23158 42.2481L10.4605 38.315C13.2947 39.8872 16.5447 40.7806 20 40.7806C23.4553 40.7806 26.7053 39.8872 29.5421 38.315L31.7711 42.2481L34.6263 43.9277C34.7053 43.9733 34.7947 44.0001 34.8921 44.0001C35.1816 44.0001 35.4184 43.7586 35.4184 43.4635V40.0991L33.0184 35.8628C37.2895 32.1254 40 26.5825 40 20.3903Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask9_235_392)">
                        <path
                          d="M30.5263 20.3903C30.5263 26.3169 25.8131 31.122 20 31.122C18.271 31.122 16.6394 30.6954 15.2 29.9415L20 21.4634L20.6079 20.3903H15.7447L4.58154 40.0991V43.4635C4.58154 43.7586 4.81839 44.0001 5.10786 44.0001C5.20523 44.0001 5.2947 43.9732 5.37365 43.9276L8.22891 42.2481L13.0921 33.6627C15.1526 34.7788 17.5026 35.4147 20 35.4147C28.1394 35.4147 34.7368 28.6886 34.7368 20.3903H30.5263Z"
                          fill="white"
                        />
                        <path
                          d="M15.7447 20.3903L4.58154 40.0991V40.3674L15.8973 20.3903H15.7447ZM20 31.122C18.271 31.122 16.6394 30.6954 15.2 29.9415V30.2098C16.6394 30.9637 18.271 31.3903 20 31.3903C25.8131 31.3903 30.5263 26.5852 30.5263 20.6586H34.7289C34.7315 20.57 34.7368 20.4815 34.7368 20.3903H30.5263C30.5263 26.3169 25.8131 31.122 20 31.122Z"
                          fill="white"
                          fillOpacity="0.4"
                        />
                        <path
                          d="M20.6079 20.3903H20.4552L15.1973 29.6732V29.9415L20.6079 20.3903ZM34.7289 20.3903C34.5868 28.5625 28.05 35.1464 20 35.1464C17.5026 35.1464 15.1526 34.5105 13.0921 33.3944L8.22891 41.9798L5.37365 43.6593C5.2947 43.7049 5.20523 43.7318 5.10786 43.7318C4.81839 43.7318 4.58154 43.4903 4.58154 43.1952V43.4635C4.58154 43.7586 4.81839 44.0001 5.10786 44.0001C5.20523 44.0001 5.2947 43.9732 5.37365 43.9276L8.22891 42.2481L13.0921 33.6627C15.1526 34.7788 17.5026 35.4147 20 35.4147C28.1394 35.4147 34.7368 28.6886 34.7368 20.3903H34.7289Z"
                          fill="#212121"
                          fillOpacity="0.1"
                        />
                      </g>
                      <mask
                        id="mask10_235_392"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={40}
                        height={45}
                      >
                        <path
                          d="M40 20.3903C40 9.13002 31.0447 0 20 0C8.95526 0 0 9.13002 0 20.3903C0 26.5825 2.71053 32.1254 6.98421 35.8628L4.58421 40.0991V43.4635C4.58421 43.7586 4.82105 44.0001 5.11053 44.0001C5.20789 44.0001 5.29737 43.9733 5.37632 43.9277L8.23158 42.2481L10.4605 38.315C13.2947 39.8872 16.5447 40.7806 20 40.7806C23.4553 40.7806 26.7053 39.8872 29.5421 38.315L31.7711 42.2481L34.6263 43.9277C34.7053 43.9733 34.7947 44.0001 34.8921 44.0001C35.1816 44.0001 35.4184 43.7586 35.4184 43.4635V40.0991L33.0184 35.8628C37.2895 32.1254 40 26.5825 40 20.3903Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask10_235_392)">
                        <path
                          d="M24.737 10.7317H22.1054V7.51221H17.8949V10.7317H15.2633C14.3949 10.7317 13.6843 11.4561 13.6843 12.3415V20.3903L18.8843 25.6864C19.1712 25.9761 19.5633 26.1586 20.0001 26.1586C20.437 26.1586 20.8317 25.9788 21.1159 25.6864L26.3159 20.3903V12.3415C26.3159 11.4561 25.6054 10.7317 24.737 10.7317ZM20.0001 19.8537C18.5475 19.8537 17.3685 18.6517 17.3685 17.1708C17.3685 15.6898 18.5475 14.4878 20.0001 14.4878C21.4527 14.4878 22.6317 15.6898 22.6317 17.1708C22.6317 18.6517 21.4527 19.8537 20.0001 19.8537Z"
                          fill="#464646"
                        />
                      </g>
                      <mask
                        id="mask11_235_392"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={40}
                        height={45}
                      >
                        <path
                          d="M40 20.3903C40 9.13002 31.0447 0 20 0C8.95526 0 0 9.13002 0 20.3903C0 26.5825 2.71053 32.1254 6.98421 35.8628L4.58421 40.0991V43.4635C4.58421 43.7586 4.82105 44.0001 5.11053 44.0001C5.20789 44.0001 5.29737 43.9733 5.37632 43.9277L8.23158 42.2481L10.4605 38.315C13.2947 39.8872 16.5447 40.7806 20 40.7806C23.4553 40.7806 26.7053 39.8872 29.5421 38.315L31.7711 42.2481L34.6263 43.9277C34.7053 43.9733 34.7947 44.0001 34.8921 44.0001C35.1816 44.0001 35.4184 43.7586 35.4184 43.4635V40.0991L33.0184 35.8628C37.2895 32.1254 40 26.5825 40 20.3903Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask11_235_392)">
                        <path
                          d="M24.737 10.7317H22.1054V11H24.737C25.6054 11 26.3159 11.7244 26.3159 12.6098V12.3415C26.3159 11.4561 25.6054 10.7317 24.737 10.7317ZM22.1054 7.51221H17.8949V7.7805H22.1054V7.51221ZM17.8949 10.7317H15.2633C14.3949 10.7317 13.6843 11.4561 13.6843 12.3415V12.6098C13.6843 11.7244 14.3949 11 15.2633 11H17.8949V10.7317ZM20.0001 19.8537C18.5475 19.8537 17.3685 18.6517 17.3685 17.1708V17.4391C17.3685 18.92 18.5475 20.122 20.0001 20.122C21.4527 20.122 22.6317 18.92 22.6317 17.4391V17.1708C22.6317 18.6517 21.4527 19.8537 20.0001 19.8537Z"
                          fill="white"
                          fillOpacity="0.1"
                        />
                      </g>
                      <mask
                        id="mask12_235_392"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={40}
                        height={45}
                      >
                        <path
                          d="M40 20.3903C40 9.13002 31.0447 0 20 0C8.95526 0 0 9.13002 0 20.3903C0 26.5825 2.71053 32.1254 6.98421 35.8628L4.58421 40.0991V43.4635C4.58421 43.7586 4.82105 44.0001 5.11053 44.0001C5.20789 44.0001 5.29737 43.9733 5.37632 43.9277L8.23158 42.2481L10.4605 38.315C13.2947 39.8872 16.5447 40.7806 20 40.7806C23.4553 40.7806 26.7053 39.8872 29.5421 38.315L31.7711 42.2481L34.6263 43.9277C34.7053 43.9733 34.7947 44.0001 34.8921 44.0001C35.1816 44.0001 35.4184 43.7586 35.4184 43.4635V40.0991L33.0184 35.8628C37.2895 32.1254 40 26.5825 40 20.3903Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask12_235_392)">
                        <path
                          d="M20.0001 14.4879C21.4527 14.4879 22.6317 15.6899 22.6317 17.1708V16.9025C22.6317 15.4216 21.4527 14.2196 20.0001 14.2196C18.5475 14.2196 17.3685 15.4216 17.3685 16.9025V17.1708C17.3685 15.6899 18.5475 14.4879 20.0001 14.4879ZM21.1159 25.4182C20.8291 25.7079 20.437 25.8904 20.0001 25.8904C19.5633 25.8904 19.1685 25.7106 18.8843 25.4182L13.6843 20.1221V20.3904L18.8843 25.6865C19.1712 25.9762 19.5633 26.1587 20.0001 26.1587C20.437 26.1587 20.8317 25.9789 21.1159 25.6865L26.3159 20.3904V20.1221L21.1159 25.4182Z"
                          fill="#212121"
                          fillOpacity="0.1"
                        />
                      </g>
                      <path
                        d="M40 20.3903C40 9.13002 31.0447 0 20 0C8.95526 0 0 9.13002 0 20.3903C0 26.5825 2.71052 32.1254 6.98421 35.8628L4.58421 40.0991V43.4635C4.58421 43.7586 4.82105 44.0001 5.11053 44.0001C5.20789 44.0001 5.29737 43.9733 5.37632 43.9277L8.23158 42.2481L10.4605 38.315C13.2947 39.8872 16.5447 40.7806 20 40.7806C23.4553 40.7806 26.7053 39.8872 29.5421 38.315L31.771 42.2481L34.6263 43.9277C34.7053 43.9733 34.7947 44.0001 34.8921 44.0001C35.1816 44.0001 35.4184 43.7586 35.4184 43.4635V40.0991L33.0184 35.8628C37.2895 32.1254 40 26.5825 40 20.3903Z"
                        fill="url(#paint1_radial_235_392)"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_235_392"
                        x={0}
                        y={0}
                        width={49}
                        height="52.0001"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx={5} dy={4} />
                        <feGaussianBlur stdDeviation={2} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_235_392"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_235_392"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_235_392"
                        x1="15.3578"
                        y1="26.5404"
                        x2="34.4099"
                        y2="37.0034"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#263238" stopOpacity="0.2" />
                        <stop
                          offset={1}
                          stopColor="#263238"
                          stopOpacity="0.02"
                        />
                      </linearGradient>
                      <radialGradient
                        id="paint1_radial_235_392"
                        cx={0}
                        cy={0}
                        r={1}
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(5.88368 5.9537) scale(47.4011 52.1413)"
                      >
                        <stop stopColor="white" stopOpacity="0.1" />
                        <stop offset={1} stopColor="white" stopOpacity={0} />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
                {/* Icon Docker */}
                <div>
                  <svg
                    width={65}
                    height={48}
                    viewBox="0 0 65 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_236_496)">
                      <path
                        d="M54.8557 14.9644C54.7016 14.8364 53.3141 13.7876 50.334 13.7876C49.5632 13.7876 48.7667 13.8644 47.996 13.9923C47.4307 10.0785 44.1678 8.18561 44.0394 8.08333L43.2429 7.6228L42.7291 8.36468C42.0868 9.36233 41.5987 10.4879 41.316 11.639C40.7766 13.8644 41.1105 15.962 42.241 17.7525C40.8793 18.52 38.6698 18.6991 38.2074 18.7246H1.72469C0.774121 18.7246 0.00334519 19.4921 0.00334519 20.4385C-0.0479719 23.6104 0.491506 26.7823 1.59631 29.7752C2.85515 33.0495 4.73073 35.4796 7.14578 36.9633C9.86911 38.6259 14.3138 39.5724 19.3237 39.5724C21.5846 39.5724 23.8454 39.3678 26.0807 38.9585C29.1894 38.3957 32.1696 37.3213 34.9187 35.761C37.1716 34.4606 39.2017 32.8022 40.9306 30.8496C43.8338 27.6009 45.5552 23.9686 46.814 20.7455H47.3278C50.488 20.7455 52.4406 19.4921 53.5196 18.4176C54.239 17.7525 54.7784 16.9341 55.1639 16.0132L55.3952 15.3481L54.8557 14.9644Z"
                        fill="#DEDEDE"
                      />
                      <path
                        d="M5.11595 17.6758H9.99738C10.2287 17.6758 10.4342 17.4968 10.4342 17.241V12.8924C10.4342 12.6621 10.2543 12.4576 9.99738 12.4576H5.11595C4.88475 12.4576 4.6792 12.6365 4.6792 12.8924V17.241C4.70486 17.4968 4.88475 17.6759 5.11595 17.6759V17.6758ZM11.8472 17.6758H16.7287C16.9599 17.6758 17.1655 17.4968 17.1655 17.241V12.8924C17.1655 12.6621 16.9856 12.4576 16.7287 12.4576H11.8471C11.6159 12.4576 11.4104 12.6365 11.4104 12.8924V17.241C11.4361 17.4968 11.616 17.6759 11.8471 17.6759M18.7068 17.6759H23.5884C23.8196 17.6759 24.0251 17.4968 24.0251 17.241V12.8924C24.0251 12.6621 23.8452 12.4576 23.5884 12.4576H18.7068C18.4756 12.4576 18.2701 12.6365 18.2701 12.8924V17.241C18.2701 17.4968 18.45 17.6759 18.7068 17.6759ZM25.4638 17.6759H30.3454C30.5766 17.6759 30.7821 17.4968 30.7821 17.241V12.8924C30.7821 12.6621 30.6022 12.4576 30.3454 12.4576H25.4638C25.2326 12.4576 25.0271 12.6365 25.0271 12.8924V17.241C25.0271 17.4968 25.2326 17.6759 25.4638 17.6759ZM11.8472 11.4599H16.7286C16.9598 11.4599 17.1654 11.2554 17.1654 11.0251V6.67647C17.1654 6.4462 16.9855 6.24154 16.7286 6.24154H11.8471C11.6159 6.24154 11.4104 6.42061 11.4104 6.67647V11.0251C11.4361 11.2553 11.6161 11.4599 11.8472 11.4599ZM18.7068 11.4599H23.5884C23.8196 11.4599 24.0251 11.2554 24.0251 11.0251V6.67647C24.0251 6.4462 23.8452 6.24154 23.5884 6.24154H18.7068C18.4756 6.24154 18.2701 6.42061 18.2701 6.67647V11.0251C18.2701 11.2553 18.45 11.4599 18.7068 11.4599ZM25.4638 11.4599H30.3454C30.5766 11.4599 30.7821 11.2554 30.7821 11.0251V6.67647C30.7821 6.4462 30.5765 6.24154 30.3454 6.24154H25.4638C25.2326 6.24154 25.0271 6.42061 25.0271 6.67647V11.0251C25.0271 11.2553 25.2326 11.4599 25.4638 11.4599ZM25.4638 5.21839H30.3454C30.5766 5.21839 30.7821 5.03932 30.7821 4.78356V0.434928C30.7821 0.204666 30.5765 0 30.3454 0H25.4638C25.2326 0 25.0271 0.179071 25.0271 0.434928V4.78356C25.0271 5.01372 25.2326 5.21839 25.4638 5.21839ZM32.2722 17.6759H37.1537C37.3849 17.6759 37.5904 17.4968 37.5904 17.241V12.8924C37.5904 12.6621 37.4106 12.4576 37.1537 12.4576H32.2722C32.0409 12.4576 31.8354 12.6365 31.8354 12.8924V17.241C31.8612 17.4968 32.041 17.6759 32.2722 17.6759"
                        fill="#DEDEDE"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_236_496"
                        x={0}
                        y={0}
                        width="64.395"
                        height="47.5724"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx={5} dy={4} />
                        <feGaussianBlur stdDeviation={2} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_236_496"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_236_496"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                {/* Icon Github */}
                <div>
                  <svg
                    width={54}
                    height={52}
                    viewBox="0 0 54 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_239_530)">
                      <path
                        d="M22.413 0C10.0362 0 0 10.0858 0 22.5277C0 32.4812 6.42199 40.9254 15.3274 43.9043C16.4475 44.1128 16.8588 43.4156 16.8588 42.8205C16.8588 42.2834 16.8379 40.5086 16.8284 38.6263C10.5929 39.989 9.27721 35.9683 9.27721 35.9683C8.25768 33.3644 6.78867 32.6721 6.78867 32.6721C4.75523 31.2739 6.94195 31.3025 6.94195 31.3025C9.19266 31.4615 10.3778 33.6241 10.3778 33.6241C12.3768 37.0681 15.621 36.0724 16.9 35.4969C17.1011 34.0407 17.682 33.0471 18.3229 32.4845C13.3448 31.9147 8.11143 29.9831 8.11143 21.3512C8.11143 18.8918 8.98699 16.882 10.4208 15.3044C10.1881 14.7369 9.421 12.4457 10.6379 9.3427C10.6379 9.3427 12.52 8.73721 16.8031 11.6519C18.5908 11.1526 20.5082 10.9024 22.413 10.894C24.3178 10.9024 26.2366 11.1526 28.0278 11.6519C32.3058 8.73721 34.1852 9.3427 34.1852 9.3427C35.4052 12.4457 34.6377 14.7369 34.405 15.3044C35.842 16.882 36.7116 18.8916 36.7116 21.3512C36.7116 30.0036 31.4684 31.9089 26.4776 32.4665C27.2814 33.1656 27.9977 34.5367 27.9977 36.6383C27.9977 39.6525 27.9717 42.0785 27.9717 42.8205C27.9717 43.42 28.3751 44.1225 29.5114 43.9013C38.4119 40.9191 44.8258 32.4778 44.8258 22.5277C44.8258 10.0858 34.791 0 22.413 0Z"
                        fill="#DEDEDE"
                      />
                      <path
                        d="M8.39425 32.0912C8.34503 32.2031 8.1696 32.2366 8.01017 32.16C7.84757 32.0865 7.75616 31.9338 7.8089 31.8214C7.85724 31.7062 8.03267 31.6741 8.19491 31.7515C8.35786 31.8248 8.45067 31.9789 8.39425 32.0912ZM9.49675 33.0799C9.38987 33.1796 9.18087 33.1333 9.03901 32.9759C8.89241 32.8188 8.86499 32.6089 8.97345 32.5077C9.08366 32.4082 9.28634 32.4547 9.43329 32.6119C9.57989 32.7708 9.60837 32.9794 9.49657 33.0801M10.2531 34.345C10.1157 34.4409 9.89102 34.351 9.75233 34.1506C9.61505 33.9504 9.61505 33.7102 9.75532 33.6139C9.89454 33.5176 10.1157 33.6042 10.2563 33.8029C10.3934 34.0066 10.3934 34.2469 10.253 34.3452M11.5321 35.8102C11.4092 35.9462 11.1477 35.9098 10.9561 35.724C10.7603 35.5423 10.7056 35.2846 10.8288 35.1483C10.9531 35.0119 11.2162 35.0503 11.4092 35.2346C11.6038 35.4158 11.6631 35.6756 11.5321 35.8102ZM13.1852 36.3049C13.1312 36.4812 12.8791 36.5614 12.6253 36.4865C12.3718 36.4093 12.2059 36.2026 12.257 36.0243C12.3098 35.8468 12.5629 35.7632 12.8187 35.8434C13.0718 35.9203 13.2379 36.1254 13.1852 36.3049ZM15.0667 36.5146C15.0731 36.7005 14.8577 36.8546 14.5912 36.8579C14.3232 36.8637 14.1064 36.7134 14.1036 36.5307C14.1036 36.3431 14.314 36.1904 14.5819 36.186C14.8484 36.1807 15.0667 36.33 15.0667 36.5146ZM16.9149 36.4434C16.9469 36.6247 16.7616 36.8109 16.4971 36.8604C16.2369 36.9081 15.9961 36.7962 15.9629 36.6166C15.9305 36.4307 16.1193 36.2446 16.3789 36.1964C16.644 36.1501 16.8811 36.2591 16.9149 36.4434Z"
                        fill="#DEDEDE"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_239_530"
                        x={0}
                        y={0}
                        width="53.8257"
                        height="51.943"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx={5} dy={4} />
                        <feGaussianBlur stdDeviation={2} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_239_530"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_239_530"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                {/* Icon Mysql */}
                <div>
                  <svg
                    width={73}
                    height={52}
                    viewBox="0 0 73 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_235_491)">
                      <path
                        d="M26.0863 29.0636C25.0809 34.5857 23.7554 38.6031 22.1097 41.0991C20.8273 43.0283 19.4226 43.9929 17.8931 43.9929C17.4849 43.9929 16.9827 43.8685 16.3855 43.6216V42.2893C16.6766 42.3337 17.0188 42.3559 17.4119 42.3559C18.1253 42.3559 18.7005 42.1569 19.1385 41.7581C19.6628 41.2723 19.9249 40.7269 19.9249 40.122C19.9249 39.709 19.7199 38.8607 19.3127 37.5781L16.6036 29.0601H19.0286L20.9724 35.4313C21.4096 36.8773 21.5917 37.8872 21.5187 38.4628C22.5829 35.5867 23.3253 32.4531 23.7475 29.0654H26.0854M15.381 40.0794H12.913C12.8259 35.8603 12.5858 31.8944 12.1917 28.1772H12.1715L8.41308 40.0794H6.53256L2.79703 28.1772H2.77504C2.49798 31.7461 2.32382 35.712 2.25082 40.0794H0C0.145129 34.7696 0.51015 29.7937 1.09155 25.1483H4.15069L7.71206 36.1179H7.73405L11.3174 25.1483H14.2446C14.8849 30.5896 15.264 35.5672 15.3793 40.0794"
                        fill="#E4E4E4"
                      />
                      <path
                        d="M58.9464 40.0775H51.9336V25.1464H54.2935V38.2389H58.9464V40.0757M41.3111 37.0886C40.713 36.1151 40.4148 34.5536 40.4148 32.3997C40.4148 28.6398 41.5442 26.7586 43.8011 26.7586C44.9815 26.7586 45.8479 27.2089 46.4011 28.1078C46.9975 29.0813 47.2965 30.6303 47.2965 32.7541C47.2965 36.5441 46.1672 38.4405 43.9102 38.4405C42.7307 38.4405 41.8635 37.9911 41.3111 37.0904M50.0936 40.4372L47.3827 39.0836C47.6237 38.8828 47.8533 38.6661 48.06 38.4174C49.2122 37.0469 49.7875 35.0191 49.7875 32.334C49.7875 27.3936 47.8718 24.9226 44.0413 24.9226C42.1625 24.9226 40.698 25.5488 39.6496 26.8039C38.4973 28.1753 37.923 30.1969 37.923 32.8651C37.923 35.4898 38.4331 37.4155 39.4517 38.6386C40.3805 39.7444 41.7852 40.2978 43.6666 40.2978C44.3685 40.2978 45.0123 40.2107 45.5972 40.0358L49.1269 42.116L50.0892 40.4372M36.8956 35.9384C36.8956 37.205 36.4365 38.2442 35.52 39.0578C34.6035 39.867 33.3712 40.2738 31.8293 40.2738C30.3868 40.2738 28.9883 39.8057 27.6338 38.8793L28.268 37.5967C29.4334 38.1865 30.488 38.4805 31.4344 38.4805C32.3228 38.4805 33.0176 38.2806 33.5207 37.8854C34.0221 37.4865 34.3238 36.9314 34.3238 36.227C34.3238 35.3406 33.7125 34.5829 32.5928 33.947C31.5551 33.3623 30.5213 32.7708 29.4914 32.1723C28.3717 31.3445 27.8097 30.4571 27.8097 28.9951C27.8097 27.7854 28.2284 26.8074 29.0648 26.064C29.9031 25.3179 30.9849 24.9448 32.3096 24.9448C33.6791 24.9448 34.9237 25.3152 36.0451 26.0533L35.4751 27.335C34.5164 26.9229 33.57 26.7159 32.6368 26.7159C31.8803 26.7159 31.2963 26.9007 30.89 27.2702C30.481 27.637 30.2285 28.1096 30.2285 28.6851C30.2285 29.5698 30.853 30.3372 32.0044 30.9856C33.0511 31.5603 35.1699 32.7834 35.1699 32.7834C36.3222 33.6094 36.8965 34.4897 36.8965 35.9402M60.6264 40.0775H61.0178V38.5586H61.5289V38.2478H60.0952V38.5586H60.6264V40.0775ZM63.602 40.0775H63.9705V38.2478H63.4164L62.9652 39.4948L62.4735 38.2478H61.9396V40.0775H62.2888V38.6848H62.3082L62.8227 40.0775H63.0883L63.602 38.6848V40.0775Z"
                        fill="#777676"
                      />
                      <path
                        d="M39.3322 0.00165467C38.7086 -0.00722758 38.165 0.229928 37.8844 0.927185C37.4033 2.10053 38.5969 3.25433 39.0076 3.85033C39.3102 4.26513 39.7025 4.73501 39.9153 5.2031C40.0402 5.50954 40.0763 5.83552 40.2012 6.15972C40.4862 6.95379 40.7527 7.83758 41.1274 8.57836C41.3226 8.95763 41.5364 9.35466 41.7862 9.69574C41.9295 9.89559 42.1785 9.98442 42.2321 10.3104C41.9832 10.6701 41.9638 11.2119 41.8222 11.6641C41.1801 13.7025 41.4299 16.2286 42.3385 17.7262C42.6235 18.1765 43.3008 19.1696 44.2103 18.7903C45.0124 18.4661 44.8348 17.4375 45.0652 16.536C45.1189 16.3175 45.0828 16.1745 45.1901 16.0297V16.067C45.439 16.5715 45.6897 17.0574 45.921 17.5645C46.4743 18.4474 47.4356 19.3676 48.2378 19.9805C48.6644 20.3065 49.003 20.8652 49.5378 21.0641V21.0091H49.5026C49.3953 20.8474 49.2352 20.7746 49.0927 20.6493C48.7717 20.3242 48.4164 19.9272 48.1666 19.5657C47.4189 18.5567 46.7584 17.4375 46.1717 16.2828C45.8858 15.7224 45.6369 15.1095 45.4047 14.5508C45.2983 14.3349 45.2983 14.009 45.1197 13.9015C44.8515 14.2976 44.4601 14.6414 44.2648 15.1264C43.9262 15.9035 43.891 16.8593 43.7652 17.8514C43.6948 17.8701 43.73 17.8514 43.6948 17.887C43.1249 17.7431 42.9287 17.148 42.7141 16.6434C42.1793 15.3617 42.0896 13.3037 42.554 11.8257C42.6772 11.4473 43.2137 10.2571 42.9991 9.89559C42.8918 9.55096 42.5356 9.35378 42.3394 9.08287C42.0911 8.71878 41.8767 8.33223 41.6991 7.92818C41.2716 6.91826 41.057 5.7991 40.5944 4.78919C40.3806 4.31843 40.005 3.83257 39.7033 3.4C39.3638 2.91237 38.9909 2.56951 38.7226 1.99306C38.6347 1.79409 38.5098 1.469 38.6523 1.25316C38.6866 1.10838 38.7587 1.0542 38.9021 1.01778C39.1316 0.81971 39.7922 1.07108 40.0235 1.17944C40.6832 1.44946 41.2356 1.70349 41.787 2.08099C42.036 2.26219 42.3034 2.60504 42.6244 2.69564H42.9991C43.5691 2.82177 44.2111 2.73117 44.7459 2.89372C45.6897 3.20015 46.5446 3.65137 47.3116 4.13812C49.6721 5.66231 51.59 7.79155 52.8696 10.3086C53.0842 10.7234 53.1739 11.1027 53.3692 11.5344C53.7439 12.4208 54.2074 13.3224 54.5813 14.1875C54.9551 15.0358 55.3122 15.9018 55.8478 16.6052C56.1135 16.9836 57.183 17.1826 57.6641 17.3807C58.0204 17.5423 58.5727 17.6871 58.8938 17.8852C59.5007 18.2636 60.1041 18.697 60.6749 19.1127C60.9599 19.3294 61.85 19.7798 61.9037 20.1413C60.4788 20.1057 59.374 20.2496 58.447 20.6476C58.1805 20.755 57.753 20.755 57.7169 21.0979C57.8603 21.2418 57.877 21.4763 58.0028 21.6752C58.2165 22.0367 58.5895 22.5226 58.929 22.7766C59.3037 23.0653 59.6775 23.3531 60.0698 23.6053C60.7646 24.0406 61.5483 24.2919 62.2247 24.7245C62.6179 24.9768 63.0093 25.3019 63.4016 25.5728C63.5968 25.7167 63.7209 25.952 63.9715 26.0409V25.9858C63.8458 25.8241 63.8106 25.5896 63.6866 25.4084C63.5089 25.229 63.3303 25.0665 63.1518 24.8862C62.6298 24.1875 62.0051 23.5735 61.2994 23.0653C60.7286 22.6665 59.4805 22.1247 59.25 21.4594L59.2139 21.423C59.6054 21.3866 60.0698 21.2418 60.4445 21.1325C61.0487 20.97 61.602 21.0064 62.2256 20.8447C62.5106 20.7719 62.7955 20.6813 63.0823 20.5934V20.4291C62.7595 20.1057 62.529 19.6714 62.1913 19.365C61.2836 18.5718 60.2844 17.7964 59.2509 17.1453C58.6968 16.7847 57.9843 16.5511 57.3968 16.2437C57.1839 16.1354 56.8277 16.0821 56.7019 15.9009C56.3817 15.5038 56.2023 14.9816 55.9719 14.5117C55.4451 13.4844 54.9577 12.437 54.5109 11.3718C54.1898 10.6684 53.9937 9.96576 53.6023 9.31558C51.7658 6.24765 49.7709 4.39037 46.7065 2.56774C46.0468 2.18846 45.2631 2.02592 44.4266 1.82785C43.9798 1.80919 43.5356 1.77455 43.0897 1.75679C42.8038 1.62888 42.518 1.28603 42.2691 1.12348C41.634 0.717564 40.3727 0.015866 39.3339 -0.00012207L39.3322 0.00165467ZM43.7283 4.46143C43.4257 4.46143 43.2128 4.49874 42.9982 4.55203V4.58756H43.0325C43.1759 4.87623 43.4257 5.07608 43.6025 5.32834C43.7458 5.61701 43.8707 5.9048 44.0132 6.19347L44.0484 6.15794C44.2991 5.97763 44.424 5.68896 44.424 5.25551C44.3158 5.12849 44.2991 5.00325 44.2094 4.87623C44.103 4.69681 43.8707 4.60621 43.7283 4.46143Z"
                        fill="#E4E4E4"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_235_491"
                        x={0}
                        y="-0.00012207"
                        width="72.9717"
                        height="51.993"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx={5} dy={4} />
                        <feGaussianBlur stdDeviation={2} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_235_491"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_235_491"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                {/* Icon Laravel */}
                <div>
                  <svg
                    width={52}
                    height={52}
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_235_370)">
                      <path
                        d="M42.9757 9.95395C42.9917 10.0126 42.9998 10.0731 43 10.1339V19.5783C43 19.6996 42.9678 19.8186 42.9067 19.9235C42.8456 20.0284 42.7577 20.1154 42.6519 20.1757L34.6769 24.7396V33.7855C34.6769 34.0317 34.5453 34.2589 34.3305 34.3829L17.6836 43.9083C17.6455 43.9298 17.6039 43.9436 17.5623 43.9582C17.5467 43.9634 17.532 43.9729 17.5156 43.9772C17.3992 44.0076 17.2769 44.0076 17.1605 43.9772C17.1415 43.972 17.1241 43.9617 17.106 43.9548C17.0679 43.941 17.028 43.9289 16.9916 43.9083L0.348129 34.3829C0.242398 34.3225 0.154546 34.2355 0.0934272 34.1306C0.0323088 34.0258 8.37756e-05 33.9067 0 33.7855L0 5.45207C0 5.3901 0.00865993 5.32984 0.0242478 5.27131C0.0294438 5.25151 0.0415676 5.23343 0.0484956 5.21364C0.0614855 5.17748 0.0736094 5.14047 0.0926612 5.1069C0.105651 5.08452 0.124703 5.06644 0.140291 5.04578C0.160209 5.01824 0.178394 4.98983 0.201776 4.96573C0.221694 4.94593 0.247674 4.9313 0.27019 4.91408C0.295303 4.89343 0.317819 4.87104 0.346397 4.85469L8.66945 0.0919927C8.77483 0.0317213 8.89427 0 9.01585 0C9.13743 0 9.25687 0.0317213 9.36225 0.0919927L17.6844 4.85469H17.6862C17.7139 4.87191 17.7373 4.89343 17.7624 4.91322C17.7849 4.93044 17.81 4.94593 17.8299 4.96487C17.8542 4.98983 17.8715 5.01824 17.8923 5.04578C17.907 5.06644 17.9269 5.08452 17.939 5.1069C17.959 5.14133 17.9702 5.17748 17.9841 5.21364C17.991 5.23343 18.0031 5.25151 18.0083 5.27217C18.0243 5.33083 18.0324 5.39131 18.0326 5.45207V23.1489L24.9674 19.1798V10.133C24.9674 10.0727 24.9761 10.0116 24.9917 9.95395C24.9977 9.93329 25.009 9.91522 25.0159 9.89542C25.0298 9.85927 25.0419 9.82225 25.061 9.78868C25.074 9.7663 25.093 9.74823 25.1077 9.72757C25.1285 9.70002 25.1458 9.67162 25.1701 9.64752C25.19 9.62772 25.2151 9.61308 25.2376 9.59587C25.2636 9.57521 25.2861 9.55283 25.3138 9.53647L33.6378 4.77378C33.7431 4.71342 33.8626 4.68165 33.9841 4.68165C34.1057 4.68165 34.2252 4.71342 34.3305 4.77378L42.6527 9.53647C42.6822 9.55369 42.7047 9.57521 42.7307 9.59501C42.7523 9.61222 42.7774 9.62772 42.7974 9.64665C42.8216 9.67162 42.8389 9.70002 42.8597 9.72757C42.8753 9.74823 42.8943 9.7663 42.9065 9.78868C42.9264 9.82225 42.9376 9.85927 42.9515 9.89542C42.9593 9.91522 42.9706 9.93329 42.9757 9.95395ZM41.6127 19.1798V11.326L38.7003 12.9925L34.6769 15.2951V23.1489L41.6135 19.1798H41.6127ZM33.2905 33.387V25.528L29.3329 27.7747L18.0317 34.1858V42.1187L33.2905 33.387ZM1.38732 6.64425V33.387L16.6444 42.1179V34.1866L8.67378 29.7028L8.67118 29.7011L8.66772 29.6994C8.64087 29.6839 8.61836 29.6615 8.59325 29.6426C8.5716 29.6254 8.54648 29.6116 8.52743 29.5927L8.5257 29.5901C8.50318 29.5686 8.48759 29.5419 8.46854 29.5178C8.45122 29.4945 8.43044 29.4747 8.41658 29.4506L8.41572 29.448C8.40013 29.4222 8.3906 29.3912 8.37934 29.362C8.36809 29.3361 8.35336 29.312 8.34644 29.2845C8.33778 29.2518 8.33605 29.2165 8.33258 29.1829C8.32912 29.1571 8.32219 29.1313 8.32219 29.1055V10.6133L4.29965 8.30986L1.38732 6.64425ZM9.01672 1.48474L2.08271 5.45207L9.01498 9.41941L15.9481 5.45121L9.01498 1.48474H9.01672ZM12.6227 26.2442L16.6452 23.9425V6.64425L13.7329 8.31072L9.70951 10.6133V27.9115L12.6227 26.2442ZM33.9841 6.16652L27.051 10.1339L33.9841 14.1012L40.9164 10.133L33.9841 6.16652ZM33.2905 15.2951L29.2671 12.9925L26.3548 11.326V19.1798L30.3773 21.4815L33.2905 23.1489V15.2951ZM17.3372 32.9936L27.5065 27.2229L32.5899 24.3393L25.662 20.3746L17.6853 24.9393L10.4153 29.0994L17.3372 32.9936Z"
                        fill="#E3E3E3"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_235_370"
                        x={0}
                        y={0}
                        width={52}
                        height={52}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx={5} dy={4} />
                        <feGaussianBlur stdDeviation={2} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_235_370"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_235_370"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                {/* Icon HTML */}
                <div>
                  <svg
                    width={48}
                    height={63}
                    viewBox="0 0 48 63"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_235_374)">
                      <path
                        d="M14.1169 7.41197H16.5936V2.46095H18.7789V0H11.9316V2.46095H14.1169V7.41197ZM22.3044 3.74239L24.009 6.37808H24.0527L25.7572 3.74239V7.41197H28.2338V0H25.6406L24.0527 2.60657L22.4647 0H19.8715V7.41197H22.3044V3.74239ZM35.4307 4.96558H31.9488V0H29.4722V7.41197H35.4453V4.96558H35.4307ZM6.10422 4.93646H8.37691V7.41197H10.8536V0H8.37691V2.44639H6.10422V0H3.62757V7.41197H6.10422V4.93646ZM0 10.8049L3.55473 50.5878L19.4781 55L35.4453 50.5732L39 10.7903H0V10.8049ZM31.5846 20.2555L31.3661 22.731L31.2641 23.8231H12.5872L13.0388 28.8178H19.4927H29.5013H30.8125L30.6959 30.1284L29.545 42.9719L29.4722 43.802L19.4781 46.5687H19.449L9.45499 43.7874L8.77026 36.1279H13.6653L14.0149 40.0159L19.449 41.4866L24.8976 40.0159L25.4658 33.6815H8.56631L7.37169 20.2409L7.25514 18.9304H19.4781H31.7012L31.5846 20.2555Z"
                        fill="#DEDEDE"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_235_374"
                        x={0}
                        y={0}
                        width={48}
                        height={63}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx={5} dy={4} />
                        <feGaussianBlur stdDeviation={2} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_235_374"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_235_374"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                {/* Icon CSS */}
                <div>
                  <svg
                    width={48}
                    height={63}
                    viewBox="0 0 48 63"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_235_372)">
                      <path
                        d="M31.0641 4.96427L28.6646 2.59132H31.0641V0H25.0508V2.59132C25.8603 3.40656 26.2795 3.78507 27.4359 4.96427C26.7565 4.96427 25.0508 4.96427 25.0508 4.96427V7.33722H31.0641V4.96427ZM22.5356 4.96427L20.136 2.59132H22.5356V0H16.5222V2.59132C17.3317 3.40656 17.7509 3.78507 18.9073 4.96427C18.2279 4.96427 16.5222 4.96427 16.5222 4.96427V7.33722H22.5356V4.96427ZM13.9492 4.96427H10.5089V2.59132H13.9492V0H7.93588V7.33722H13.9492V4.96427ZM0 10.8311L3.65715 50.7054L19.5 55L35.3428 50.7054L39 10.8311H0ZM31.1509 23.7586L19.4855 28.7811L19.4566 28.7957H30.7317L29.4451 43.7321L19.5 46.6583H19.4855L9.49704 43.6593L8.84655 36.1329H8.86101H13.8047L14.1227 40.0344L19.4277 41.3883L19.4711 41.3737L24.9641 39.816L25.3399 33.5416L19.4711 33.527L8.51408 33.4979L8.13825 28.7957L19.4711 24.0352L20.136 23.7586H7.7046L7.11193 18.9399H31.6134L31.1509 23.7586Z"
                        fill="#DEDEDE"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_235_372"
                        x={0}
                        y={0}
                        width={48}
                        height={63}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx={5} dy={4} />
                        <feGaussianBlur stdDeviation={2} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_235_372"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_235_372"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                {/* Icon JS */}
                <div>
                  <svg
                    width={48}
                    height={63}
                    viewBox="0 0 48 63"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_239_537)">
                      <path
                        d="M11.3901 52.71L3.60669 50.5276L1.87492 31.1293C0.922447 20.4603 0.140385 11.5099 0.137004 11.2396L0.130859 10.748H19.5007H38.8706L38.8731 11.043C38.8766 11.4547 35.4699 49.9414 35.4005 50.2741C35.3507 50.5129 34.4116 50.8034 27.4551 52.7324C23.1162 53.9356 19.4778 54.9138 19.3699 54.9062C19.2619 54.8986 15.671 53.9103 11.3901 52.71ZM24.4582 45.1661C27.1488 44.417 29.3883 43.7422 29.435 43.6666C29.4817 43.5909 29.8031 40.2968 30.1493 36.3462C30.4955 32.3956 30.8071 29.0601 30.8417 28.9339C30.9012 28.7172 30.4434 28.7045 22.546 28.7045H14.1873L14.5432 24.9363C14.7389 22.8638 14.9038 21.1627 14.9095 21.1561C14.9153 21.1496 16.1421 21.1104 17.6357 21.069C20.0849 21.0013 25.1355 21.1969 25.3044 21.3661C25.3676 21.4294 25.7829 25.5096 25.7829 26.0666C25.7829 26.3412 25.8199 26.3453 28.3189 26.3453H30.8549L30.7952 25.7883C30.7623 25.4819 30.5475 23.1079 30.3178 20.5127L29.9002 15.7942L20.1197 15.7606C12.3389 15.7339 10.3391 15.7607 10.3382 15.8917C10.3375 15.9823 10.2806 16.5577 10.2115 17.1704C10.0443 18.6532 8.76877 32.9796 8.76877 33.3753V33.6852H17.091H25.4132L25.339 34.1767C25.2982 34.447 25.1689 35.8183 25.0516 37.224C24.9342 38.6298 24.8005 39.8162 24.7543 39.8606C24.6324 39.9778 19.7365 41.2877 19.4313 41.2847C19.2895 41.2834 18.0251 40.9674 16.6214 40.5826L14.0693 39.883L13.9757 38.7829C13.9243 38.1778 13.8459 37.3142 13.8017 36.8636L13.7213 36.0444H11.245H8.76877L8.77426 36.5359C8.78451 37.4551 9.37969 43.6466 9.46611 43.7331C9.56607 43.8332 19.077 46.5107 19.3699 46.5212C19.4778 46.525 21.7676 45.9153 24.4582 45.1661Z"
                        fill="#DEDEDE"
                      />
                      <path
                        d="M11.3901 52.71L3.60669 50.5276L1.87492 31.1293C0.922447 20.4603 0.140385 11.5099 0.137004 11.2396L0.130859 10.748H19.5007H38.8706L38.8731 11.043C38.8766 11.4547 35.4699 49.9414 35.4005 50.2741C35.3507 50.5129 34.4116 50.8034 27.4551 52.7324C23.1162 53.9356 19.4778 54.9138 19.3699 54.9062C19.2619 54.8986 15.671 53.9103 11.3901 52.71ZM25.9052 49.7904C29.3291 48.8442 32.1947 48.0037 32.2733 47.9226C32.3957 47.7964 35.3528 15.34 35.3409 14.2542L35.3369 13.8937H27.4188H19.5007V14.8112V15.7287H14.92C11.3433 15.7287 10.3391 15.7646 10.3382 15.8925C10.3375 15.9826 10.2806 16.5577 10.2115 17.1704C10.0443 18.6532 8.76877 32.9796 8.76877 33.3753V33.6852H14.1348H19.5007V37.4862C19.5007 40.4409 19.4643 41.2866 19.3371 41.2847C19.2472 41.2834 18.0251 40.9674 16.6214 40.5826L14.0693 39.883L13.9757 38.7829C13.9243 38.1778 13.8459 37.3142 13.8017 36.8636L13.7213 36.0444H11.245H8.76877L8.77426 36.5359C8.78994 37.9418 9.39722 43.6805 9.53965 43.7686C9.62621 43.8222 11.9029 44.4773 14.5989 45.2244L19.5007 46.5829V49.0467C19.5007 50.4019 19.5411 51.5106 19.5904 51.5106C19.6396 51.5106 22.4813 50.7365 25.9052 49.7904ZM14.5294 24.9715C14.7175 22.9184 14.8971 21.2153 14.9285 21.1869C14.9598 21.1585 16.0014 21.1071 17.2431 21.0727L19.5007 21.0101V24.8573V28.7045H16.844H14.1873L14.5294 24.9715Z"
                        fill="#DEDEDE"
                      />
                      <path
                        d="M12.4336 6.09472V4.84956H14.2004H15.9673V2.42478V0H17.2106H18.454V3.66994V7.33988H15.4438H12.4336V6.09472ZM19.6319 6.35686V5.37384H21.2678C22.1676 5.37384 22.9038 5.34053 22.9038 5.29982C22.9038 5.25911 22.1676 4.42675 21.2678 3.45015L19.6319 1.6745V0.837249V0H23.0347H26.4375V0.978986V1.95797L24.84 1.99477L23.2425 2.03157L24.9055 3.82502L26.5684 5.61847V6.47918V7.33988H23.1001H19.6319V6.35686Z"
                        fill="#DEDEDE"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_239_537"
                        x="0.130859"
                        y={0}
                        width="47.7422"
                        height="62.9062"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx={5} dy={4} />
                        <feGaussianBlur stdDeviation={2} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_239_537"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_239_537"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                {/* Icon Tailwind */}
                <div>
                  <svg
                    width={74}
                    height={48}
                    viewBox="0 0 74 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_235_376)">
                      <path
                        d="M32.5 0C23.8334 0 18.4166 4.44453 16.25 13.3333C19.5 8.8888 23.2916 7.22214 27.625 8.33333C30.0973 8.96719 31.8645 10.807 33.8206 12.8432C37.0071 16.1607 40.6948 20 48.75 20C57.4166 20 62.8334 15.5555 65 6.66667C61.75 11.1112 57.9584 12.7779 53.625 11.6667C51.1527 11.0328 49.3855 9.19297 47.4294 7.15677C44.2429 3.83932 40.5552 0 32.5 0ZM16.25 20C7.58342 20 2.16658 24.4445 0 33.3333C3.25 28.8888 7.04158 27.2221 11.375 28.3333C13.8473 28.9672 15.6145 30.807 17.5706 32.8432C20.7571 36.1607 24.4448 40 32.5 40C41.1666 40 46.5834 35.5555 48.75 26.6667C45.5 31.1112 41.7084 32.7779 37.375 31.6667C34.9027 31.0328 33.1355 29.193 31.1794 27.1568C27.9929 23.8393 24.3052 20 16.25 20Z"
                        fill="url(#paint0_linear_235_376)"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_235_376"
                        x={0}
                        y={0}
                        width={74}
                        height={48}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx={5} dy={4} />
                        <feGaussianBlur stdDeviation={2} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_235_376"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_235_376"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_235_376"
                        x1="-462.259"
                        y1="1966.08"
                        x2="-259.873"
                        y2="4180.33"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#E3E3E3" />
                        <stop offset={1} stopColor="#0ED7B5" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                {/* Icon Figma */}
                <div className="col-start-2">
                  <svg
                    width={39}
                    height={52}
                    viewBox="0 0 39 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_239_527)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.3147 3.42412H8.34274C5.59682 3.42412 3.3708 5.68534 3.3708 8.4747C3.3708 11.2641 5.59682 13.5253 8.34274 13.5253H13.3147V3.42412ZM13.3147 0H16.6855H21.6574C26.2651 0 30 3.79423 30 8.4747C30 11.2367 28.6995 13.6902 26.6862 15.2373C28.6995 16.7845 30 19.238 30 22C30 26.6804 26.2651 30.4747 21.6574 30.4747C19.7944 30.4747 18.074 29.8544 16.6855 28.806V30.4747V35.5253C16.6855 40.2057 12.9503 44 8.34274 44C3.73516 44 0 40.2057 0 35.5253C0 32.7631 1.30073 30.3098 3.31391 28.7626C1.30073 27.2154 0 24.762 0 22C0 19.238 1.30076 16.7845 3.31397 15.2374C1.30076 13.6902 0 11.2367 0 8.4747C0 3.79423 3.73516 0 8.34274 0H13.3147ZM16.6855 3.42412V13.5253H21.6574C24.4035 13.5253 26.6292 11.2641 26.6292 8.4747C26.6292 5.68534 24.4035 3.42412 21.6574 3.42412H16.6855ZM8.34274 27.0505H13.3147V22.013V22V21.987V16.9494H8.34274C5.59682 16.9494 3.3708 19.2107 3.3708 22C3.3708 24.7827 5.58617 27.0398 8.32302 27.0506L8.34274 27.0505ZM3.3708 35.5253C3.3708 32.7425 5.58617 30.4855 8.32302 30.4747L8.34274 30.4747H13.3147V35.5253C13.3147 38.3146 11.0887 40.5759 8.34274 40.5759C5.59682 40.5759 3.3708 38.3146 3.3708 35.5253ZM16.6855 21.99C16.6908 19.2052 18.9148 16.9494 21.6574 16.9494C24.4035 16.9494 26.6292 19.2107 26.6292 22C26.6292 24.7894 24.4035 27.0506 21.6574 27.0506C18.9148 27.0506 16.6908 24.7948 16.6855 22.0101V21.99Z"
                        fill="#DEDEDE"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_239_527"
                        x={0}
                        y={0}
                        width={39}
                        height={52}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx={5} dy={4} />
                        <feGaussianBlur stdDeviation={2} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_239_527"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_239_527"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                {/* Icon XD */}
                <div>
                  <svg
                    width={53}
                    height={52}
                    viewBox="0 0 53 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_235_351)">
                      <path
                        d="M0 0V44.0069H44.0069V0H0ZM41.4284 41.4284H2.57853V2.57853H41.4284V41.4284Z"
                        fill="#E3E3E3"
                      />
                      <path
                        d="M18.6515 22.6653L22.2529 15.772C22.2959 15.686 22.2357 15.5915 22.1412 15.5915H19.9752C19.8806 15.5915 19.7947 15.6431 19.7603 15.729L17.2162 21.1439L14.672 15.7204C14.629 15.6345 14.5517 15.5829 14.4571 15.5829H12.1193C12.0247 15.5829 11.9645 15.6774 12.0075 15.7634L15.5573 22.8887L11.7583 30.0656C11.7153 30.1516 11.7755 30.2547 11.87 30.2547H14.2251C14.3196 30.2547 14.4056 30.1946 14.4485 30.1086L17.0786 24.4101L19.7345 30.1086C19.7775 30.1946 19.8634 30.2547 19.958 30.2547H22.399C22.4936 30.2547 22.5537 30.1516 22.5107 30.0656L18.6515 22.6653ZM31.7333 26.9026V15.7118C31.7333 15.6431 31.6817 15.5915 31.613 15.5915H29.4556C29.3868 15.5915 29.3353 15.6431 29.3353 15.7118V19.253C29.2321 19.2444 29.1204 19.2444 29.0172 19.2444C25.1494 19.2444 23.3015 21.7198 23.3015 24.7711C23.3015 27.8223 24.6337 30.4696 29.0172 30.2977C30.0744 30.2547 31.0629 29.9625 31.9138 29.4812C31.8622 29.103 31.7333 28.063 31.7333 26.9026ZM29.3267 28.1059C29.1204 28.1575 28.8969 28.1919 28.6734 28.1919C26.327 28.1919 25.6823 26.6276 25.6823 24.7023C25.6823 22.777 26.7653 21.2127 28.6734 21.2127C28.8969 21.2127 29.1118 21.2385 29.3267 21.2986V28.1059Z"
                        fill="#E3E3E3"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_235_351"
                        x={0}
                        y={0}
                        width="53.0068"
                        height="52.007"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx={5} dy={4} />
                        <feGaussianBlur stdDeviation={2} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_235_351"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_235_351"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                {/* Icon Wordpress */}
                <div className="col-start-2 md:col-start-auto">
                  <svg
                    width={52}
                    height={52}
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_250_40)">
                      <path
                        d="M7.11506 22.0001C7.11506 29.4706 11.4396 35.9266 17.7105 38.986L8.7427 14.3191C7.69958 16.6663 7.11506 19.2639 7.11506 22.0001ZM38.6062 21.0477C38.6062 18.7152 37.7716 17.0998 37.0558 15.8425C36.1028 14.2878 35.2096 12.9713 35.2096 11.4166C35.2096 9.68169 36.5203 8.0667 38.3665 8.0667C38.4498 8.0667 38.5289 8.07711 38.6101 8.08178C35.2654 5.0055 30.8092 3.12727 25.9149 3.12727C19.3471 3.12727 13.5687 6.51024 10.2072 11.6343C10.6483 11.6475 11.064 11.6569 11.417 11.6569C13.3834 11.6569 16.4273 11.4173 16.4273 11.4173C17.4407 11.3574 17.5602 12.8517 16.5479 12.972C16.5479 12.972 15.5294 13.0923 14.3962 13.1519L21.2423 33.5952L25.3565 21.2079L22.4274 13.1512C21.4151 13.0916 20.456 12.9713 20.456 12.9713C19.4429 12.9117 19.5617 11.3567 20.5748 11.4166C20.5748 11.4166 23.6794 11.6562 25.5267 11.6562C27.4928 11.6562 30.537 11.4166 30.537 11.4166C31.5512 11.3567 31.6703 12.851 30.6576 12.9713C30.6576 12.9713 29.637 13.0916 28.5059 13.1512L35.2997 33.4397L37.1749 27.1489C37.9877 24.5384 38.6062 22.6634 38.6062 21.0477ZM26.2447 23.651L20.6041 40.1058C22.2883 40.6028 24.0694 40.8747 25.9149 40.8747C28.1041 40.8747 30.2036 40.4947 32.1579 39.8049C32.1074 39.7241 32.0616 39.6382 32.0241 39.5448L26.2447 23.651ZM42.4109 12.9451C42.4918 13.5462 42.5376 14.1916 42.5376 14.8858C42.5376 16.801 42.1813 18.954 41.1081 21.646L35.3656 38.3141C40.9546 35.0421 44.7139 28.9632 44.7139 22.0004C44.7143 18.7191 43.8794 15.6335 42.4109 12.9451ZM25.9149 0C13.8313 0 4 9.86915 4 22.0001C4 34.1325 13.8313 44.0012 25.9149 44.0012C37.998 44.0012 47.8308 34.1325 47.8308 22.0001C47.8304 9.86915 37.998 0 25.9149 0ZM25.9149 42.9928C14.3854 42.9928 5.00485 33.5754 5.00485 22.0001C5.00485 10.4254 14.3851 1.00879 25.9149 1.00879C37.4439 1.00879 46.8238 10.4254 46.8238 22.0001C46.8238 33.5754 37.4439 42.9928 25.9149 42.9928Z"
                        fill="#DEDEDE"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_250_40"
                        x={0}
                        y={0}
                        width="51.8306"
                        height="52.0012"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy={4} />
                        <feGaussianBlur stdDeviation={2} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_250_40"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_250_40"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Second Row */}
        <div className="work-container flex h-full w-full flex-col gap-7 rounded-3xl px-[50px] py-5">
          {/* Title First Row */}
          <div className="flex items-center justify-between">
            <div className="w-80 md:block flex justify-center gap-2">
              <span className="font-['Inter'] text-3xl font-bold text-neutral-500">
                THE{" "}
              </span>
              <span className="font-['Inter'] text-3xl font-bold text-neutral-700">
                WORKS
              </span>
            </div>
            {/* Get in Touch Button */}
            <a
              href="mailto:aiman_saharudin@yahoo.com"
              className="bg-[rgba(43, 55, 59, 1)] in-touch-btn md:flex flex-row items-center gap-3 rounded-xl bg-[#2B373B] px-5 py-1 pr-1 text-lg font-bold text-[#E3E3E3] hidden"
            >
              GET IN TOUCH
              {/* Arrow Icon */}
              <div className="flex items-center justify-center">
                <svg
                  width={40}
                  height={38}
                  viewBox="0 0 40 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_242_680)">
                    <path
                      d="M15.8543 28.6508L26.5103 19L15.8543 9.34916L14.4888 10.5858L22.9433 18.2595C23.1522 18.4491 23.2713 18.718 23.2713 19C23.2713 19.282 23.1522 19.5509 22.9433 19.7405L14.4888 27.4142L15.8543 28.6508Z"
                      stroke="#E3E3E3"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      shapeRendering="crispEdges"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_242_680"
                      x={9}
                      y={8}
                      width={23}
                      height={30}
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy={4} />
                      <feGaussianBlur stdDeviation={2} />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_242_680"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_242_680"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </a>
          </div>
          {/* Work Card Container */}
          <div className="flex h-full gap-10 pb-7 md:flex-row flex-col">
            <div className="work-card relative w-full h-[207px] md:w-1/4 md:h-auto rounded-xl flex items-center">
              {/* Image */}
              <Image
                src="/BRACE Mockup.png" // Reference the image in the public directory
                alt="Profile Image"
                layout="fill" // or specify width and height
                objectFit="contain" // Apply the cover aspect ratio
                className="px-5 py-7"
              />
              {/* Card Label */}
              <div className="work-card-label absolute bottom-0 right-0 rounded-br-xl rounded-tl-3xl bg-[#2B373B] px-4 py-1 font-['Inter'] text-xs font-extrabold tracking-wide text-white">
                BRACE
              </div>
            </div>
            <div className="work-card relative w-full h-[207px] md:w-1/4 md:h-auto rounded-xl flex items-center">
              {/* Image */}
              <Image
                src="/TNG Mockup.png" // Reference the image in the public directory
                alt="Profile Image"
                layout="fill" // or specify width and height
                objectFit="contain" // Apply the cover aspect ratio
                className="px-5 py-7"
              />
              {/* Card Label */}
              <div className="work -card-label absolute bottom-0 right-0 rounded-br-xl rounded-tl-3xl bg-[#2B373B] px-4 py-1 font-['Inter'] text-xs font-extrabold tracking-wide text-white">
                TNG Bateriku MiniApp
              </div>
            </div>
            <div className="work-card relative w-full h-[207px] md:w-1/4 md:h-auto rounded-xl flex items-center">
              {/* Image */}
              <Image
                src="/Ticketing Mockup.png" // Reference the image in the public directory
                alt="Profile Image"
                layout="fill" // or specify width and height
                objectFit="contain" // Apply the cover aspect ratio
                className="px-5 py-7"
              />
              {/* Card Label */}
              <div className="work -card-label absolute bottom-0 right-0 rounded-br-xl rounded-tl-3xl bg-[#2B373B] px-4 py-1 font-['Inter'] text-xs font-extrabold tracking-wide text-white">
                Ticketing Motormaniac
              </div>
            </div>
            <div className="work-card relative w-full h-[207px] md:w-1/4 md:h-auto rounded-xl flex items-center">
              {/* Image */}
              <Image
                src="/Website Mockup.png" // Reference the image in the public directory
                alt="Profile Image"
                layout="fill" // or specify width and height
                objectFit="contain" // Apply the cover aspect ratio
                className="px-5 py-7"
              />
              {/* Card Label */}
              <div className="work -card-label absolute bottom-0 right-0 rounded-br-xl rounded-tl-3xl bg-[#2B373B] px-4 py-1 font-['Inter'] text-xs font-extrabold tracking-wide text-white">
                Corporate Website
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="mb-6 flex w-full justify-center text-base font-bold text-[#777676]">
        © aiman - all rights reserved
      </div>
    </div>
  );
}
