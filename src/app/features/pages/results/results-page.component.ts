import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-results-page',
  imports: [RouterLink, CommonModule],
  templateUrl: './results-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsPage {
  // 1. El deporte que el usuario tiene seleccionado actualmente
  deporteSeleccionado: string = 'Fútbol';

  // 2. Lista de categorías para generar los botones
  categorias = ['Fútbol', 'Atletismo', 'Voleibol', 'Animación', 'Baloncesto', 'Rugby', 'Natación'];

  // 3. Nuestra "Base de Datos" de resultados
  todosLosResultados = [
    { deporte: 'Fútbol', fecha: '15 May', hora: '09:00 AM', equipoA: 'Primero A', marcador: '3 - 1', equipoB: 'Segundo B', sede: 'Campo 1', rama: 'Varonil' },
    { deporte: 'Fútbol', fecha: '15 May', hora: '10:30 AM', equipoA: 'Tercero A', marcador: '2 - 2', equipoB: 'Cuarto B', sede: 'Campo 2', rama: 'Feminil' },
    { deporte: 'Voleibol', fecha: '16 May', hora: '08:00 AM', equipoA: 'Sexto A', marcador: '25 - 18', equipoB: 'Quinto C', sede: 'Gimnasio', rama: 'Feminil' },
    { deporte: 'Baloncesto', fecha: '16 May', hora: '11:00 AM', equipoA: 'Primero B', marcador: '45 - 40', equipoB: 'Segundo A', sede: 'Cancha Central', rama: 'Varonil' },
    { deporte: 'Natación', fecha: '17 May', hora: '10:00 AM', equipoA: 'Juan Pérez (3ro B)', marcador: '00:24.52', equipoB: 'Récord Escolar', sede: 'Alberca', rama: 'Varonil' },
    { deporte: 'Atletismo', fecha: '17 May', hora: '09:00 AM', equipoA: 'Equipo Relevos A', marcador: '1er Lugar', equipoB: '4x100m', sede: 'Pista', rama: 'Feminil' },
    { deporte: 'Rugby', fecha: '18 May', hora: '04:00 PM', equipoA: 'Bachillerato A', marcador: '12 - 5', equipoB: 'Bachillerato C', sede: 'Campo 2', rama: 'Varonil' },
    { deporte: 'Animación', fecha: '19 May', hora: '05:00 PM', equipoA: 'Leones Oriente', marcador: '9.8 pts', equipoB: 'Show Apertura', sede: 'Auditorio', rama: 'Mixto' },
  ];

  // 4. Función que filtra los resultados según el deporte seleccionado
  get resultadosFiltrados() {
    return this.todosLosResultados.filter(item => item.deporte === this.deporteSeleccionado);
  }

  // 5. Método para cambiar el deporte al hacer clic
  cambiarDeporte(nuevoDeporte: string) {
    this.deporteSeleccionado = nuevoDeporte;
  }
}
