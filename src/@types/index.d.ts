export type ButtonProps = {
  title: string;
};

export type PainProps = {
  id: number;
  title: string;
  description: string;
};

export type RatingProps = {
  id?: number;
  img: string;
  name: string;
  review: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

export interface SolutionInterface {
  id: number;
  imgPath: string;
  title: string;
  description: string;
}