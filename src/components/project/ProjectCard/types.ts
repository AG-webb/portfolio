export type ProjectCardProps = {
  imageUrl?: string;
  title: string;
  description: string;
  stack: string[];
  liveSiteUrl?: string;
  githubUrl?: string;
  isPrivate: boolean;
};