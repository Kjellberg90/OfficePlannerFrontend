import { FunctionComponent } from "react";
import { Col } from "react-bootstrap";

interface NameProp {
    name: string,
}

const SmallerMap: FunctionComponent<NameProp> = ({name}) => {

let room = document.getElementsByClassName(`${name}`)
for (let i = 0; room[i]; i++) {
    var color = (room[i] as SVGPathElement).style.fill="white";
}



    return (
        <Col className="smallMap" >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                clipRule="evenodd"
                viewBox="250 0 1221.74 892.565"
            >
                <defs>
                    <filter
                        id="Filter"
                        width="1201.74"
                        height="870.7"
                        x="15.258"
                        y="11.067"
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                    >
                        <feGaussianBlur
                            in="SourceGraphic"
                            result="Blur"
                            stdDeviation="0.159"
                        ></feGaussianBlur>
                    </filter>
                </defs>
                <g>
                    <path className="mapBase"
                        fill="#ffc72c"
                        d="M91.885 120.508l-.421-94.314 171.455-.671s21.792-1.855 42.176 8.301c5.024 2.503 24.178-22.36 24.178-22.36s10.37 11.701 10.788 23.606c.418 11.905-8.627 21.366-8.627 21.366s14.406-7.42 23.272-7.916c11.941-.668 21.286 10.038 21.286 10.038l-19.986 19.384s2.575 16.044 3.353 19.142c2.298 9.147 2.714 23.692 2.714 23.692l783.037 4.578v181.104l-67.81-.377 66.62.511 15.19-46.158s13.29 4.267 19.2 15.855c5.9 11.587 4.42 28.681 4.42 28.681s10.32 3.731 19.58 17.166c7.61 11.033 14.16 28.614 14.16 28.614s3.57 42.146-26.78 62.605c-27.26 18.374-44.89 18.318-44.89 18.318l-.1 163.736-658.025-1.553-4.244 218.885-159.576-.399s-15.066 71.317-78.286 68.971c-56.886-2.111-71.87-69.023-71.87-69.023l-157.044-1.194.72-229.341 173.715-.352 2.941-194.496-78.608-85.505-25.364-.032 2.826-180.862z"
                        filter="url(#Filter)"
                    ></path>
                    <g strokeLinecap="butt" strokeLinejoin="miter">
                        <path
                            fill="#425563"
                            stroke="#425563"
                            strokeWidth="2.361"
                            d="M269.799 73.213l25.556-26.69 48.636 46.338-24.565 25.883-49.627-45.531z"
                        ></path>
                        <g fill="none" stroke="#111110" strokeWidth="3">
                            <g opacity="0.998">
                                <path d="M309.282 32.702l20.707-21.575"></path>
                                <path
                                    strokeDasharray="2"
                                    d="M328.356 11.995s9.783 6.745 11.53 20.063c2.027 15.46-10.604 25.454-10.604 25.454"
                                ></path>
                            </g>
                            <g className="entrance" >
                                <path d="M355.669 77.765L377.46 57.7"></path>
                                <path
                                    strokeDasharray="2"
                                    d="M376.59 59.268s-6.949-9.208-20.522-10.657c-15.756-1.68-25.825 10.509-25.825 10.509"
                                ></path>
                            </g>
                        </g>
                        <path
                            fill="none"
                            stroke="#425563"
                            strokeWidth="6.065"
                            d="M263.846 27.085s11.515-1.952 21.939-.494c10.425 1.458 19.759 6.325 19.759 6.325l49.314 47.692s4.604 12.29 6.669 22.511c2.066 10.221 1.592 18.372 1.592 18.372"
                        ></path>
                    </g>
                    <g fill="none" strokeLinecap="butt" strokeLinejoin="miter">
                        <path
                            stroke="#111110"
                            strokeWidth="3"
                            d="M1077.49 310.243l38.95 8.207"
                        ></path>
                        <path
                            stroke="#111110"
                            strokeDasharray="2"
                            strokeWidth="3"
                            d="M1080.67 345.808s15.27-2.693 23.51-12.371c8.24-9.679 7.05-24.579 7.05-24.579"
                        ></path>
                        <path
                            stroke="#111110"
                            strokeWidth="3"
                            d="M1146.18 298.663l12.92-38.981"
                        ></path>
                        <path
                            stroke="#141413"
                            strokeDasharray="2"
                            strokeWidth="3"
                            d="M1158.77 260.418s13.5 4.516 19.06 15.088c5.56 10.572 3.18 27.2 3.18 27.2"
                        ></path>
                        <path
                            stroke="#425563"
                            strokeWidth="6.065"
                            d="M1179.69 303.272s47.51 22.158 33.07 78.443c-10.39 40.458-68.05 49.478-68.05 49.478"
                        ></path>
                        <path
                            stroke="#425563"
                            strokeWidth="6.065"
                            d="M1177.5 312.979s9.89 5.138 17.2 14.707c9.41 12.306 16.17 33.517 9.41 51.867-13.5 36.628-60.03 42.559-60.03 42.559M1176.11 315.722l6.9-12.257"
                        ></path>
                    </g>
                    <g stroke="#425563" strokeLinecap="butt" strokeLinejoin="miter">
                        <path
                            fill="none"
                            strokeWidth="6.065"
                            d="M174.603 812.129s11.634 73.066 77.767 69.414c59.29-3.274 69.072-70.434 69.072-70.434"
                        ></path>
                        <path
                            fill="#425563"
                            strokeWidth="3"
                            d="M231.326 837.627l6.25 19.732 28.524-9.402-6.441-19.428-28.333 9.098z"
                        ></path>
                    </g>
                    <g
                        fill="none"
                        stroke="#111110"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                    >
                        <path
                            strokeWidth="3"
                            d="M252.19 300.948l-11.594-32.994M153.278 122.95l.243 33.477"
                        ></path>
                        <path
                            strokeDasharray="2"
                            strokeWidth="3"
                            d="M184.919 124.697s1.219 12.535-10.519 22.547c-9.104 7.765-20.658 8.724-20.658 8.724M430.046 306.808s.021 12.892 8.4 21.054c8.379 8.162 23.745 7.486 23.745 7.486"
                        ></path>
                        <path
                            strokeWidth="3"
                            d="M460.984 337.102L460.529 307M174.738 276.003l25.641-25.402"
                        ></path>
                        <path
                            strokeDasharray="2"
                            strokeWidth="3"
                            d="M150.063 251.076s10.263-12.425 23.071-12.492c12.808-.067 27.587 12.207 27.587 12.207M218.262 300.581s.391-15.583 8.56-23.938c8.17-8.354 21.647-8.552 21.647-8.552M312.983 620.876s13.31 2.157 21.325-4.623c8.015-6.781 8.62-20.174 8.62-20.174"
                        ></path>
                        <path strokeWidth="3" d="M313.048 595.727l32.527.42"></path>
                        <path
                            strokeDasharray="2"
                            strokeWidth="3"
                            d="M236.165 696.176s-1.964 16.784 8.906 24.256c11.422 7.85 23.778 7.951 23.778 7.951"
                        ></path>
                        <path strokeWidth="3" d="M268.931 695.547l.722 34.88"></path>
                        <path
                            strokeDasharray="2"
                            strokeWidth="3"
                            d="M293.578 700.676s9.823-11.01 20.724-11.115c10.9-.105 21.181 12.326 21.181 12.326"
                        ></path>
                        <path strokeWidth="4" d="M315.056 721.166l-22.52-22.424"></path>
                        <path
                            strokeDasharray="2"
                            strokeWidth="3"
                            d="M193.046 515.799s16.234 1.977 25.078 10.494c8.844 8.516 10.297 23.573 10.297 23.573"
                        ></path>
                        <path strokeWidth="3" d="M194.863 548.895l32.376.084"></path>
                        <path
                            strokeDasharray="2"
                            strokeWidth="3"
                            d="M337.243 512.081s.741-15.97 9.474-24.89c8.734-8.921 25.461-10.792 25.461-10.792M295.443 482.577s15.135 1.884 23.369 9.978c8.233 8.094 11.653 19.695 11.653 19.695"
                        ></path>
                        <path strokeWidth="3" d="M295.767 513.827l-1.12-32.011"></path>
                    </g>
                    <g
                        fill="none"
                        stroke="#425563"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeWidth="4"
                    >
                        <path d="M93.39 120.845l61.865.513M133.265 25.436l1.57 94.177M134.05 65.069l73.488.933M205.109 29.316l1.117 90.393M208.214 120.79l-24.997-.149M206.744 70.919s17.416-1.887 29.94-13.592c12.524-11.706 15.213-30.012 15.213-30.012M221.1 87.903l39.823.127M92.2 194.764L197.618 302.08l274.754 3.25-.89-183.96M361.212 121.26l-.425 181.743M363.566 304.558l.04 17.535 59.288.464-.251-17.552M254.517 266.371l-.237 37.145"></path>
                        <path d="M271.037 303.108l.536-28.247 88.501 1.492M452.13 581.009l683.17 2.169M1135.2 424.358l-.12 160.487M1075.89 415.611l.1 9.855 57.29.88M1132.44 139.965l-.59 167.533M271.855 207.883l-.128-7.499 89.487-.356M275.108 273.419l-.206-15.738 9.533.048.336 4.96 62.832.527-.348-46.23-60.974.034.199 5.54-6.354.004.877 24.994-6.711-.07-.346-15.01-1.683-.008-.67-23.157s65.881-.144 88.395-.062M309.745 729.165l36.035-35.475M193.529 731.46l35.837-37.906 41.979.604 37.846 35.067.38 71.124M193.046 578.786l-.439 222.961"></path>
                        <path d="M31.934 580.065l3.17 221.283 434.827-2.539M472.459 591.352l-1.653 209.412M310.886 588.954l.618 70.597 34.286 34.911 126.027.784M271.057 454.597l.137-25.589 99.691.868.751 43.648 78.522-.438M329.495 515.359l44.242.318 1.05 74.007M268.346 515.153l29.267.182"></path>
                        <path d="M270.324 517.084l1.168 71.56 215.258 2.199"></path>
                        <path d="M450.929 408.708l-.324 164.866-.035 17.334M690.68 411.689l-.139 180.557M450.56 410.542l625.52.801M627.701 137.258l.608 179.714M800.951 139.257l.126 162.827-24.636-.023M363.02 135.755l771.37 2.406"></path>
                    </g>
                    <path
                        fill="none"
                        stroke="#425563"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeWidth="6.065"
                        d="M92.172 24.9l170.141 2.387-1.567 93.147 884.264 2.615-.09 184.407-67.17-.246-.74 109.055 67.88.268.08 177.295-659.724-2.742-2.969 220.661-466.09 3.137-2.136-235.269 177.905.832 2.612-193.757-78.578-84.369-26.244-.827"
                    ></path>
                    <g className="mapRooms" fill="#85d4ff">
                        <path
                            className="collaboration"
                            d="M913.59 412.554l156.92-.083c1.66-.001 3.03 1.295 3.04 2.893l.09 9.234c.02 1.599 1.38 2.898 3.04 2.902l53.94.129c1.66.004 3.01 1.304 3.01 2.902V577.15c0 1.599-1.35 2.892-3.01 2.888l-217.11-.516c-1.664-.004-3.013-1.303-3.012-2.902l.076-161.169c.001-1.599 1.351-2.896 3.016-2.897z"></path>
                        <path
                            className="united"
                            d="M627.745 138.462c1.137-2.122 172.639-1.649 172.581.469-.183 6.644-.528 157.434-.732 162.177-.046 1.071-20.428.396-22.188.743-1.25.247.728 13.7-1.558 13.955-6.403.716-138.297 2.838-138.297 2.838-4.682.06-8.489-3.674-8.503-8.339 0 0-2.058-170.435-1.303-171.843z">
                        </path>
                        <path
                            className="inspired a b"
                            d="M812.449 139.723h309.311c5.42 0 9.81 4.195 9.81 9.37v144.101c0 5.175-4.39 9.37-9.81 9.37H812.449c-5.414 0-9.803-4.195-9.803-9.37V149.093c0-5.175 4.389-9.37 9.803-9.37z"
                            opacity="0.998"
                        ></path>
                        <path
                            className="commitment"
                            d="M702.353 413.489h195.102c5.406 0 9.788 4.401 9.788 9.829v148.415c0 5.428-4.382 9.829-9.788 9.829H702.353c-5.406 0-9.789-4.401-9.789-9.829V423.318c0-5.428 4.383-9.829 9.789-9.829z"></path>
                        <path
                            className="innovation"
                            d="M462.932 410.821H679.04c5.641 0 10.215 4.472 10.215 9.989v150.974c0 5.517-4.574 9.989-10.215 9.989H462.932c-5.642 0-10.215-4.472-10.215-9.989V420.81c0-5.517 4.573-9.989 10.215-9.989z"></path>
                    </g>
                    <g className="seatings" fill="#425563">
                        <path d="M1030.09 161.657l11.85 8.567-4.48 13.92-14.63.035-4.55-13.897 11.81-8.625zM784.108 446.771l11.853 8.566-4.485 13.92-14.625.036-4.553-13.898 11.81-8.624zM1095.75 447.054l11.85 8.567-4.48 13.919-14.63.036-4.55-13.897 11.81-8.625zM1028.54 447.905l11.86 8.567-4.49 13.919-14.62.036-4.56-13.897 11.81-8.625zM721.129 447.26l11.852 8.567-4.485 13.92-14.624.035-4.553-13.897 11.81-8.625zM835.101 176.513l8.677-11.772 13.877 4.616-.101 14.624-13.94 4.422-8.513-11.89zM645.639 171.66l8.677-11.772 13.877 4.616-.101 14.623-13.94 4.423-8.513-11.89zM644.887 227.823l8.678-11.772 13.877 4.616-.102 14.624-13.939 4.422-8.514-11.89zM644.136 284.174l8.678-11.772 13.876 4.616-.101 14.624-13.939 4.422-8.514-11.89zM835.349 241.955l8.677-11.771 13.877 4.615-.101 14.624-13.94 4.422-8.513-11.89zM889.505 373.606l8.678-11.772 13.877 4.616-.102 14.624-13.939 4.422-8.514-11.89zM847.705 481.597l8.678-11.772 13.876 4.616-.101 14.624-13.939 4.422-8.514-11.89zM629.09 439.222l8.678-11.772 13.876 4.616-.101 14.624-13.939 4.422-8.514-11.89zM531.271 471.71l8.678-11.772 13.877 4.616-.101 14.624-13.94 4.422-8.514-11.89zM629.002 495.345l8.678-11.771 13.877 4.615-.102 14.624-13.939 4.423-8.514-11.891zM628.127 552.444l8.678-11.772 13.877 4.616-.101 14.623-13.94 4.423-8.514-11.89zM848.073 548.718l8.677-11.772 13.877 4.616-.101 14.624-13.94 4.422-8.513-11.89zM950.613 174.778l-8.678-11.772-13.877 4.616.102 14.624 13.939 4.422 8.514-11.89zM758.19 170.659l-8.678-11.772-13.877 4.616.102 14.624 13.939 4.422 8.514-11.89zM757.814 225.163l-8.678-11.771-13.877 4.615.102 14.624 13.939 4.423 8.514-11.891zM758.19 281.923l-8.678-11.771-13.877 4.615.102 14.624 13.939 4.423 8.514-11.891zM950.613 238.237l-8.678-11.772-13.877 4.616.102 14.624 13.939 4.422 8.514-11.89zM1005.19 371.707l-8.678-11.772-13.877 4.616.101 14.624 13.94 4.422 8.514-11.89zM970.218 480.686l-8.677-11.772-13.877 4.616.101 14.624 13.94 4.422 8.513-11.89zM508.927 439.711l-8.678-11.771-13.877 4.615.102 14.624 13.939 4.423 8.514-11.891zM508.633 495.162l-8.677-11.771-13.877 4.615.101 14.624 13.94 4.423 8.513-11.891zM509.367 557.068l-8.678-11.772-13.877 4.616.102 14.624 13.939 4.422 8.514-11.89zM613.156 528.671l-8.678-11.771-13.876 4.615.101 14.624 13.939 4.422 8.514-11.89zM970.935 544.831l-8.678-11.771-13.876 4.615.101 14.624 13.939 4.422 8.514-11.89zM1095.01 161.449l11.86 8.567-4.49 13.92-14.62.035-4.56-13.897 11.81-8.625zM1030.06 275.393l-11.79-8.655 4.59-13.886 14.63.073 4.45 13.931-11.88 8.537zM723.942 560.42l-11.788-8.655 4.589-13.886 14.624.073 4.449 13.931-11.874 8.537zM789.449 559.999l-11.788-8.655 4.588-13.886 14.624.073 4.45 13.931-11.874 8.537zM1098.54 560.566l-11.79-8.655 4.59-13.886 14.62.073 4.45 13.931-11.87 8.537zM1031.9 560.566l-11.79-8.655 4.59-13.886 14.62.073 4.45 13.931-11.87 8.537zM1099.15 275.393l-11.79-8.655 4.59-13.886 14.62.073 4.45 13.931-11.87 8.537z"></path>
                        <path
                            stroke="none"
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            strokeWidth="4"
                            d="M1010.69 188.854h40.72c5.52 0 10 4.477 10 10v40.336c0 5.523-4.48 10-10 10h-40.72c-5.52 0-10-4.477-10-10v-40.336c0-5.523 4.48-10 10-10zM872.381 144.1h40.714c5.523 0 10 4.477 10 10v40.336c0 5.523-4.477 10-10 10h-40.714c-5.523 0-10-4.477-10-10V154.1c0-5.523 4.477-10 10-10zM884.34 453.257h9.571c5.523 0 10 4.477 10 10v40.336c0 5.522-4.477 10-10 10h-9.571c-5.522 0-10-4.478-10-10v-40.336c0-5.523 4.478-10 10-10zM663.805 414.793h9.571c5.523 0 10 4.477 10 10v29.809c0 5.522-4.477 10-10 10h-9.571c-5.522 0-10-4.478-10-10v-29.809c0-5.523 4.478-10 10-10zM462.966 417.267h9.571c5.523 0 10 4.477 10 10v29.808c0 5.523-4.477 10-10 10h-9.571c-5.523 0-10-4.477-10-10v-29.808c0-5.523 4.477-10 10-10zM462.723 473.494h9.571c5.523 0 10 4.477 10 10v29.808c0 5.523-4.477 10-10 10h-9.571c-5.522 0-10-4.477-10-10v-29.808c0-5.523 4.478-10 10-10zM463.209 529.108h9.571c5.523 0 10 4.477 10 10v29.808c0 5.523-4.477 10-10 10h-9.571c-5.523 0-10-4.477-10-10v-29.808c0-5.523 4.477-10 10-10zM567.278 446.677h9.571c5.523 0 10 4.478 10 10v29.809c0 5.523-4.477 10-10 10h-9.571c-5.523 0-10-4.477-10-10v-29.809c0-5.522 4.477-10 10-10zM567.513 502.36h9.57c5.523 0 10 4.478 10 10v29.809c0 5.523-4.477 10-10 10h-9.57c-5.523 0-10-4.477-10-10V512.36c0-5.522 4.477-10 10-10zM664.164 470.313h9.571c5.523 0 10 4.477 10 10v31.563c0 5.523-4.477 10-10 10h-9.571c-5.523 0-10-4.477-10-10v-31.563c0-5.523 4.477-10 10-10zM664.765 526.855h9.571c5.523 0 10 4.477 10 10v33.317c0 5.523-4.477 10-10 10h-9.571c-5.523 0-10-4.477-10-10v-33.317c0-5.523 4.477-10 10-10zM924.157 452.804h9.57c5.523 0 10 4.477 10 10v40.335c0 5.523-4.477 10-10 10h-9.57c-5.523 0-10-4.477-10-10v-40.335c0-5.523 4.477-10 10-10zM924.545 517.911h9.571c5.523 0 10 4.477 10 10v40.336c0 5.522-4.477 10-10 10h-9.571c-5.522 0-10-4.478-10-10v-40.336c0-5.523 4.478-10 10-10zM884.314 518.523h9.571c5.522 0 10 4.477 10 10v40.335c0 5.523-4.478 10-10 10h-9.571c-5.523 0-10-4.477-10-10v-40.335c0-5.523 4.477-10 10-10zM681.398 142.176h40.715c5.523 0 10 4.477 10 10v35.952c0 5.523-4.477 10-10 10h-40.715c-5.523 0-10-4.477-10-10v-35.952c0-5.523 4.477-10 10-10zM680.911 203.329h40.715c5.522 0 10 4.477 10 10v29.131c0 5.523-4.478 10-10 10h-40.715c-5.523 0-10-4.477-10-10v-29.131c0-5.523 4.477-10 10-10zM680.911 257.887h40.715c5.522 0 10 4.477 10 10v30.837c0 5.523-4.478 10-10 10h-40.715c-5.523 0-10-4.477-10-10v-30.837c0-5.523 4.477-10 10-10zM758.044 523.68l-.229-40.714c-.031-5.523 4.421-10.025 9.944-10.056l38.482-.216c5.523-.031 10.025 4.421 10.056 9.944l.228 40.714c.031 5.523-4.421 10.025-9.944 10.056l-38.482.216c-5.522.031-10.025-4.421-10.055-9.944zM693.858 524.283l-.228-40.713c-.031-5.523 4.421-10.025 9.944-10.056l38.482-.216c5.523-.031 10.025 4.421 10.056 9.944l.228 40.714c.031 5.522-4.421 10.025-9.944 10.055l-38.482.216c-5.523.031-10.025-4.421-10.056-9.944zM1002.57 524.347l-.22-40.714c-.04-5.523 4.42-10.025 9.94-10.056l38.48-.216c5.52-.031 10.03 4.421 10.06 9.944l.23 40.714c.03 5.522-4.43 10.025-9.95 10.056l-38.48.215c-5.52.031-10.03-4.421-10.06-9.943zM1067.03 523.499l-.23-40.714c-.03-5.523 4.42-10.025 9.94-10.056l38.49-.216c5.52-.031 10.02 4.421 10.05 9.944l.23 40.714c.03 5.523-4.42 10.025-9.94 10.056l-38.49.215c-5.52.031-10.02-4.421-10.05-9.943zM872.453 209.906h40.715c5.523 0 10 4.477 10 10v40.336c0 5.523-4.477 10-10 10h-40.715c-5.523 0-10-4.477-10-10v-40.336c0-5.523 4.477-10 10-10zM927.549 342.463h40.715c5.522 0 10 4.477 10 10v40.336c0 5.523-4.478 10-10 10h-40.715c-5.523 0-10-4.477-10-10v-40.336c0-5.523 4.477-10 10-10zM1077.28 188.646H1118c5.52 0 10 4.477 10 10v40.336c0 5.522-4.48 10-10 10h-40.72c-5.52 0-10-4.478-10-10v-40.336c0-5.523 4.48-10 10-10z"
                        ></path>
                    </g>
                </g>
            </svg>
        </Col>
    );
}

export default SmallerMap;