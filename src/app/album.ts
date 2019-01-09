import { Song } from './song';

export class Album {
    name: string;
    year: number;
    selected: boolean;
    songs: Array<Song>;
    accessed: number;
    rating: number;
    composer: string;
    path: string;
}
