import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        Dashboard: "Dashboard",
        Default: "Default",
        Analytics: "Analytics",
        Invoice: "Invoice",
        CRM: "CRM",
        Blogs: "Blogs",
        Applications: "Applications",
        Users: "Users",
        "Social Profile": "Social Profile",
        "Profile 01": "Profile 01",
        "Profile 02": "Profile 02",
        "Profile 03": "Profile 03",
        Home: "Home",
        Search: "Search"
      },
    },
    fr: {
      translation: {
        Dashboard: "Tableau de bord",
        Default: "Par défaut",
        Analytics: "Analytique",
        Invoice: "Facture",
        CRM: "CRM",
        Blogs: "Blogs",
        Applications: "Applications",
        Users: "Utilisateurs",
        "Social Profile": "Profil social",
        "Profile 01": "Profil 01",
        "Profile 02": "Profil 02",
        "Profile 03": "Profil 03",
        Home: "Accueil",
        Search: "Recherche"
      },
    },
    ro: {
      translation: {
        Dashboard: "Panou de control",
        Default: "Implicit",
        Analytics: "Analiză",
        Invoice: "Factura",
        CRM: "CRM",
        Blogs: "Bloguri",
        Applications: "Aplicații",
        Users: "Utilizatori",
        "Social Profile": "Profil social",
        "Profile 01": "Profil 01",
        "Profile 02": "Profil 02",
        "Profile 03": "Profil 03",
        Home: "Acasă",
        Search: "Căutare"
      },
    },
    zh: {
      translation: {
        Dashboard: "仪表板",
        Default: "默认",
        Analytics: "分析",
        Invoice: "发票",
        CRM: "客户关系管理",
        Blogs: "博客",
        Applications: "应用程序",
        Users: "用户",
        "Social Profile": "社交资料",
        "Profile 01": "资料 01",
        "Profile 02": "资料 02",
        "Profile 03": "资料 03",
        Home: "首页",
        Search: "搜索"
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
