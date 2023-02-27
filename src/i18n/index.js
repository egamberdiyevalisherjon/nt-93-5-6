import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Locales
import uz from "./locale/uz.json";
import en from "./locale/en.json";

i18n.use(initReactI18next).init({
  resources: {
    en,
    uz,
  },
  lng: "en",
  fallbackLng: "en",
  languages: ["en", "uz"],
});
