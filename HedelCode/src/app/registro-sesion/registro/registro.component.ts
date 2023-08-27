import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DirectoriosService } from 'app/services/directorios.service';
import { UsuariosService } from 'app/services/usuarios.service';
import { Directorio, Usuario } from 'app/interfaces';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  registroForm!: FormGroup;
  usuario: Usuario = {};
  myDirectory: String = this.directorioServicio.getMyDirectorio();
  usuarioCreado: Usuario = {};
  PasswValidator = false;

  constructor(private usuarioServicio: UsuariosService,
    private directorioServicio: DirectoriosService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.crearRegistroForm();

    this.registroForm
      .get('passw2')?.valueChanges.subscribe(() => {
        this.validatePasswords();
      });

      
  }

  crearRegistroForm(): void {
    this.registroForm = new FormGroup({
      nombre: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      passw: new FormControl("", Validators.required),
      passw2: new FormControl("", Validators.required),
    })
  }

  registrarUsuario(idDir: String) {
    var usuario = this.registroForm.value;

    this.usuario = {
      nombre: usuario.nombre,
      correo: usuario.email,
      contrasena: usuario.passw,
      idDirectorio: idDir,
      descripcion: "",
      plan: 1
    };

    this.usuarioServicio.postRegistrarUsuario(this.usuario).subscribe(data => {
      this.usuarioCreado = data;
      this.registroForm.reset();


      this.router.navigate(['/controlUsuario']);
    })

  };

  crearDirectorio() {

    this.directorioServicio.postCrearDirectorio({}).subscribe(data=> {
      if(data._id) {
        this.directorioServicio.setMyDirectorio(data._id);
      this.registrarUsuario(data._id);
      }
    })

  };

  validatePasswords() {
    const password = this.registroForm.get('passw')?.value;
    const confirmPassword = this.registroForm.get('passw2')?.value;

    if (password === confirmPassword) {
      this.registroForm.get('passw2')?.setErrors(null);
    } else {
      this.registroForm.get('passw2')?.setErrors({ mismatch: true });
    }
  };

}
