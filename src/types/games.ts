export type GameProps = {
  id: number;
  title: string;
  description: string;
  image_url: string;
  platforms: string[];
  categories: string[];
  release: string;
};

export type GameList = GameProps[];