import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Target,
  BarChart3,
  Sparkles,
  Link,
  Search,
  Monitor,
  Headset,
  Wifi,
  Compass,
  Shield,
  TrendingDown,
  Eye,
  Activity,
  Home,
} from "lucide-react";
import { CompetitorChart } from "./components/CompetitorChart";
import { InsightCard } from "./components/InsightCard";
import { TableOfContents } from "./components/TableOfContents";
import { CategoryIntro } from "./components/CategoryIntro";
import { KeywordGapSlide } from "./components/KeywordGapSlide";
import { SiteMapCompetitorsSlide } from "./components/SiteMapCompetitorsSlide";
import { CompetitionWebsiteFindings } from "./components/CompetitionWebsiteFindings";
import { ThankYouSlide } from "./components/ThankYouSlide";
import siteMapImage from "figma:asset/2333d09aacff4650c0b284b240988ede4b6690dd.png";
import leadwalnutLogo from "figma:asset/a333b5825a4a62c2c92f9a565cc6c2e7687f36c8.png";
import splashtopLogo from "figma:asset/2f757b0e357d4a9a99a716bc63cb73a52ca572cd.png";

// --- DATA DEFINITIONS ---

// Slide 1: Total Organic Traffic
// const trafficData = [
//   {
//     month: "Oct 2025",
//     splashtop: 385000,
//     teamviewer: 5000000,
//     anydesk: 9300000,
//     beyondtrust: 198000,
//     gotomypc: 73000,
//   },
//   {
//     month: "Nov 2025",
//     splashtop: 354000,
//     teamviewer: 4700000,
//     anydesk: 9300000,
//     beyondtrust: 207000,
//     gotomypc: 72000,
//   },
//   {
//     month: "Dec 2025",
//     splashtop: 363000,
//     teamviewer: 4700000,
//     anydesk: 9300000,
//     beyondtrust: 186000,
//     gotomypc: 88000,
//   },
//   {
//     month: "Jan 2026",
//     splashtop: 345000,
//     teamviewer: 4600000,
//     anydesk: 8900000,
//     beyondtrust: 244000,
//     gotomypc: 90000,
//   },
// ];

const trafficData = [
  {
    month: "Oct 2025",
    splashtop: 142000,
    teamviewer: 500000,
    anydesk: 416000,
    beyondtrust: 58000,
    gotomypc: 78000,
  },
  {
    month: "Nov 2025",
    splashtop: 130000,
    teamviewer: 478000,
    anydesk: 407000,
    beyondtrust: 55000,
    gotomypc: 76000,
  },
  {
    month: "Dec 2025",
    splashtop: 137000,
    teamviewer: 522000,
    anydesk: 418000,
    beyondtrust: 52000,
    gotomypc: 76000,
  },
  {
    month: "Jan 2026",
    splashtop: 142000,
    teamviewer: 551000,
    anydesk: 427000,
    beyondtrust: 46000,
    gotomypc: 72000,
  },
];

// Slide 2: Branded vs Non-Branded (Values converted to raw numbers for consistency)
// const brandedData = [
//   {
//     month: "Oct 2025",
//     splashtop: 195000,
//     teamviewer: 4500000,
//     anydesk: 9000000,
//     beyondtrust: 37000,
//     gotomypc: 57000,
//   },
//   {
//     month: "Nov 2025",
//     splashtop: 167000,
//     teamviewer: 4000000,
//     anydesk: 8900000,
//     beyondtrust: 38000,
//     gotomypc: 58000,
//   },
//   {
//     month: "Dec 2025",
//     splashtop: 173000,
//     teamviewer: 3900000,
//     anydesk: 8800000,
//     beyondtrust: 32000,
//     gotomypc: 77000,
//   },
//   {
//     month: "Jan 2026",
//     splashtop: 165000,
//     teamviewer: 3800000,
//     anydesk: 7800000,
//     beyondtrust: 27000,
//     gotomypc: 81000,
//   },
// ];

// const nonBrandedData = [
//   {
//     month: "Oct 2025",
//     splashtop: 190000,
//     teamviewer: 507000,
//     anydesk: 344000,
//     beyondtrust: 161000,
//     gotomypc: 16000,
//   },
//   {
//     month: "Nov 2025",
//     splashtop: 187000,
//     teamviewer: 705000,
//     anydesk: 414000,
//     beyondtrust: 170000,
//     gotomypc: 14000,
//   },
//   {
//     month: "Dec 2025",
//     splashtop: 191000,
//     teamviewer: 801000,
//     anydesk: 457000,
//     beyondtrust: 154000,
//     gotomypc: 10000,
//   },
//   {
//     month: "Jan 2026",
//     splashtop: 179000,
//     teamviewer: 766000,
//     anydesk: 1029000,
//     beyondtrust: 216000,
//     gotomypc: 9000,
//   },
// ];

const brandedData = [
  {
    month: "Oct 2025",
    splashtop: 103000,
    teamviewer: 444000,
    anydesk: 395000,
    beyondtrust: 17000,
    gotomypc: 70000,
  },
  {
    month: "Nov 2025",
    splashtop: 82000,
    teamviewer: 360000,
    anydesk: 359000,
    beyondtrust: 19000,
    gotomypc: 70000,
  },
  {
    month: "Dec 2025",
    splashtop: 93000,
    teamviewer: 411000,
    anydesk: 388000,
    beyondtrust: 16000,
    gotomypc: 71000,
  },
  {
    month: "Jan 2026",
    splashtop: 93000,
    teamviewer: 431000,
    anydesk: 403000,
    beyondtrust: 14000,
    gotomypc: 67000,
  },
];

const nonBrandedData = [
  {
    month: "Oct 2025",
    splashtop: 39000,
    teamviewer: 56000,
    anydesk: 21000,
    beyondtrust: 41000,
    gotomypc: 8000,
  },
  {
    month: "Nov 2025",
    splashtop: 48000,
    teamviewer: 118000,
    anydesk: 48000,
    beyondtrust: 36000,
    gotomypc: 6000,
  },
  {
    month: "Dec 2025",
    splashtop: 45000,
    teamviewer: 111000,
    anydesk: 30000,
    beyondtrust: 35000,
    gotomypc: 5000,
  },
  {
    month: "Jan 2026",
    splashtop: 49000,
    teamviewer: 120000,
    anydesk: 24000,
    beyondtrust: 31000,
    gotomypc: 5000,
  },
];

// Slide 3: Keyword Counts (Thousands 'k')
const totalKeywordsData = [
  {
    month: "Oct 2025",
    splashtop: 51,
    teamviewer: 79,
    anydesk: 97,
    beyondtrust: 42,
    gotomypc: 14,
  },
  {
    month: "Nov 2025",
    splashtop: 50,
    teamviewer: 78,
    anydesk: 87,
    beyondtrust: 39,
    gotomypc: 13,
  },
  {
    month: "Dec 2025",
    splashtop: 51,
    teamviewer: 81,
    anydesk: 82,
    beyondtrust: 29,
    gotomypc: 12,
  },
  {
    month: "Jan 2026",
    splashtop: 57,
    teamviewer: 80,
    anydesk: 89,
    beyondtrust: 29,
    gotomypc: 13,
  },
];

const page1KeywordsData = [
  {
    month: "Oct 2025",
    splashtop: 6,
    teamviewer: 11,
    anydesk: 6,
    beyondtrust: 3,
    gotomypc: 1,
  },
  {
    month: "Nov 2025",
    splashtop: 6,
    teamviewer: 11,
    anydesk: 6,
    beyondtrust: 3,
    gotomypc: 1,
  },
  {
    month: "Dec 2025",
    splashtop: 7,
    teamviewer: 11,
    anydesk: 6,
    beyondtrust: 3,
    gotomypc: 1,
  },
  {
    month: "Jan 2026",
    splashtop: 8,
    teamviewer: 11,
    anydesk: 7,
    beyondtrust: 3,
    gotomypc: 1,
  },
];

// Slide 4: Remote Access Category - Multiple Metrics
const totalKeywordsRemoteAccessData = [
  {
    month: "Oct 2025",
    splashtop: 399,
    teamviewer: 402,
    anydesk: 295,
    beyondtrust: 71,
    gotomypc: 204,
  },
  {
    month: "Nov 2025",
    splashtop: 367,
    teamviewer: 374,
    anydesk: 259,
    beyondtrust: 58,
    gotomypc: 178,
  },
  {
    month: "Dec 2025",
    splashtop: 371,
    teamviewer: 371,
    anydesk: 273,
    beyondtrust: 60,
    gotomypc: 191,
  },
  {
    month: "Jan 2026",
    splashtop: 380,
    teamviewer: 371,
    anydesk: 269,
    beyondtrust: 63,
    gotomypc: 200,
  },
];

const cumulativeTrafficData = [
  {
    month: "Oct 2025",
    splashtop: 1555,
    teamviewer: 3544,
    anydesk: 1538,
    beyondtrust: 1687,
    gotomypc: 735,
  },
  {
    month: "Nov 2025",
    splashtop: 1971,
    teamviewer: 5814,
    anydesk: 1692,
    beyondtrust: 1728,
    gotomypc: 677,
  },
  {
    month: "Dec 2025",
    splashtop: 2638,
    teamviewer: 2608,
    anydesk: 2196,
    beyondtrust: 1521,
    gotomypc: 794,
  },
  {
    month: "Jan 2026",
    splashtop: 2823,
    teamviewer: 3811,
    anydesk: 2261,
    beyondtrust: 1212,
    gotomypc: 864,
  },
];

