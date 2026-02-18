import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-formulario-page',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './formulario-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioPage {
form: any;
onSubmit() {
throw new Error('Method not implemented.');
}
}
