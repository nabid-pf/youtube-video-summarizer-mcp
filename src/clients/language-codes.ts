export const languageCodes: readonly string[] = [
  "en", "es", "fr", "de", "zh", "zh-TW", "ja", "ko", "ru", "ar",
  "pt", "it", "nl", "hi", "bn", "tr", "vi", "he", "th", "el",
  "pl", "sv", "cs", "hu", "fi"
] as const;

export const isLanguageCodeValid = (code: string | undefined): boolean => {
  if (!code) {
    return false;
  }
  return languageCodes.includes(code);
};
