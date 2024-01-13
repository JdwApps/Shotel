'use client'


import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Title from './Title';
import CTA from './CTA';
import Link from 'next/link';

const ImaGauche = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div className=" md:h-3/4 pb-24 pt-24 mt-12 bg-gray-800">
    
            <div className="block md:flex justify-center items-center ">
                <div className="w-screen m-auto  h-full md:w-1/2 xl:w-2/5  ">
                    <motion.img
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.6 }}
                        src="./img/chambre1.jpg"
                        alt="Your Image"
                        className="w-full h:full rounded-lg "
                    />
                </div>
                <motion.div
                    className="flex w-full md:w-1/2 p-10 item-center justify-center relative"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="absolute top-50 left-50  z-0">
                        <svg
                            width="200"
                            height="200"
                            xmlns="http://www.w3.org/2000/svg"
                            className="svg-background"
                        >
                           <path
                                fill="#4A5568"
                                stroke="#141414"
                                strokeWidth="0.1"
                                strokeDasharray="0.600001, 0.600001"
                                d="m 118.55298,67.497699 c 0,0 -0.57648,-0.237833 0.23525,-3.454622 0.81174,-3.216788 4.69636,-9.925253 4.69636,-9.925253 0,0 -4.11642,-5.021223 -4.75409,-9.434936 -0.63767,-4.413713 -1.29344,-14.423416 -2.29561,-16.510492 -1.00218,-2.087078 -1.92508,-1.459749 -2.32233,-4.085399 -0.39725,-2.625651 2.70062,-6.083721 -1.48819,-9.393576 -4.1888,-3.309853 -13.104118,-3.531315 -13.104118,-3.531315 0,0 6.200908,10.625831 6.421508,12.886973 0.2206,2.261145 -3.45204,7.011792 -2.38179,10.445732 1.07026,3.433942 2.68425,4.830783 1.96386,7.480564 -0.7204,2.649778 0.34899,4.941083 -2.65064,3.024624 -2.999638,-1.916456 -5.653728,-9.386681 -7.768378,-14.040813 -2.11465,-4.654132 -9.38582,-9.735674 -9.38582,-9.735674 0,0 -4.798038,0.277471 -8.75935,1.678622 -3.961313,1.401152 -6.409449,4.444736 -9.889061,5.328857 -3.479612,0.884123 -7.750281,1.697582 -7.750281,1.697582 0,0 5.496891,1.312394 8.511177,3.351218 3.014284,2.038821 7.322008,6.653313 10.056233,8.064807 2.734228,1.411491 8.549092,4.197421 10.567232,6.103538 2.01814,1.906119 4.85836,4.480067 5.90018,6.564558 1.04181,2.084493 0.79019,3.071159 -0.6032,2.582566 -1.3934,-0.488593 -9.22899,-8.181139 -13.470362,-10.208757 -4.241369,-2.027621 -9.331532,-7.534852 -12.628459,-7.851103 -3.296928,-0.316248 -9.735675,-3.264183 -9.735675,-3.264183 0,0 -6.784297,3.658849 -10.391441,7.753728 -3.607147,4.094877 -6.075103,11.752093 -6.887702,12.920581 -0.812599,1.168487 -2.691143,2.089663 -2.691143,2.089663 0,0 12.044216,-1.876819 15.556573,-1.612273 3.512357,0.264549 10.874865,-1.13488 16.295063,2.075016 5.420199,3.209893 16.168396,10.060543 16.168396,10.060543 0,0 -7.135018,-0.940133 -9.903716,-1.913874 -2.768695,-0.973741 -8.933415,0.100822 -11.87187,-1.1142 -2.938455,-1.21502 -5.262504,-3.33829 -7.34269,-4.375798 -2.080183,-1.037506 -10.734405,-3.198691 -13.224767,-2.582564 -2.490361,0.616127 -7.633086,3.37879 -9.273793,8.229394 -1.640711,4.850603 -2.42832,12.989521 -3.037552,14.427721 -0.609235,1.43821 -7.220326,7.83646 -7.220326,7.83646 0,0 3.370175,-2.84022 7.45385,-3.06082 4.083677,-0.2206 11.629728,0.60578 14.323457,-1.57436 2.693725,-2.18014 11.345362,-6.751549 14.905976,-5.885526 3.560612,0.866026 2.375752,1.358926 5.907929,3.039276 3.532177,1.68035 13.294566,-1.46061 12.982625,3.00739 -0.311941,4.468 -6.027708,3.78208 -9.499565,2.72734 -3.471858,-1.05475 -10.481062,-2.17412 -13.740937,-1.30464 -3.259873,0.86947 -8.57408,2.57394 -11.316063,2.40332 -2.741982,-0.17062 -6.567143,-1.27792 -10.463826,0.63164 -3.896685,1.90957 -8.943758,3.20042 -9.564195,6.1518 -0.620435,2.95138 -5.705427,14.830136 -5.046213,17.132646 0.659212,2.30251 2.455892,5.95446 1.807882,7.42283 -0.648012,1.46836 -2.460201,6.77051 -2.460201,6.77051 0,0 5.296111,-6.19402 8.544782,-7.06263 3.248673,-0.86861 7.053151,-1.71051 10.60601,-3.42102 3.552857,-1.71051 14.637983,-8.25266 19.178368,-9.33842 4.540385,-1.08577 21.124124,-4.10522 20.882843,-0.26627 -0.241279,3.83894 -20.279641,5.56755 -24.159091,5.56755 -3.879448,0 -16.052921,5.7442 -18.112422,6.72311 -2.059504,0.97891 -2.340425,4.23189 -4.787699,4.76961 -2.447277,0.53771 -5.775227,1.38994 -7.701164,3.27538 -1.925936,1.88543 -1.66139,8.45258 0.76176,11.06703 2.423146,2.61445 1.913871,10.96448 2.984124,13.00072 1.070253,2.03624 2.744568,4.54555 2.744568,4.54555 0,0 1.770827,-6.09837 4.420605,-7.93296 2.649781,-1.8346 6.768785,-4.01732 9.720167,-6.00272 2.95138,-1.9854 8.592177,-9.48491 12.650002,-10.55344 4.057824,-1.06853 10.319057,-5.77178 11.098911,-2.33439 0.779854,3.43738 -7.399563,5.52188 -10.260463,6.62143 -2.860899,1.09955 -14.043397,8.76365 -17.658299,11.69694 -3.614901,2.93328 -8.613719,12.22518 -8.613719,12.22518 0,0 4.00009,5.63476 4.96521,8.35003 0.965123,2.71527 1.739808,6.22849 4.512813,7.46247 2.773003,1.23397 2.439519,0.17923 2.439519,0.17923 0,0 -4.748059,-4.91006 -3.327088,-6.51457 1.420972,-1.60452 18.046073,-19.65576 20.838896,-16.76901 2.792825,2.88675 -6.497344,10.3337 -9.67277,12.11401 -3.175426,1.78031 -5.932921,12.53884 -5.932921,12.53884 0,0 2.404189,1.98798 5.257334,4.20863 2.853145,2.22064 3.596806,4.73772 3.596806,4.73772 0,0 0.599755,-2.47313 3.522697,-2.47313 2.922945,0 6.218148,-0.99356 9.328947,0.2025 3.110796,1.19607 6.659348,2.81954 6.659348,2.81954 0,0 5.524465,-6.5861 7.006616,-10.77146 1.482154,-4.18536 1.943171,-17.77032 1.66053,-19.88756 -0.282643,-2.11724 -0.953058,-12.47335 1.967295,-12.17778 2.92036,0.29557 0.46016,10.53018 1.05388,14.07959 0.59373,3.54941 1.40719,6.76706 0.86948,10.17515 -0.53771,3.40809 -4.912653,13.40142 -5.577035,15.13088 -0.664384,1.72947 -4.393893,4.87043 -4.393893,4.87043 0,0 7.061769,0.11719 11.318648,-1.47699 4.25688,-1.59417 15.435068,-5.65803 16.800888,-6.68606 1.36582,-1.02802 1.59073,-5.9174 1.37013,-8.23715 -0.2206,-2.31974 1.91646,-18.37352 0.89274,-21.16376 -1.02372,-2.79024 -8.954098,-27.95754 -6.12939,-27.40518 2.82471,0.55236 7.47798,4.56193 8.55771,9.2333 1.07973,4.67136 0.25334,16.45362 1.8458,19.78588 1.59245,3.33225 3.97423,14.27175 3.6847,17.28259 -0.28954,3.01083 -2.81782,9.42545 -2.81782,9.42545 0,0 5.78643,-3.81826 10.54311,-6.81359 4.75667,-2.99533 11.84085,-8.03379 13.20667,-8.23456 1.36582,-0.20078 1.12195,-11.02653 0.95995,-14.96975 -0.162,-3.94321 -6.66107,-21.25941 -10.08209,-23.8911 -3.42101,-2.63168 -13.60736,-16.769 -10.96017,-16.81554 2.64719,-0.0465 8.03465,4.98331 10.5319,10.51726 2.49726,5.53394 8.62061,13.753 9.72361,18.32268 1.103,4.56968 1.71223,11.84257 2.68166,14.74656 0.96944,2.90399 1.23484,7.45126 0.50497,8.7852 -0.72987,1.33394 8.38278,-10.80679 9.84339,-12.2674 1.46061,-1.46061 6.28881,-2.76008 7.87265,-5.34695 1.58383,-2.58687 1.78633,-5.21339 1.78633,-5.21339 0,0 -0.26024,-2.78506 -2.84538,-8.96874 -2.58515,-6.18368 -11.304,-17.07406 -15.52728,-20.53816 -4.22327,-3.4641 -14.93872,-9.935586 -13.07569,-11.938226 1.86303,-2.00262 7.11175,2.24305 10.94467,6.159556 3.83291,3.9165 12.0468,13.2532 14.40962,15.73063 2.36283,2.47744 8.07946,6.71881 9.7848,9.65813 1.70534,2.93931 4.56882,8.10875 4.56882,8.10875 0,0 1.90698,-6.2147 2.63427,-8.43793 0.72729,-2.22323 2.13447,-5.79504 2.35507,-7.06005 0.2206,-1.26499 -0.40587,-2.69027 -0.72298,-5.49602 -0.31711,-2.80575 2.66529,-2.34043 2.66529,-5.38401 0,-3.04358 -4.0225,-8.61114 -9.42546,-12.474206 -5.40296,-3.86308 -28.49783,-10.46124 -28.04888,-12.25362 0.44896,-1.79236 20.29343,-0.27574 24.33919,0.43604 4.04576,0.71177 12.68964,5.66664 14.1063,7.37801 1.41667,1.71137 1.85786,9.596936 1.85786,9.596936 0,0 1.51749,-13.268706 1.51749,-18.015906 0,-4.747197 -4.69894,-16.669909 -7.82525,-18.144307 -3.12631,-1.474396 -6.69726,-0.988388 -12.46387,-0.180959 -5.76661,0.807426 -15.27221,7.698575 -17.63331,3.9053 -2.36111,-3.793279 6.5051,-6.190575 9.16263,-7.311668 2.65754,-1.121092 2.60153,0.179237 6.93682,-0.177514 4.3353,-0.356751 12.07093,-3.832053 12.38976,-6.853232 0.31884,-3.021179 2.90227,-8.08032 5.00313,-9.948521 2.10087,-1.868202 7.86748,-2.85659 7.86748,-2.85659 0,0 -7.07728,-8.277651 -11.65214,-8.057052 -4.57485,0.220599 -6.61798,7.310805 -9.14626,11.428949 -2.52828,4.118145 -9.38926,7.048844 -13.11791,6.387045 -3.72865,-0.6618 -7.4392,7.365092 -10.79387,6.735177 -3.35466,-0.629914 -7.72098,-0.850513 -7.72098,-0.850513 0,0 -1.66742,7.429722 -5.31248,9.913188 -3.64506,2.483469 -5.27199,0.04653 -5.27199,0.04653 z"
                                id="path303" />
                        </svg>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="px-10  z-10 justify-center items-center"
                    >
                                <Title text='Hotel' />
                        <p className="text-l text-gray-100 md:text-1xl lg:text-xl align-text-center">
                            Embrace the serenity of our exclusive hotel nestled within a lush natural reserve, enveloped by breathtaking jungle landscapes and a pristine, sun-kissed beach. Experience a harmonious blend of luxury and nature, where every moment is infused with the enchanting beauty of the surrounding wilderness. Discover paradise redefined.
                        </p>
                        <Link href='/Hotel'>
                        <CTA name='View More'/>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default ImaGauche;

