type Lang = 'en' | 'it';

export type Langs = Lang[];

export type Translation = {
	word: string;
	translation: string | null;
};
