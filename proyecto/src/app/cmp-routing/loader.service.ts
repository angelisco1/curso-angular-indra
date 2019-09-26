import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  eventLoading = new EventEmitter<boolean>();
  constructor() { }
}
