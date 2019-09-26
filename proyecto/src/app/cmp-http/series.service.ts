import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  URL = 'https://ejemplos-dc1c1.firebaseio.com/series';

  constructor(private http: HttpClient) { }

  getSeries() {
    return this.http.get(this.URL + '.json')
      .pipe(
        map((series) => {
          const arrSeries = [];
          for (let id in series) {
            arrSeries.push({id: id, ...series[id]});
          }
          return arrSeries;
        })
      )
  }

  saveSerie(nuevaSerie) {
    return this.http.post(this.URL + '.json', JSON.stringify(nuevaSerie));
  }

  deleteSerie(id: string) {
    return this.http.delete(this.URL + '/' + id + '.json');
  }

  updateSerie(serieActualizada) {
    const id = serieActualizada.id;
    delete serieActualizada.id
    return this.http.put(this.URL + '/' + id + '.json', JSON.stringify(serieActualizada));
  }
}
