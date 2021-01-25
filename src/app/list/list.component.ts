import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { SharedService } from '../shared.service';
import { Imagen } from '../imagen';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  
  array: Imagen[] = [];
  lorem : any

  constructor(private apiService: ApiService,
    private sharedService:SharedService) {}

  ngOnInit(): void {
    
    this.array = this.sharedService.getArrayImages();

  }

}
