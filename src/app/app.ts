import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './composents/header/header';
import { Footer } from './composents/footer/footer';
import { Home } from './composents/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular');
}
