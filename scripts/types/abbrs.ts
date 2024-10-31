export type Abbr = {
   abbrs: {
      abbr: string;
      context: never;
      degree: "green" | "red";
   }[],
   word: string;
} | {
   abbrs: {
      abbr: string;
      context: string;
      degree: "yellow";
   }[];
   word: string;
};