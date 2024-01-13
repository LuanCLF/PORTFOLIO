import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <section class="tw-h-screen tw-text-3xl tw-font-extrabold ">
      <picture class="tw-flex tw-justify-center">
        <img
          src="assets/perfil.png"
          alt="Minha foto de perfil"
          class="tw-rounded-b-xl tw-border-b-4
        tw-border-b-dark-color dark:tw-border-b-ligth-color tw-max-w-sm"
        />
      </picture>
    </section>
  `,
})
export class AboutComponent {}
