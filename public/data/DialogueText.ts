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
      ar: "يا صاح ساعدني، انا بنص الفحص وبدي اشلف ال 10 اسئلة بحيث اضمن اعلى علامة، قلي شو اعمل؟",
      en: "Hey friend, help me out. I'm in the middle of a test and I need to answer 10 questions to guarantee the highest score. What should I do?",
    },
    type: "normal",
    buttons: OptionsA,
  },
  {
    id: 2,
    text: {
      ar: "شكرا يا صاح بس هل في برأيك طريقة لأوصل لأفضل حل بالشلف؟",
      en: "Thanks, but do you think there is a way to find the best guessing strategy?",
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
    id: 3,
    answer: "yes",
    text: {
      ar: "هممم.. اذا برايك يوجد استراتيجية أضمن من العشوائية عند الإجابة عندما لا يوجد أي دليل على الإجابة الصحيحة؟",
      en: "So you believe that a strategy that yields better outcomes than random guessing exists",
    },
    type: "normal",
    buttons: [
      {
        text: {
          ar: "بالتأكيد وما الغريب فيما أقوله",
          en: "Absolutely, what's strange about that?",
        },
        class: "button-outline font-swissra font-bold mx-3 mb-10",
      },
    ],
  },
  {
    id: 4,
    answer: "no",
    text: {
      ar: "هممم... ألا تظن أنه اذا وحدت أجوبتي أو اذا اتبعت نمطاً معينا سأضمن علامة أعلى؟",
      en: "Hmm... Don't you think that if I unified my answers or followed a certain pattern, I would get a higher score?",
    },
    type: "normal",
    buttons: [
      {
        text: {
          ar: "لماذا تظن ذلك",
          en: "Why do you think so?",
        },
        class: "button-outline font-swissra font-bold mx-3 mb-10",
      },
    ],
  },
  {
    id: 5,
    answer: "yes",
    text: {
      ar: "إذا يوجد نمط اجابة معين سيعطينا توقع أكبر للنتائج المحتملة",
      en: "So, there is a specific answering pattern that would give us a better expectation of possible results?",
    },
    type: "normal",
    buttons: [
      {
        text: {
          ar: "بالتحديد",
          en: "Exactly",
        },
        class: "button-outline font-swissra font-bold mx-3 mb-10",
      },
    ],
  },
  {
    id: 6,
    answer: "no",
    text: {
      ar: "أنا أعلم أن احتمال أن تكون الإجابة (صح) لكل سؤال هي 1/2 فنقول تقريبا أن 5 اسئلة من أصل عشرة ستكون إجابتها (صح) فإذا قمت بتوحيد اجابتي لصح فسأضمن تقريبا نص العلامة",
      en: "I know that the probability of each answer being correct is 1/2. So, we can say that about 5 out of 10 questions will be correct. If I unify my answers to true, I'll guarantee about half the score.",
    },
    type: "normal",
    buttons: [
      {
        text: {
          ar: "أقنعني كلامك",
          en: "Your argument convinced me",
        },
        class: "button-19 font-swissra font-bold mx-3 mb-10",
      },
      {
        text: {
          ar: "منطقك خاطئ",
          en: "Your logic is wrong",
        },
        class: "button-outline font-swissra font-bold mx-3 mb-10",
      },
    ],
  },
  {
    id: `5`,
    text: {
      ar: "أظن أن وجهة نظرك مثيرة للأهتمام وتستحق التجربة , لذلك سنختبرها باستخدام طريقة المونتي كارلو",
      en: "I think your viewpoint is interesting and worth testing. So, we'll test it using the Monte Carlo method.",
    },
    type: "normal",
    buttons: [
      {
        text: {
          ar: "ماهي طريقة المونت كارلو",
          en: "What is the Monte Carlo method?",
        },
        class: "button-19 font-swissra font-bold mx-3 mb-10",
      },
    ],
  },
  {
    id: `6`,
    text: {
      ar: "طريقة المونت كارلو هي تقنية إحصائية نستخدمها لنرى النتائج المحتملة لتجربة ولحساب توقع كل نتيجة منها",
      en: "The Monte Carlo method is a statistical technique we use to see the possible outcomes of an experiment and calculate the expectation of each result.",
    },
    type: "normal",
    buttons: [
      {
        text: {
          ar: "أين تستخدم ومن اخترعها",
          en: "Where is it used and who invented it?",
        },
        class: "button-19 font-swissra font-bold mx-3 mb-10",
      },
    ],
  },
  {
    id: `7`,
    text: {
      ar: "حتلاقيها بأغلب المجالات والبحوث، لتحليل الأنظمة المعقدة وتقدير المخاطر. تم تطويرها بواسطة أولام و فون نيومان (مخترع بنيان الحاسوب) في مشروع مانهاتن مع اوبنهايمر",
      en: "You will find it in most fields and research, for analyzing complex systems and assessing risks. It was developed by Ulam and von Neumann (the inventor of computer architecture) in the Manhattan Project.",
    },
    type: "normal",
    buttons: [
      {
        text: {
          ar: "ما آلية عملها ؟",
          en: "How does it work?",
        },
        class: "button-outline font-swissra font-bold mx-3 mb-10",
      },
    ],
  },
  {
    id: `8`,
    text: {
      ar: "ببساطة تقوم هذه الطريقة بالاستفادة من قدرات المعالج لتقوم بمحاكاة التجربة المقترحة على عدد كبير من المرات وتكون نتائجها مشابهة للنتائج الحقيقية وفي حالتنا ستعطينا توزيع للنتائج وكم مرة تكررت",
      en: "Simply, this method uses the processor's capabilities to simulate the proposed experiment a large number of times. Its results are similar to the real outcomes, and in our case, it will give us a distribution of results and how many times each result occurred.",
    },
    type: "normal",
    buttons: [
      {
        text: {
          ar: "أرني نتائج المحاكاة",
          en: "Show me the simulation results",
        },
        class: "button-outline font-swissra font-bold mb-10",
      },
    ],
  },
  {
    id: `9`,
    text: {
      ar: "أمامك نتائج المحاكة التي قام بها جهازك واذا كان لديك فضول لمعرفة آلية عملها فهي موجودة في البحث الموجود آخر الموقع. لاحظ معي أن كل الاستراتيجيات تولد نفس التوزيع ونفس الانحراف المعياري و نفس المتوسط أي نفس التوقع",
      en: "Here are the simulation results that your device performed. If you're curious about how it works, the research is available at the end of the site. Notice that all strategies generate the same distribution, the same standard deviation, and the same mean, which means the same expectation.",
    },
    type: "normal",
    states: States,
    buttons: [
      {
        text: {
          ar: "تابع",
          en: "Continue",
        },
        class: "button-outline font-swissra font-bold ml-4 my-4",
      },
    ],
  },
  {
    id: `10`,
    text: {
      ar: "ولأنو نفس التوقع، فهي التجربة على عدد اسئلة كبير وقتها اي طريقة شلف هي متشابهة",
      en: "And because the expectation is the same, when the experiment involves a large number of questions, any guessing method is similar.",
    },
    type: "important",
    buttons: [
      {
        text: {
          ar: "رواق",
          en: "nice",
        },
        class: "button-outline font-swissra font-bold mx-3 mb-10",
      },
    ],
  },
  {
    id: `11`,
    text: {
      ar: "مشان هيك لا تراهن على الحظ. اشتغل بجد وادرس. ما في اختصارات والشلف ما بيشتغل",
      en: "That's why you shouldn't rely on luck. Work hard and study. There are no shortcuts, and guessing doesn't work.",
    },
    type: "important",
    buttons: [
      {
        text: {
          ar: "مين عمل هالمشروع",
          en: "Who made this project?",
        },
        class: "button-outline font-swissra font-bold mx-3 mb-10",
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