const page1RemoteAccessData = [
  {
    month: "Oct 2025",
    splashtop: 297,
    teamviewer: 336,
    anydesk: 213,
    beyondtrust: 38,
    gotomypc: 138,
  },
  {
    month: "Nov 2025",
    splashtop: 318,
    teamviewer: 336,
    anydesk: 225,
    beyondtrust: 41,
    gotomypc: 135,
  },
  {
    month: "Dec 2025",
    splashtop: 317,
    teamviewer: 339,
    anydesk: 234,
    beyondtrust: 38,
    gotomypc: 132,
  },
  {
    month: "Jan 2026",
    splashtop: 321,
    teamviewer: 330,
    anydesk: 223,
    beyondtrust: 36,
    gotomypc: 133,
  },
];

// Slide 5: Remote Desk Category
const totalKeywordsRemoteDeskData = [
  {
    month: "Oct 2025",
    splashtop: 523,
    teamviewer: 402,
    anydesk: 588,
    beyondtrust: 23,
    gotomypc: 290,
  },
  {
    month: "Nov 2025",
    splashtop: 500,
    teamviewer: 350,
    anydesk: 510,
    beyondtrust: 9,
    gotomypc: 228,
  },
  {
    month: "Dec 2025",
    splashtop: 542,
    teamviewer: 363,
    anydesk: 517,
    beyondtrust: 8,
    gotomypc: 237,
  },
  {
    month: "Jan 2026",
    splashtop: 556,
    teamviewer: 371,
    anydesk: 512,
    beyondtrust: 8,
    gotomypc: 232,
  },
];

const cumulativeTrafficRemoteDeskData = [
  {
    month: "Oct 2025",
    splashtop: 1045,
    teamviewer: 2664,
    anydesk: 2186,
    beyondtrust: 49,
    gotomypc: 948,
  },
  {
    month: "Nov 2025",
    splashtop: 1717,
    teamviewer: 3798,
    anydesk: 6305,
    beyondtrust: 49,
    gotomypc: 539,
  },
  {
    month: "Dec 2025",
    splashtop: 1389,
    teamviewer: 3086,
    anydesk: 3116,
    beyondtrust: 7,
    gotomypc: 748,
  },
  {
    month: "Jan 2026",
    splashtop: 2103,
    teamviewer: 4277,
    anydesk: 2730,
    beyondtrust: 6,
    gotomypc: 837,
  },
];

const page1RemoteDeskData = [
  {
    month: "Oct 2025",
    splashtop: 305,
    teamviewer: 249,
    anydesk: 356,
    beyondtrust: 6,
    gotomypc: 108,
  },
  {
    month: "Nov 2025",
    splashtop: 362,
    teamviewer: 265,
    anydesk: 376,
    beyondtrust: 4,
    gotomypc: 108,
  },
  {
    month: "Dec 2025",
    splashtop: 369,
    teamviewer: 263,
    anydesk: 374,
    beyondtrust: 4,
    gotomypc: 104,
  },
  {
    month: "Jan 2026",
    splashtop: 392,
    teamviewer: 263,
    anydesk: 366,
    beyondtrust: 4,
    gotomypc: 96,
  },
];

// Slide 6: Remote Support Category
const totalKeywordsRemoteSupportData = [
  {
    month: "Oct 2025",
    splashtop: 80,
    teamviewer: 93,
    anydesk: 83,
    beyondtrust: 104,
    gotomypc: 21,
  },
  {
    month: "Nov 2025",
    splashtop: 78,
    teamviewer: 91,
    anydesk: 79,
    beyondtrust: 100,
    gotomypc: 14,
  },
  {
    month: "Dec 2025",
    splashtop: 78,
    teamviewer: 86,
    anydesk: 81,
    beyondtrust: 73,
    gotomypc: 19,
  },
  {
    month: "Jan 2026",
    splashtop: 86,
    teamviewer: 84,
    anydesk: 83,
    beyondtrust: 74,
    gotomypc: 19,
  },
];

const cumulativeTrafficRemoteSupportData = [
  {
    month: "Oct 2025",
    splashtop: 506,
    teamviewer: 1206,
    anydesk: 1406,
    beyondtrust: 2416,
    gotomypc: 43,
  },
  {
    month: "Nov 2025",
    splashtop: 655,
    teamviewer: 1030,
    anydesk: 1311,
    beyondtrust: 2492,
    gotomypc: 23,
  },
  {
    month: "Dec 2025",
    splashtop: 561,
    teamviewer: 1037,
    anydesk: 1525,
    beyondtrust: 502,
    gotomypc: 37,
  },
  {
    month: "Jan 2026",
    splashtop: 880,
    teamviewer: 1369,
    anydesk: 1543,
    beyondtrust: 604,
    gotomypc: 36,
  },
];

const page1RemoteSupportData = [
  {
    month: "Oct 2025",
    splashtop: 64,
    teamviewer: 83,
    anydesk: 75,
    beyondtrust: 84,
    gotomypc: 15,
  },
  {
    month: "Nov 2025",
    splashtop: 74,
    teamviewer: 85,
    anydesk: 75,
    beyondtrust: 90,
    gotomypc: 5,
  },
  {
    month: "Dec 2025",
    splashtop: 72,
    teamviewer: 78,
    anydesk: 75,
    beyondtrust: 64,
    gotomypc: 8,
  },
  {
    month: "Jan 2026",
    splashtop: 80,
    teamviewer: 74,
    anydesk: 78,
    beyondtrust: 66,
    gotomypc: 7,
  },
];

// Slide 7: Remote Connection Category
const totalKeywordsRemoteConnectionData = [
  {
    month: "Oct 2025",
    splashtop: 10,
    teamviewer: 22,
    anydesk: 20,
    beyondtrust: 4,
    gotomypc: 13,
  },
  {
    month: "Nov 2025",
    splashtop: 10,
    teamviewer: 22,
    anydesk: 19,
    beyondtrust: 2,
    gotomypc: 13,
  },
  {
    month: "Dec 2025",
    splashtop: 11,
    teamviewer: 22,
    anydesk: 17,
    beyondtrust: 3,
    gotomypc: 10,
  },
  {
    month: "Jan 2026",
    splashtop: 11,
    teamviewer: 21,
    anydesk: 19,
    beyondtrust: 5,
    gotomypc: 13,
  },
];

const cumulativeTrafficRemoteConnectionData = [
  {
    month: "Oct 2025",
    splashtop: 26,
    teamviewer: 139,
    anydesk: 127,
    beyondtrust: 1,
    gotomypc: 18,
  },
  {
    month: "Nov 2025",
    splashtop: 36,
    teamviewer: 275,
    anydesk: 87,
    beyondtrust: 1,
    gotomypc: 46,
  },
  {
    month: "Dec 2025",
    splashtop: 60,
    teamviewer: 270,
    anydesk: 187,
    beyondtrust: 3,
    gotomypc: 37,
  },
  {
    month: "Jan 2026",
    splashtop: 49,
    teamviewer: 200,
    anydesk: 142,
    beyondtrust: 7,
    gotomypc: 53,
  },
];

const page1RemoteConnectionData = [
  {
    month: "Oct 2025",
    splashtop: 7,
    teamviewer: 21,
    anydesk: 18,
    beyondtrust: 2,
    gotomypc: 8,
  },
  {
    month: "Nov 2025",
    splashtop: 7,
    teamviewer: 21,
    anydesk: 16,
    beyondtrust: 1,
    gotomypc: 13,
  },
  {
    month: "Dec 2025",
    splashtop: 8,
    teamviewer: 21,
    anydesk: 16,
    beyondtrust: 2,
    gotomypc: 9,
  },
  {
    month: "Jan 2026",
    splashtop: 8,
    teamviewer: 21,
    anydesk: 18,
    beyondtrust: 4,
    gotomypc: 8,
  },
];

// Slide 8: Secure Remote Category
const totalKeywordsSecureRemoteData = [
  {
    month: "Oct 2025",
    splashtop: 19,
    teamviewer: 10,
    anydesk: 5,
    beyondtrust: 10,
    gotomypc: 5,
  },
  {
    month: "Nov 2025",
    splashtop: 18,
    teamviewer: 9,
    anydesk: 3,
    beyondtrust: 9,
    gotomypc: 4,
  },
  {
    month: "Dec 2025",
    splashtop: 17,
    teamviewer: 10,
    anydesk: 4,
    beyondtrust: 9,
    gotomypc: 4,
  },
  {
    month: "Jan 2026",
    splashtop: 18,
    teamviewer: 9,
    anydesk: 4,
    beyondtrust: 8,
    gotomypc: 3,
  },
];

const cumulativeTrafficSecureRemoteData = [
  {
    month: "Oct 2025",
    splashtop: 235,
    teamviewer: 60,
    anydesk: 5,
    beyondtrust: 711,
    gotomypc: 19,
  },
  {
    month: "Nov 2025",
    splashtop: 318,
    teamviewer: 123,
    anydesk: 23,
    beyondtrust: 790,
    gotomypc: 14,
  },
  {
    month: "Dec 2025",
    splashtop: 314,
    teamviewer: 54,
    anydesk: 24,
    beyondtrust: 859,
    gotomypc: 4,
  },
  {
    month: "Jan 2026",
    splashtop: 374,
    teamviewer: 67,
    anydesk: 24,
    beyondtrust: 827,
    gotomypc: 16,
  },
];

