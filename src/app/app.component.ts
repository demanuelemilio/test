import { Component, OnInit } from '@angular/core';
import { LoremIpsum } from "lorem-ipsum";
import { SharedService } from './shared.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  
  arrayLength: number = 4000;
  array: any[] = [];
  lorem : any

  constructor(private sharedService:SharedService) {}

  ngOnInit(): void {

    this.lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 8,
        min: 4
      },
      wordsPerSentence: {
        max: 16,
        min: 4
      }
    });

    this.generateArray();
  }

  private generateArray(): any[] {

    this.array = new Array<any>(this.arrayLength);
    
    for (let index = 0; index < this.array.length; index++) {

      const element = {
        id: index,
        photo: `https://picsum.photos/id/${index}/500/500`,
        text: this.lorem.generateParagraphs(1)
      }

      this.array[index] = element;
    }

    this.sharedService.setArrayImages(this.array)

    return this.array;

  }

}
