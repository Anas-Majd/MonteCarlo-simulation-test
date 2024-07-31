import States from "../../src/components/States";
import OptionsA from "../../src/pages/OptionsA";
import { CiLinkedin } from "react-icons/ci";
import { HiOutlineDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa6";

export const slides = [
  {
    id: 0,
    text: {
      ar: "جار الاتصال",
      en: "Dialing",
    },
  },
  {
    id: 1,
    text: {
      ar: "يا صاح ساعدني، انا بنص الفحص وبدي اشلف ال 10 اسئلة بحيث اضمن اعلى علامة، قلي شو اعمل؟ ",
      en: "No more questions! I'm in a test and need your help. I have 10 true/false questions. What's the best way to ace this?",
    },
    type: "normal",
    buttons: OptionsA,
  },
  {
    id: 2,
    text: {
      ar: "شكرا يا صاح بس هل في برأيك طريقة لأوصل لأفضل حل بالشلف؟ ",
      en: "Thanks, but there's no perfect strategy for guessing. My question was flawed.",
    },
    type: "normal",
    buttons: [
      {
        text: {
          ar: "لا اظن",
          en: "I don't think so",
        },
        class: "button-outline font-swissra font-bold mx-3 mb-10",
      },
      {
        text: {
          ar: "ممكن",
          en: "Maybe",
        },
        class: "button-19 font-swissra font-bold mx-3 mb-10",
      },
    ],
  },
  {
    id: 3,
    text: {
      ar: "كتير بيفكروا أنه إذا جاوبوا كل الأسئلة بنفس الطريقة، بيضمنوا نص العلامة. بس العشوائية ممكن تخليهم يغلطوا بكل شيء.",
      en: "Many think choosing all true or all false guarantees half correct. Random answers? You could get zero!",
    },
    type: "normal",
    buttons: [
      {
        text: {
          ar: "تابع",
          en: "continue",
        },
        class: "button-19 font-swissra font-bold mx-3 mb-10",
      },
    ],
  },
  {
    id: 4,
    text: {
      ar: "بس جهازك رح يثبت العكس! حيشغل محاكاة مونتي كارلو ويطلع لنا النتائج.",
      en: "But guess what? Your device will prove it wrong! It'll run a Monte Carlo simulation to show the results.",
    },
    type: "normal",
    buttons: [
      {
        text: {
          ar: "ما هي محاكاة مونتي كارلو",
          en: "what is Monte-Carlo Simulation",
        },
        class: "button-19 font-swissra font-bold mx-3 mb-10",
      },
    ],
  },
  {
    id: 5,
    text: {
      ar: "محاكاة مونتي كارلو، من ابتكار فون نويمان، تستخدم قوة جهازك لتوليد محاكاة عشوائية كتيرة لتقدير النتائج.",
      en: "Monte Carlo simulation, by von Neumann, uses your device's power for loads of random simulations to predict outcomes.",
    },
    type: "normal",
    buttons: [
      {
        text: {
          ar: "أرني النتائج",
          en: "Show me the results",
        },
        class: "button-19 font-swissra font-bold mx-3 mb-10",
      },
    ],
  },
  {
    id: 6,
    text: {
      ar: "شوف النتائج. كل استراتيجيات التخمين لها نفس التوزيع والانحراف المعياري والمتوسط. يعني نفس الشي!",
      en: "Here are the results. All guessing strategies? Same distribution, standard deviation, and mean. They're equal!",
    },
    type: "normal",
    states: States,
    buttons: [
      {
        text: {
          ar: "تابع",
          en: "continue",
        },
        class: "button-outline font-swissra font-bold my-4 ml-4",
      },
    ],
  },
  {
    id: 7,
    text: { ar: "طيب، شو هلق؟", en: "So, now what? Listen up..." },
    type: "important",
    buttons: [
      {
        text: {
          ar: "تابع",
          en: "continue",
        },
        class: "button-19 font-swissra font-bold mx-3 mb-10",
      },
    ],
  },
  {
    id: 8,
    text: {
      ar: "لا تراهن على الحظ. اشتغل بجد وادرس. ما في اختصارات!",
      en: "Don't gamble with your success. Do the hard work. Study. No shortcuts!",
    },
    type: "important",
    buttons: [
      {
        text: {
          ar: "تابع",
          en: "continue",
        },
        class: "button-19 font-swissra font-bold mx-3 mb-10",
      },
    ],
  },
  {
    id: 9,
    text: {
      ar: "",
      en: "Randomness is all around you, working against you. If you keep playing its game, you will eventually lose. Don't fall for the safety trap. Do the hard work. Study. Be virtuous. Be better than me.",
    },
    type: "final",
  },
];

export const finalButtons = [
  {
    href: "https://github.com/Anas-Majd/MonteCarlo-simulation-test",
    class: "button-outline flex justify-center",
    icon: FaGithub,
  },
  {
    href: "./assets/Evaluating_Guessing_Strategies_in_True_False_Tests_with_Unknown.pdf",
    class:
      "button-outline font-swissra font-bold flex items-center justify-center gap-2",
    icon: HiOutlineDownload,
    text: "research",
  },
  {
    href: "https://www.linkedin.com/in/majd-al-khalaf",
    class:
      "button-19 font-swissra font-bold flex justify-center items-center gap-2",
    icon: CiLinkedin,
    text: "Majd",
  },
  {
    href: "https://www.linkedin.com/in/anas-merstani-261ba81ab/",
    class:
      "button-19 font-swissra font-bold flex justify-center items-center gap-2",
    icon: CiLinkedin,
    text: "Anas",
  },
];
