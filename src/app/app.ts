import { NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Tarea-1');
  text = 'Hola mundo';
  presentacion =
    ' Aprendo angular para mejorar mi stack de tecnologias para poder mejorar en la programacion';
  imagenVisible = false;
  imagenUrl = 'image.png';
  contador = 0;
  saludar() {
    alert(this.text);
  }

  mostrarImagen() {
    this.imagenVisible = true;
  }

  ocultarImagen() {
    this.presentacion = 'Gracias por la visita';
    this.imagenVisible = false;
  }
  sumarContador() {
    this.contador = this.contador + 1;
  }
  restarContador() {
    if (this.contador > 0) {
      this.contador = this.contador - 1;
    } else {
      this.contador = 0;
    }
  }
}
