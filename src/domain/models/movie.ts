export interface Movie {
  id: string;
  title: string;
  overview: string;
  imagePath: string;
  genres: string[];
  backdropImagePath: string;
  videoUrl?: string;
  budget: string;
  duration: number;
  relevance: number;
  logo: string;
}
