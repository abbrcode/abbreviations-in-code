export type Abbr = {
	abbrs: (
		| {
				abbr: string;
				context: never;
				degree: 'recommended' | 'not recommended';
		  }
		| {
				abbr: string;
				context: string;
				degree: 'context sensitive';
		  }
	)[];
	word: string;
};
