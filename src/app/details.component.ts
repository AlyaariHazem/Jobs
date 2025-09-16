import { Component, inject } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  standalone: true,
  selector: 'app-details',
  imports: [ AsyncPipe],
  template: `<h3>Job: {{ id$ | async }}</h3>`
})
export class DetailsComponent {
  private route = inject(ActivatedRoute);
  id$ = this.route.paramMap.pipe(map(m => m.get('id')));
}
