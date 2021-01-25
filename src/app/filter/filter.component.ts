import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../shared.service';
import { map } from 'rxjs/operators';
import { Imagen } from '../imagen';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit {

  options!: FormGroup;

  array: Imagen[] = [];
  arrayFind: boolean = false;
  arrayElement: Imagen | undefined;


  constructor(private fb: FormBuilder,
    private sharedService: SharedService) { }

  ngOnInit(): void {

    this.array = this.sharedService.getArrayImages() as Imagen[];

    this.options = this.fb.group({
      texto: [],
      identificador: []
    });

  }

  sendForm() {

    this.array.reverse();

    let textoForm: string = this.options.value.texto;

    if (textoForm != null) {
      this.sharedService.arrayImg$
        .pipe(
          map(imagen => {

            imagen.find((elem) => {
              if (elem.text.includes(textoForm)) {
                this.arrayFind = true;
                this.arrayElement = elem;
              }
            })
          })
        ).subscribe();
    }

    if (this.options.value.identificador != null) {
      /// filtramos array por id
      this.sharedService.arrayImg$
        .pipe(
          map(imagen => {
            imagen.filter(item => {
              if (item.id === this.options.value.identificador) {
                this.arrayFind = true;
                this.arrayElement = item;
              }
            })
          })
        ).subscribe()
    }

  }

}
