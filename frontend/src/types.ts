export type Member = {
  id: string;
  name: string;
  websiteUrl?: string;
  shortenedUrl: string;
  headings?: string[];
  friends?: Member[];
};
