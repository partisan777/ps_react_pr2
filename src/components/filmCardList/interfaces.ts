export interface FilmCardListProps {
    styles: string,
    films: Film[]
};

export type Film = {
    id: number,
    name: string,
    image: string,
    favorites: boolean,
    rating: number
};
