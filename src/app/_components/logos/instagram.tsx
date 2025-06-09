import * as React from "react";
const InstagramLogo = (
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
      d="M21 7a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7Zm2 10a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6V7a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v10Z"
      style={{
        fill: "#fff",
        fillOpacity: 1,
      }}
    />
    <path
      fill="#fff"
      d="M9.741 7.519a5 5 0 0 1 3.035-.509l.394.075a5 5 0 0 1 3.82 4.138l.042.391a5.002 5.002 0 0 1-5.784 5.28 5.002 5.002 0 0 1-1.507-9.375Zm2.742 1.47a3.002 3.002 0 0 0-3.12 1.62 3 3 0 1 0 5.673 1.142l-.024-.235a3 3 0 0 0-2.293-2.483l-.236-.044ZM17.51 5.5l.2.02a1 1 0 0 1 0 1.96l-.2.02h-.01a1 1 0 0 1 0-2h.01Z"
      style={{
        fill: "#fff",
        fillOpacity: 1,
      }}
    />
  </svg>
);
export default InstagramLogo;
