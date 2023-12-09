import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <section
      class="tw-bg-green-500 tw-h-12 tw-w-full tw-flex tw-items-center tw-justify-center tw-text-3xl tw-font-extrabold tw-fixed tw-bottom-0"
    >
      rodapé
    </section>
  `,
})
export class FooterComponent {}
