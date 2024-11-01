export type Abbr = {
   abbrs: ({
      abbr: string;
      context: never;
      degree: "green" | "red";
   } | {
      abbr: string;
      degree: "yellow";
      context: string,
   })[],
   word: string;
};