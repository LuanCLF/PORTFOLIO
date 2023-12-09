import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: ` <header
    class="tw-bg-zinc-600 tw-h-16 tw-w-full tw-flex tw-items-center tw-justify-center tw-text-3xl tw-font-extrabold tw-sticky tw-top-0"
  >
    CABEÇALHO
  </header>`,
})
export class HeaderComponent {}
