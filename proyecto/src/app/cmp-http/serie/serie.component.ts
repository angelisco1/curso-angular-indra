import { Component, OnInit, Input } from '@angular/core';
import { SeriesService } from '../series.service';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  @Input() serie: any = {}
  constructor(private seriesServ: SeriesService) { }

  ngOnInit() {
  }

  editar() {
    this.seriesServ.updateSerie({...this.serie}).subscribe(() => {
      alert('Actualizada!!!');
    });
  }

  eliminar() {
    this.seriesServ.deleteSerie(this.serie.id).subscribe(() => {
      alert('Eliminado!')
    });
  }

}
