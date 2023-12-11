import { Component } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [],
  template: `
    <section
      id="my-projects"
      class=" tw-h-screen tw-flex tw-items-center tw-justify-center tw-text-3xl tw-font-extrabold"
    >
      meus projetos
    </section>
  `,
})
export class MyProjectsComponent {}
