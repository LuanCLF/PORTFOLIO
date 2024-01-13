import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <section>
      <picture>
        <img src="assets/perfil.png" alt="Minha foto de perfil" />
      </picture>
    </section>
  `,
})
export class AboutComponent {}
