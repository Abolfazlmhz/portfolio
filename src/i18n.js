import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      home: {
        mainpage: "Home page",
        home1: "Hi, I'm Abolfazl",
        home2: "Front-end Developer",
      },
      about_me: {
        about_me_title: "About Me",
        about_me_discribe:
          "Welcome to my personal page! I am Abolfazl Mohammadizadeh, a computer engineering student at Shahid Rajaee Teacher Training University. I was born in 2005 in Shiraz and reside in Marvdasht, Fars Province. After completing my elementary education, I entered Shahid Dastgheib High School in Marvdasht in 2020, where I spent my high school years, including the COVID-19 pandemic period. Following that and the end of the pandemic, I seriously focused on preparing for the university entrance exam. In 2023, I was admitted to Shahid Rajaee University with a regional rank of 217. After some time, a bit of trial and error, and completing introductory courses, I seriously started learning front-end development in 2024, and I am currently expanding my knowledge in this field.",
        skills: "Skills",
        timeline: {
          middle_school_age: "Age 12 to 15",
          middle_school: "Middle School",
          middle_school_name: "Shohadaye Azmayesh Middle School, Marvdasht",
          high_school_age: "Age 15 to 18",
          high_school: "High School",
          high_school_name: "Shahid Dastgheib High School, Marvdasht",
          university_age: "Age 18 to Present",
          university: "University",
          university_name: "Shahid Rajaee Teacher Training University",
          programming_start: "From 2024",
          programming: "Programming",
          programming_desc: "Serious programming start",
        },
      },
      projects: {
        projects: "Projects",
        showmore: "More",
        showingithub: "View on GitHub",
        booklist: "Booklist",
        booklistdiscribe:
          "This library is designed with basic React, featuring the ability to add, edit, and delete books, along with server interaction, in both light and dark themes.",
        portfolio: "Portfolio",
        portfoliodescribe:
          "This portfolio is designed to showcase personal information using React and MUI, featuring both light and dark themes. The project includes sections for Home, About Me, Projects, and Contact Me.",
        dooz: "DoozTic-tac-toe",
        doozdescribe: "A simple and basic C++ project",
        fulldescribtion: "Full description",
        close: "close",
      },
      contact: {
        contactme: "Contact Me",
        adress: "My Social Media Links",
        callme: "You can contact me via social media or the email below.",
        email: "Send email",
        github: "Github",
        telegram: "Telegram",
        instagram: "Instagram",
      },
      sidebar: {
        web: "Portfolio Website",
        myname: "Abolfazl Mohammadi Zadeh",
        theme: "Switch theme",
        lang: "Switch language",
      },
    },
  },
  fa: {
    translation: {
      home: {
        mainpage: "صفحه اصلی",
        home1: "سلام، من ابوالفضل هستم.",
        home2: "توسعه‌ دهنده‌ی فرانت‌ اند",
      },
      about_me: {
        about_me_title: "درباره‌ی من",
        about_me_discribe:
          " سلام به صفحه شخصی من خوش اومدید! من ابوالفضل محمدی زاده هستم دانشجوی مهندسی کامپیوتر دانشگاه تربیت دبیر شهید رجایی. متولد ۱۳۸۴ در شیراز هستم و ساکن مرودشت در استان فارس هستم. بعد از گذراندن مراحل ابتدایی در سال ۱۳۹۹ وارد دبیرستان شهید دستغیب مرودشت شدم و دوران کرونا و هم در این مدرسه گذراندم پس از آنها و پایان کرونا به شکل جدی در مدرسه به بحث کنکور پرداختم و در کنکور ۱۴۰۲ با رتبه ۲۱۷ منطقه در دانشگاه شهید رجایی پذیرفته شدم. بعد از مدتی و پس از کمی آزمون و خطا و گذراندن دروس مقدماتی در سال ۱۴۰۳ به شکل جدی یادگیری فرانت اند را شروع کردم و در حال حاضر در حال تکمیل آموخته های خود در این عرصه می باشم.",
        skills: "مهارت‌ها",
        timeline: {
          middle_school_age: "۱۲ تا ۱۵ سالگی",
          middle_school: "راهنمایی",
          middle_school_name: "مدرسه شهدای آزمایش مرودشت",
          high_school_age: "۱۵ تا ۱۸ سالگی",
          high_school: "دبیرستان",
          high_school_name: "دبیرستان شهید دستغیب مرودشت",
          university_age: "۱۸ سالگی تا کنون",
          university: "دانشگاه",
          university_name: "دانشگاه تربیت دبیر شهید رجایی",
          programming_start: "از سال ۱۴۰۳",
          programming: "برنامه نویسی",
          programming_desc: "شروع جدی برنامه نویسی",
        },
      },
      projects: {
        projects: "پروژه ها",
        showmore: "نمایش بیشتر",
        showingithub: "مشاهده در گیت هاب",
        booklist: "کتابخانه",
        booklistdiscribe:
          "این کتابخانه با قابلیت افزودن، ویرایش و حذف کتاب و کار با سرور در دو تم روشن و تاریک با ری اکت ابتدایی طراحی شده است.",
        portfolio: "پورتفولیو",
        portfoliodescribe:
          "این پورتفولیو با هدف معرفی شخصی با استفاده از ری اکت و MUi در دو تم روشن و تاریک طراحی شده است. این پروژه دارای بخش های صفحه اصلی درباره من پروژه ها و ارتباط با من می باشد.",
        dooz: "دوز",
        doozdescribe: "یک پروژه ساده و ابتدایی با c++",
        fulldescribtion: "توضیحات کامل",
        close: "بستن",
      },
      contact: {
        contactme: "ارتباط با من",
        adress: "شبکه های اجتماعی من",
        callme:
          "شما می‌توانید از طریق شبکه‌های اجتماعی یا ایمیل زیر با من تماس بگیرید.",
        email: " ارسال ایمیل",
        github: "گیت‌ هاب",
        telegram: "تلگرام",
        instagram: "اینستاگرام",
      },
      sidebar: {
        web: "وبسایت شخصی",
        myname: "ابوالفضل محمدی زاده",
        theme: "تغییر تم",
        lang: "تغییر زبان",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "fa",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
