import { Evento } from '../Models/event.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private listaEventos: Evento[] = [
    { id: 1, titulo: 'Atletismo', fecha: '2026-05-10', imagen: 'assets/img1.jpg' },
    { id: 2, titulo: 'Futbol', fecha: '2026-06-15', imagen: 'assets/img2.jpg' },
    { id: 3, titulo: 'Voleibol', fecha: '2026-06-15', imagen: 'assets/img3.jpg' },
    { id: 4, titulo: 'Animacion', fecha: '2026-06-15', imagen: 'assets/img4.jpg' },
    { id: 5, titulo: 'Baloncesto', fecha: '2026-06-15', imagen: 'assets/img5.jpg' },
    { id: 6, titulo: 'Rugby', fecha: '2026-06-15', imagen: 'assets/img6.jpg' },
    { id: 7, titulo: 'Natación', fecha: '2026-06-15', imagen: 'assets/img7.jpg' },
  ];

  constructor() {}

  getEventos(): Observable<Evento[]> {
    return of(this.listaEventos);
  }
}
