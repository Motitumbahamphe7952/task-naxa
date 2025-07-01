// src/lib/translations.ts
import freelancerIcon from '../assets/freelancer.png'
import datacollectionIcon from '../assets/datacollection.png'
import workshopIcon from '../assets/workshop.png'

export interface Step {
  icon: string
  label: string
}

export interface LocaleStrings {
  data: string
  about: string
  login: string
  heroHeading: string
  heroSubHeading: string
  objectivesHeading: string
  objectivesSubHeading: string
  exploremapHeading: string
  exploremapButton: string
  datasourcetitle: string
  datasourceparagraph: string
  steps: Step[]              // ← add this
}
const translations: Record<'en'|'np', LocaleStrings> = {
  en: {
    data: "Data",
    about: "About",
    login: "Login",
    heroHeading:"Interactive digital portal of projects in Karnali Province of Nepal",
    heroSubHeading: "A digital portal to identify the enabling factors of the development supported by development partners in Karnali Province of Nepal.",
    objectivesHeading: "This portal is developed to identify the enabling factors of the development supported by development partners in Karnali Province of Nepal.",
    objectivesSubHeading: "In the last few years, there has been a huge concern among the civil societies, government and international development partners about improving the quality of the life of people in Karnali. Nepal government along with the support of donor countries and multilateral funding agencies has invested huge resources to the implementing development project through NGO/INGO and others. Many organizations including NGO/INGOs have spent a significant amount of resources towards assessing development initiatives through project intervention at provincial and municipal level. The focus of all these investments and efforts is to create the equitable prosperous society but such investment is not always based on the proper assessment of the local needs and expectations.",
    exploremapHeading: "Interactive digital portal of projects in Karnali Province of Nepal.",
    exploremapButton: "Explore Map",
    datasourcetitle: "Data Source",
    datasourceparagraph: "This portal is developed to identify the enabling factors of the development supported by development partners in Karnali Province of Nepal.",
    steps: [
  {
    icon: freelancerIcon,
    label: 'Identifying the key actors to operate Project Database Portal',
  },
  {
    icon: datacollectionIcon,
    label:
      'Collection of project related data from federal, provincial, & municipal levels & validate into Project Database Portal',
  },
  {
    icon: workshopIcon,
    label: 'Capacitate provincial & municipal officials to handle Project Database Portal',
  },
    ]
  },
  np: {
    data: "डाटा",
    about: "हाम्रोबारे",
    login: "लगइन",
    heroHeading:"नेपालको कर्णाली प्रदेश मा परियोजनाहरु को अन्तरक्रियात्मक डिजिटल पोर्टल",
    heroSubHeading: "नेपालको कर्णाली प्रदेश मा विकास साझेदार द्वारा समर्थित विकास को सक्षम कारकहरु पहिचान गर्न को लागि एक डिजिटल पोर्टल।",
    objectivesHeading: "यो पोर्टल कर्णाली प्रदेश मा विकास साझेदार द्वारा समर्थित विकास को सक्षम कारकहरु पहिचान गर्न को लागि विकास गरिएको हो।",
    objectivesSubHeading: "विगत केही वर्षदेखि कर्णालीका जनताको जीवनस्तरमा सुधार ल्याउन नागरिक समाज, सरकार र अन्तर्राष्ट्रिय विकास साझेदारहरूबीच ठूलो चासो छ । नेपाल सरकारले दातृ राष्ट्र र बहुपक्षीय कोषको सहयोगमा एनजीओ/आईएनजीओ लगायतका माध्यमबाट विकास आयोजना कार्यान्वयनमा ठूलो स्रोत लगानी गरेको छ । एनजीओ/आईएनजीओ लगायत धेरै संस्थाहरूले प्रादेशिक र नगरपालिका स्तरमा परियोजना हस्तक्षेप मार्फत विकास पहलहरूको मूल्याङ्कन गर्न ठूलो मात्रामा स्रोतहरू खर्च गरेका छन्। यी सबै लगानी र प्रयासको केन्द्रविन्दु समतामूलक समृद्ध समाज निर्माण गर्ने हो तर त्यस्तो लगानी सधैँ स्थानीय आवश्यकता र अपेक्षाको उचित मूल्याङ्कनमा आधारित हुँदैन ।",
    exploremapHeading: "नेपालको कर्णाली प्रदेशमा आयोजनाहरूको अन्तरक्रियात्मक डिजिटल पोर्टल।",
    exploremapButton: "मानचित्र अन्वेषण गर्नुहोस्",
    datasourcetitle: "डाटा स्रोत",
    datasourceparagraph: "यो पोर्टल कर्णाली प्रदेश मा विकास साझेदार द्वारा समर्थित विकास को सक्षम कारकहरु पहिचान गर्न को लागि विकास गरिएको हो।",
    steps: [
      {
        icon: freelancerIcon,
        label: 'परियोजना सूचना व्यवस्थापन प्रणाली ह्यान्डल गर्न प्रान्तीय र नगरपालिका अधिकारीहरूलाई सक्षम बनाउनुहोस्',
      },
      {
        icon: datacollectionIcon,
        label:
          'परियोजना सूचना व्यवस्थापन प्रणाली सञ्चालन गर्न मुख्य अभिनेताहरूको पहिचान',
      },
      {
        icon: workshopIcon,
        label: 'संघीय, प्रादेशिक र स्थानिय स्तरबाट परियोजना सम्बन्धित डाटा सङ्कलन र परियोजना सूचना व्यवस्थापन प्रणालीमा प्रमाणीकरण',
      },
    ]
  },
};

export default translations;
