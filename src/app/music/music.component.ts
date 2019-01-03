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
    selectedAlbum: Album;


    constructor(private financeService: FinanceService) {

    }

    getAlbums(): void {
        this.financeService.getAlbums().subscribe(albums => {
            this.albums = albums.sort((a: Album, b: Album) => {
                if (a.year === b.year) {
                    return 0;
                }
                return b.year - a.year > 0 ? 1 : -1;
            });
            albums[0].selected = true;
            this.selectedAlbum = albums[0];
        });
    }

    selectAlbum(album): void {
        album.selected = !album.selected;
         this.selectedAlbum.selected = !this.selectedAlbum.selected;
        if (album.selected) {
            this.selectedAlbum = album;
        }
    }


ngOnInit() {
    this.getAlbums();
}

}
