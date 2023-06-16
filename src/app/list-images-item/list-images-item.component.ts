import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-images-item',
  templateUrl: './list-images-item.component.html',
  styleUrls: ['./list-images-item.component.css']
})
export class ListImagesItemComponent implements OnInit {
  
  constructor() { }
  
  @Input() id: string = "";
  @Input() url: string = "";

  ngOnInit(): void {
    console.log("list-item id ", this.id)
    console.log("list-item url ", this.url)
  }

}
