import i18next from "i18next";
import en from "#app/locales/en";

export async function initI18n(): Promise<void> {
  await i18next.init({
    lng: "en",
    fallbackLng: "en",
    resources: {
      en: {
        translation: en,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });
}

export { i18next as i18n };