const page1SecureRemoteData = [
  {
    month: "Oct 2025",
    splashtop: 16,
    teamviewer: 5,
    anydesk: 1,
    beyondtrust: 9,
    gotomypc: 2,
  },
  {
    month: "Nov 2025",
    splashtop: 18,
    teamviewer: 6,
    anydesk: 1,
    beyondtrust: 8,
    gotomypc: 1,
  },
  {
    month: "Dec 2025",
    splashtop: 16,
    teamviewer: 5,
    anydesk: 1,
    beyondtrust: 8,
    gotomypc: 0,
  },
  {
    month: "Jan 2026",
    splashtop: 18,
    teamviewer: 5,
    anydesk: 1,
    beyondtrust: 7,
    gotomypc: 0,
  },
];

// Slide 9: AI Keywords
const aiKeywordsData = [
  {
    month: "Oct 2025",
    splashtop: 1117,
    teamviewer: 1480,
    anydesk: 422,
    beyondtrust: 515,
    logmein: 401,
    gotomypc: 36,
  },
  {
    month: "Nov 2025",
    splashtop: 1193,
    teamviewer: 1490,
    anydesk: 370,
    beyondtrust: 516,
    logmein: 411,
    gotomypc: 38,
  },
  {
    month: "Dec 2025",
    splashtop: 1483,
    teamviewer: 1580,
    anydesk: 403,
    beyondtrust: 603,
    logmein: 507,
    gotomypc: 39,
  },
  {
    month: "Jan 2026",
    splashtop: 1764,
    teamviewer: 1787,
    anydesk: 519,
    beyondtrust: 744,
    logmein: 596,
    gotomypc: 36,
  },
];

// AI Branded Data
const aiBrandedData = [
  {
    month: "Oct 2025",
    splashtop: 85,
    teamviewer: 685,
    anydesk: 227,
    beyondtrust: 108,
    logmein: 61,
    gotomypc: 8,
  },
  {
    month: "Nov 2025",
    splashtop: 101,
    teamviewer: 678,
    anydesk: 208,
    beyondtrust: 89,
    logmein: 67,
    gotomypc: 7,
  },
  {
    month: "Dec 2025",
    splashtop: 109,
    teamviewer: 615,
    anydesk: 194,
    beyondtrust: 171,
    logmein: 76,
    gotomypc: 6,
  },
  {
    month: "Jan 2026",
    splashtop: 142,
    teamviewer: 733,
    anydesk: 231,
    beyondtrust: 105,
    logmein: 111,
    gotomypc: 14,
  },
];

// AI Non-Branded Data
const aiNonBrandedData = [
  {
    month: "Oct 2025",
    splashtop: 1032,
    teamviewer: 795,
    anydesk: 195,
    beyondtrust: 407,
    logmein: 340,
    gotomypc: 28,
  },
  {
    month: "Nov 2025",
    splashtop: 1092,
    teamviewer: 812,
    anydesk: 162,
    beyondtrust: 427,
    logmein: 344,
    gotomypc: 31,
  },
  {
    month: "Dec 2025",
    splashtop: 1374,
    teamviewer: 965,
    anydesk: 209,
    beyondtrust: 432,
    logmein: 431,
    gotomypc: 33,
  },
  {
    month: "Jan 2026",
    splashtop: 1622,
    teamviewer: 1054,
    anydesk: 288,
    beyondtrust: 639,
    logmein: 485,
    gotomypc: 22,
  },
];

// AI Traffic Analysis Data
const aiTrafficData = [
  {
    month: "Oct 2025",
    splashtop: 4000,
    teamviewer: 9000,
    anydesk: 2000,
    beyondtrust: 5000,
    logmein: 1000,
    gotomypc: 96,
  },
  {
    month: "Nov 2025",
    splashtop: 6000,
    teamviewer: 15000,
    anydesk: 2000,
    beyondtrust: 3000,
    logmein: 2000,
    gotomypc: 112,
  },
  {
    month: "Dec 2025",
    splashtop: 10000,
    teamviewer: 9000,
    anydesk: 4000,
    beyondtrust: 5000,
    logmein: 3000,
    gotomypc: 221,
  },
  {
    month: "Jan 2026",
    splashtop: 11000,
    teamviewer: 8000,
    anydesk: 3000,
    beyondtrust: 3000,
    logmein: 2000,
    gotomypc: 60,
  },
];

const aiTrafficBrandedData = [
  {
    month: "Oct 2025",
    splashtop: 882,
    teamviewer: 4000,
    anydesk: 1000,
    beyondtrust: 4000,
    logmein: 319,
    gotomypc: 26,
  },
  {
    month: "Nov 2025",
    splashtop: 1049,
    teamviewer: 3000,
    anydesk: 1000,
    beyondtrust: 1000,
    logmein: 905,
    gotomypc: 26,
  },
  {
    month: "Dec 2025",
    splashtop: 819,
    teamviewer: 3000,
    anydesk: 3000,
    beyondtrust: 3000,
    logmein: 1059,
    gotomypc: 11,
  },
  {
    month: "Jan 2026",
    splashtop: 766,
    teamviewer: 4000,
    anydesk: 2000,
    beyondtrust: 1000,
    logmein: 475,
    gotomypc: 9,
  },
];

const aiTrafficNonBrandedData = [
  {
    month: "Oct 2025",
    splashtop: 3000,
    teamviewer: 5000,
    anydesk: 784,
    beyondtrust: 1000,
    logmein: 747,
    gotomypc: 70,
  },
  {
    month: "Nov 2025",
    splashtop: 5000,
    teamviewer: 12000,
    anydesk: 709,
    beyondtrust: 2000,
    logmein: 1160,
    gotomypc: 86,
  },
  {
    month: "Dec 2025",
    splashtop: 9000,
    teamviewer: 6000,
    anydesk: 1056,
    beyondtrust: 2000,
    logmein: 1909,
    gotomypc: 210,
  },
  {
    month: "Jan 2026",
    splashtop: 10000,
    teamviewer: 4000,
    anydesk: 1039,
    beyondtrust: 2000,
    logmein: 1863,
    gotomypc: 51,
  },
];

// Slide 11: Referring Domains
const referringDomainsData = [
  {
    month: "Oct 2025",
    splashtop: 15.946,
    teamviewer: 123.67,
    anydesk: 40.731,
    beyondtrust: 15.88,
    gotomypc: 4.581,
  },
  {
    month: "Nov 2025",
    splashtop: 16.955,
    teamviewer: 122.588,
    anydesk: 40.316,
    beyondtrust: 16.786,
    gotomypc: 4.45,
  },
  {
    month: "Dec 2025",
    splashtop: 17.078,
    teamviewer: 119.354,
    anydesk: 39.093,
    beyondtrust: 16.33,
    gotomypc: 4.501,
  },
  {
    month: "Jan 2026",
    splashtop: 17.107,
    teamviewer: 117.016,
    anydesk: 38.476,
    beyondtrust: 15.835,
    gotomypc: 4.38,
  },
];

// Slide 12: Backlinks
const backlinksData = [
  {
    month: "Oct 2025",
    splashtop: 1.8,
    teamviewer: 18.8,
    anydesk: 9.0,
    beyondtrust: 0.793,
    gotomypc: 0.089,
  },
  {
    month: "Nov 2025",
    splashtop: 1.4,
    teamviewer: 10.0,
    anydesk: 10.0,
    beyondtrust: 0.805,
    gotomypc: 0.088,
  },
  {
    month: "Dec 2025",
    splashtop: 1.2,
    teamviewer: 10.6,
    anydesk: 10.6,
    beyondtrust: 0.789,
    gotomypc: 0.086,
  },
  {
    month: "Jan 2026",
    splashtop: 1.2,
    teamviewer: 11.1,
    anydesk: 11.1,
    beyondtrust: 0.786,
    gotomypc: 0.085,
  },
];

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0); // Start at 0 for cover page
  const totalSlides = 22; // Updated to include Competition Website Findings slide

  // Sub-states for toggles
  const [trafficType, setTrafficType] = useState<
    "overall" | "branded" | "nonBranded"
  >("overall");
  const [keywordType, setKeywordType] = useState<
    "total" | "page1"
  >("total");
  const [remoteAccessMetric, setRemoteAccessMetric] = useState<
    "totalKeywords" | "cumulativeTraffic" | "page1Keywords"
  >("totalKeywords");
  const [remoteDeskMetric, setRemoteDeskMetric] = useState<
    "totalKeywords" | "cumulativeTraffic" | "page1Keywords"
  >("totalKeywords");
  const [remoteSupportMetric, setRemoteSupportMetric] =
    useState<
      "totalKeywords" | "cumulativeTraffic" | "page1Keywords"
    >("totalKeywords");
  const [remoteConnectionMetric, setRemoteConnectionMetric] =
    useState<
      "totalKeywords" | "cumulativeTraffic" | "page1Keywords"
    >("totalKeywords");
  const [secureRemoteMetric, setSecureRemoteMetric] = useState<
    "totalKeywords" | "cumulativeTraffic" | "page1Keywords"
  >("totalKeywords");
  const [aiType, setAiType] = useState<
    "keywords" | "branded" | "nonBranded"
  >("keywords");
  const [aiTrafficType, setAiTrafficType] = useState<
    "overall" | "branded" | "nonBranded"
  >("overall");
  const [authorityMetric, setAuthorityMetric] = useState<
    "domains" | "backlinks"
  >("domains");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight")
        setActiveSlide((prev) =>
          Math.min(prev + 1, totalSlides - 1),
        );
      if (e.key === "ArrowLeft")
        setActiveSlide((prev) => Math.max(prev - 1, 0));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Keyboard navigation from parent iframe (Webflow fix)
