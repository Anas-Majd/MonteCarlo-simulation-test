import States from "../../src/components/States";
import OptionsA from "../../src/pages/OptionsA";
import { CiLinkedin } from "react-icons/ci";
import { HiOutlineDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa6";

export const slides = [
  {
    id: 0,
    name: `0`,
    text: {
      ar: "جار الاتصال",
      en: "Dialing",
    },
  },
  {
    id: 1,
    name: `1`,
    text: {
      ar: "يا صاح ساعدني، انا في فحص وأمامي 10 اسئلة صح وخطأ أريدك أن تجيب عني",
      en: "Hey friend I need your help, I am faced with 10 true or false question. I need your help answering them",
    },
    type: "normal",
    buttons: OptionsA,
  },
  {
    id: 2,
    name: `2`,
    text: {
      ar: "شكرا يا صاح. لكن هل  برأيك يوجد نمط أو استراتيجية انتقاء للأجوبة أفضل من الأخرى علما أنه ليس لدي أي علم عن الإجابات الصحيحة",
      en: "Thanks, but I have to ask do you think that a superior strategy exists when I have no clue of what the answers are",
    },
    type: "normal",
    buttons: [
      {
        text: {
          ar: "لا اظن",
          en: "I don't think so",
        },
        class: "button-outline font-swissra font-bold mx-3 mb-10",
        add: `no`,
      },
      {
        text: {
          ar: "ممكن",
          en: "Maybe",
        },
        class: "button-19 font-swissra font-bold mx-3 mb-10",
        add: `yes`,
      },
    ],
  },
  {
    id: 3,
    name: `3-yes`,
    text: {
      ar: "هممم.. اذا برايك يوجد استراتيجية أضمن من العشوائية في الانتقاء عندما لا يوجد أي دليل على الإجابة الصحيحة؟",
      en: "So you believe there is a strategy that yields better outcomes compared to randomly guessing",
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
    name: `3-no`,
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
    name: `4-yes`,
    text: {
      ar: "لكن أليس كل سؤال مستقل عن الآخر في احتمالاته مما يعني انه كل جزء له احتمال مستقل؟",
      en: "but don't you think that every question has an independent probablity so it would not make sense to look at it as a whole? but we should apporach it as parts",
    },
    type: "normal",
    buttons: [
      {
        text: {
          ar: "ربما معك حق",
          en: "You have a point",
        },
        class: "button-19 font-swissra font-bold mx-3 mb-10",
      },
      {
        text: {
          ar: "منطقك خاطئ",
          en: "Your logic is faulty",
        },
        class: "button-outline font-swissra font-bold mx-3 mb-10",
      },
    ],
  },
  {
    id: 6,
    name: `4-no`,
    text: {
      ar: "أنا أعلم أن احتمال أن تكون الإجابة (صح) لكل سؤال هي 1/2 فنقول تقريبا أن 5 اسئلة من أصل عشرة ستكون إجابتها (صح) فإذا قمت بتوحيد اجابتي لصح فسأضمن تقريبا نصف العلامة",
      en: "I know that the probability of each answer being correct is 1/2. So, we can say that about 5 out of 10 questions will be correct. If I unify my answers to true, I'll guarantee about half the score. when compared to other guessing strategies none offer this insurance",
    },
    type: "normal",
    buttons: [
      {
        text: {
          ar: "ربما معك حق",
          en: "Your have a point",
        },
        class: "button-19 font-swissra font-bold mx-3 mb-10",
      },
      {
        text: {
          ar: "منطقك خاطئ",
          en: "Your logic is faluty",
        },
        class: "button-outline font-swissra font-bold mx-3 mb-10",
      },
    ],
  },
  {
    id: 7,
    name: `5`,
    text: {
      ar: "أظن أنه لن يمكننا الوصول لنتيجة أكيدة بهذا الشكل, نحن بحاجة إلى دليل حقيقي وتجريبي لذلك سنقوم بمحاكاة هذه التجربة باستخدام طريقة المونت كارلو",
      en: "I believe we Need to have actual evidence to end this debate, we will use emperical evidence which we will acquire from the monte carlo method ",
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
    id: 8,
    name: `6`,
    text: {
      ar: "طريقة المونت كارلو هي تقنية إحصائية نستخدمها لنرى النتائج المحتملة لتجربة ولحساب احتمال كل نتيجة منها",
      en: "The Monte Carlo method is a statistical technique we use to compute possible outcomes of an experiment and calculate its probability.",
    },
    type: "normal",
    buttons: [
      {
        text: {
          ar: "أين تستخدم ومن اخترعها",
          en: "What are it's implications and who invented it?",
        },
        class: "button-19 font-swissra font-bold mx-3 mb-10",
      },
    ],
  },
  {
    id: 9,
    name: `7`,
    text: {
      ar: "تستخدم في العديد من المجالات والبحوث سواء بالاقتصاد أو في الطب. تم تطويرها بواسطة أولام و فون نيومان (مخترع معمارية الحاسوب) في مشروع مانهاتن",
      en: "You will find it in most fields of research, it's used for analyzing complex systems and assessing risks. It was developed by Ulam and von Neumann (the inventor of modern computer architecture) in the Manhattan Project.",
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
    name: `8`,
    id: 10,
    text: {
      ar: "تعتمد هذه الطريقة على قدرات المعالج حيث تقوم بمحاكاة التجربة المقترحة على عدد كبير من المرات وتزويدنا بالنتائج, وفي حالتنا ستزودنا المحاكة بعدد الإجابات الصحيحة التي احرزتها كل استراتيجية وكم مرة تكرر حصولها على هذه النتائج",
      en: "Simply, this method uses the processor's capabilities to simulate the experiment a large number of times. the results help us assess the possible outcome. In our case, it will give us a data of how much each strategy scored and the frequency of that happening.",
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
    id: 11,
    name: `9`,
    text: {
      ar: "أمامك نتائج المحاكة التي قام بها جهازك واذا كان لديك فضول لمعرفة طريقة عمل هذه المحاكاة ستجدها في ورقة البحث المرفقة آخر الموقع. لاحظ معي أن كل الاستراتيجيات تولد نفس التوزيع ونفس الانحراف المعياري و نفس المتوسط أي نفس التوقع",
      en: "Here are the simulation results that your device performed. If you're curious about how it works, the research paper is available at the end of this site. Notice that all strategies generate the same distribution, the same standard deviation, and the same mean, which means the same expectation.",
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
    id: 12,
    name: `10`,
    text: {
      ar: "أي ببساطة جميع استراتيجيات التشليف متشابهة مع بعضها ما دمت جاهلاً الأجوبة",
      en: "Simply put all guessing methods yield the same expected outcome. As long as you we have no knowledge of the answers",
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
    id: 13,
    name: `11`,
    text: {
      ar: "لا تراهن على الحظ. وادرس . فهو الطريق الوحيد الذي أثبت فعاليته في زيادة فرصك",
      en: "That's why you shouldn't rely on luck. Go study. It's the only strategy that had proven itself.",
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
    id: 14,
    name: `12`,
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
