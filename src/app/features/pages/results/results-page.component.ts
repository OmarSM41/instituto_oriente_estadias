import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-results-page',
  imports: [RouterLink],
  templateUrl: './results-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsPage { }
