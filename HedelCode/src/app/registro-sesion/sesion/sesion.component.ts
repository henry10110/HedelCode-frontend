import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DirectoriosService } from 'app/services/directorios.service';
import { UsuariosService } from 'app/services/usuarios.service';
import { Directorio, Usuario } from 'app/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent {

  loginForm!: FormGroup;
  usuario: Usuario = {};
  login: boolean = false;

  constructor(private usuarioServicio: UsuariosService,
    private directorioServicio: DirectoriosService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.crearLoginForm();
  }

  crearLoginForm(): void {
    this.loginForm = new FormGroup({
      nombre: new FormControl("", Validators.required),
      passw: new FormControl("", Validators.required),
    })
  }

  logUser() {
    var usuario = this.loginForm.value;

    this.usuario = {
      nombre: usuario.nombre,
      contrasena: usuario.passw,
    };

    this.usuarioServicio.postConfirmarUsuario(this.usuario).subscribe(data => {
      if (data) {
        this.loginForm.reset();
        this.router.navigate(['/controlUsuario']);
      } else {
        this.login = true;
        this.loginForm.reset();
      }
    })

  };

}
