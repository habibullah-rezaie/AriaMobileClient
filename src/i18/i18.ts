import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";

i18next
	.use(initReactI18next)
	.use(LanguageDetector)
	.use(I18NextHttpBackend)
	.init({
		fallbackLng: "en",
		saveMissing: true,
		debug: true,
	});
