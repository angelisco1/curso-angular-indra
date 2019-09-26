import { Component, OnInit } from '@angular/core';
import { Observable, Observer, interval } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { SeriesService } from './series.service';

@Component({
  selector: 'app-cmp-http',
  templateUrl: './cmp-http.component.html',
  styleUrls: ['./cmp-http.component.css']
})
export class CmpHttpComponent implements OnInit {
  series = []
  constructor(private seriesServ: SeriesService) { }

  ngOnInit() {
    // this.crearObservable();
    // this.numsParesx3MenoresDe39();
    this.seriesServ.getSeries().subscribe((series) => {
      console.log(series);
      this.series = series;
    })
  }

  guardar(nombre) {
    const nuevaSerie: {nombre: string, finalizada: boolean, numEpisodios:number, id?: string} = {nombre: nombre, finalizada: false, numEpisodios: 40};
    this.seriesServ.saveSerie(nuevaSerie).subscribe((data: {name: string}) => {
      console.log(data);
      nuevaSerie.id = data.name;
      this.series.push(nuevaSerie);
    });
  }

  numsParesx3MenoresDe39() {
    interval(1000)
    .pipe(
      filter(n => n%2===0),
      map(n => n*3),
      filter(n => n<39),
    )
    .subscribe((num) => {
      console.log(num);
    })
  }

  crearObservable() {
    const miObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('Primer mensaje');
      }, 1000);
      setTimeout(() => {
        observer.error(new Error('Un error'));
      }, 2000);
      setTimeout(() => {
        observer.complete();
      }, 3000);
    });

    miObservable.subscribe(
      (msg: string) => console.log('MSG: ' + msg),
      (err: Error) => alert(err.message),
      () => console.log('Se ha terminado!!')
    )
  }




}
