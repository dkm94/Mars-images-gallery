import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.css']
})
export class ListImagesComponent implements OnInit {
  
  constructor() { }
  
  @Input() id: string = "";
  @Input() url: string = "";
  // @Input() marsPhotos: [] = [];

  ngOnInit(): void {
    console.log(this.id)
    console.log(this.url)
  }

}
