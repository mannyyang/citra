import { iconToSVG, parseIconSet, replaceIDs } from '@iconify/utils';

const IconSet = {
    prefix: "mdi",
    icons: {
        blockQuote: {
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M17 22C16.4477 22 16 22.4477 16 23V28.5C16 28.6326 16.0527 28.7598 16.1464 28.8536L21.1464 33.8536L21.8536 33.1464L17.7071 29H22C22.5523 29 23 28.5523 23 28V23C23 22.4477 22.5523 22 22 22H17ZM17 23V28H22V23H17Z" fill="currentColor"></path><path d="M26 22C25.4477 22 25 22.4477 25 23V28.5C25 28.6326 25.0527 28.7598 25.1464 28.8536L30.1464 33.8536L30.8536 33.1464L26.7071 29H31C31.5523 29 32 28.5523 32 28V23C32 22.4477 31.5523 22 31 22H26ZM26 23V28H31V23H26Z" fill="currentColor"></path><path d="M16 39L48 39V38L16 38V39ZM16 45L32 45V44L16 44V45Z" fill="white" fill-opacity="0.22"></path>',            
            width: 64,
            height: 64
        },
        button: {
            body: '<path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"></path><path d="M4 11.5h16v1H4z"></path>',
            width: 24,
            height: 24
        },
        column: {
            body: '<rect x="2" y="2" width="20" height="20" rx="0"></rect><line x1="12" y1="2" x2="12" y2="22"></line>',
            width: 24,
            height: 24
        },
        div: {
            body: `<path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"></path>`,
            width: 24,
            height: 24
        },
        heading: {
            body: '<path d="M16.5 21V27.5M16.5 33V27.5M16.5 27.5H23.5V21V33" stroke="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16 39L48 39V38L16 38V39ZM16 45L32 45V44L16 44V45Z" fill="white" fill-opacity="0.22"></path>',
            width: 64,
            height: 64
        },
        image: {
            body: '<path fill="currentColor" d="M21,3H3C2,3 1,4 1,5V19A2,2 0 0,0 3,21H21C22,21 23,20 23,19V5C23,4 22,3 21,3M5,17L8.5,12.5L11,15.5L14.5,11L19,17H5Z" />',
            width: 24,
            height: 24
        },
        linkBlock: {
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M17 17H47V47H17V17ZM16 17C16 16.4477 16.4477 16 17 16H47C47.5523 16 48 16.4477 48 17V47C48 47.5523 47.5523 48 47 48H17C16.4477 48 16 47.5523 16 47V17ZM27.3536 33.3536L28.8536 31.8536L28.1464 31.1464L26.6464 32.6464C25.3466 33.9463 25.3466 36.0537 26.6464 37.3536C27.9463 38.6534 30.0537 38.6534 31.3536 37.3536L32.8536 35.8536L32.1464 35.1464L30.6464 36.6464C29.7371 37.5558 28.2629 37.5558 27.3536 36.6464C26.4442 35.7371 26.4442 34.2629 27.3536 33.3536ZM32.6464 26.6464C33.9463 25.3466 36.0537 25.3466 37.3536 26.6464C38.6534 27.9463 38.6534 30.0537 37.3536 31.3536L35.8536 32.8536L35.1464 32.1464L36.6464 30.6464C37.5558 29.7371 37.5558 28.2629 36.6464 27.3536C35.7371 26.4442 34.2629 26.4442 33.3536 27.3536L31.8536 28.8536L31.1464 28.1464L32.6464 26.6464ZM30.3536 34.3536L34.3536 30.3536L33.6464 29.6464L29.6464 33.6464L30.3536 34.3536Z" fill="currentColor"></path>'
        },
        list: {
            body: '<path d="M12 19C12 18.4477 12.4477 18 13 18H51C51.5523 18 52 18.4477 52 19V45C52 45.5523 51.5523 46 51 46H13C12.4477 46 12 45.5523 12 45V19Z" fill="white" fill-opacity="0.1"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 19H51V45H13L13 19ZM12 19C12 18.4477 12.4477 18 13 18H51C51.5523 18 52 18.4477 52 19V45C52 45.5523 51.5523 46 51 46H13C12.4477 46 12 45.5523 12 45V19ZM19 24C19 24.5523 18.5523 25 18 25C17.4477 25 17 24.5523 17 24C17 23.4477 17.4477 23 18 23C18.5523 23 19 23.4477 19 24ZM19 33C19 33.5523 18.5523 34 18 34C17.4477 34 17 33.5523 17 33C17 32.4477 17.4477 32 18 32C18.5523 32 19 32.4477 19 33ZM22 24H46V32H22V24ZM47 33V32V24C47 23.4477 46.5523 23 46 23H22C21.4477 23 21 23.4477 21 24V32V33V40C21 40.5523 21.4477 41 22 41H46C46.5523 41 47 40.5523 47 40V33ZM22 40V33H46V40H22Z" fill="currentColor"></path>',
            width: 64,
            height: 64
        },
        listItem: {
            body: '<defs><style>.cls-1{fill:none;}</style></defs><rect x="10" y="6" width="18" height="2"/><rect x="10" y="24" width="18" height="2"/><rect x="10" y="15" width="18" height="2"/><rect x="4" y="15" width="2" height="2"/><rect x="4" y="6" width="2" height="2"/><rect x="4" y="24" width="2" height="2"/><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/>',
            width: 32,
            height: 32
        },
        paragraph: {
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M52 27H12V26H52V27ZM52 33H12V32H52V33ZM12 39L32 39V38L12 38V39Z" fill="currentColor"></path>',
            width: 24,
            height: 24
        },
        textBlock: {
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M20.3799 27.2727V28.2102H23.1242V36H24.181V28.2102H26.9253V27.2727H20.3799ZM28.583 35.7187C29.0404 35.9971 29.5844 36.1363 30.2151 36.1363C30.6583 36.1363 31.0574 36.0682 31.4126 35.9318C31.7677 35.7926 32.066 35.5994 32.3074 35.3523C32.5489 35.1023 32.7208 34.8125 32.8231 34.4829L31.8515 34.2102C31.7662 34.4375 31.6455 34.6278 31.4893 34.7812C31.333 34.9318 31.1469 35.0454 30.931 35.1221C30.7179 35.196 30.4793 35.2329 30.2151 35.2329C29.8089 35.2329 29.4523 35.1449 29.1455 34.9687C28.8387 34.7897 28.5986 34.5298 28.4253 34.1889C28.2708 33.8772 28.1863 33.5036 28.1719 33.0682H32.9253V32.642C32.9253 32.0312 32.8444 31.517 32.6824 31.0994C32.5205 30.6818 32.3032 30.3466 32.0304 30.0937C31.7577 29.838 31.4552 29.6534 31.1228 29.5397C30.7904 29.4261 30.4537 29.3693 30.1128 29.3693C29.5219 29.3693 29.0049 29.5142 28.5617 29.804C28.1214 30.0909 27.7776 30.4915 27.5305 31.0057C27.2861 31.517 27.164 32.1079 27.164 32.7784C27.164 33.4488 27.2861 34.0369 27.5305 34.5426C27.7776 35.0454 28.1285 35.4375 28.583 35.7187ZM28.1744 32.1988C28.1936 31.8952 28.2701 31.6083 28.404 31.338C28.5603 31.0227 28.7833 30.767 29.0731 30.571C29.3657 30.3721 29.7123 30.2727 30.1128 30.2727C30.4765 30.2727 30.7918 30.3565 31.0589 30.5241C31.3287 30.6917 31.5361 30.9204 31.681 31.2102C31.8287 31.5 31.9026 31.8295 31.9026 32.1988H28.1744ZM35.0294 29.4545L36.5976 32.1307L38.1657 29.4545H39.3248L37.2112 32.7273L39.3248 36H38.1657L36.5976 33.4602L35.0294 36H33.8703L35.9498 32.7273L33.8703 29.4545H35.0294ZM43.6064 30.3068V29.4545H42.2087V27.8863H41.203V29.4545H40.2144V30.3068H41.203V34.3977C41.203 34.7784 41.2911 35.0937 41.4672 35.3437C41.6462 35.5937 41.8706 35.7798 42.1405 35.902C42.4133 36.0241 42.6917 36.0852 42.9758 36.0852C43.1633 36.0852 43.3181 36.071 43.4403 36.0426C43.5624 36.017 43.6576 35.9915 43.7258 35.9659L43.5212 35.0625L43.3508 35.0966C43.2797 35.1079 43.1888 35.1136 43.078 35.1136C42.9303 35.1136 42.7897 35.0909 42.6562 35.0454C42.5255 34.9971 42.4175 34.9034 42.3323 34.7642C42.2499 34.6221 42.2087 34.4091 42.2087 34.125V30.3068H43.6064Z" fill="currentColor"></path>',
            width: 24,
            height: 24
        },
        textLink: {
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.4846 25.2727V34H26.5982V33.0625H22.5414V25.2727H21.4846ZM28.0982 27.4545V34H29.1039V27.4545H28.0982ZM28.1025 26.1634C28.2445 26.2969 28.4135 26.3636 28.6096 26.3636C28.8056 26.3636 28.9732 26.2969 29.1124 26.1634C29.2544 26.0298 29.3255 25.8693 29.3255 25.6818C29.3255 25.4943 29.2544 25.3338 29.1124 25.2003C28.9732 25.0668 28.8056 25 28.6096 25C28.4135 25 28.2445 25.0668 28.1025 25.2003C27.9632 25.3338 27.8936 25.4943 27.8936 25.6818C27.8936 25.8693 27.9632 26.0298 28.1025 26.1634ZM31.9515 34V30.0625C31.9515 29.6818 32.024 29.358 32.1689 29.0909C32.3137 28.8239 32.5112 28.6207 32.7612 28.4815C33.014 28.3423 33.301 28.2727 33.622 28.2727C34.0879 28.2727 34.4544 28.4176 34.7214 28.7074C34.9885 28.9943 35.122 29.3949 35.122 29.9091V34H36.1277V29.8409C36.1277 29.2841 36.0353 28.8239 35.8507 28.4602C35.666 28.0938 35.4075 27.821 35.0751 27.642C34.7427 27.4602 34.3549 27.3693 33.9118 27.3693C33.4174 27.3693 33.014 27.4716 32.7015 27.6761C32.389 27.8778 32.1561 28.1449 32.0027 28.4773H31.9174V27.4545H30.9458V34H31.9515ZM38.9711 31.5505V34H37.9654V25.2727H38.9711V30.3693H39.0904L41.954 27.4545H43.1983L40.4328 30.2509L43.4029 34H42.1245L39.6754 30.8979L38.9711 31.5505ZM21 39L44 39V38L21 38V39Z" fill="currentColor"></path>',
            width: 24,
            height: 24
        },
        video: {
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M26.7773 23.4525C26.4451 23.2309 26 23.4691 26 23.8685V40.1315C26 40.5308 26.4451 40.769 26.7774 40.5475L38.9746 32.416C39.2714 32.2181 39.2714 31.7819 38.9746 31.5839L26.7773 23.4525ZM25 23.8685C25 22.6704 26.3352 21.9559 27.332 22.6204L39.5293 30.7519C40.4199 31.3456 40.4199 32.6543 39.5293 33.248L27.3321 41.3795C26.3352 42.0441 25 41.3295 25 40.1315V23.8685Z" fill="currentColor"></path>',
            width: 64,
            height: 64
        },
        youtube: {
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M46.0657 19.768C47.6137 20.1897 48.8343 21.4351 49.2474 23.0157C50 25.8803 50 31.8571 50 31.8571C50 31.8571 50 37.834 49.2474 40.6986C48.8334 42.2791 47.6137 43.5246 46.0649 43.9471C43.2577 44.7143 32 44.7143 32 44.7143C32 44.7143 20.7423 44.7143 17.9343 43.9471C16.3863 43.5246 15.1657 42.2791 14.7526 40.6986C14 37.834 14 31.8571 14 31.8571C14 31.8571 14 25.8803 14.7526 23.0157C15.1657 21.4343 16.3863 20.1897 17.9343 19.7671C20.7423 19 32 19 32 19C32 19 43.2577 19 46.0657 19.768ZM28.5714 37.4286L38 31.8614L28.5714 26.2943V37.4286Z" fill="white" fill-opacity="0.1"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M45.8292 20.6364L45.8283 20.6361C45.2215 20.4702 44.0738 20.33 42.6165 20.2215C41.1849 20.1149 39.5292 20.0434 37.9526 19.9956C36.3774 19.9478 34.8886 19.9239 33.7931 19.9119C33.2455 19.906 32.7966 19.903 32.4849 19.9015C32.3291 19.9007 32.2075 19.9004 32.1251 19.9002L32.0004 19.9L32 19C32 19 43.2577 19 46.0657 19.768C47.6137 20.1897 48.8343 21.4351 49.2474 23.0157C50 25.8803 50 31.8571 50 31.8571C50 31.8571 50 37.834 49.2474 40.6986C48.8334 42.2791 47.6137 43.5246 46.0649 43.9471C43.2577 44.7143 32 44.7143 32 44.7143L32.0001 43.8143L32.1251 43.8141C32.2075 43.8139 32.3291 43.8135 32.4849 43.8128C32.7966 43.8113 33.2455 43.8083 33.7931 43.8024C34.8886 43.7904 36.3774 43.7665 37.9525 43.7188C39.5291 43.671 41.1847 43.5996 42.6162 43.4931C44.0734 43.3847 45.221 43.2448 45.8276 43.079C47.059 42.743 48.0425 41.7468 48.3768 40.4705C48.7267 39.1388 48.9129 37.0134 49.0071 35.158C49.0535 34.2436 49.0768 33.4167 49.0884 32.8183C49.0942 32.5193 49.0971 32.2779 49.0986 32.1117C49.0993 32.0287 49.0996 31.9644 49.0998 31.9212L49.1 31.8726L49.1 31.8578V31.8565L49.1 31.8417L49.0998 31.793C49.0996 31.7499 49.0993 31.6856 49.0986 31.6026C49.0971 31.4364 49.0942 31.195 49.0884 30.896C49.0768 30.2976 49.0535 29.4707 49.0071 28.5563C48.9129 26.7009 48.7268 24.5761 48.377 23.2444L48.3767 23.2433C48.0432 21.9676 47.0596 20.9716 45.8292 20.6364ZM17.9343 43.9471C20.7423 44.7143 32 44.7143 32 44.7143L32.0001 43.8143L31.8749 43.8141C31.7925 43.8139 31.6709 43.8135 31.5151 43.8128C31.2034 43.8113 30.7545 43.8083 30.2069 43.8024C29.1114 43.7904 27.6226 43.7665 26.0474 43.7188C24.4708 43.671 22.815 43.5996 21.3834 43.4931C19.9262 43.3847 18.7784 43.2448 18.1715 43.079C16.9406 42.743 15.9568 41.7466 15.6233 40.471L15.623 40.4699C15.2732 39.1381 15.0871 37.0134 14.9929 35.158C14.9465 34.2436 14.9232 33.4167 14.9116 32.8183C14.9058 32.5193 14.9029 32.2779 14.9014 32.1117C14.9007 32.0287 14.9004 31.9644 14.9002 31.9212L14.9 31.8726V31.8417L14.9002 31.793C14.9004 31.7499 14.9007 31.6856 14.9014 31.6026C14.9029 31.4364 14.9058 31.195 14.9116 30.896C14.9232 30.2976 14.9465 29.4707 14.9929 28.5563C15.0871 26.7009 15.2732 24.5761 15.623 23.2444L15.6233 23.2432C15.9568 21.967 16.9403 20.9714 18.1713 20.6354C18.7782 20.4696 19.9262 20.3296 21.3834 20.2212C22.815 20.1147 24.4708 20.0432 26.0474 19.9955C27.6226 19.9478 29.1114 19.9239 30.2069 19.9119C30.7545 19.906 31.2034 19.903 31.5151 19.9015C31.6709 19.9007 31.7925 19.9004 31.8749 19.9002L32.0004 19.9L32 19C32 19 20.7423 19 17.9343 19.7671C16.3863 20.1897 15.1657 21.4343 14.7526 23.0157C14 25.8803 14 31.8571 14 31.8571C14 31.8571 14 37.834 14.7526 40.6986C15.1657 42.2791 16.3863 43.5246 17.9343 43.9471ZM28.1252 38.2102C27.8446 38.05 27.6714 37.7517 27.6714 37.4286V26.2943C27.6714 25.9712 27.8446 25.6729 28.1252 25.5127C28.4058 25.3525 28.7508 25.355 29.029 25.5193L38.4576 31.0864C38.7318 31.2483 38.9 31.543 38.9 31.8614C38.9 32.1798 38.7318 32.4745 38.4576 32.6364L29.029 38.2036C28.7508 38.3678 28.4058 38.3704 28.1252 38.2102ZM38 31.8614L28.5714 26.2943V37.4286L38 31.8614Z" fill="currentColor"></path>',
            width: 64,
            height: 64
        },
        customBlock: {
            body: `<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" >
            <path fill="currentColor" d="M 45 41.519 c -0.149 0 -0.299 -0.034 -0.437 -0.101 L 3.904 21.659 c -0.344 -0.167 -0.563 -0.517 -0.563 -0.899 s 0.219 -0.732 0.563 -0.899 L 44.563 0.101 c 0.275 -0.134 0.599 -0.134 0.874 0 L 86.096 19.86 c 0.344 0.167 0.563 0.517 0.563 0.899 s -0.219 0.732 -0.563 0.899 L 45.437 41.418 C 45.299 41.485 45.149 41.519 45 41.519 z M 6.629 20.759 L 45 39.407 l 38.37 -18.647 L 45 2.112 L 6.629 20.759 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
            <path fill="currentColor" d="M 45 90 c -0.149 0 -0.299 -0.033 -0.437 -0.101 L 3.904 70.141 c -0.344 -0.167 -0.563 -0.517 -0.563 -0.899 V 20.759 c 0 -0.345 0.177 -0.665 0.469 -0.848 c 0.294 -0.183 0.659 -0.203 0.968 -0.052 L 45 39.407 L 85.221 19.86 c 0.311 -0.15 0.677 -0.131 0.968 0.052 c 0.292 0.183 0.47 0.503 0.47 0.848 v 48.482 c 0 0.383 -0.219 0.732 -0.563 0.899 L 45.437 89.899 C 45.299 89.967 45.149 90 45 90 z M 5.341 68.615 L 45 87.888 l 39.658 -19.272 V 22.357 L 45.437 41.418 c -0.275 0.134 -0.599 0.134 -0.874 0 L 5.341 22.357 V 68.615 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
            <path fill="currentColor" d="M 45 90 c -0.552 0 -1 -0.447 -1 -1 V 40.519 c 0 -0.552 0.448 -1 1 -1 s 1 0.448 1 1 V 89 C 46 89.553 45.552 90 45 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
          </g>`,
          width: 96,
          height: 96,
        },
        pannelDeviceDesktop: {
            body: '<path fill="currentColor" d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z" />',
            width: 24,
            height: 24
        },
        pannelDeviceTablet: {
            body: '<path fill="currentColor" d="M19,18H5V6H19M21,4H3C1.89,4 1,4.89 1,6V18A2,2 0 0,0 3,20H21A2,2 0 0,0 23,18V6C23,4.89 22.1,4 21,4Z" />',
            width: 24,
            height: 24
        },
        pannelDeviceMobile: {
            body: '<path fill="currentColor" d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z" />',
            width: 24,
            height: 24
        },
        pannelSWV: {
            body: '<path fill="currentColor" d="M15,5H17V3H15M15,21H17V19H15M11,5H13V3H11M19,5H21V3H19M19,9H21V7H19M19,21H21V19H19M19,13H21V11H19M19,17H21V15H19M3,5H5V3H3M3,9H5V7H3M3,13H5V11H3M3,17H5V15H3M3,21H5V19H3M11,21H13V19H11M7,21H9V19H7M7,5H9V3H7V5Z" />',
            width: 24,
            height: 24
        },
        pannelPRV: {
            body: '<path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path>',
            width: 24,
            height: 24
        },
        pannelFUL: {
            body: '<path fill="currentColor" d="M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z" />',
            width: 24,
            height: 24
        },
        pannelEXPT: {
            body: '<path fill="currentColor" d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z" />',
            width: 24,
            height: 24
        },
        pannelUndo: {
            body: '<path fill="currentColor" d="M20 13.5C20 17.09 17.09 20 13.5 20H6V18H13.5C16 18 18 16 18 13.5S16 9 13.5 9H7.83L10.91 12.09L9.5 13.5L4 8L9.5 2.5L10.92 3.91L7.83 7H13.5C17.09 7 20 9.91 20 13.5Z" />',
            width: 24,
            height: 24
        },
        pannelRedo: {
            body: '<path fill="currentColor" d="M10.5 18H18V20H10.5C6.91 20 4 17.09 4 13.5S6.91 7 10.5 7H16.17L13.08 3.91L14.5 2.5L20 8L14.5 13.5L13.09 12.09L16.17 9H10.5C8 9 6 11 6 13.5S8 18 10.5 18Z" />',
            width: 24,
            height: 24
        },
        pannelImport: {
            body: '<path fill="currentColor" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />',
            width: 24,
            height: 24
        },
        pannelClear: {
            body: '<path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />',
            width: 24,
            height: 24
        },
        pannelOSM: {
            body: '<path fill="currentColor" d="M20.71,4.63L19.37,3.29C19,2.9 18.35,2.9 17.96,3.29L9,12.25L11.75,15L20.71,6.04C21.1,5.65 21.1,5 20.71,4.63M7,14A3,3 0 0,0 4,17C4,18.31 2.84,19 2,19C2.92,20.22 4.5,21 6,21A4,4 0 0,0 10,17A3,3 0 0,0 7,14Z" />',
            width: 24,
            height: 24
        },
        pannelOTM: {
            body: '<path fill="currentColor" d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />',
            width: 24,
            height: 24
        },
        pannelOLA: {
            body: '<path fill="currentColor" d="M12,16L19.36,10.27L21,9L12,2L3,9L4.63,10.27M12,18.54L4.62,12.81L3,14.07L12,21.07L21,14.07L19.37,12.8L12,18.54Z" />',
            width: 24,
            height: 24
        },
        pannelOBL: {
            body: '<path fill="currentColor" d="M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />',
            width: 24,
            height: 24
        },
        flipCards3D: {
            body: `
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
            <path fill="currentColor" d="M160 5028 c-18 -13 -43 -36 -54 -51 l-21 -28 0 -1168 0 -1168 29 -37 c51 -67 37 -66 626 -66 l530 0 0 -577 c0 -542 2 -581 19 -619 10 -23 34 -52 52 -65 l34 -24 528 -3 527 -3 0 -522 c0 -503 1 -523 20 -555 11 -18 34 -41 52 -52 32 -20 53 -20 1229 -20 l1196 0 33 22 c18 13 43 36 54 51 l21 28 3 1207 2 1207 -22 45 c-17 33 -35 51 -68 68 -44 22 -45 22 -557 22 l-513 0 0 503 c0 483 -1 503 -20 535 -11 18 -34 41 -52 52 -32 19 -52 20 -605 20 l-573 0 0 552 0 551 -25 42 c-47 81 49 75 -1253 75 l-1159 0 -33 -22z m2268 -685 l-3 -508 -527 -5 c-512 -5 -527 -6 -554 -26 -15 -11 -37 -33 -48 -48 -20 -27 -21 -40 -24 -537 l-3 -509 -494 0 -495 0 0 1070 0 1070 1075 0 1075 0 -2 -507z m1252 -1818 l0 -1105 -1105 0 -1105 0 0 1105 0 1105 1105 0 1105 0 0 -1105z m1158 -1132 l2 -1123 -1105 0 -1105 0 0 475 0 474 574 3 c562 3 575 3 602 24 15 11 37 33 48 48 21 27 21 39 24 614 1 323 4 593 7 600 3 10 104 12 477 10 l473 -3 3 -1122z"/>
            </g>
            `,
            width: 512,
            height: 512
        },
        flipCards: {
            body: '<path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"></path>',   
            width: 24,
            height: 24         
        },
        carousel: {
            body: `
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                <path fill="currentColor" d="M1748 4905 c-152 -42 -263 -148 -309 -296 -13 -41 -19 -91 -19 -155 l0 -94 -87 0 c-181 0 -318 -68 -402 -198 -55 -86 -64 -124 -70 -297 l-6 -160 -160 -6 c-132 -4 -170 -9 -215 -27 -110 -44 -205 -138 -252 -251 l-23 -56 -3 -1380 c-1 -936 1 -1396 8 -1431 35 -170 174 -308 343 -344 36 -7 471 -10 1432 -8 l1380 3 56 23 c113 47 207 142 251 252 18 45 23 83 27 215 l6 160 160 6 c180 6 225 18 314 83 122 90 181 219 181 396 l0 80 94 0 c232 0 395 121 452 333 11 43 14 280 14 1412 0 1488 3 1417 -58 1529 -57 104 -172 190 -290 215 -82 17 -2760 14 -2824 -4z m2835 -254 c21 -13 50 -42 65 -64 l27 -41 3 -1355 c2 -945 0 -1367 -8 -1393 -27 -92 -101 -137 -227 -138 l-83 0 0 1153 c0 1260 2 1210 -58 1321 -57 104 -172 190 -290 215 -37 8 -389 11 -1202 11 l-1150 0 0 85 c0 92 16 139 62 182 59 55 -23 53 1458 50 l1365 -2 38 -24z m-560 -560 c21 -13 50 -42 65 -64 l27 -41 3 -1355 c2 -945 0 -1367 -8 -1393 -14 -50 -56 -97 -105 -119 -32 -15 -66 -19 -172 -19 l-133 0 -2 1138 -3 1138 -37 75 c-46 93 -122 168 -215 212 l-68 32 -1137 3 -1138 2 0 136 c0 145 10 183 62 231 59 55 -23 53 1458 50 l1365 -2 38 -24z m-680 -645 c39 -17 92 -71 106 -109 8 -19 11 -369 11 -1100 l0 -1072 -353 353 -353 352 -44 0 c-25 0 -52 -5 -60 -10 -8 -5 -122 -116 -252 -247 l-238 -238 -425 425 c-244 244 -438 431 -456 438 -66 27 -70 24 -466 -371 l-373 -372 0 905 c0 858 1 907 19 945 20 44 50 74 96 98 27 15 170 16 1393 17 1137 0 1368 -2 1395 -14z m-1346 -2248 c414 -414 753 -756 753 -761 0 -4 -487 -6 -1082 -5 -1194 3 -1107 -1 -1170 65 -55 57 -58 78 -58 380 l0 278 397 397 c219 219 400 398 403 398 3 0 344 -339 757 -752z m1097 3 l379 -379 -5 -118 c-5 -128 -14 -158 -65 -206 -47 -45 -92 -58 -200 -58 l-98 0 -385 385 -385 385 185 185 c102 102 187 185 190 185 3 0 176 -170 384 -379z"/>
                <path fill="currentColor" d="M1931 3239 c-72 -14 -168 -65 -226 -120 -140 -133 -178 -349 -90 -525 86 -174 285 -279 470 -247 302 52 470 367 341 639 -90 189 -293 293 -495 253z m192 -261 c126 -70 144 -249 34 -343 -92 -79 -216 -71 -295 20 -42 47 -53 77 -53 141 0 161 172 260 314 182z"/>
            </g>
            `,
            width: 512,
            height: 512
            
        },
        socialCards: {
            body: `
            <g fill="currentColor" transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                <path  d="M1180 4865 c-351 -56 -660 -285 -824 -612 -213 -425 -126 -943 214 -1283 334 -333 838 -423 1259 -224 173 82 301 183 413 328 347 449 308 1075 -92 1476 -257 256 -611 371 -970 315z m411 -174 c179 -46 319 -127 449 -260 129 -130 212 -278 257 -457 24 -95 24 -333 0 -428 -46 -182 -128 -328 -261 -462 -134 -133 -280 -216 -462 -261 -98 -24 -324 -24 -424 0 -364 89 -636 359 -727 723 -24 95 -24 333 0 428 95 380 389 659 770 732 100 19 299 12 398 -15z"/>
                <path d="M1367 4426 c-99 -36 -171 -120 -187 -222 -6 -33 -10 -105 -10 -161 l0 -103 -94 0 c-79 0 -97 -3 -120 -21 -20 -16 -26 -29 -26 -59 0 -30 6 -43 26 -59 23 -18 41 -21 120 -21 l93 0 3 -326 3 -326 28 -24 c34 -29 66 -31 101 -3 l26 20 0 330 0 329 124 0 c110 0 126 2 150 21 37 29 37 89 0 118 -24 19 -40 21 -150 21 l-124 0 1 113 c0 132 12 173 58 204 28 19 47 23 111 23 97 0 130 20 130 80 0 62 -32 80 -139 80 -47 -1 -103 -7 -124 -14z"/>
                <path d="M3580 4865 c-351 -56 -660 -285 -824 -612 -213 -425 -126 -943 214 -1283 334 -333 838 -423 1259 -224 173 82 301 183 413 328 347 449 308 1075 -92 1476 -257 256 -611 371 -970 315z m411 -174 c179 -46 319 -127 449 -260 129 -130 212 -278 257 -457 24 -95 24 -333 0 -428 -46 -182 -128 -328 -261 -462 -134 -133 -280 -216 -462 -261 -98 -24 -324 -24 -424 0 -364 89 -636 359 -727 723 -24 95 -24 333 0 428 95 380 389 659 770 732 100 19 299 12 398 -15z"/>
                <path d="M3360 4307 c-49 -16 -133 -102 -148 -153 -8 -29 -12 -146 -12 -394 0 -248 4 -365 12 -394 16 -55 99 -138 154 -154 58 -17 730 -17 788 0 55 16 138 99 154 154 17 58 17 730 0 788 -16 55 -99 138 -154 154 -54 16 -743 15 -794 -1z m775 -172 l25 -24 0 -351 0 -351 -25 -24 -24 -25 -351 0 -351 0 -24 25 -25 24 0 351 0 351 25 24 24 25 351 0 351 0 24 -25z"/>
                <path d="M3680 3987 c-49 -16 -133 -102 -148 -153 -28 -94 -8 -169 63 -239 51 -52 102 -75 165 -75 124 0 240 116 240 240 0 63 -23 114 -75 165 -70 71 -152 91 -245 62z m135 -172 c16 -15 25 -36 25 -55 0 -19 -9 -40 -25 -55 -15 -16 -36 -25 -55 -25 -19 0 -40 9 -55 25 -16 15 -25 36 -25 55 0 19 9 40 25 55 15 16 36 25 55 25 19 0 40 -9 55 -25z"/>
                <path d="M1180 2465 c-351 -56 -660 -285 -824 -612 -212 -424 -126 -943 214 -1283 334 -333 838 -423 1259 -224 173 82 301 183 413 328 347 449 308 1075 -92 1476 -257 256 -611 371 -970 315z m411 -174 c179 -46 319 -127 449 -260 129 -130 212 -278 257 -457 24 -95 24 -333 0 -428 -46 -182 -128 -328 -261 -462 -134 -133 -280 -216 -462 -261 -98 -24 -324 -24 -424 0 -364 89 -636 359 -727 723 -24 95 -24 333 0 428 95 380 389 659 770 732 100 19 299 12 398 -15z"/>
                <path d="M1191 1983 c-16 -14 -29 -52 -53 -160 l-32 -143 -132 0 c-78 0 -143 -5 -158 -11 -55 -26 -55 -112 0 -138 14 -6 76 -11 141 -11 114 0 115 0 111 -22 -3 -13 -18 -85 -34 -160 l-29 -138 -143 0 c-138 0 -144 -1 -167 -25 -33 -32 -33 -78 0 -110 23 -24 30 -25 150 -25 116 0 126 -1 121 -17 -12 -42 -46 -214 -46 -233 0 -32 44 -70 80 -70 55 0 73 30 104 183 l29 137 159 0 c147 0 159 -1 154 -17 -12 -42 -46 -214 -46 -233 0 -32 44 -70 80 -70 55 0 73 30 104 183 l29 137 142 0 c128 0 143 2 163 20 28 27 37 62 21 92 -23 43 -38 47 -167 48 l-123 0 6 33 c4 17 19 88 33 157 l27 125 149 5 c140 5 149 6 167 29 26 32 24 77 -6 106 -23 24 -30 25 -150 25 -116 0 -126 1 -121 18 13 41 46 208 46 229 0 34 -43 73 -78 73 -56 0 -70 -23 -104 -177 l-32 -143 -158 0 c-147 0 -159 1 -154 18 13 41 46 208 46 229 0 58 -83 93 -129 56z m357 -485 c-3 -13 -18 -85 -34 -160 l-29 -138 -157 0 c-87 0 -158 2 -158 5 0 8 60 290 65 303 3 9 45 12 161 12 l156 0 -4 -22z"/>
                <path d="M3580 2465 c-351 -56 -660 -285 -824 -612 -212 -424 -126 -943 214 -1283 334 -333 838 -423 1259 -224 173 82 301 183 413 328 347 449 308 1075 -92 1476 -257 256 -611 371 -970 315z m411 -174 c179 -46 319 -127 449 -260 129 -130 212 -278 257 -457 24 -95 24 -333 0 -428 -46 -182 -128 -328 -261 -462 -134 -133 -280 -216 -462 -261 -98 -24 -324 -24 -424 0 -364 89 -636 359 -727 723 -24 95 -24 333 0 428 95 380 389 659 770 732 100 19 299 12 398 -15z"/>
                <path d="M3576 1775 c-49 -17 -93 -59 -117 -110 -17 -36 -19 -68 -19 -305 0 -235 3 -270 19 -305 33 -74 113 -125 196 -125 39 0 126 43 340 168 185 107 227 147 240 222 10 60 -3 116 -38 162 -25 32 -80 69 -243 163 -116 67 -225 127 -244 133 -43 15 -86 14 -134 -3z m277 -256 c208 -120 227 -133 227 -159 0 -9 -8 -24 -17 -33 -29 -25 -401 -237 -417 -237 -8 0 -22 7 -30 16 -14 13 -16 50 -16 254 0 204 2 241 16 254 8 9 22 16 30 16 8 0 101 -50 207 -111z"/>
            </g>
            `,
            width: 512,
            height: 512
        },
        link:{
            body:'<path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z" />',
            width: 24,
            height: 24
        },
        text:{
            body:'<path fill="currentColor" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />',
            width: 24,
            height: 24
        },
        userBlocks:{
            body:'<path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />'
        }

    }    
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
        width: 'unset',
        height: 'unset'
    });

    // Generate attributes for SVG element    
    const svgAttributes: Record<string, string> = {
        'xmlns': 'http://www.w3.org/2000/svg',
        ...renderData.attributes,
    };
    const svgAttributesStr = Object.keys(svgAttributes)
        .map(
            (attr) =>
                `${attr}="${svgAttributes[attr as keyof typeof svgAttributes]}"`
        )
        .join(' ');

    const svg = replaceIDs(`<svg ${svgAttributesStr}>${renderData.body}</svg>`);

    exportedSVG[iconName] = svg;
});