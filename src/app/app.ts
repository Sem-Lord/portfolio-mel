import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Navbar } from './features/navbar/navbar';
import { Hero } from './features/hero/hero';
import { About } from './features/about/about';
import { Experience } from './features/experience/experience';
import { Education } from './features/education/education';
import { Skills } from './features/skills/skills';
import { Contact } from './features/contact/contact';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Navbar, Hero, About, Experience, Education, Skills, Contact],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-about />
      <app-experience />
      <app-education />
      <app-skills />
      <app-contact />
    </main>
    <footer class="footer">
      <div class="container">
        <p>© 2026 Melvina Houngbo</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--color-primary);
      color: rgba(255,255,255,.6);
      text-align: center;
      padding: var(--sp-6);
      font-size: var(--fs-sm);
    }
  `]
})
export class App {}
