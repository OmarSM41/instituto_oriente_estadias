import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-blog-page',
  imports: [RouterLink],
  templateUrl: './blog-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPage {
blogPosts() {
throw new Error('Method not implemented.');
}
posts() {
throw new Error('Method not implemented.');
}
}
