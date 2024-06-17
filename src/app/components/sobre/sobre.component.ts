import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {
  isMenuOpen: boolean = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Isso faz a página subir ao topo suavemente
  }
}