useEffect(() => {
  const handleMessage = (event: MessageEvent) => {
    const allowedOrigins = [
      "https://competition-metrics-splashtop-jan20.vercel.app/",
      "https://lwstaging.webflow.io",
      "https://www.leadwalnut.com"
    ];

    if (!allowedOrigins.includes(event.origin)) return;

    if (event.data?.type === "KEY_NAV") {
      if (event.data.key === "ArrowRight") {
        setActiveSlide(prev => Math.min(prev + 1, totalSlides - 1));
      }
      if (event.data.key === "ArrowLeft") {
        setActiveSlide(prev => Math.max(prev - 1, 0));
      }
    }
  };

  window.addEventListener("message", handleMessage);
  return () => window.removeEventListener("message", handleMessage);
}, [totalSlides]);

  const renderContent = () => {
    switch (activeSlide) {
      case 0:
        // Cover Page
        return (
          <div className="flex-1 flex flex-col items-center justify-center relative">
            {/* Logos at the top corners */}
            <div className="absolute top-8 left-0 right-0 px-12 flex justify-between items-center">
              <img
                src={leadwalnutLogo}
                alt="LeadWalnut"
                className="h-12 object-contain"
              />
              <img
                src={splashtopLogo}
                alt="Splashtop"
                className="h-16 object-contain"
              />
            </div>

            <div className="text-center max-w-4xl">
              <div className="inline-block bg-blue-500 text-white text-xl md:text-2xl font-bold tracking-wider px-6 py-2.5 rounded-lg mb-8 uppercase">
                SEO & AI Visibility
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-12 tracking-tight uppercase">
                Competition Analysis - Jan 2026
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#3b82f6]"></div>
                  <span className="text-sm font-medium text-gray-700">
                    Splashtop
                  </span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]"></div>
                  <span className="text-sm font-medium text-gray-700">
                    TeamViewer
                  </span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]"></div>
                  <span className="text-sm font-medium text-gray-700">
                    AnyDesk
                  </span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#8b5cf6]"></div>
                  <span className="text-sm font-medium text-gray-700">
                    BeyondTrust
                  </span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]"></div>
                  <span className="text-sm font-medium text-gray-700">
                    GoToMyPC
                  </span>
                </button>
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <TableOfContents
            onNavigate={(index) => setActiveSlide(index)}
          />
        );

      case 2:
        // Organic Traffic Overview - Intro slide
        return (
          <div className="flex-1 flex flex-col items-center justify-center px-8">
            <div className="w-full max-w-5xl mx-auto text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl mb-6">
                <TrendingUp
                  size={32}
                  className="text-white"
                  strokeWidth={2.5}
                />
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 tracking-tight">
                Organic Traffic Overview
              </h2>

              {/* Two Cards */}
              <div className="flex justify-center gap-6 mb-10 flex-wrap">
                <div
                  onClick={() => setActiveSlide(3)}
                  className="bg-white border border-gray-200 rounded-2xl p-8 text-left hover:shadow-lg transition-shadow max-w-sm w-full cursor-pointer"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-xl mb-4">
                    <TrendingUp
                      size={24}
                      className="text-red-500"
                      strokeWidth={2.5}
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    Organic Traffic Trends
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Monthly growth analysis
                  </p>
                  <div className="w-10 h-1 bg-red-500 rounded-full mt-4"></div>
                </div>

                <div
                  onClick={() => setActiveSlide(4)}
                  className="bg-white border border-gray-200 rounded-2xl p-8 text-left hover:shadow-lg transition-shadow max-w-sm w-full cursor-pointer"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-4">
                    <BarChart3
                      size={24}
                      className="text-purple-500"
                      strokeWidth={2.5}
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    Branded vs Non-Branded
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Traffic composition
                  </p>
                  <div className="w-10 h-1 bg-purple-500 rounded-full mt-4"></div>
                </div>
              </div>

              {/* Strategic Insights Label */}
              <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                Strategic Insights
              </p>
            </div>
          </div>
        );

      case 3:
        // Organic Traffic Overview - Combined with tabs
        return (
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-8 flex flex-col relative">
              <div className="absolute top-0 right-0 z-10 flex bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => setTrafficType("overall")}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${trafficType === "overall" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Overall Traffic
                </button>
                <button
                  onClick={() => setTrafficType("branded")}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${trafficType === "branded" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Branded
                </button>
                <button
                  onClick={() => setTrafficType("nonBranded")}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${trafficType === "nonBranded" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Non-Branded
                </button>
              </div>

              <CompetitorChart
                data={
                  trafficType === "overall"
                    ? trafficData
                    : trafficType === "branded"
                      ? brandedData
                      : nonBrandedData
                }
                title={
                  trafficType === "overall"
                    ? "Monthly Organic Traffic"
                    : trafficType === "branded"
                      ? "Branded Traffic Distribution"
                      : "Non-Branded Traffic Distribution"
                }
                unit=""
              />
            </div>
            <div className="lg:col-span-4 flex flex-col pt-6">
              <h3 className="text-[11px] font-bold tracking-widest text-gray-400 uppercase mb-4">
                Key Insights
              </h3>
              {trafficType === "overall" ? (
                <>
                  <InsightCard
                    type="success"
                    icon={TrendingUp}
                    title="Splashtop's Overall Organic Traffic"
                    description="Traffic declined from ~385K (Oct) to ~345K (Jan), indicating a steady downward trend rather than a sharp drop."
                  />
                  <InsightCard
                    type="warning"
                    icon={BarChart3}
                    title="AnyDesk &TeamViewer Overall Organic Traffic Decline"
                    description="AnyDesk: 9.3M → 8.9M (-4.3%). TeamViewer: 5M → 4.6M (-8%)."
                  />
                </>
              ) : trafficType === "branded" ? (
                <>
                  <InsightCard
                    type="success"
                    icon={TrendingUp}
                    title="Splashtop's Brand Traffic Decline"
                    description="195K → 165K (Oct–Jan, -15.4%) seasonal decline, but brand recognition remains strong."
                  />
                  <InsightCard
                    type="warning"
                    icon={BarChart3}
                    title="AnyDesk's&TeamViewer Branded Traffic Decline"
                    description="AnyDesk: 9M → 7.8M (Oct–Jan, -13.3%). TeamViewer: 4.5M → 3.8M (Oct–Jan, -15.6%)."
                  />
                </>
              ) : (
                <>
                  <InsightCard
                    type="success"
                    icon={TrendingUp}
                    title="Splashtop's Non-Branded Traffic Growth"
                    description="190K → 179K: Non-branded traffic remains closely balanced with branded traffic, indicating diversified demand capture despite a slight decline."
                  />
                  <InsightCard
                    type="success"
                    icon={TrendingUp}
                    title="AnyDesk's&TeamViewer Non-Branded Traffic Growth"
                    description="AnyDesk: 344K → 1.03M (+199%). TeamViewer: 507K → 766K (+51%)"
                  />
                </>
              )}
            </div>
          </div>
        );

      case 4:
        // Keyword Performance Metrics - Three cards
        return (
          <div className="flex-1 flex flex-col items-center justify-center px-8">
            <div className="w-full max-w-5xl mx-auto text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl mb-6">
                <Target
                  size={32}
                  className="text-white"
                  strokeWidth={2.5}
                />
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 tracking-tight">
                Keyword Performance
              </h2>

              {/* Three Keyword Cards */}
              <div className="flex justify-center gap-6 mb-10 flex-wrap">
                <div
                  onClick={() => setActiveSlide(5)}
                  className="bg-white border border-gray-200 rounded-2xl p-8 text-left hover:shadow-lg transition-shadow max-w-sm w-full cursor-pointer"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-xl mb-4">
                    <Target
                      size={24}
                      className="text-red-500"
                      strokeWidth={2.5}
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    Top Keyword Opportunities
                  </h3>
                  <p className="text-gray-500 text-sm">
                    High-potential ranking targets
                  </p>
                  <div className="w-10 h-1 bg-red-500 rounded-full mt-4"></div>
                </div>

                <div
                  onClick={() => setActiveSlide(5)}
                  className="bg-white border border-gray-200 rounded-2xl p-8 text-left hover:shadow-lg transition-shadow max-w-sm w-full cursor-pointer"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
                    <BarChart3
                      size={24}
                      className="text-blue-500"
                      strokeWidth={2.5}
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    Ranking Distribution
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Position performance analysis
                  </p>
                  <div className="w-10 h-1 bg-blue-500 rounded-full mt-4"></div>
                </div>

                <div
                  onClick={() => setActiveSlide(5)}
                  className="bg-white border border-gray-200 rounded-2xl p-8 text-left hover:shadow-lg transition-shadow max-w-sm w-full cursor-pointer"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4">
                    <TrendingUp
                      size={24}
                      className="text-green-500"
                      strokeWidth={2.5}
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    Competitive Gaps
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Opportunity identification
                  </p>
                  <div className="w-10 h-1 bg-green-500 rounded-full mt-4"></div>
                </div>
              </div>

              {/* Strategic Insights Label */}
              <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                Strategic Insights
              </p>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-8 flex flex-col relative">
              <div className="absolute top-0 right-0 z-10 flex bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => setKeywordType("total")}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${keywordType === "total" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Total KWs
                </button>
                <button
                  onClick={() => setKeywordType("page1")}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${keywordType === "page1" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Page 1 KWs
                </button>
              </div>

              <CompetitorChart
                data={
                  keywordType === "total"
                    ? totalKeywordsData
                    : page1KeywordsData
                }
                title={
                  keywordType === "total"
                    ? "Total Keyword Reach"
                    : "Page 1 Keyword Rankings"
                }
                unit="k"
              />
            </div>
            <div className="lg:col-span-4 flex flex-col pt-6">
              <h3 className="text-[11px] font-bold tracking-widest text-gray-400 uppercase mb-4">
                Key Insights
              </h3>
              {keywordType === "total" ? (
                <>
                  <InsightCard
                    type="success"
                    icon={TrendingUp}
                    title="Splashtop's Total KWs Growth"
                    description="51K → 57K (Oct–Jan, +11%), steady keyword expansion"
                  />
                  <InsightCard
                    type="warning"
                    icon={BarChart3}
                    title="AnyDesk's Total KWs Decline"
                    description="97K → 89K (Oct–Jan, -8.2%), indicating a decline in total ranking presence."
                  />
                </>
              ) : (
                <>
                  <InsightCard
                    type="success"
                    icon={TrendingUp}
                    title="Splashtop's Page 1 KWs Growth"
                    description="Page 1: 6k→8k (Oct-Jan, +33%) highest growth."
                  />
                  <InsightCard
                    type="success"
                    icon={Target}
                    title="Competitors Page 1 KWs Stable & Growth"
                    description="TeamViewer (~11K), BeyondTrust (~3K), and GoToMyPC (~1K) remained largely stable. AnyDesk: 6K → 7K (Oct–Jan, ~+17%), slight growth."
                  />
                </>
              )}
            </div>
          </div>
        );

      case 6:
        // Competition Performance - Focus Category - Five category cards
        return (
          <div className="flex-1 flex flex-col items-center justify-center px-8">
            <div className="w-full max-w-5xl mx-auto text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500 rounded-2xl mb-6">
                <BarChart3
                  size={32}
                  className="text-white"
                  strokeWidth={2.5}
                />
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
                Category-Wise Performance
              </h2>

              {/* Subtitle */}
              <p className="text-gray-500 text-base mb-12 max-w-2xl mx-auto">
                Deep-dive analysis across key remote access
                market segments
              </p>

              {/* Five Category Cards - 3 top row, 2 bottom row */}
              <div className="space-y-6 mb-10">
                {/* Top Row - 3 cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Card 1 - Remote Access */}
                  <div
                    onClick={() => setActiveSlide(7)}
                    className="bg-white border border-gray-200 rounded-2xl p-8 text-left hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-xl mb-4">
                      <Link
                        size={24}
                        className="text-red-500"
                        strokeWidth={2.5}
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 text-base mb-1">
                      Remote Access
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Keyword performance
                    </p>
                    <div className="w-10 h-1 bg-red-500 rounded-full mt-4"></div>
                  </div>

                  {/* Card 2 - Remote Desktop */}
                  <div
                    onClick={() => setActiveSlide(8)}
                    className="bg-white border border-gray-200 rounded-2xl p-8 text-left hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-100 rounded-xl mb-4">
                      <Monitor
                        size={24}
                        className="text-pink-500"
                        strokeWidth={2.5}
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 text-base mb-1">
                      Remote Desktop
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Category analysis
                    </p>
                    <div className="w-10 h-1 bg-pink-500 rounded-full mt-4"></div>
                  </div>

                  {/* Card 3 - Remote Support */}
                  <div
                    onClick={() => setActiveSlide(9)}
                    className="bg-white border border-gray-200 rounded-2xl p-8 text-left hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4">
                      <Headset
                        size={24}
                        className="text-green-500"
                        strokeWidth={2.5}
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 text-base mb-1">
                      Remote Support
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Competitive landscape
                    </p>
                    <div className="w-10 h-1 bg-green-500 rounded-full mt-4"></div>
                  </div>
                </div>

                {/* Bottom Row - 2 cards centered */}
                <div className="flex flex-wrap justify-center gap-6">
                  {/* Card 4 - Remote Connection */}
                  <div
                    onClick={() => setActiveSlide(10)}
                    className="bg-white border border-gray-200 rounded-2xl p-8 text-left hover:shadow-lg transition-shadow w-full md:w-[calc(33.333%-1rem)] cursor-pointer"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
                      <Wifi
                        size={24}
                        className="text-blue-500"
                        strokeWidth={2.5}
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 text-base mb-1">
                      Remote Connection
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Market analysis
                    </p>
                    <div className="w-10 h-1 bg-blue-500 rounded-full mt-4"></div>
                  </div>

                  {/* Card 5 - Secure Remote */}
                  <div
                    onClick={() => setActiveSlide(11)}
                    className="bg-white border border-gray-200 rounded-2xl p-8 text-left hover:shadow-lg transition-shadow w-full md:w-[calc(33.333%-1rem)] cursor-pointer"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-4">
                      <Compass
                        size={24}
                        className="text-purple-500"
                        strokeWidth={2.5}
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 text-base mb-1">
                      Secure Remote
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Positioning analysis
                    </p>
                    <div className="w-10 h-1 bg-purple-500 rounded-full mt-4"></div>
                  </div>
                </div>
              </div>

              {/* 5 Categories Label */}
              <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                5 Categories
              </p>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-8 flex flex-col relative">
              <div className="absolute top-0 right-0 z-10 flex bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() =>
                    setRemoteAccessMetric("totalKeywords")
                  }
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${remoteAccessMetric === "totalKeywords" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Total Keywords
                </button>
                <button
                  onClick={() =>
                    setRemoteAccessMetric("cumulativeTraffic")
                  }
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${remoteAccessMetric === "cumulativeTraffic" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Cumulative Traffic
                </button>
                <button
                  onClick={() =>
                    setRemoteAccessMetric("page1Keywords")
                  }
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${remoteAccessMetric === "page1Keywords" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Page 1 Keywords
                </button>
              </div>

              <CompetitorChart
                data={
                  remoteAccessMetric === "totalKeywords"
                    ? totalKeywordsRemoteAccessData
                    : remoteAccessMetric === "cumulativeTraffic"
                      ? cumulativeTrafficData
                      : page1RemoteAccessData
                }
                title={
                  remoteAccessMetric === "totalKeywords"
                    ? "Category Analysis"
                    : remoteAccessMetric === "cumulativeTraffic"
                      ? "Cumulative Traffic"
                      : "Page 1 Rankings"
                }
                unit=""
              />
            </div>
            <div className="lg:col-span-4 flex flex-col pt-6">
              <h3 className="text-[11px] font-bold tracking-widest text-gray-400 uppercase mb-4">
                Key Insights
              </h3>
              {remoteAccessMetric === "totalKeywords" ? (
                <>
                  <InsightCard
                    type="success"
                    icon={TrendingUp}
                    title="Splashtop's Competitive Coverage"
                    description="Keywords 399 → 380 (Oct–Jan, −4.8% ≈ −5%) — competitive with TeamViewer."
                  />
                  <InsightCard
                    type="warning"
                    icon={BarChart3}
                    title="AnyDesk's & TeamViewer Coverage"
                    description="AnyDesk 259 → 269 (+3.9%). TeamViewer 402 → 371 (−7.7%)"
                  />
                </>
              ) : remoteAccessMetric === "cumulativeTraffic" ? (
                <>
                  <InsightCard
                    type="success"
                    icon={TrendingUp}
                    title="Splashtop's Traffic Growth"
                    description="Traffic 1.5k→2.8k (Oct-Jan, +87%) strong keyword conversion growth."
                  />
                  <InsightCard
                    type="warning"
                    icon={BarChart3}
                    title="TeamViewer's Volatile Pattern"
                    description="TeamViewer volatile, peaks 5.8k in Nov and down to 4k in Jan."
                  />
                </>
              ) : (
                <>
                  <InsightCard
                    type="success"
                    icon={Target}
                    title="Splashtop's Page 1 Presence"
                    description="Page 1: 297→321 (Oct-Jan, +8%) competing with TeamViewer."
                  />
                  <InsightCard
                    type="success"
                    icon={Target}
                    title="TeamViewer's Consistent Leadership"
                    description="TeamViewer stable 336-330 (-1.8%). Splashtop growth challenges leadership."
                  />
                </>
              )}
            </div>
          </div>
        );

      case 8:
        return (
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-8 flex flex-col relative">
              <div className="absolute top-0 right-0 z-10 flex bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() =>
                    setRemoteDeskMetric("totalKeywords")
                  }
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${remoteDeskMetric === "totalKeywords" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Total Keywords
                </button>
                <button
                  onClick={() =>
                    setRemoteDeskMetric("cumulativeTraffic")
                  }
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${remoteDeskMetric === "cumulativeTraffic" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Cumulative Traffic
                </button>
                <button
                  onClick={() =>
                    setRemoteDeskMetric("page1Keywords")
                  }
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${remoteDeskMetric === "page1Keywords" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Page 1 Keywords
                </button>
              </div>

              <CompetitorChart
                data={
                  remoteDeskMetric === "totalKeywords"
                    ? totalKeywordsRemoteDeskData
                    : remoteDeskMetric === "cumulativeTraffic"
                      ? cumulativeTrafficRemoteDeskData
                      : page1RemoteDeskData
                }
                title={
                  remoteDeskMetric === "totalKeywords"
                    ? "Category Analysis"
                    : remoteDeskMetric === "cumulativeTraffic"
                      ? "Cumulative Traffic"
                      : "Page 1 Rankings"
                }
                unit=""
              />
            </div>
            <div className="lg:col-span-4 flex flex-col pt-6">
              <h3 className="text-[11px] font-bold tracking-widest text-gray-400 uppercase mb-4">
                Key Insights
              </h3>
              {remoteDeskMetric === "totalKeywords" ? (
                <>
                  <InsightCard
                    type="success"
                    icon={TrendingUp}
                    title="Splashtop's Category Leadership"
                    description="Splashtop 523 → 556 (+6%), leading category growth against TeamViewer."
                  />
                  <InsightCard
                    type="warning"
                    icon={BarChart3}
                    title="AnyDesk's Declining Coverage"
                    description="AnyDesk 588 → 512 (−13%), indicating declining keyword coverage."
                  />
                </>
              ) : remoteDeskMetric === "cumulativeTraffic" ? (
                <>
                  <InsightCard
                    type="success"
                    icon={TrendingUp}
                    title="Splashtop's Growing Traffic"
                    description="Traffic 1.0k→2.1k (Oct-Jan, +101%) volatile growth, healthy baseline."
                  />
                  <InsightCard
                    type="warning"
                    icon={BarChart3}
                    title="AnyDesk's Market Volatility"
                    description="Traffic spikes 6.3k in Nov and back to 3k in Jan. Splashtop stability creates opportunity."
                  />
                </>
              ) : (
                <>
                  <InsightCard
                    type="success"
                    icon={Target}
                    title="Splashtop's Exceptional Growth"
                    description="Page 1: 305→392 (Oct-Jan, +28%) strongest category performance."
                  />
                  <InsightCard
                    type="success"
                    icon={Target}
                    title="AnyDesk's Stable Leadership"
                    description="Keywords stable 356-366. Splashtop 305→392 closing the gap fast."
                  />
                </>
              )}
            </div>
          </div>
        );

      case 9:
        return (
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-8 flex flex-col relative">
              <div className="absolute top-0 right-0 z-10 flex bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() =>
                    setRemoteSupportMetric("totalKeywords")
                  }
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${remoteSupportMetric === "totalKeywords" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Total Keywords
                </button>
                <button
                  onClick={() =>
                    setRemoteSupportMetric("cumulativeTraffic")
                  }
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${remoteSupportMetric === "cumulativeTraffic" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Cumulative Traffic
                </button>
                <button
                  onClick={() =>
                    setRemoteSupportMetric("page1Keywords")
                  }
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${remoteSupportMetric === "page1Keywords" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Page 1 Keywords
                </button>
              </div>

              <CompetitorChart
                data={
                  remoteSupportMetric === "totalKeywords"
                    ? totalKeywordsRemoteSupportData
                    : remoteSupportMetric ===
                        "cumulativeTraffic"
                      ? cumulativeTrafficRemoteSupportData
                      : page1RemoteSupportData
                }
                title={
                  remoteSupportMetric === "totalKeywords"
                    ? "Category Analysis"
                    : remoteSupportMetric ===
                        "cumulativeTraffic"
                      ? "Cumulative Traffic"
                      : "Page 1 Rankings"
                }
                unit=""
                legendOrder={[
                  "splashtop",
                  "teamviewer",
                  "anydesk",
                  "beyondtrust",
                  "gotomypc",
                ]}
              />
            </div>
            <div className="lg:col-span-4 flex flex-col pt-6">
              <h3 className="text-[11px] font-bold tracking-widest text-gray-400 uppercase mb-4">
                Key Insights
              </h3>
              {remoteSupportMetric === "totalKeywords" ? (
                <>
                  <InsightCard
                    type="success"
                    icon={TrendingUp}
                    title="Splashtop's Stable Positioning"
                    description="Keywords 80→86 (Oct-Jan) matches TeamViewer, AnyDesk in this segment."
                  />
                  <InsightCard
                    type="warning"
                    icon={TrendingDown}
                    title="BeyondTrust's Dramatic Decline"
                    description="Keywords 104→73 (Oct-Jan, -30%)"
                  />
                </>
              ) : remoteSupportMetric ===
                "cumulativeTraffic" ? (
                <>
                  <InsightCard
                    type="success"
                    icon={TrendingUp}
                    title="Splashtop's Consistent Growth"
                    description="Traffic 506→880 (Oct-Jan, +74%) consistent growth, effective optimization."
                  />
                  <InsightCard
                    type="warning"
                    icon={BarChart3}
                    title="BeyondTrust's Volatility"
                    description="Traffic volatile 1.4k-604. Splashtop steady growth advantage."
                  />
                </>
              ) : (
                <>
                  <InsightCard
                    type="success"
                    icon={Target}
                    title="Splashtop's Page 1 Momentum"
                    description="Page 1: 64→80 (Oct-Jan, +25%) improving quality in support terms."
                  />
                  <InsightCard
                    type="success"
                    icon={Target}
                    title="TeamViewer's Steady Authority"
                    description="TeamViewer stable 83-74. Splashtop 64→80 builds momentum."
                  />
                </>
              )}
            </div>
          </div>
        );

      case 10:
        return (
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-8 flex flex-col relative">
              <div className="absolute top-0 right-0 z-10 flex bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() =>
                    setRemoteConnectionMetric("totalKeywords")
                  }
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${remoteConnectionMetric === "totalKeywords" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Total Keywords
                </button>
                <button
                  onClick={() =>
                    setRemoteConnectionMetric(
                      "cumulativeTraffic",
                    )
                  }
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${remoteConnectionMetric === "cumulativeTraffic" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Cumulative Traffic
                </button>
                <button
                  onClick={() =>
                    setRemoteConnectionMetric("page1Keywords")
                  }
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${remoteConnectionMetric === "page1Keywords" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Page 1 Keywords
                </button>
              </div>

              <CompetitorChart
                data={
                  remoteConnectionMetric === "totalKeywords"
                    ? totalKeywordsRemoteConnectionData
                    : remoteConnectionMetric ===
                        "cumulativeTraffic"
                      ? cumulativeTrafficRemoteConnectionData
                      : page1RemoteConnectionData
                }
                title={
                  remoteConnectionMetric === "totalKeywords"
                    ? "Category Analysis"
                    : remoteConnectionMetric ===
                        "cumulativeTraffic"
                      ? "Cumulative Traffic"
                      : "Page 1 Rankings"
                }
                unit=""
              />
            </div>
            <div className="lg:col-span-4 flex flex-col pt-6">
              <h3 className="text-[11px] font-bold tracking-widest text-gray-400 uppercase mb-4">
                Key Insights
              </h3>
              {remoteConnectionMetric === "totalKeywords" ? (
                <>
                  <InsightCard
                    type="success"
                    icon={TrendingUp}
                    title="Splashtop's Niche Presence"
                    description="Keywords 10→11 (Oct-Jan, +10%) stable niche presence for technical users."
                  />
                  <InsightCard
                    type="warning"
                    icon={BarChart3}
                    title="TeamViewer and AnyDesk Category Dominance"
                    description="TeamViewer 22 (stable) dominates this niche segment, while AnyDesk 20 → 19 (−5%) shows slight decline."
                  />
                </>
              ) : remoteConnectionMetric ===
                "cumulativeTraffic" ? (
                <>
                  <InsightCard
                    type="success"
                    icon={TrendingUp}
                    title="Splashtop's Exceptional Growth"
                    description="Traffic 26→49 (Oct-Jan, +88%) strongest category performance growth."
                  />
                  <InsightCard
                    type="warning"
                    icon={BarChart3}
                    title="TeamViewer's Traffic Instability"
                    description="Traffic volatile spikes 139-200 (Oct-Jan, +44%)."
                  />
                </>
              ) : (
                <>
                  <InsightCard
                    type="success"
                    icon={Target}
                    title="Splashtop's Quality Rankings"
                    description="Page 1: 7→8 (Oct-Jan, +14%) strong 70-80% ratio shows quality."
                  />
                  <InsightCard
                    type="success"
                    icon={Target}
                    title="TeamViewer and AnyDesk Page 1 Dominance"
                    description="TeamViewer 21 (stable) and AnyDesk 18 (stable) continue category leadership."
                  />
                </>
              )}
            </div>
          </div>
        );

      case 11:
        return (
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-8 flex flex-col relative">
              <div className="absolute top-0 right-0 z-10 flex bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() =>
                    setSecureRemoteMetric("totalKeywords")
                  }
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${secureRemoteMetric === "totalKeywords" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Total Keywords
                </button>
                <button
                  onClick={() =>
                    setSecureRemoteMetric("cumulativeTraffic")
                  }
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${secureRemoteMetric === "cumulativeTraffic" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Cumulative Traffic
                </button>
                <button
                  onClick={() =>
                    setSecureRemoteMetric("page1Keywords")
                  }
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${secureRemoteMetric === "page1Keywords" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Page 1 Keywords
                </button>
              </div>

              <CompetitorChart
                data={
                  secureRemoteMetric === "totalKeywords"
                    ? totalKeywordsSecureRemoteData
                    : secureRemoteMetric === "cumulativeTraffic"
                      ? cumulativeTrafficSecureRemoteData
                      : page1SecureRemoteData
                }
                title={
                  secureRemoteMetric === "totalKeywords"
                    ? "Category Analysis"
                    : secureRemoteMetric === "cumulativeTraffic"
                      ? "Cumulative Traffic"
                      : "Page 1 Rankings"
                }
                unit=""
              />
            </div>
            <div className="lg:col-span-4 flex flex-col pt-6">
              <h3 className="text-[11px] font-bold tracking-widest text-gray-400 uppercase mb-4">
                Key Insights
              </h3>
              {secureRemoteMetric === "totalKeywords" ? (
                <>
                  <InsightCard
                    type="success"
                    icon={Shield}
                    title="Splashtop's Security Leadership"
                    description="Keywords 17→18 (Oct-Jan, +6%) leads category, 2x TeamViewer (9-10)."
                  />
                  <InsightCard
                    type="warning"
                    icon={BarChart3}
                    title="Competitors data"
                    description="TeamViewer (10-9) (Oct-Jan) BeyondTrust 10-8 (Oct-Jan) trails Splashtop. AnyDesk 5→4 (Oct-Jan)."
                  />
                </>
              ) : secureRemoteMetric === "cumulativeTraffic" ? (
                <>
                  <InsightCard
                    type="success"
                    icon={TrendingUp}
                    title="Splashtop's Traffic Performance"
                    description="Traffic 235→374 (Oct-Jan, +59%)"
                  />
                  <InsightCard
                    type="warning"
                    icon={BarChart3}
                    title="BeyondTrust Dominance"
                    description="Traffic 711→859 (Oct-Jan, +21%)."
                  />
                </>
              ) : (
                <>
                  <InsightCard
                    type="success"
                    icon={Target}
                    title="Splashtop's Page 1 Dominance"
                    description="Page 1: 16→18 (Oct-Jan, +13%) 85-95% ratio, 3x TeamViewer presence."
                  />
                  <InsightCard
                    type="success"
                    icon={Target}
                    title="Other competitors"
                    description="BeyondTrust 9 → 8 and TeamViewer 5 (stable) remain significantly behind."
                  />
                </>
              )}
            </div>
          </div>
        );

      case 12:
        // AI Overview Metrics - Overview page with three cards
        return (
          <div className="flex-1 flex flex-col items-center justify-center px-8">
            <div className="w-full max-w-5xl mx-auto text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl mb-6">
                <Sparkles
                  size={32}
                  className="text-white"
                  strokeWidth={2.5}
                />
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
                AI Overview Visibility Metrics
              </h2>

              {/* Subtitle */}
              <p className="text-gray-500 text-base mb-12 max-w-2xl mx-auto">
                Comprehensive analysis of AI-powered search
                visibility and Google AI Overview performance
              </p>

              {/* Two Metrics Cards - Centered */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
                {/* Card 1: AI Overview Analysis */}
                <div
                  onClick={() => setActiveSlide(13)}
                  className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-gray-300 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-500 rounded-xl flex items-center justify-center mb-4">
                    <Activity
                      size={24}
                      className="text-white"
                      strokeWidth={2.5}
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    AI Overview Keywords
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Aggregate AI visibility scores
                  </p>
                  <div className="mt-4 h-1 w-12 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Card 2: AI Traffic Analysis */}
                <div
                  onClick={() => setActiveSlide(14)}
                  className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-gray-300 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                    <Eye
                      size={24}
                      className="text-white"
                      strokeWidth={2.5}
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    AI Overview Traffic
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Google AI snapshot metrics
                  </p>
                  <div className="mt-4 h-1 w-12 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Footer Label */}
              <div className="mt-8">
                <p className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase">
                  AI PERFORMANCE ANALYSIS
                </p>
              </div>
            </div>
          </div>
        );

      case 13:
        return (
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-8 flex flex-col relative">
              <div className="absolute top-0 right-0 z-10 flex bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => setAiType("keywords")}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${aiType === "keywords" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                >
                  AI Keywords
                </button>
                <button
                  onClick={() => setAiType("branded")}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${aiType === "branded" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Branded
                </button>
                <button
                  onClick={() => setAiType("nonBranded")}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${aiType === "nonBranded" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Non-Branded
                </button>
              </div>
              <CompetitorChart
                data={
                  aiType === "keywords"
                    ? aiKeywordsData
                    : aiType === "branded"
                      ? aiBrandedData
                      : aiNonBrandedData
                }
                title={
                  aiType === "keywords"
                    ? "AI Overview Keywords"
                    : aiType === "branded"
                      ? "AI Branded Analysis"
                      : "AI Non-Branded Analysis"
                }
                unit=""
              />
            </div>
            <div className="lg:col-span-4 flex flex-col pt-6">
              <h3 className="text-[11px] font-bold tracking-widest text-gray-400 uppercase mb-4">
                Key Insights
              </h3>
              {aiType === "keywords" ? (
                <>
                  <InsightCard
                    type="success"
                    icon={Sparkles}
                    title="Splashtop's AIO Keyword Growth"
                    description="1,117 → 1,764 (Oct–Jan, +58%), strongest growth rate among tracked competitors."
                  />
                  <InsightCard
                    type="warning"
                    icon={BarChart3}
                    title="TeamViewer's AIO Keyword Growth"
                    description="1,480 → 1,787 (Oct–Jan, +21%), steady growth"
                  />
                </>
              ) : aiType === "branded" ? (
                <>
                  <InsightCard
                    type="success"
                    icon={TrendingUp}
                    title="Splashtop's Branded AIO KWs Growth"
                    description="85 → 142 (Oct–Jan, +67%), strong improvement in AI Overview visibility for branded queries."
                  />
                  <InsightCard
                    type="warning"
                    icon={BarChart3}
                    title="TeamViewer's Branded AIO KWs Growth"
                    description="685 → 733 (Oct–Jan, +7%), slight growth while maintaining a significantly larger branded AIO footprint."
                  />
                </>
              ) : (
                <>
                  <InsightCard
                    type="success"
                    icon={Sparkles}
                    title="Splashtop's Non-Branded AIO KWs Growth"
                    description="1,032 → 1,622 (Oct–Jan, +57%), strong growth in AI Overview visibility across non-branded queries."
                  />
                  <InsightCard
                    type="success"
                    icon={BarChart3}
                    title="TeamViewer's Non-Branded AIO KWs Growth"
                    description="795 → 1,054 (Oct–Jan, +33%), steady growth, but at a slower pace than Splashtop."
                  />
                </>
              )}
            </div>
          </div>
        );

      case 14:
        return (
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-8 flex flex-col relative">
              <div className="absolute top-0 right-0 z-10 flex bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => setAiTrafficType("overall")}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${aiTrafficType === "overall" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                >
                  AI Traffic
                </button>
                <button
                  onClick={() => setAiTrafficType("branded")}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${aiTrafficType === "branded" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Branded
                </button>
                <button
                  onClick={() => setAiTrafficType("nonBranded")}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${aiTrafficType === "nonBranded" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Non-Branded
                </button>
              </div>
              <CompetitorChart
                data={
                  aiTrafficType === "overall"
                    ? aiTrafficData
                    : aiTrafficType === "branded"
                      ? aiTrafficBrandedData
                      : aiTrafficNonBrandedData
                }
                title={
                  aiTrafficType === "overall"
                    ? "AI Overview Traffic"
                    : aiTrafficType === "branded"
                      ? "AI Branded Traffic"
                      : "AI Non-Branded Traffic"
                }
                unit=""
              />
            </div>
            <div className="lg:col-span-4 flex flex-col pt-6">
              <h3 className="text-[11px] font-bold tracking-widest text-gray-400 uppercase mb-4">
                Key Insights
              </h3>
              {aiTrafficType === "overall" ? (
                <>
                  <InsightCard
                    type="success"
                    icon={TrendingUp}
                    title="Splashtop's AIO Traffic Growth"
                    description="4K → 11K (Oct–Jan, +175%), reflecting stronger visibility within AI-generated results."
                  />
                  <InsightCard
                    type="warning"
                    icon={BarChart3}
                    title="TeamViewer's AIO Traffic Growth"
                    description="9K → 8K (Oct–Jan, -11%), reflecting a decline in total AIO traffic."
                  />
                </>
              ) : aiTrafficType === "branded" ? (
                <>
                  <InsightCard
                    type="success"
                    icon={TrendingUp}
                    title="Splashtop's Branded Traffic Decline"
                    description="882 → 766 (Oct–Nov, -13.2%), slight decline in branded AIO traffic."
                  />
                  <InsightCard
                    type="warning"
                    icon={BarChart3}
                    title="TeamViewer's Branded AI Traffic Decline"
                    description="4K → 3K (Oct–Dec, -25%), sharper decline in branded AIO traffic."
                  />
                </>
              ) : (
                <>
                  <InsightCard
                    type="success"
                    icon={Sparkles}
                    title="Splashtop's Non-Branded AIO Traffic growth"
                    description="3K → 10K (Oct–Jan, +233%), strong increase in non-branded AIO-driven traffic."
                  />
                  <InsightCard
                    type="success"
                    icon={BarChart3}
                    title="TeamViewer's Non-Branded AIO Traffic growth"
                    description="5K → 4K (Oct–Jan, -20%), decline in non-branded AIO traffic."
                  />
                </>
              )}
            </div>
          </div>
        );

      case 15:
        // Backlink Competitive Analysis - Three metrics cards
        return (
          <div className="flex-1 flex flex-col items-center justify-center px-8">
            <div className="w-full max-w-5xl mx-auto text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-2xl mb-6">
                <Link
                  size={32}
                  className="text-white"
                  strokeWidth={2.5}
                />
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
                Backlink Competitive Analysis
              </h2>

              {/* Subtitle */}
              <p className="text-gray-500 text-base mb-12 max-w-2xl mx-auto">
                In-depth analysis of link-building performance
                and domain authority trends
              </p>

              {/* Three Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {/* Card 1 - Referring Domains */}
                <div
                  onClick={() => setActiveSlide(16)}
                  className="bg-white border border-gray-200 rounded-2xl p-8 text-left hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
                    <Link
                      size={24}
                      className="text-blue-500"
                      strokeWidth={2.5}
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    Referring Domains
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Total domain authority growth
                  </p>
                  <div className="w-10 h-1 bg-blue-500 rounded-full mt-4"></div>
                </div>

                {/* Card 2 - Backlink */}
                <div
                  onClick={() => setActiveSlide(16)}
                  className="bg-white border border-gray-200 rounded-2xl p-8 text-left hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-100 rounded-xl mb-4">
                    <Shield
                      size={24}
                      className="text-pink-500"
                      strokeWidth={2.5}
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    Backlink
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Domain rating distribution
                  </p>
                  <div className="w-10 h-1 bg-pink-500 rounded-full mt-4"></div>
                </div>
              </div>

              {/* Link Building Metrics Label */}
              <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                Link Building Metrics
              </p>
            </div>
          </div>
        );

      case 16:
        return (
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-8 flex flex-col relative">
              <div className="absolute top-0 right-0 z-10 flex bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => setAuthorityMetric("domains")}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${authorityMetric === "domains" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Referring Domains
                </button>
                <button
                  onClick={() =>
                    setAuthorityMetric("backlinks")
                  }
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${authorityMetric === "backlinks" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Backlinks
                </button>
              </div>
              <CompetitorChart
                data={
                  authorityMetric === "domains"
                    ? referringDomainsData
                    : backlinksData
                }
                title={
                  authorityMetric === "domains"
                    ? "Referring Domains Trend"
                    : "Backlinks Profile Trend"
                }
                unit={authorityMetric === "domains" ? "k" : "M"}
              />
            </div>
            <div className="lg:col-span-4 flex flex-col pt-6">
              <h3 className="text-[11px] font-bold tracking-widest text-gray-400 uppercase mb-4">
                Key Insights
              </h3>
              {authorityMetric === "domains" ? (
                <>
                  <InsightCard
                    type="success"
                    icon={Link}
                    title="Splashtop's Domain Growth"
                    description="15.9K → 17.1K (Oct–Jan, +7.3%), steady increase in linking domains."
                  />
                  <InsightCard
                    type="warning"
                    icon={BarChart3}
                    title="TeamViewer's Domain Decline"
                    description="124K → 117K (Oct–Jan, -5.4%), moderate reduction in domain base."
                  />
                </>
              ) : (
                <>
                  <InsightCard
                    type="success"
                    icon={Link}
                    title="Splashtop's Backlink Decline"
                    description="1.8M → 1.2M (Oct–Jan, -33%), significant decline in total backlinks."
                  />
                  <InsightCard
                    type="success"
                    icon={BarChart3}
                    title="TeamViewer's Backlink Decline"
                    description="18.8M → 11.1M (Oct–Jan, -41%), substantial backlink reduction over the same period."
                  />
                </>
              )}
            </div>
          </div>
        );

      case 17:
        // Competitive Insights - Intro slide with 2 cards
        return (
          <div className="flex-1 flex flex-col items-center justify-center px-8">
            <div className="w-full max-w-5xl mx-auto text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-6">
                <Search
                  size={32}
                  className="text-white"
                  strokeWidth={2.5}
                />
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 tracking-tight">
                Competitive Insights
              </h2>

              {/* Two Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-3xl mx-auto">
                {/* Card 1 - Content Gap */}
                <div
                  onClick={() => setActiveSlide(18)}
                  className="bg-white border border-gray-200 rounded-2xl p-8 text-left hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-100 rounded-xl mb-4">
                    <Compass
                      size={24}
                      className="text-cyan-500"
                      strokeWidth={2.5}
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    Content Gap
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Competitor content insights
                  </p>
                  <div className="w-10 h-1 bg-cyan-500 rounded-full mt-4"></div>
                </div>

                {/* Card 2 - Keyword Gap */}
                <div
                  onClick={() => setActiveSlide(19)}
                  className="bg-white border border-gray-200 rounded-2xl p-8 text-left hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-xl mb-4">
                    <Search
                      size={24}
                      className="text-orange-500"
                      strokeWidth={2.5}
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    Keyword Gap
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Strategic opportunities
                  </p>
                  <div className="w-10 h-1 bg-orange-500 rounded-full mt-4"></div>
                </div>
              </div>

              {/* Strategic Analysis Label */}
              <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                Strategic Analysis
              </p>
            </div>
          </div>
        );

      case 18:
        // Content Gap (Site Map Competitors)
        return <SiteMapCompetitorsSlide />;

      case 19:
        // Keyword Gap
        return <KeywordGapSlide />;

      case 20:
        // Competition Website Findings
        return <CompetitionWebsiteFindings />;

      case 21:
        // Thank You Slide
        return <ThankYouSlide />;

      default:
        return null;
    }
  };

  const getSlideTitle = () => {
    switch (activeSlide) {
      case 1:
        return "Table of Contents";
      case 2:
        return "Organic Traffic Overview";
      case 3:
        return "Organic Traffic Overview";
      case 4:
        return "Keyword Performance";
      case 5:
        return "Keyword Performance";
      case 6:
        return "Category-Wise Performance";
      case 7:
        return "Remote Access";
      case 8:
        return "Remote Desktop";
      case 9:
        return "Remote Support";
      case 10:
        return "Remote Connection";
      case 11:
        return "Secure Remote";
      case 12:
        return "AI Overview";
      case 13:
        return "AI Overview Keywords";
      case 14:
        return "AI Overview Traffic";
      case 15:
        return "Backlink Competitive Analysis";
      case 16:
        return "Competition Backlink Performance";
      case 17:
        return "Competitive Insights";
      case 18:
        return "Content Gap";
      case 19:
        return "Keyword Gap";
      case 20:
        return "Web Experience";
      case 21:
        return "Thank You";
      default:
        return "";
    }
  };

  const getSlideSubtitle = () => {
    switch (activeSlide) {
      case 1:
        return "";
      case 2:
        return "";
      case 3:
        return "Oct 2025 - Jan 2026";
      case 4:
        return "";
      case 5:
        return "Oct 2025 - Jan 2026";
      case 6:
        return "";
      case 7:
        return "Oct 2025 - Jan 2026";
      case 8:
        return "Oct 2025 - Jan 2026";
      case 9:
        return "Oct 2025 - Jan 2026";
      case 10:
        return "Oct 2025 - Jan 2026";
      case 11:
        return "Oct 2025 - Jan 2026";
      case 12:
        return "";
      case 13:
        return "Oct 2025 - Jan 2026";
      case 14:
        return "Oct 2025 - Jan 2026";
      case 15:
        return "";
      case 16:
        return "Oct 2025 - Jan 2026";
      case 17:
        return "";
      case 18:
        return "Key Insights & Strategic Actions";
      case 19:
        return "Strategic Opportunities";
      case 20:
        return "Strategic Observations from Competitor Websites";
      case 21:
        return "";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start font-sans text-gray-900">
      <div className="w-full h-screen bg-white overflow-hidden flex flex-col relative">
        <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col overflow-y-auto">
          {activeSlide !== 0 && activeSlide !== 21 && (
            <div className="mb-6 flex justify-between items-end">
              {activeSlide !== 1 ? (
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">
                    Slide {activeSlide} of {totalSlides}
                  </div>
                  {activeSlide !== 2 &&
                    activeSlide !== 4 &&
                    activeSlide !== 6 &&
                    activeSlide !== 12 &&
                    activeSlide !== 15 &&
                    activeSlide !== 17 &&
                    activeSlide !== 18 &&
                    activeSlide !== 19 &&
                    activeSlide !== 20 &&
                    activeSlide !== 21 && (
                      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 tracking-tight">
                        {getSlideTitle()}
                      </h1>
                    )}
                  <p className="text-gray-500 text-sm font-medium">
                    {getSlideSubtitle()}
                  </p>
                </div>
              ) : (
                <div />
              )}
              <div className="hidden md:flex gap-2 items-center">
                {activeSlide !== 1 && (
                  <button
                    onClick={() => setActiveSlide(1)}
                    className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                    title="Go to Table of Contents"
                  >
                    <Home size={16} />
                  </button>
                )}
                {activeSlide !== 1 &&
                  activeSlide !== 18 &&
                  activeSlide !== 19 &&
                  activeSlide !== 20 &&
                  activeSlide !== 21 && (
                    <div className="flex flex-col items-end mr-1">
                      {/* Source Text */}
                      <span className="text-xs text-gray-500 font-medium leading-tight">
                        Source:{" "}
                        {activeSlide >= 6 && activeSlide <= 11
                          ? "Ahrefs"
                          : "Semrush"}
                      </span>
                      
                      {/* Location Tag - Logic: If slide 16 "Worldwide", else "US" */}
                      <span className="text-[9px] font-semibold text-gray-600 bg-gray-100 border border-gray-200 px-1.5 rounded mt-0.5 leading-tight">
                        Location: {activeSlide === 16 || activeSlide === 15 ? "Worldwide" : "US"}
                      </span>
                    </div>
                  )}
                <button
                  onClick={() =>
                    setActiveSlide((prev) =>
                      Math.max(prev - 1, 0),
                    )
                  }
                  disabled={activeSlide === 0}
                  className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  onClick={() =>
                    setActiveSlide((prev) =>
                      Math.min(prev + 1, totalSlides - 1),
                    )
                  }
                  disabled={activeSlide === totalSlides - 1}
                  className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {renderContent()}
        </div>

        <div className="h-16 border-t border-gray-50 bg-white flex items-center justify-center relative">
          <div className="flex gap-2 items-center px-4 py-2 rounded-full bg-gray-50 border border-gray-100">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === activeSlide
                    ? "w-8 bg-blue-600"
                    : "w-1.5 bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setActiveSlide(i)}
              />
            ))}
          </div>

          <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2 text-xs text-gray-400 bg-white px-2">
            <span className="border border-gray-200 rounded px-1.5 py-0.5">
              Use
            </span>
            <div className="flex gap-1">
              <ArrowLeft size={12} />
              <ArrowRight size={12} />
            </div>
            <span>to navigate</span>
          </div>
        </div>
      </div>
    </div>
  );
}