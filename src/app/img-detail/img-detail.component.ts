import { Component, OnInit, Input } from '@angular/core';
import { Imagen } from '../imagen';

@Component({
  selector: 'app-img-detail',
  templateUrl: './img-detail.component.html',
  styleUrls: ['./img-detail.component.sass']
})
export class ImgDetailComponent implements OnInit {

 @Input() imagen:Imagen | undefined;
 
  constructor() { }

  ngOnInit(): void {
  }

}
