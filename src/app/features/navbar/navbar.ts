import { Component, ChangeDetectionStrategy, signal, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  readonly isScrolled = signal(false);
  readonly menuOpen   = signal(false);

  readonly navLinks = [
    { label: 'À propos',    anchor: '#about'      },
    { label: 'Expériences', anchor: '#experience' },
    { label: 'Formation',   anchor: '#education'  },
    { label: 'Compétences', anchor: '#skills'     },
    { label: 'Contact',     anchor: '#contact'    },
  ] as const;

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 40);
  }

  toggleMenu(): void { this.menuOpen.update(v => !v); }
  closeMenu(): void  { this.menuOpen.set(false); }
}
