export const navBarContentEng = {
  info: "News",
  rules: "Documents",
  election: "Elections",
  about: "About",
  contactus: "Contact Us",
  tartar: "State crimes",
  home: "Home",
  // admin: "Admin",
};
export const navBarContentAzn = {
  info: "İnformasiya",
  rules: "Sənədlər",
  election: "Seçkilər",
  about: "Haqqında",
  contactus: "Əlaqə",
  tartar: "Dövləti cinayətlər",
  home: "Ön səhifə",
  // admin: "Admin",
};

export const language = {
  az: Object.values(navBarContentAzn),
  en: Object.values(navBarContentEng),
};
export const newNavBarContent = [
  { ind: 0, infoaz: "İnformasiya", infoen: "News", url: "/news" },
  { ind: 1, infoaz: "Sənədlər", infoen: "Documents", url: "/documents" },
  { ind: 2, infoaz: "Seçkilər", infoen: "Elections", url: "/elections" },
  { ind: 3, infoaz: "Haqqında", infoen: "About", url: "/about" },
  { ind: 4, infoaz: "Əlaqə", infoen: "Contact Us", url: "/contact" },
  {
    ind: 5,
    infoaz: "Dövləti cinayətlər",
    infoen: "State crimes",
    url: "/tartar",
  },
  { ind: 7, infoaz: "Ön səhifə", infoen: "Home", url: "/home" },
];
export const documents = [
  {
    ind: 0,
    infoaz: "Bəyannamə | Etik kodeksi",
    infoen: "Statement | Code of ethics",
    url: "/documents/statement",
  },

  {
    ind: 2,
    infoaz: "Nizamnamələr | Reglament",
    infoen: "Statutes | Regulations",
    url: "/documents/regulations",
  },
];
export const statecrimes = [
  {
    ind: 0,
    infoaz: "Tərtər hadisələri",
    infoen: "Tartar events",
    url: "/tartar/ttorture",
  },
  {
    ind: 1,
    infoaz: "Nardaran hadisələri",
    infoen: "Nardaran events",
    url: "/tartar/nardaran",
  },
  {
    ind: 2,
    infoaz: "Gəncə hadisələri",
    infoen: "Ganzha events",
    url: "/tartar/ganzha",
  },
];
export const about = [
  {
    ind: 0,
    infoaz: "AzXP ilə tanışlıq",
    infoen: "About AzXP",
    url: "/about/aboutazxp",
  },
  {
    ind: 1,
    infoaz: "Təşəbbüs qrupu",
    infoen: "Initiative group",
    url: "/about/initiativegroup",
  },
  {
    ind: 2,
    infoaz: "Rəyasət Heyyəti",
    infoen: "Board of Directors",
    url: "/about/founders",
  },
  {
    ind: 3,
    infoaz: "Seçki Komissiyası",
    infoen: "Election commision",
    url: "/about/elccommision",
  },
  {
    ind: 4,
    infoaz: "İntizam Komissiyası",
    infoen: "Discipline commision",
    url: "/about/discipline",
  },
  {
    ind: 5,
    infoaz: "Hesablayıcı Komissiyası",
    infoen: "Counter commision",
    url: "/about/counterteam",
  },
  {
    ind: 7,
    infoaz: "Millət Vəkilləri",
    infoen: "Deputies",
    url: "/about/deputies/deputies2024",
  },
];
