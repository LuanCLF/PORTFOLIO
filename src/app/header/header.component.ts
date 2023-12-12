import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: ` <header class="tw-h-fit tw-font-extrabold tw-top-0">
    <nav class="tw-text-xl tw-flex tw-items-center tw-justify-end tw-gap-5 tw-p-5 tw-mr-5 ">
      <a href="#my-projects">Projetos</a>
      <a href="#my-contact">Contato</a>
    </nav>
  </header>`,
})
export class HeaderComponent {}
