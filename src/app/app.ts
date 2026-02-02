import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navi } from './comps/navi/navi';
import { Login } from "./comps/login/login";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navi, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
