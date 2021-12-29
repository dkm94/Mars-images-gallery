import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.css']
})
export class ListImagesComponent implements OnInit {
@Input() imageURL: string = "";

  constructor() { }

  ngOnInit(): void {
    console.log(this.imageURL)
  }

}
