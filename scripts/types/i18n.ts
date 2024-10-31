export type Translation = {
   word: string;
   translation: string | null;
};

type Lang = 'en' | 'it';
export type Langs = Lang[];