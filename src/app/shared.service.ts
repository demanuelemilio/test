import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Imagen } from './imagen';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private subjectArrayImages = new BehaviorSubject<Imagen[]>([]);
  arrayImg$ =  this.subjectArrayImages.asObservable();

  constructor() { }


  getArrayImages():Imagen[]{
    return this.subjectArrayImages.value;

  }

  setArrayImages(array:any[]){
    this.subjectArrayImages.next(array);
  }
}
