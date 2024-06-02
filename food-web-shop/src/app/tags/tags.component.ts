import { Component, Input } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { ImageService } from '../services/image/image.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {

  @Input()
  foodPageTags?:string[];

  @Input()
  justifyContent:string = 'center';

  tags?:Tag[];
  constructor(private imageService:ImageService) { }

  ngOnInit(): void {
    if(!this.foodPageTags)
     this.tags = this.imageService.getAllTags();
  }

}
