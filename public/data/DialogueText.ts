import States from "../../src/components/States";
import OptionsA from "../../src/pages/OptionsA";
import { CiLinkedin } from "react-icons/ci";
import { HiOutlineDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa6";

export const slides = [
  {
    id: `0`,
    text: {
      ar: "جار الاتصال",
      en: "Dialing",
    },
  },
  {
    id: `1`,
    text: {
      ar: "يا صاح ساعدني، انا بنص الفحص وبدي اشلف ال 10 اسئلة بحيث اضمن اعلى علامة، قلي شو اعمل؟ ",
      en: "No questions Asked! I'm in a test and I need your help. I have 10 true/false questions. What's the best way to ace this?",
    },
    type: "normal",
    buttons: OptionsA,
  },
  {
    id: `2`,
    text: {
      ar: "شكرا يا صاح بس هل في برأيك طريقة لأوصل لأفضل حل بالشلف؟ ",
      en: "Thanks, but do you think that an optimized answering pattern exists? one that would be a safer bet",
    },
    type: "normal",
    buttons: [
      {
        text: {
          ar: "لا اظن",
          en: "I don't think so",
        },
        class: "button-outline font-swissra font-bold mx-3 mb-10",
        add:`yes`
      },
      {
        text: {
          ar: "ممكن",
          en: "Maybe",
        },
        class: "button-19 font-swissra font-bold mx-3 mb-10",
        add:`no`
      },
    ],
  },
  {
    id: `3-yes`,
    //third
    answer: "yes",
    text: {
      ar: "هممم.. اذا برايك يوجد أستراتيجية أضمن من العشوائية عند الإجابة عندما لا يوجد أي دليل على الإجابة الصحيحة؟",
      en: "So you believe that a strategy that yields better outcome than randomizing exists?",
    },
    type: "normal",
    buttons: [
      {
        text: {
          ar: "بالتأكيد وما الغريب فيما أقوله",
          en: "absolutely",
        },
        class: "button-outline font-swissra font-bold mx-3 mb-10",
      },
    ],
  },
  {
    //third
    id: `3-no`,
    answer: "no",
    text: {
      ar: "هممم... ألا تظن أنه اذا وحدت أجوبتي أو اذا اتبعت نمطاً معينا سأضمن علامة أعلى؟",
      en: "Many think choosing all true or all false guarantees half correct. Random answers? You could get zero!",
    },
    type: "normal",
    buttons: [
      {
        text: {
          ar: "ما الذي يدفعك للتفكير بهذا الشكل؟",
          en: "continue",
        },
        class: "button-outline font-swissra font-bold mx-3 mb-10",
      },
    ],
  },
  {
    id: `4-yes`,
    answer: "yes",
    text: {
      ar: "إذا يوجد نمط اجابة معين سيعطينا توقع أكبر للنتائج المحتملة",
      en: "Many think choosing all true or all false guarantees half correct. Random answers? You could get zero!",
    },
    type: "normal",
    buttons: [
      {
        text: {
          ar: "بالتحديد",
          en: "continue",
        },
        class: "button-outline font-swissra font-bold mx-3 mb-10",
      },
    ],
  },
  {
    id: `4-no`,
    answer: "no",
    text: {
      ar: "أنا أعلم أن احتمال أن تكون الإجابة (صح) لكل سؤال هي 1/2 فنقول تقريبا أن 5 اسئلة من أصل عشرة ستكون إجابتها (صح) فإذا قمت بتوحيد اجابتي لصح فسأضمن تقريبا نص العلامة ",
      en: "Many think choosing all true or all false guarantees half correct. Random answers? You could get zero!",
    },
    type: "normal",
    buttons: [
      {
        text: {
          ar: "أقنعني كلامك",
          en: "I'm Convinced",
        },
        class: "button-19 font-swissra font-bold mx-3 mb-10",
      },
      {
        text: {
          ar: "منطقك خاطئ",
          en: "Logic is Wrong",
        },
        class: "button-outline font-swissra font-bold mx-3 mb-10",
      },
    ],
  },
  {
    id: `5`,
    text: {
      ar: "أظن أن وجهة نظرك مثيرة للأهتمام وتستحق التجربة , لذلك سنختبرها باستخدام طريقة المونتي كارلو",
      en: "But guess what? Your device will prove it wrong! It'll run a Monte Carlo simulation to show the results.",
    },
    type: "normal",
    buttons: [
      {
        text: {
          ar: "ماهي طريقة المونت كارلو",
          en: "what is Monte-Carlo Simulation",
        },
        class: "button-19 font-swissra font-bold mx-3 mb-10",
      },
    ],
  },
  {
    id: `6`,
    text: {
      ar: "طريقة المونت كارلو هي تقنية إحصائية نستخدمها لنرى النتائج المحتملة لتجربة ولحساب توقع كل نتيجة منها  ",
      en: "But guess what? Your device will prove it wrong! It'll run a Monte Carlo simulation to show the results.",
    },
    type: "normal",
    buttons: [
      {
        text: {
          ar: "أين تُستخدم ومن اخترعها",
          en: "what is Monte-Carlo Simulation",
        },
        class: "button-19 font-swissra font-bold mx-3 mb-10",
      },
    ],
  },
  {
    id: `7`,
    text: {
      ar: "حتلاقيها بأغلب المجالات والبحوث، لتحليل الأنظمة المعقدة وتقدير المخاطر. تم تطويرها بواسطة أولام و فون نيومان (مخترع بنيان الحاسوب) في مشروع مانهاتن مع اوبنهايمر",
      en: "Monte Carlo simulation, by von Neumann, uses your device's power for loads of random simulations to predict outcomes.",
    },
    type: "normal",
    buttons: [
      {
        text: {
          ar: "ما آلية عملها ؟",
          en: "Show me the results",
        },
        class: "button-outline font-swissra font-bold mx-3 mb-10",
      },
    ],
  },
  {
    id: `8`,
    text: {
      ar: " ببساطة تقوم هذه الطريقة بالاستفادة من قدرات المعالج لتقوم بمحاكاة التجربة المقترحة على عدد كبير من المرات وتكون نتائجها مشابهة للنتائج الحقيقية وفي حالتنا ستعطينا توزيع للنتائج وكم مرة تكررت ",
      en: "Here are the results. All guessing strategies? Same distribution, standard deviation, and mean. They're equal!",
    },
    type: "normal",
    buttons: [
      {
        text: {
          ar: "أرني نتائج المحاكاة",
          en: "continue",
        },
        class: "button-outline font-swissra font-bold mb-10",
      },
    ],
  },
  {
    id: `9`,
    text: {
      ar: "أمامك نتائج المحاكة التي قام بها جهازك واذا كان لديك فضول لمعرفة آلية عملها فهي موجودة في البحث الموجود آخر الموقع. لاحظ معي أن كل الاستارتيجيات تولد نفس التوزيع ونفس الانحراف المعياري و نفس المتوسط أي نفس التوقع",
      en: "Many think choosing all true or all false guarantees half correct. Random answers? You could get zero!",
    },
    type: "normal",
    states: States,
    buttons: [
      {
        text: {
          ar: "تابع",
          en: "continue",
        },
        class: "button-outline font-swissra font-bold ml-4 my-4",
      },
    ],
  },
  {
    id: `10`,
    text: {
      ar: "ولأنو نفس التوقع، فهي التجربة على عدد اسئلة كبير اي طريقة شلف هي متشابهة",
      en: "So, now what? Listen up...",
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
    id: `11`,
    text: {
      ar: " مشان هيك لا تراهن على الحظ. اشتغل بجد وادرس. ما في اختصارات والشلف ما بيشتغل",
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
    id: `12`,
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
    text: "Research",
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
