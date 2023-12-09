import { Component } from '@angular/core';
import { GeneralInformationComponent } from './general-information/general-information.component';
import { AboutComponent } from './about/about.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [GeneralInformationComponent, AboutComponent, MyProjectsComponent],
  template: `
    <main
      class="tw-grid md:tw-grid-cols-2 tw-gap-4 md:tw-gap-8 tw-justify-center tw-items-center tw-h-full"
    >
      <app-general-information />
      <app-about />
      <app-my-projects class="md:tw-col-span-2" />
    </main>
  `,
})
export class BodyComponent {}
