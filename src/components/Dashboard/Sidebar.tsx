/**
 * This code was generated by Builder.io
 */
import React from "react";
import NavItem from "./NavItem";
import { useLocation } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const dashboardSvg = (selected: boolean) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke={ selected ? "#FFFFFF" : "#648EDF" } stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
  const patientsSvg = (selected: boolean) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke={selected ? "#FFFFFF" : "#648EDF"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
  const cmemsSvg = (selected: boolean) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.9707 22H14.9707C19.9707 22 21.9707 20 21.9707 15V9C21.9707 4 19.9707 2 14.9707 2H8.9707C3.9707 2 1.9707 4 1.9707 9V15C1.9707 20 3.9707 22 8.9707 22Z" stroke={ selected ? "#FFFFFF" : "#648EDF" } stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1.9707 12.7001L7.9707 12.6801C8.7207 12.6801 9.5607 13.2501 9.8407 13.9501L10.9807 16.8301C11.2407 17.4801 11.6507 17.4801 11.9107 16.8301L14.2007 11.0201C14.4207 10.4601 14.8307 10.4401 15.1107 10.9701L16.1507 12.9401C16.4607 13.5301 17.2607 14.0101 17.9207 14.0101H21.9807" stroke={ selected ? "#FFFFFF" : "#648EDF" } stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
  const ciedsSvg = (selected: boolean) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.9707 22H14.9707C19.9707 22 21.9707 20 21.9707 15V9C21.9707 4 19.9707 2 14.9707 2H8.9707C3.9707 2 1.9707 4 1.9707 9V15C1.9707 20 3.9707 22 8.9707 22Z" stroke={ selected ? "#FFFFFF" : "#648EDF" } stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.5833 6.16663L7.38785 12.4012C7.18438 12.6454 7.08264 12.7675 7.08109 12.8706C7.07974 12.9602 7.11968 13.0455 7.1894 13.1018C7.2696 13.1666 7.42852 13.1666 7.74635 13.1666H12L11.4167 17.8333L16.6122 11.5987C16.8156 11.3545 16.9174 11.2325 16.9189 11.1294C16.9203 11.0397 16.8803 10.9544 16.8106 10.8981C16.7304 10.8333 16.5715 10.8333 16.2536 10.8333H12L12.5833 6.16663Z" stroke={ selected ? "#FFFFFF" : "#648EDF" } stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>    
  )
  const analyticsSVG = (selected: boolean) => (
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 20V10M12 20V4M6 20V14" stroke={ selected ? "#FFFFFF" : "#648EDF" } stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 
  )
  const settingsSvg = (selected: boolean) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_115_4060)">
    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke={ selected ? "#FFFFFF" : "#648EDF" } stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke={ selected ? "#FFFFFF" : "#648EDF" } stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_115_4060">
    <rect width="24" height="24" fill={ selected ? "#FFFFFF" : "#648EDF" }/>
    </clipPath>
    </defs>
    </svg>
  )

  const logOutSvg = (
    <svg fill="white" height="2vh" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.971 384.971" xml:space="preserve">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <g id="Sign_Out">
            <path d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03 C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03 C192.485,366.299,187.095,360.91,180.455,360.91z" stroke-width="3"></path>
            <path d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279 c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179 c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z" stroke-width="3"></path>
          </g>
        </g>
      </g>
    </svg>
  );
  
  
  const navItems = [
    {
      svg: dashboardSvg,
      active: true,
      pageName: "dashboard",
    },
    {
      svg: patientsSvg,
      active: false,
      pageName: "patients",
    },
    {
      svg: cmemsSvg,
      active: false,
      pageName: "cmems",
    },
    {
      svg: ciedsSvg,
      active: false,
      pageName: "cieds",
    },
    {
      svg: analyticsSVG,
      active: false,
      pageName: "connectivity",
    },
    {
      svg: settingsSvg,
      active: false,
      pageName: "settings",
      isFooter: true,
    },
  ];

  const location = useLocation();
  console.log(location)

  const data=useAuth()
  
  return (
    <aside
      data-layername="sidebarNavigation"
      className="flex flex-col justify-between h-screen bg-blue-700 w-[82px] max-md:hidden"
    >
      <div data-layername="content" className="flex flex-col items-center w-full">
        <nav data-layername="nav" className="flex flex-col pt-8 w-full">
          <div className="object-contain self-center aspect-[0.97] w-[31px]">
            <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_115_4037)">
            <path d="M1.08596 32H1.94802C2.18159 32 2.42705 32 2.68339 31.9881C3.37521 31.9535 4.12048 31.8743 4.68462 31.7595C7.61225 31.1756 9.76393 29.5168 11.4356 26.8623C12.1284 25.7766 12.6609 24.5176 13.0548 23.0993C13.2894 22.264 13.5031 21.2802 13.6833 20.148C13.6942 20.0678 13.7149 19.9886 13.7258 19.8966C13.7258 19.8619 13.7367 19.8392 13.7367 19.8045C13.8545 19.085 13.9495 18.3061 14.0455 17.4717L14.1752 16.2365C14.2375 15.7743 14.2999 15.3082 14.3672 14.8371H23.1411C24.4624 14.8371 25.5373 13.6811 25.5373 12.2638V1.14512C25.5373 0.51565 25.0582 0 24.4733 0H24.2071C23.7073 0 23.2698 0 22.8759 0.0227638C22.1187 0.0465174 21.512 0.114809 20.8846 0.229618C17.946 0.824446 15.6142 2.53965 13.9416 5.20599C13.2597 6.28084 12.7282 7.53879 12.3234 8.95806C12.0888 9.78251 11.8859 10.7544 11.6949 11.8748C11.684 11.955 11.6731 12.0341 11.6622 12.1262L11.6523 12.1608C11.5346 12.9041 11.4287 13.7167 11.3327 14.5867L11.1535 16.2375C11.111 16.5622 11.0674 16.8917 11.0219 17.2203H2.41616C1.09487 17.2203 0.0200195 18.3763 0.0200195 19.7946V30.8559C0.0200195 31.4853 0.49905 32.001 1.08596 32.001V32ZM14.9412 11.4284C15.1114 10.5812 15.2926 9.80428 15.5054 9.12928C15.8894 7.88222 16.4961 6.71533 16.7405 6.34913C17.7738 4.85067 18.8922 3.86688 21.2131 3.19188C21.415 3.13448 21.8842 3.07807 22.4058 3.03254C22.6611 3.00977 22.8739 3.21564 22.8739 3.48979V11.5195C22.8739 11.7709 22.6819 11.9767 22.4473 11.9767H15.3559C15.0897 11.9767 14.8878 11.7016 14.9402 11.4274L14.9412 11.4284ZM2.51216 20.5369C2.51216 20.2845 2.70318 20.0797 2.93874 20.0797H10.0302C10.2954 20.0797 10.4983 20.3538 10.4459 20.629C10.2756 21.4762 10.0935 22.2531 9.8817 22.9281C9.78471 23.2369 9.67881 23.5457 9.56202 23.8317C9.44424 24.1297 9.32745 24.4157 9.19978 24.6562C9.09289 24.9076 8.98699 25.1125 8.89098 25.2965C8.79498 25.4796 8.70986 25.6162 8.64553 25.7083C8.50697 25.9141 8.3694 26.0963 8.22093 26.2803C7.49645 27.2414 6.69576 27.7887 5.35566 28.4538C5.23788 28.4993 5.05577 28.5874 4.90533 28.6418C4.59555 28.7497 4.46095 28.7854 4.17392 28.8655C3.97202 28.9219 3.52466 29.008 2.9813 29.0249C2.72496 29.0338 2.51315 28.8418 2.51315 28.5676V20.5379L2.51216 20.5369Z" fill="white"/>
            <path d="M22.97 20.5141L22.968 18.4842C22.968 18.311 23.1254 18.1704 23.3204 18.1704L28.3472 18.1674V13.3088C28.3472 13.1356 28.5046 12.9961 28.6986 12.9961H30.9799V20.5091L22.97 20.5141Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_115_4037">
            <rect width="30.9598" height="32" fill="white" transform="translate(0.0200195)"/>
            </clipPath>
            </defs>
            </svg>
          </div>
          <div data-layername="navigation" className="flex flex-col px-4 mt-6 w-full">
            {navItems.slice(0, 5).map((item, index) => (
              <NavItem key={index} svg={item.svg} active={location.pathname.includes('/'+item.pageName)} pageName={item.pageName || ""} />
            ))}
          </div>
        </nav>
      </div>
      <footer data-layername="footer" className="flex flex-col items-center px-4 pb-6 w-full">
        {/* <NavItem svg={navItems[5].svg} active={location.pathname.includes('/'+navItems[4].pageName)}  pageName={navItems[4].pageName || ""} /> */}
        <div style={{padding:'10px 0px 7px 0px', cursor:'pointer'}} onClick={()=>{
                data.logout()

        }}>
        <svg fill="#648EDF" height="2vh" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.971 384.971" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="3"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g id="Sign_Out"> <path d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03 C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03 C192.485,366.299,187.095,360.91,180.455,360.91z"></path> <path d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279 c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179 c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z"></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>
        </div>
        <div data-layername="divider" className="flex mt-6 w-full bg-blue-400 min-h-[1px]" />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e68eb5bdf8e1c94a568b8fac98fce96879319282e39639a4c2761f13314c9571?placeholderIfAbsent=true&apiKey=de20ebe5f7e54554b52c3c72396947ee"
          alt="User avatar"
          className="object-contain mt-6 w-12 aspect-square min-h-[48px] rounded-[200px]"
        />
      </footer>
    </aside>
  );
};

export default Sidebar;
