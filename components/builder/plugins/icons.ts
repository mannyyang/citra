import { iconToSVG, parseIconSet } from '@iconify/utils';

const IconSet = {
    prefix: "mdi",
    icons: {
        blockQuote: {
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M17 22C16.4477 22 16 22.4477 16 23V28.5C16 28.6326 16.0527 28.7598 16.1464 28.8536L21.1464 33.8536L21.8536 33.1464L17.7071 29H22C22.5523 29 23 28.5523 23 28V23C23 22.4477 22.5523 22 22 22H17ZM17 23V28H22V23H17Z" fill="currentColor"></path><path d="M26 22C25.4477 22 25 22.4477 25 23V28.5C25 28.6326 25.0527 28.7598 25.1464 28.8536L30.1464 33.8536L30.8536 33.1464L26.7071 29H31C31.5523 29 32 28.5523 32 28V23C32 22.4477 31.5523 22 31 22H26ZM26 23V28H31V23H26Z" fill="currentColor"></path><path d="M16 39L48 39V38L16 38V39ZM16 45L32 45V44L16 44V45Z" fill="white" fill-opacity="0.22"></path>'
        },
        button: {
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M15 21C12.2386 21 10 23.2386 10 26V38C10 40.7614 12.2386 43 15 43H49C51.7614 43 54 40.7614 54 38V26C54 23.2386 51.7614 21 49 21H15ZM20 32H44V31H20V32Z" fill="currentColor"></path>'
        },
        column: {
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M11 13H53C54.1046 13 55 13.8954 55 15V49C55 50.1046 54.1046 51 53 51H11C9.89543 51 9 50.1046 9 49V15C9 13.8954 9.89543 13 11 13ZM8 15C8 13.3431 9.34315 12 11 12H53C54.6569 12 56 13.3431 56 15V49C56 50.6569 54.6569 52 53 52H11C9.34315 52 8 50.6569 8 49V15ZM12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17ZM15 17C15.5523 17 16 16.5523 16 16C16 15.4477 15.5523 15 15 15C14.4477 15 14 15.4477 14 16C14 16.5523 14.4477 17 15 17ZM19 16C19 16.5523 18.5523 17 18 17C17.4477 17 17 16.5523 17 16C17 15.4477 17.4477 15 18 15C18.5523 15 19 15.4477 19 16Z" fill="white" fill-opacity="0.22"></path><path d="M18 20H32V48H18V20ZM32 49H18C17.4477 49 17 48.5523 17 48V20C17 19.4477 17.4477 19 18 19H32H33H47C47.5523 19 48 19.4477 48 20V48C48 48.5523 47.5523 49 47 49H33H32ZM33 20V48H47V20H33Z" fill="currentColor"></path>'
        },
        div: {
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M47 17H17V47H47V17ZM17 16C16.4477 16 16 16.4477 16 17V47C16 47.5523 16.4477 48 17 48H47C47.5523 48 48 47.5523 48 47V17C48 16.4477 47.5523 16 47 16H17Z" fill="currentColor"></path>'
        },
        heading: {
            body: '<path d="M16.5 21V27.5M16.5 33V27.5M16.5 27.5H23.5V21V33" stroke="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16 39L48 39V38L16 38V39ZM16 45L32 45V44L16 44V45Z" fill="white" fill-opacity="0.22"></path>'
        },
        image: {
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M22 23C22 21.8954 22.8954 21 24 21H41C42.1046 21 43 21.8954 43 23V40C43 41.1046 42.1046 42 41 42H24C22.8954 42 22 41.1046 22 40V23ZM24 22C23.4477 22 23 22.4477 23 23V40C23 40.0896 23.0118 40.1764 23.0339 40.259L31.7929 31.5C32.1834 31.1095 32.8166 31.1095 33.2071 31.5L41.9661 40.259C41.9882 40.1764 42 40.0896 42 40V23C42 22.4477 41.5523 22 41 22H24ZM24 41C23.9104 41 23.8236 40.9882 23.741 40.9661L32.5 32.2071L41.259 40.9661C41.1764 40.9882 41.0896 41 41 41H24ZM28 28.5C28.8284 28.5 29.5 27.8284 29.5 27C29.5 26.1716 28.8284 25.5 28 25.5C27.1716 25.5 26.5 26.1716 26.5 27C26.5 27.8284 27.1716 28.5 28 28.5Z" fill="currentColor"></path>'
        },
        linkBlock: {
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M17 17H47V47H17V17ZM16 17C16 16.4477 16.4477 16 17 16H47C47.5523 16 48 16.4477 48 17V47C48 47.5523 47.5523 48 47 48H17C16.4477 48 16 47.5523 16 47V17ZM27.3536 33.3536L28.8536 31.8536L28.1464 31.1464L26.6464 32.6464C25.3466 33.9463 25.3466 36.0537 26.6464 37.3536C27.9463 38.6534 30.0537 38.6534 31.3536 37.3536L32.8536 35.8536L32.1464 35.1464L30.6464 36.6464C29.7371 37.5558 28.2629 37.5558 27.3536 36.6464C26.4442 35.7371 26.4442 34.2629 27.3536 33.3536ZM32.6464 26.6464C33.9463 25.3466 36.0537 25.3466 37.3536 26.6464C38.6534 27.9463 38.6534 30.0537 37.3536 31.3536L35.8536 32.8536L35.1464 32.1464L36.6464 30.6464C37.5558 29.7371 37.5558 28.2629 36.6464 27.3536C35.7371 26.4442 34.2629 26.4442 33.3536 27.3536L31.8536 28.8536L31.1464 28.1464L32.6464 26.6464ZM30.3536 34.3536L34.3536 30.3536L33.6464 29.6464L29.6464 33.6464L30.3536 34.3536Z" fill="currentColor"></path>'
        },
        list: {
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M12 19C12 18.4477 12.4477 18 13 18H51C51.5523 18 52 18.4477 52 19V45C52 45.5523 51.5523 46 51 46H13C12.4477 46 12 45.5523 12 45V19Z" fill="white" fill-opacity="0.1"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 19H51V45H13L13 19ZM12 19C12 18.4477 12.4477 18 13 18H51C51.5523 18 52 18.4477 52 19V45C52 45.5523 51.5523 46 51 46H13C12.4477 46 12 45.5523 12 45V19ZM19 24C19 24.5523 18.5523 25 18 25C17.4477 25 17 24.5523 17 24C17 23.4477 17.4477 23 18 23C18.5523 23 19 23.4477 19 24ZM19 33C19 33.5523 18.5523 34 18 34C17.4477 34 17 33.5523 17 33C17 32.4477 17.4477 32 18 32C18.5523 32 19 32.4477 19 33ZM22 24H46V32H22V24ZM47 33V32V24C47 23.4477 46.5523 23 46 23H22C21.4477 23 21 23.4477 21 24V32V33V40C21 40.5523 21.4477 41 22 41H46C46.5523 41 47 40.5523 47 40V33ZM22 40V33H46V40H22Z" fill="currentColor"></path>'
        },
        listItem: {
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M13 19H51V45H13L13 19ZM12 19C12 18.4477 12.4477 18 13 18H51C51.5523 18 52 18.4477 52 19V45C52 45.5523 51.5523 46 51 46H13C12.4477 46 12 45.5523 12 45V19ZM46 24H22V40H46V24ZM22 23C21.4477 23 21 23.4477 21 24V40C21 40.5523 21.4477 41 22 41H46C46.5523 41 47 40.5523 47 40V24C47 23.4477 46.5523 23 46 23H22ZM19 33C19 33.5523 18.5523 34 18 34C17.4477 34 17 33.5523 17 33C17 32.4477 17.4477 32 18 32C18.5523 32 19 32.4477 19 33Z" fill="white" fill-opacity="0.22"></path><circle cx="18" cy="24" r="1" fill="currentColor"></circle><rect x="21.5" y="23.5" width="25" height="9" rx="0.5" fill="white" fill-opacity="0.1" stroke="currentColor"></rect>'
        },
        paragraph: {
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M52 27H12V26H52V27ZM52 33H12V32H52V33ZM12 39L32 39V38L12 38V39Z" fill="currentColor"></path>'
        },
        textBlock: {
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M20.3799 27.2727V28.2102H23.1242V36H24.181V28.2102H26.9253V27.2727H20.3799ZM28.583 35.7187C29.0404 35.9971 29.5844 36.1363 30.2151 36.1363C30.6583 36.1363 31.0574 36.0682 31.4126 35.9318C31.7677 35.7926 32.066 35.5994 32.3074 35.3523C32.5489 35.1023 32.7208 34.8125 32.8231 34.4829L31.8515 34.2102C31.7662 34.4375 31.6455 34.6278 31.4893 34.7812C31.333 34.9318 31.1469 35.0454 30.931 35.1221C30.7179 35.196 30.4793 35.2329 30.2151 35.2329C29.8089 35.2329 29.4523 35.1449 29.1455 34.9687C28.8387 34.7897 28.5986 34.5298 28.4253 34.1889C28.2708 33.8772 28.1863 33.5036 28.1719 33.0682H32.9253V32.642C32.9253 32.0312 32.8444 31.517 32.6824 31.0994C32.5205 30.6818 32.3032 30.3466 32.0304 30.0937C31.7577 29.838 31.4552 29.6534 31.1228 29.5397C30.7904 29.4261 30.4537 29.3693 30.1128 29.3693C29.5219 29.3693 29.0049 29.5142 28.5617 29.804C28.1214 30.0909 27.7776 30.4915 27.5305 31.0057C27.2861 31.517 27.164 32.1079 27.164 32.7784C27.164 33.4488 27.2861 34.0369 27.5305 34.5426C27.7776 35.0454 28.1285 35.4375 28.583 35.7187ZM28.1744 32.1988C28.1936 31.8952 28.2701 31.6083 28.404 31.338C28.5603 31.0227 28.7833 30.767 29.0731 30.571C29.3657 30.3721 29.7123 30.2727 30.1128 30.2727C30.4765 30.2727 30.7918 30.3565 31.0589 30.5241C31.3287 30.6917 31.5361 30.9204 31.681 31.2102C31.8287 31.5 31.9026 31.8295 31.9026 32.1988H28.1744ZM35.0294 29.4545L36.5976 32.1307L38.1657 29.4545H39.3248L37.2112 32.7273L39.3248 36H38.1657L36.5976 33.4602L35.0294 36H33.8703L35.9498 32.7273L33.8703 29.4545H35.0294ZM43.6064 30.3068V29.4545H42.2087V27.8863H41.203V29.4545H40.2144V30.3068H41.203V34.3977C41.203 34.7784 41.2911 35.0937 41.4672 35.3437C41.6462 35.5937 41.8706 35.7798 42.1405 35.902C42.4133 36.0241 42.6917 36.0852 42.9758 36.0852C43.1633 36.0852 43.3181 36.071 43.4403 36.0426C43.5624 36.017 43.6576 35.9915 43.7258 35.9659L43.5212 35.0625L43.3508 35.0966C43.2797 35.1079 43.1888 35.1136 43.078 35.1136C42.9303 35.1136 42.7897 35.0909 42.6562 35.0454C42.5255 34.9971 42.4175 34.9034 42.3323 34.7642C42.2499 34.6221 42.2087 34.4091 42.2087 34.125V30.3068H43.6064Z" fill="currentColor"></path>'
        },
        textLink: {
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.4846 25.2727V34H26.5982V33.0625H22.5414V25.2727H21.4846ZM28.0982 27.4545V34H29.1039V27.4545H28.0982ZM28.1025 26.1634C28.2445 26.2969 28.4135 26.3636 28.6096 26.3636C28.8056 26.3636 28.9732 26.2969 29.1124 26.1634C29.2544 26.0298 29.3255 25.8693 29.3255 25.6818C29.3255 25.4943 29.2544 25.3338 29.1124 25.2003C28.9732 25.0668 28.8056 25 28.6096 25C28.4135 25 28.2445 25.0668 28.1025 25.2003C27.9632 25.3338 27.8936 25.4943 27.8936 25.6818C27.8936 25.8693 27.9632 26.0298 28.1025 26.1634ZM31.9515 34V30.0625C31.9515 29.6818 32.024 29.358 32.1689 29.0909C32.3137 28.8239 32.5112 28.6207 32.7612 28.4815C33.014 28.3423 33.301 28.2727 33.622 28.2727C34.0879 28.2727 34.4544 28.4176 34.7214 28.7074C34.9885 28.9943 35.122 29.3949 35.122 29.9091V34H36.1277V29.8409C36.1277 29.2841 36.0353 28.8239 35.8507 28.4602C35.666 28.0938 35.4075 27.821 35.0751 27.642C34.7427 27.4602 34.3549 27.3693 33.9118 27.3693C33.4174 27.3693 33.014 27.4716 32.7015 27.6761C32.389 27.8778 32.1561 28.1449 32.0027 28.4773H31.9174V27.4545H30.9458V34H31.9515ZM38.9711 31.5505V34H37.9654V25.2727H38.9711V30.3693H39.0904L41.954 27.4545H43.1983L40.4328 30.2509L43.4029 34H42.1245L39.6754 30.8979L38.9711 31.5505ZM21 39L44 39V38L21 38V39Z" fill="currentColor"></path>'
        },
        video: {
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M26.7773 23.4525C26.4451 23.2309 26 23.4691 26 23.8685V40.1315C26 40.5308 26.4451 40.769 26.7774 40.5475L38.9746 32.416C39.2714 32.2181 39.2714 31.7819 38.9746 31.5839L26.7773 23.4525ZM25 23.8685C25 22.6704 26.3352 21.9559 27.332 22.6204L39.5293 30.7519C40.4199 31.3456 40.4199 32.6543 39.5293 33.248L27.3321 41.3795C26.3352 42.0441 25 41.3295 25 40.1315V23.8685Z" fill="currentColor"></path>'
        },
        youtube: {
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M46.0657 19.768C47.6137 20.1897 48.8343 21.4351 49.2474 23.0157C50 25.8803 50 31.8571 50 31.8571C50 31.8571 50 37.834 49.2474 40.6986C48.8334 42.2791 47.6137 43.5246 46.0649 43.9471C43.2577 44.7143 32 44.7143 32 44.7143C32 44.7143 20.7423 44.7143 17.9343 43.9471C16.3863 43.5246 15.1657 42.2791 14.7526 40.6986C14 37.834 14 31.8571 14 31.8571C14 31.8571 14 25.8803 14.7526 23.0157C15.1657 21.4343 16.3863 20.1897 17.9343 19.7671C20.7423 19 32 19 32 19C32 19 43.2577 19 46.0657 19.768ZM28.5714 37.4286L38 31.8614L28.5714 26.2943V37.4286Z" fill="white" fill-opacity="0.1"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M45.8292 20.6364L45.8283 20.6361C45.2215 20.4702 44.0738 20.33 42.6165 20.2215C41.1849 20.1149 39.5292 20.0434 37.9526 19.9956C36.3774 19.9478 34.8886 19.9239 33.7931 19.9119C33.2455 19.906 32.7966 19.903 32.4849 19.9015C32.3291 19.9007 32.2075 19.9004 32.1251 19.9002L32.0004 19.9L32 19C32 19 43.2577 19 46.0657 19.768C47.6137 20.1897 48.8343 21.4351 49.2474 23.0157C50 25.8803 50 31.8571 50 31.8571C50 31.8571 50 37.834 49.2474 40.6986C48.8334 42.2791 47.6137 43.5246 46.0649 43.9471C43.2577 44.7143 32 44.7143 32 44.7143L32.0001 43.8143L32.1251 43.8141C32.2075 43.8139 32.3291 43.8135 32.4849 43.8128C32.7966 43.8113 33.2455 43.8083 33.7931 43.8024C34.8886 43.7904 36.3774 43.7665 37.9525 43.7188C39.5291 43.671 41.1847 43.5996 42.6162 43.4931C44.0734 43.3847 45.221 43.2448 45.8276 43.079C47.059 42.743 48.0425 41.7468 48.3768 40.4705C48.7267 39.1388 48.9129 37.0134 49.0071 35.158C49.0535 34.2436 49.0768 33.4167 49.0884 32.8183C49.0942 32.5193 49.0971 32.2779 49.0986 32.1117C49.0993 32.0287 49.0996 31.9644 49.0998 31.9212L49.1 31.8726L49.1 31.8578V31.8565L49.1 31.8417L49.0998 31.793C49.0996 31.7499 49.0993 31.6856 49.0986 31.6026C49.0971 31.4364 49.0942 31.195 49.0884 30.896C49.0768 30.2976 49.0535 29.4707 49.0071 28.5563C48.9129 26.7009 48.7268 24.5761 48.377 23.2444L48.3767 23.2433C48.0432 21.9676 47.0596 20.9716 45.8292 20.6364ZM17.9343 43.9471C20.7423 44.7143 32 44.7143 32 44.7143L32.0001 43.8143L31.8749 43.8141C31.7925 43.8139 31.6709 43.8135 31.5151 43.8128C31.2034 43.8113 30.7545 43.8083 30.2069 43.8024C29.1114 43.7904 27.6226 43.7665 26.0474 43.7188C24.4708 43.671 22.815 43.5996 21.3834 43.4931C19.9262 43.3847 18.7784 43.2448 18.1715 43.079C16.9406 42.743 15.9568 41.7466 15.6233 40.471L15.623 40.4699C15.2732 39.1381 15.0871 37.0134 14.9929 35.158C14.9465 34.2436 14.9232 33.4167 14.9116 32.8183C14.9058 32.5193 14.9029 32.2779 14.9014 32.1117C14.9007 32.0287 14.9004 31.9644 14.9002 31.9212L14.9 31.8726V31.8417L14.9002 31.793C14.9004 31.7499 14.9007 31.6856 14.9014 31.6026C14.9029 31.4364 14.9058 31.195 14.9116 30.896C14.9232 30.2976 14.9465 29.4707 14.9929 28.5563C15.0871 26.7009 15.2732 24.5761 15.623 23.2444L15.6233 23.2432C15.9568 21.967 16.9403 20.9714 18.1713 20.6354C18.7782 20.4696 19.9262 20.3296 21.3834 20.2212C22.815 20.1147 24.4708 20.0432 26.0474 19.9955C27.6226 19.9478 29.1114 19.9239 30.2069 19.9119C30.7545 19.906 31.2034 19.903 31.5151 19.9015C31.6709 19.9007 31.7925 19.9004 31.8749 19.9002L32.0004 19.9L32 19C32 19 20.7423 19 17.9343 19.7671C16.3863 20.1897 15.1657 21.4343 14.7526 23.0157C14 25.8803 14 31.8571 14 31.8571C14 31.8571 14 37.834 14.7526 40.6986C15.1657 42.2791 16.3863 43.5246 17.9343 43.9471ZM28.1252 38.2102C27.8446 38.05 27.6714 37.7517 27.6714 37.4286V26.2943C27.6714 25.9712 27.8446 25.6729 28.1252 25.5127C28.4058 25.3525 28.7508 25.355 29.029 25.5193L38.4576 31.0864C38.7318 31.2483 38.9 31.543 38.9 31.8614C38.9 32.1798 38.7318 32.4745 38.4576 32.6364L29.029 38.2036C28.7508 38.3678 28.4058 38.3704 28.1252 38.2102ZM38 31.8614L28.5714 26.2943V37.4286L38 31.8614Z" fill="currentColor"></path>'
        }
    },
    width: 64,
    height: 64

}

export const exportedSVG: Record<string, string> = Object.create(null);


parseIconSet(IconSet, (iconName, iconData) => {
    if (!iconData) {
        // Invalid icon
        console.error(`Error parsing icon ${iconName}`);
        return;
    }

    // Render icon
    const renderData = iconToSVG(iconData, {
        width: '100%',
        height: '100%',
    });

    // Generate attributes for SVG element
    const svgAttributes: Record<string, string> = {
        'xmlns': 'http://www.w3.org/2000/svg',
        'xmlns:xlink': 'http://www.w3.org/1999/xlink',
        ...renderData.attributes,
    };
    const svgAttributesStr = Object.keys(svgAttributes)
        .map(
            (attr) =>
                `${attr}="${svgAttributes[attr as keyof typeof svgAttributes]}"`
        )
        .join(' ');

    const svg = `<svg ${svgAttributesStr}>${renderData.body}</svg>`;

    exportedSVG[iconName] = svg;
});