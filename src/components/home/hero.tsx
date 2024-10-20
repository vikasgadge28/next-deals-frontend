import bgHero from '../../assets/bg-image-hero.png'
import expert from '../../assets/icons/expert-team.png'
import period from '../../assets/icons/period.png'
import people from '../../assets/icons/people.png'


import { Button, Input } from "@material-tailwind/react";
export const Hero = () => {
    return (<>

        <div className="w-full min-h-screen lg:flex justify-center items-center bg-secondary  rounded-b-2xl pt-24 pb-16 " >

                <div className='absolute mt-16 w-full h-full overflow-hidden opacity-10'>
                <svg className='w-full  left-[-200px] top-[-100px]  ' width="1920" height="3309" viewBox="0 0 1920 3309" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1773.14 -735.353C1608.27 -385.498 1594.45 -118.59 1617.11 67.3134C1636.01 222.294 1672.63 258.104 1665.36 394.142C1649.59 689.349 1447.54 1075.53 1182.34 1088.12C1051.71 1094.32 1002.9 990.66 826.461 874.702C667.74 770.394 412.31 662.404 -0.56585 674.263" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M1803.5 -702.411C1632.27 -373.595 1612.35 -115.96 1628.39 62.8971C1641.91 213.414 1669.06 252.836 1656.22 391.94C1629.28 683.749 1441.52 1048.34 1184.23 1069.53C1051.71 1080.45 994.811 987.129 812.971 877.236C652.88 780.49 398.895 677.222 -8.36185 687.222" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M1833.84 -669.49C1656.27 -361.702 1630.16 -113.199 1639.64 58.4996C1647.72 204.771 1665.62 247.462 1647.06 389.756C1609.48 677.994 1435.27 1021.81 1186.1 1050.97C1051.49 1066.72 986.904 983.575 799.47 879.793C638.181 790.5 385.477 692.064 -16.1687 700.228" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M1864.16 -636.583C1680.25 -349.808 1647.85 -110.275 1650.91 54.1348C1653.52 196.307 1662.34 241.996 1637.88 387.589C1590.16 672.132 1428.83 995.965 1187.95 1032.44C1051.1 1053.17 979.177 979.979 785.953 882.361C623.68 800.374 372.047 706.914 -23.9693 713.199" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M1894.47 -603.698C1704.19 -337.909 1665.38 -107.195 1662.13 49.7282C1659.26 188.042 1659.18 236.502 1628.76 385.389C1571.36 666.141 1422.31 970.732 1189.84 1013.88C1050.56 1039.74 971.662 976.256 772.481 884.893C609.373 810.081 358.652 721.72 -31.7218 726.164" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M1924.77 -570.832C1728.17 -326.048 1682.72 -103.946 1673.36 45.3485C1664.92 180.004 1656.25 230.914 1619.61 383.215C1552.99 660.137 1415.68 946.146 1191.71 995.368C1049.89 1026.53 964.329 972.416 758.988 887.449C595.201 819.65 345.245 736.542 -39.5455 739.105" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M1955.05 -537.984C1752.09 -314.196 1699.81 -100.543 1684.59 40.9745C1670.48 172.189 1653.47 225.329 1610.46 381.046C1535.03 654.132 1409.02 922.162 1193.57 976.864C1049.12 1013.53 957.097 968.489 745.504 890.012C581.163 829.059 331.824 751.377 -47.3374 752.063" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M1985.31 -505.132C1776.03 -302.29 1716.6 -96.9546 1695.79 36.6242C1675.86 164.616 1650.83 219.786 1601.31 378.9C1517.45 648.17 1402.34 898.767 1195.41 958.394C1048.28 1000.79 950.023 964.403 732.001 892.59C567.258 838.301 318.457 766.184 -55.1373 765.018" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M2015.58 -472.336C1799.98 -290.441 1733.08 -93.2652 1707.03 32.2502C1681.07 157.246 1648.47 214.23 1592.18 376.724C1500.23 642.248 1395.71 875.88 1197.29 939.91C1047.43 988.283 943.097 960.097 718.537 895.138C553.443 847.382 305.041 780.974 -62.9628 777.994" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M2045.81 -439.554C1823.87 -278.588 1749.15 -89.4675 1718.23 27.8817C1686.05 150.035 1646.19 208.688 1583.03 374.558C1483.33 636.378 1389.14 853.461 1199.13 921.442C1046.58 976.021 936.24 955.605 705.044 897.693C539.697 856.279 291.628 795.769 -70.7493 790.903" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M2076.06 -406.755C1847.77 -266.692 1764.81 -85.5675 1729.44 23.5531C1690.73 143.028 1644.12 203.268 1573.9 372.426C1466.71 630.653 1382.68 831.531 1200.99 903.024C1045.79 964.093 929.491 950.926 691.581 900.28C526.046 865.038 278.248 810.584 -78.53 803.874" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M2106.28 -373.994C1871.68 -254.865 1780.01 -81.6691 1740.65 19.2099C1695.04 136.093 1642.19 197.933 1564.77 370.284C1450.32 625.027 1376.31 809.989 1202.84 884.601C1045.08 952.46 922.786 946.015 678.113 902.859C512.42 873.628 264.854 825.374 -86.3308 816.808" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M2136.49 -341.245C1895.57 -243.015 1794.76 -77.8219 1751.85 14.8782C1698.94 129.168 1640.46 192.65 1555.64 368.152C1434.14 619.531 1370.1 788.806 1204.69 866.199C1044.51 941.14 916.12 940.879 664.644 905.437C498.823 882.066 251.468 840.165 -94.1312 829.748" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M2166.69 -308.516C1919.44 -231.164 1809.06 -74.0848 1763.04 10.5486C1702.36 122.139 1638.86 187.496 1546.52 366.008C1418.16 614.149 1364.03 767.904 1206.55 847.805C1044.1 930.19 909.476 935.493 651.188 908.011C485.226 890.361 238.071 854.94 -101.914 842.695" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M2196.87 -275.805C1943.3 -219.327 1822.95 -70.5402 1774.24 6.2056C1705.28 114.845 1637.42 182.436 1537.4 363.878C1402.32 608.918 1358.18 747.309 1208.4 829.421C1043.92 919.586 902.819 929.877 637.72 910.574C471.629 898.486 224.698 869.705 -109.724 855.585" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M2227.05 -243.104C1967.14 -207.466 1836.5 -67.252 1785.4 1.90578C1707.62 107.175 1636.09 177.536 1528.26 361.771C1386.62 603.856 1352.49 726.946 1210.22 811.085C1043.99 909.383 896.13 924.064 624.261 913.199C457.991 906.553 211.315 884.516 -117.52 868.548" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M2257.18 -210.402C1990.98 -195.631 1864.63 -47.4984 1796.56 -2.37874C1685.21 71.4164 1634.87 172.777 1519.12 359.684C1370.97 598.927 1347.04 706.753 1212.06 792.743C1044.42 899.566 889.372 917.975 610.804 915.793C444.338 914.484 197.938 899.294 -125.305 881.497" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M2288.26 -177.39C2015.64 -183.452 1875.15 -46.6564 1808.48 -6.23932C1691.63 64.6026 1634.47 168.668 1510.64 358.228C1356.01 594.977 1342.41 687.55 1214.4 775.33C1045.65 891.098 882.944 912.675 597.613 919.376C430.825 923.3 184.667 915.046 -133.13 895.374" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M2319.56 -144.237C2040.5 -171.159 1886.02 -46.8348 1820.57 -9.96307C1698.4 58.8688 1634.33 164.855 1502.31 356.986C1341.24 591.345 1338.15 668.615 1216.9 758.163C1047.48 883.287 876.55 907.422 584.531 923.255C417.352 932.321 171.459 931.102 -140.899 909.574" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M2350.87 -111.073C2065.36 -158.865 1892.29 -56.4916 1832.65 -13.7011C1715.2 70.616 1634.26 161.159 1493.94 355.696C1326.47 587.83 1334.13 649.648 1219.36 740.924C1049.77 875.769 869.997 901.869 571.378 927.064C403.735 941.202 158.203 947.113 -148.722 923.704" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M2382.17 -77.8946C2090.22 -146.572 1906.86 -54.7305 1844.74 -17.46C1717.03 59.1706 1634.28 157.57 1485.57 354.382C1311.73 584.415 1330.4 630.621 1221.82 723.647C1052.64 868.608 863.38 896.15 558.27 930.868C390.083 950.005 144.983 963.113 -156.506 937.85" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M2413.48 -44.6972C2115.07 -134.276 1921.87 -53.3971 1856.81 -21.2345C1719.14 46.8065 1634.37 154.102 1477.17 353.054C1296.97 581.117 1326.94 611.486 1224.27 706.339C1056.07 861.708 856.607 890.184 545.121 934.646C376.344 958.745 131.726 979.088 -164.315 951.964" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
</svg>

                </div>




            <img src={bgHero} className='absolute hidden lg:block left-0 bottom-0 pb-16 w-[40%] '/>
            <div className="flex lg:flex-row flex-col items-center lg:items-start justify-evenly w-full z-10">
                <div className="text-primary  ">
                    <h2 className="text-2xl pb-4">Sell your Project faster with us!</h2>
                    <h3 className="text-lg">We assure you sell out your Property!</h3>

                    <div className='flex py-2 text-sm'><img className='w-6 mr-2' src={expert}></img>Expert Team.</div>
                    <div className='flex py-2 text-sm'><img className='w-6 mr-2' src={period}></img>Definite period of time.</div>
                    <div className='flex py-2 text-sm'><img className='w-6 mr-2' src={people}></img>Minimal market cost.</div>

                </div>
                <div className="bg-primary rounded-xl p-8  ">
                    <h1 className="text-lg ">But want to know how we do it?</h1>
                    <h2 className="mb-8">Fill in the form so we can contact you</h2>
                    <div className="grid lg:grid-cols-2 gap-8 items-end text-xs ">
                        <div>
                            <h4 className='py-2'>City</h4>
                            <div >
                           <Input label='Enter your city'></Input>

                            </div>

                           
                        </div>
                        <div>
                            <h4 className='py-2'>Firm name</h4>
                            <div  >
                           <Input label='Enter your city'></Input>

                            </div>
                        </div>
                        <div>
                            <h4 className='py-2'>Rera ID</h4>
                            <div  >
                           <Input label='Enter your city'></Input>

                            </div>
                        </div>
                        <div>
                            <h4 className='py-2'>Phone no.</h4>
                            <div  >
                           <Input label='Enter your city'></Input>

                            </div>
                        </div>
                        <div>
                            <h4 className='py-2'>Email id</h4>
                            <div  >
                           <Input label='Enter your city'></Input>

                            </div>
                        </div>
                        <div>
                            <Button className='capitalize bg-secondary p-4'>Request call back</Button>
                        </div>
                       
                    </div>


                </div>
            </div>
        </div>
        </>
    )
}