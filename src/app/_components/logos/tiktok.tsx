import * as React from "react";
const TiktokLogo = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M8.75 10.85a.9.9 0 0 1 0 1.8 3.854 3.854 0 0 0-3.438 2.119l-.12.258a3.849 3.849 0 0 0 .835 4.195l.209.194a3.851 3.851 0 0 0 3.987.64l.26-.117a3.85 3.85 0 0 0 2.116-3.438.9.9 0 0 1 1.8 0 5.65 5.65 0 0 1-3.108 5.046l-.38.173a5.652 5.652 0 0 1-5.85-.94l-.306-.285a5.65 5.65 0 0 1-1.224-6.157l.174-.38A5.65 5.65 0 0 1 8.75 10.85Z"
      style={{
        fill: "#fff",
        fillOpacity: 1,
      }}
    />
    <path
      fill="#fff"
      d="M12.6 16.5V2.75a.9.9 0 1 1 1.8 0c0 .807.588 2.16 1.697 3.356 1.023 1.104 2.32 1.892 3.64 1.986l.262.009.183.016a.902.902 0 0 1 0 1.765L20 9.901l-.389-.014c-1.93-.136-3.628-1.258-4.833-2.557a9.837 9.837 0 0 1-.377-.439v9.61a.9.9 0 0 1-1.8 0Z"
      style={{
        fill: "#fff",
        fillOpacity: 1,
      }}
    />
  </svg>
);
export default TiktokLogo;
