import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: ` <header>
    <nav>
      <a href="#my-projects">Projetos</a>
      <a href="#my-contact">Contato</a>
    </nav>
  </header>`,
})
export class HeaderComponent {}
