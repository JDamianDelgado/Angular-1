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
  imagenUrl = 'logoAngular.png';
  contador = 0;
  saludar() {
    alert(this.text);
    this.presentacion = 'Mira el logo de angular';
  }

  mostrarImagen() {
    this.imagenVisible = true;
  }

  ocultarImagen() {
    this.presentacion = 'No te olvides de probar el contador';
    this.imagenVisible = false;
  }
  sumarContador() {
    this.contador = this.contador + 1;
    if (this.contador > 10) {
      this.presentacion = 'Has alcanzado el limite del contador';
      this.contador = 10;
    } else this.presentacion = 'Contador aumentado';
  }
  restarContador() {
    if (this.contador > 0) {
      this.contador = this.contador - 1;
      this.presentacion = 'Contador disminuido';
    } else {
      this.contador = 0;
      this.presentacion = 'El contador no puede ser menor a 0';
    }
  }
}
