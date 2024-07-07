import * as React from "react";
export default function Frame({ data }, ...props){
  return(
    <div className="flex items-center justify-center">
      <div>
      <img
          src={data.image} // Assuming data.image contains the URL of the image
          alt={data.name} // Provide alt text for accessibility
          className="w-full h-auto mb-4" // Adjust width and height as needed
        />
  <svg
    width={528}
    height={298}
    viewBox="0 0 528 298"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="transition duration-500 hover:scale-125 cursor-pointer"
    {...props}
    >
      <g clipPath="url(#clip0_237_462)" filter="url(#filter0_d_237_462)">
        <path d="M27.814 17.0757H8.15808V254.778H27.814V17.0757Z" fill="black" />
        <path
          d="M446.938 27.7901L487.662 67.5586V262.54H116.739L101.251 246.797L98.5953 244.098H40.1793V27.7901H446.941M450.622 18.7603H31.1399V253.124H94.8081L112.952 271.567H496.704V63.7567L450.625 18.7603H450.622Z"
          fill="white"
          />
        <path
          d="M520.063 277.016V285.958H32.527L7.47858 258.928L91.582 259.043L113.651 281.851H120.982L116.322 276.723L520.063 277.016Z"
          fill="black"
          />
        <path
          d="M4 0V259.015L32.6329 289.935L524 290V0H4ZM6.49362 2.49098H521.506V275.459H520.063L116.322 275.166H112.796L115.169 277.769L117.463 280.295H114.311L92.701 257.963L92.2428 257.49H91.582L6.49362 257.371V2.49098ZM7.47859 258.928L91.582 259.043L113.651 281.851H120.982L116.322 276.723L520.063 277.016V285.958H32.527L7.47859 258.928Z"
          fill="white"
          />
        <path
          d="M27.814 78.8893V86.4494L8.15808 59.086V51.5259L27.814 78.8893Z"
          fill="white"
          />
        <path
          d="M27.814 97.6558V105.216L8.15808 77.8525V70.2893L27.814 97.6558Z"
          fill="white"
          />
        <path
          d="M27.814 117.238V124.798L8.15808 97.4348V89.8746L27.814 117.238Z"
          fill="white"
          />
        <path
          d="M27.814 136.437V143.997L8.15808 116.634V109.071L27.814 136.437Z"
          fill="white"
          />
        <path
          d="M27.814 155.138V162.698L8.15808 135.335V127.775L27.814 155.138Z"
          fill="white"
          />
        <path
          d="M27.814 174.789V182.349L8.15808 154.986V147.422L27.814 174.789Z"
          fill="white"
          />
        <path
          d="M27.814 193.982V201.542L8.15808 174.179V166.619L27.814 193.982Z"
          fill="white"
          />
        <path
          d="M27.814 213.667V221.227L8.15808 193.864V186.304L27.814 213.667Z"
          fill="white"
          />
        <path
          d="M27.814 232.767V240.327L8.15808 212.963V205.403L27.814 232.767Z"
          fill="white"
          />
        <path
          d="M27.814 251.427V254.778H24.7905L8.15808 231.624V224.061L27.814 251.427Z"
          fill="white"
          />
        <path
          d="M15.7449 254.778H10.3151L8.15808 251.776V244.216L15.7449 254.778Z"
          fill="white"
          />
        <path
          d="M27.814 40.0581V47.6182L8.15808 20.2548V17.0757H11.3032L27.814 40.0581Z"
          fill="white"
          />
        <path
          d="M27.814 21.3415V28.9016L19.3201 17.0757H24.75L27.814 21.3415Z"
          fill="white"
          />
        <path
          d="M27.814 59.6901V67.2503L8.15808 39.8869V32.3236L27.814 59.6901Z"
          fill="white"
          />
        <path
          d="M516.578 73.1352V8.05212H25.442L27.8608 10.4684H451.61L516.578 73.1352Z"
          fill="black"
          />
        <path
          d="M516.578 8.05213V73.1352L451.61 10.4684H27.8608L25.442 8.05213H516.578ZM517.825 6.80664H22.431L24.5599 8.93332L26.9787 11.3496L27.3434 11.7139H451.105L515.709 74.0289L517.822 76.0684V6.80664H517.825Z"
          fill="white"
          />
      </g>
      <defs>
        <filter
          id="filter0_d_237_462"
          x={0}
          y={0}
          width={528}
          height={298}
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
            result="effect1_dropShadow_237_462"
            />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_237_462"
            result="shape"
            />
        </filter>
        <clipPath id="clip0_237_462">
          <rect width={520} height={290} fill="white" transform="translate(4)" />
        </clipPath>
      </defs>
    </svg>
    {/* display content from projects here */}
    {/* since we passed in a data prop (json obj), we can just dot operator to get the values we need */}
        <div className="font-['Eurostile'] text-[#f1ecea]">
            <h1 className="font-bold font-3xl">{data.name}</h1>
            <h2 className="font-">Tech Stack: {data.tech.join(', ')}</h2>
            <h2 className="font-">Languages: {data.languages.join(', ')}</h2>
            <a href={data.link}>Project Link</a>
            <p>{data.overview}</p>
        </div>
      </div>
    </div>
  );
};

