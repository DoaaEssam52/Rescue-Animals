/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';
import { NbIconLibraries } from '@nebular/theme';
@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  iconsLibrary: any;
  constructor(
    private analytics: AnalyticsService,
    private translate: TranslateService,
    private seoService: SeoService,
    private iconLibraries: NbIconLibraries,
  ) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.registerIcons();
  }

  ngOnInit() {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }
  registerIcons() {
    this.iconLibraries.registerFontPack('font-awesome', {
      packClass: 'fa',
      iconClassPrefix: 'fa',
    });
    this.iconLibraries.registerSvgPack('svg', {
      cube: `<svg width='72' height='72' viewBox='0 0 72 72' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M42.2534 66.7831L61.524 56.0859C62.6379 57.0158 64.0673 57.6 65.6471 57.6C69.1497 57.6 72 54.8311 72 51.4286C72 48.7502 70.2233 46.4873 67.7647 45.6357V28.4194C70.2233 27.5678 72 25.3049 72 22.6265C72 19.224 69.1497 16.4551 65.6471 16.4551C64.0673 16.4551 62.6379 17.0393 61.5261 17.9691L42.2407 7.26377C42.3042 6.90994 42.3529 6.54583 42.3529 6.17143C42.3529 2.76891 39.5026 0 36 0C32.4974 0 29.6471 2.76891 29.6471 6.17143C29.6471 6.54583 29.6958 6.90994 29.7614 7.26583L10.476 17.9712C9.36212 17.0414 7.93271 16.4571 6.35294 16.4571C2.85035 16.4571 0 19.2261 0 22.6286C0 25.307 1.77671 27.5698 4.23529 28.4215V45.6377C1.77671 46.4894 0 48.7522 0 51.4306C0 54.8331 2.85035 57.6021 6.35294 57.6021C7.93271 57.6021 9.36212 57.0178 10.4739 56.088L29.7466 66.7851C30.2231 69.731 32.8341 72 36 72C39.1659 72 41.7769 69.731 42.2534 66.7831ZM38.1176 60.0357V44.8766C40.5762 44.0249 42.3529 41.7621 42.3529 39.0837C42.3529 38.7093 42.3042 38.3451 42.2386 37.9893L61.524 27.2839C62.1106 27.7755 62.784 28.1602 63.5273 28.4194V45.6357C61.0687 46.4873 59.292 48.7502 59.292 51.4286C59.292 51.803 59.3407 52.1671 59.4064 52.523L41.3555 62.5433C40.6038 61.3851 39.4666 60.5026 38.1176 60.0357ZM30.6424 62.5433L12.5915 52.523C12.6572 52.1671 12.7059 51.803 12.7059 51.4286C12.7059 48.7502 10.9292 46.4873 8.47059 45.6357V28.4194C9.21388 28.1623 9.88729 27.7755 10.4739 27.2839L29.7593 37.9893C29.6958 38.3472 29.6471 38.7113 29.6471 39.0857C29.6471 41.7641 31.4238 44.027 33.8824 44.8786V60.0377C32.5334 60.5026 31.3962 61.3851 30.6424 62.5433ZM59.4085 23.723L40.1231 34.4283C39.0092 33.4985 37.5798 32.9143 36 32.9143C34.4202 32.9143 32.9908 33.4985 31.8791 34.4283L12.5936 23.723C12.6572 23.3671 12.7059 23.003 12.7059 22.6286C12.7059 22.2542 12.6572 21.8901 12.5915 21.5342L31.8769 10.8288C32.9908 11.7586 34.4202 12.3429 36 12.3429C37.5798 12.3429 39.0092 11.7586 40.1209 10.8288L59.4064 21.5342C59.3428 21.8901 59.2941 22.2542 59.2941 22.6286C59.2941 23.003 59.3428 23.3671 59.4085 23.723ZM36 41.1429C34.8332 41.1429 33.8824 40.2192 33.8824 39.0857C33.8824 37.9522 34.8332 37.0286 36 37.0286C37.1668 37.0286 38.1176 37.9522 38.1176 39.0857C38.1176 40.2192 37.1668 41.1429 36 41.1429ZM65.6471 53.4857C64.4802 53.4857 63.5294 52.5621 63.5294 51.4286C63.5294 50.2951 64.4802 49.3714 65.6471 49.3714C66.8139 49.3714 67.7647 50.2951 67.7647 51.4286C67.7647 52.5621 66.8139 53.4857 65.6471 53.4857ZM65.6471 20.5714C66.8139 20.5714 67.7647 21.4951 67.7647 22.6286C67.7647 23.7621 66.8139 24.6857 65.6471 24.6857C64.4802 24.6857 63.5294 23.7621 63.5294 22.6286C63.5294 21.4951 64.4802 20.5714 65.6471 20.5714ZM36 4.11429C37.1668 4.11429 38.1176 5.03794 38.1176 6.17143C38.1176 7.30491 37.1668 8.22857 36 8.22857C34.8332 8.22857 33.8824 7.30491 33.8824 6.17143C33.8824 5.03794 34.8332 4.11429 36 4.11429ZM6.35294 20.5714C7.51976 20.5714 8.47059 21.4951 8.47059 22.6286C8.47059 23.7621 7.51976 24.6857 6.35294 24.6857C5.18612 24.6857 4.23529 23.7621 4.23529 22.6286C4.23529 21.4951 5.18612 20.5714 6.35294 20.5714ZM6.35294 53.4857C5.18612 53.4857 4.23529 52.5621 4.23529 51.4286C4.23529 50.2951 5.18612 49.3714 6.35294 49.3714C7.51976 49.3714 8.47059 50.2951 8.47059 51.4286C8.47059 52.5621 7.51976 53.4857 6.35294 53.4857ZM36 67.8857C34.8332 67.8857 33.8824 66.9621 33.8824 65.8286C33.8824 64.6951 34.8332 63.7714 36 63.7714C37.1668 63.7714 38.1176 64.6951 38.1176 65.8286C38.1176 66.9621 37.1668 67.8857 36 67.8857Z' fill='white'/>
            </svg>
      `,
      video: `<svg width='59' height='61' viewBox='0 0 59 61' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M29.5 0C13.2082 0 0 13.6547 0 30.5C0 47.3453 13.2082 61 29.5 61C45.7918 61 59 47.3453 59 30.5C59 13.6547 45.7918 0 29.5 0ZM19.5207 42.4141V18.5859L39.4793 30.5L19.5207 42.4141Z' fill='white'/>
      </svg>
      `,
      search: `<svg width='69' height='72' viewBox='0 0 69 72' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M30.2327 0C13.5975 0 0 13.7528 0 30.7416C0 47.6568 13.5252 61.4832 30.2327 61.4832C35.6572 61.4832 41.0094 59.9387 45.7107 57.0705L47.0849 56.1879L61.3333 70.6762C62.2013 71.5587 63.2862 72 64.5157 72C65.7453 72 66.8302 71.5587 67.6981 70.6762C68.566 69.7937 69 68.6905 69 67.4402C69 66.19 68.4937 65.0868 67.6981 64.2043L53.8836 50.0102L55.2579 47.8774C58.6572 42.8029 60.4654 36.8458 60.4654 30.668C60.4654 13.7528 46.8679 0 30.2327 0ZM30.2327 53.761C17.7201 53.761 7.52201 43.3912 7.52201 30.668C7.52201 17.9448 17.7201 7.57508 30.2327 7.57508C42.7453 7.57508 52.9434 17.9448 52.9434 30.668C52.9434 43.3912 42.7453 53.761 30.2327 53.761Z' fill='#C9D4FA'/>
      </svg>
      `,
      hand: `<svg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M10.609 36.8426C10.3007 35.3535 8.97392 34.2302 7.38896 34.2302H2.66504V62.0685H7.38896C9.20145 62.0685 10.6767 60.5998 10.6767 58.7951V58.7537C10.6331 58.6215 10.609 58.4813 10.609 58.3368V36.8426H10.609Z' fill='white'/>
      <path d='M60.3976 42.8896L41.7638 50.3841C40.6799 51.799 39.1183 52.4443 37.597 52.4443H27.6335C26.8965 52.4443 26.3002 51.8473 26.3002 51.1109C26.3002 50.3746 26.8965 49.7776 27.6335 49.7776H37.597C39.1324 49.7776 40.2558 48.4509 40.2558 47.1194C40.2558 45.6461 39.0631 44.4476 37.597 44.4476C37.1286 44.4476 29.8305 44.4476 30.1648 44.4476C27.1166 44.4476 24.2039 43.0049 22.3731 40.5889C21.0333 38.8356 18.9135 37.7862 16.7052 37.7862H13.3433V57.4061L31.9863 63.7638C33.127 64.161 34.3835 64.0308 35.4147 63.4318L62.5955 47.6188C63.7912 46.9758 64.3111 45.5882 63.8038 44.3252C63.2739 43.029 61.7192 42.3519 60.3976 42.8896Z' fill='white'/>
      <path d='M59.9995 29.6664C59.197 27.2207 58.4482 26.8932 59.0395 25.9598L60.6661 23.2798L57.4262 20.0265C55.2279 21.1784 54.4903 22.2914 53.3996 21.6932C51.2032 20.5573 50.3991 20.8356 50.1462 19.7598L49.3996 16.7066H44.8129C44.0585 19.1106 44.3118 20.3574 43.1596 20.7065C40.7496 21.4597 40.4721 22.2623 39.4796 21.6665L36.7731 20.0265L33.5329 23.2798C34.7019 25.5024 35.7942 26.1882 35.1995 27.3065C34.0599 29.3582 34.3795 30.2846 33.2663 30.5465L30.2129 31.2931V35.8931L33.2663 36.6398C34.3642 36.8979 34.0743 37.8053 35.1995 39.9064C35.6945 40.8082 34.9625 41.4534 34.8263 41.7864H37.5996C40.5063 41.7864 42.8795 44.133 42.9195 47.0397L58.8528 40.6397C58.8261 40.3864 58.8793 40.1331 58.9995 39.8931C61.1645 35.8618 58.472 37.5893 63.9994 35.8931V31.2931C61.5405 30.5359 60.383 30.8174 59.9995 29.6664ZM47.1063 40.3998C43.3596 40.3998 40.3063 37.3464 40.3063 33.5998C40.3063 29.8398 43.3596 26.7865 47.1063 26.7865C50.8529 26.7865 53.9061 29.8398 53.9061 33.5998C53.9061 37.3464 50.8529 40.3998 47.1063 40.3998Z' fill='white'/>
      <path d='M28.1865 21.6399C28.3198 21.3465 28.4531 21.0265 28.573 20.7199L31.1598 20.0799C31.7465 19.9332 32.1731 19.3999 32.1731 18.7866V13.3733C32.1731 12.7599 31.7465 12.2266 31.1598 12.0799L28.5597 11.44C28.4531 11.1333 28.3198 10.8266 28.1865 10.52L29.5597 8.25329C29.8797 7.73336 29.7997 7.05335 29.3598 6.62668L25.5464 2.80004C25.1066 2.36002 24.4399 2.28002 23.9064 2.60001L21.6265 3.97337C21.3198 3.83998 21.0265 3.70669 20.7199 3.6L20.0799 1.01334C19.9331 0.413334 19.3999 0 18.7865 0H13.3733C12.76 0 12.2265 0.413321 12.08 1.01334L11.44 3.6C11.1332 3.72004 10.8266 3.83998 10.5331 3.97337L8.23985 2.60001C7.71999 2.28002 7.03998 2.36002 6.61324 2.80004L2.7866 6.62668C2.36001 7.05335 2.26658 7.73336 2.58657 8.25329L3.97327 10.5333C3.83997 10.8266 3.70667 11.1333 3.58656 11.44L1.01333 12.0799C0.413411 12.2266 0 12.7599 0 13.3733V18.7866C0 19.3999 0.413411 19.9332 1.01334 20.0799L3.59991 20.7199C3.70669 21.0265 3.83998 21.3332 3.97328 21.6266L2.58658 23.9066C2.26659 24.4399 2.36002 25.1065 2.78662 25.5465L6.61325 29.3598C7.04 29.7998 7.72 29.8798 8.23986 29.5598L10.5331 28.1865C10.8266 28.3199 11.1199 28.4398 11.44 28.5598L12.0667 31.1465C12.2131 31.7464 12.7467 32.1598 13.3599 32.1598H18.7865C19.3999 32.1598 19.9331 31.7464 20.0799 31.1465L20.7199 28.5598C21.0266 28.4532 21.3199 28.3199 21.6265 28.1865L23.9064 29.5598C24.4399 29.8798 25.1066 29.7998 25.5464 29.3598L29.3598 25.5465C29.7998 25.1065 29.8797 24.4399 29.5597 23.9066L28.1865 21.6399ZM16.08 23.8665C11.7865 23.8665 8.29322 20.3732 8.29322 16.0799C8.29322 11.7866 11.7865 8.29333 16.08 8.29333C20.3732 8.29333 23.8664 11.7866 23.8664 16.0799C23.8664 20.3732 20.3732 23.8665 16.08 23.8665Z' fill='white'/>
      </svg>
      `,
      img: `<svg width='65' height='63' viewBox='0 0 65 63' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M56.3105 0H8.68947C3.9 0 0 3.78 0 8.4221V54.5779C0 59.22 3.9 63 8.68947 63H56.3105C61.1 63 65 59.22 65 54.5779V8.4221C65 3.78 61.1 0 56.3105 0ZM60.1421 54.5779C60.1421 56.6337 58.4316 58.2916 56.3105 58.2916H8.68947C6.56842 58.2916 4.85789 56.6337 4.85789 54.5779V8.4221C4.85789 6.36632 6.56842 4.70842 8.68947 4.70842H56.3105C58.4316 4.70842 60.1421 6.36632 60.1421 8.4221V54.5779Z' fill='white'/>
      </svg>
      `,
      doc: `<svg width='69' height='52' viewBox='0 0 69 52' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M3.45 0C2.53503 7.65277e-05 1.65756 0.304465 1.01058 0.84622C0.3636 1.38798 9.13917e-05 2.12273 0 2.88889V49.1111C9.13917e-05 49.8773 0.3636 50.612 1.01058 51.1538C1.65756 51.6955 2.53503 51.9999 3.45 52H34.5H65.55C66.465 51.9999 67.3424 51.6955 67.9894 51.1538C68.6364 50.612 68.9999 49.8773 69 49.1111V14.4444C68.9999 13.6783 68.6364 12.9435 67.9894 12.4018C67.3424 11.86 66.465 11.5556 65.55 11.5556H34.1091L27.1349 1.44444C26.8324 1.00565 26.3973 0.641202 25.8734 0.387673C25.3494 0.134143 24.7551 0.000447522 24.15 0H3.45Z' fill='white'/>
      </svg>
      `,
      forge: `<svg width='71' height='65' viewBox='0 0 71 65' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M55.2378 11.973C55.0423 11.973 54.8489 11.978 54.6568 11.9857C51.4306 4.77602 43.7399 0 35.1873 0C24.3043 0 15.2394 7.70353 14.2458 17.4624C13.757 17.4078 13.2848 17.3812 12.8224 17.3812C5.7521 17.3812 0 22.6472 0 29.1205C0 35.5863 5.7521 40.8459 12.8224 40.8459H19.6915V60.935C19.6915 63.177 21.6827 65 24.1303 65H46.869C49.3173 65 51.3092 63.177 51.3092 60.935V40.8459H55.2378C63.9291 40.8459 71 34.3726 71 26.4164C71 18.4526 63.9291 11.973 55.2378 11.973ZM22.5315 39.5615C22.5316 39.5561 22.5349 39.5515 22.5349 39.5459C22.5349 39.5404 22.5316 39.5358 22.5315 39.5303V30.6579H48.4693V39.5239C48.4692 39.5317 48.4645 39.5381 48.4645 39.5459C48.4645 39.5537 48.4692 39.5602 48.4693 39.568V56.2251H22.5315V39.5615ZM48.4693 28.0579H22.5315V25.948C22.5315 25.1405 23.2484 24.483 24.1303 24.483H46.869C47.7516 24.483 48.4693 25.1405 48.4693 25.948V28.0579ZM46.869 62.4H24.1303C23.2484 62.4 22.5315 61.7425 22.5315 60.935V58.8251H48.4693V60.935C48.4693 61.7425 47.7516 62.4 46.869 62.4ZM55.2378 38.2459H51.3092V25.948C51.3092 23.706 49.3173 21.883 46.869 21.883H24.1303C21.6827 21.883 19.6915 23.706 19.6915 25.948V38.2459H12.8224C7.31774 38.2459 2.84 34.1517 2.84 29.1205C2.84 24.0805 7.31774 19.9812 12.8224 19.9812C13.5732 19.9812 14.3435 20.0725 15.247 20.2707C15.6658 20.3633 16.1089 20.2732 16.4493 20.0319C16.7897 19.7895 16.9915 19.4187 16.9971 19.0239C17.1281 9.96712 25.2882 2.6 35.1873 2.6C42.8996 2.6 49.8026 7.09286 52.3638 13.7808C52.5782 14.3394 53.173 14.6822 53.8303 14.6453C54.2866 14.6098 54.7552 14.573 55.2378 14.573C62.3628 14.573 68.16 19.886 68.16 26.4164C68.16 32.9393 62.3628 38.2459 55.2378 38.2459Z' fill='white'/>
      </svg>
      `,
    });
  }
}
