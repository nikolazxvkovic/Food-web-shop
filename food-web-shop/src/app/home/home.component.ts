import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image/image.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  foodImages:String[] = [];
  protected imageService: ImageService = new ImageService();

  ngOnInit(): void {
    this.foodImages = this.imageService.getAll();
  }
}
