import { Component } from '@angular/core';
import { GeneralInformationComponent } from './general-information/general-information.component';
import { AboutComponent } from './about/about.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [GeneralInformationComponent, AboutComponent, MyProjectsComponent],
  template: `
    <main>
      <app-general-information />
      <app-about />
      <app-my-projects />
    </main>
  `,
})
export class BodyComponent {}
