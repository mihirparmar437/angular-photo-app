import { Component, OnInit } from '@angular/core';
import { PhotoService } from './services/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  photos: any[] = [];
  isLoading: boolean = false;
  error: any;

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.isLoading = true;
    this.photoService.getPhotos().subscribe(
      (data) => {
        this.photos = data;
        this.isLoading = false;
      },
      (error) => {
        this.error = error;
        this.isLoading = false;
      }
    );
  }
}
