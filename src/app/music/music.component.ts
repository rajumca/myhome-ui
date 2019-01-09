import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../finance.service';
import { Album } from '../album';

@Component({
    selector: 'app-music',
    templateUrl: './music.component.html',
    styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

    albums: Array<Album>;

    currentAlbums: Array<Album>;

    selectedAlbum: Album;




    constructor(private financeService: FinanceService) {

    }

    getAlbums(): void {
        this.financeService.getAlbums().subscribe(albums => {
            this.albums = albums;
            this.currentAlbums = albums.sort((a: Album, b: Album) => {
                if (a.year === b.year) {
                    return 0;
                }
                return b.year - a.year > 0 ? 1 : -1;
            });
            this.currentAlbums[0].selected = true;
            this.selectedAlbum = this.currentAlbums[0];
        });
    }

    selectAlbum(album): void {
        album.selected = !album.selected;
        this.selectedAlbum.selected = !this.selectedAlbum.selected;
        if (album.selected) {
            this.selectedAlbum = album;
        }
    }

    sort(field) {
        if (field === 'year') {
            this.sortByYear();
        } else {
            this.sortByName();
        }
    }
    sortByYear(): void {
        this.currentAlbums = this.currentAlbums.sort((a: Album, b: Album) => {
            if (a.year === b.year) {
                return 0;
            }
            return b.year - a.year > 0 ? 1 : -1;
        });
    }
    sortByName(): void {
        this.currentAlbums = this.currentAlbums.sort((a: Album, b: Album) => {
            if (a.name === b.name) {
                return 0;
            }
            return a.name.localeCompare(b.name);
        });
    }
    ngOnInit() {
        this.getAlbums();
    }


}
