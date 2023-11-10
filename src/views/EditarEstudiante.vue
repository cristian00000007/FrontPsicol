<template>
  <div class="row mt-3">
    <div class="col-md-6 offset-md-3">
      <div class="card">
        <div class="card-header bg-dark text-white text-center">
          Editar Estudiante
        </div>
        <div class="card-body">
          <form v-on:submit="actualizar">
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
              <input type="text" v-model="Nombre" id="nombre" placeholder="Ingrese Nombre" required maxlength="50" class="form-control">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
              <input type="text" v-model="Email" id="email" placeholder="Ingrese Email" required maxlength="50" class="form-control">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
              <input type="text" v-model="Direccion" id="direccion" placeholder="Ingrese Direccion" required maxlength="50" class="form-control">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
              <input type="text" v-model="Ciudad" id="ciudad" placeholder="Ingrese Ciudad" required maxlength="50" class="form-control">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
              <input type="text" v-model="Semestre" id="semestre" placeholder="Ingrese Semestre" required maxlength="50" class="form-control">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
              <input type="text" v-model="Documento" id="documento" placeholder="Ingrese Documento" required maxlength="50" class="form-control">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
              <input type="text" v-model="Telefono" id="telefono" placeholder="Ingrese Telefono" required maxlength="50" class="form-control">
            </div>
            <div class="d-grid col-6 mx-auto mb-3">
              <button class="btn btn-primary">
                <i class="fa-solid fa-floppy-disk"> Registrar</i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </template>

<script>
import {mostrarAlerta, enviarSolicitud} from '../funciones'
import { useRoute } from 'vue-router';
import axios from 'axios';

export default{
data(){
  return{
    id:0,
    Nombre:'',
    Email:'',
    Direccion:'',
    Ciudad:'',
    Semestre:'',
    Documento:'',
    Telefono:'',
    url:'http://127.0.0.1:8000/api/estudiantes',
    cargando:false
  }
},
mounted(){
  const route = useRoute();
  this.id = route.params.id;
  this.url += '/'+this.id;
  this.getEstudiante();
},
methods:{
  getEstudiante(){
    axios.get(this.url).then(
      res=>{
        this.Nombre = res.data.data.Nombre;
        this.Email = res.data.data.Email;
        this.Ciudad = res.data.data.Ciudad;
        this.Direccion = res.data.data.Direccion;
        this.Documento = res.data.data.Documento;
        this.Semestre = res.data.data.Semestre;
        this.Telefono = res.data.data.Telefono;
      }
    );
  },
  actualizar(){
    event.preventDefault();
    if(this.Nombre.trim()===''){
      mostrarAlerta('Ingrese un nombre','nombre');
    }

    else if(this.Email.trim()===''){
      mostrarAlerta('Ingrese un nombre','Correo');
    }
    else if(this.Direccion.trim()===''){
      mostrarAlerta('Ingrese un nombre','Direccion');
    }
    else if(this.Ciudad.trim()===''){
      mostrarAlerta('Ingrese un nombre','Ciudad');
    }
    else if(this.Semestre.trim()===''){
      mostrarAlerta('Ingrese un nombre','Semestre');
    }

    else if(this.Documento===''){
      mostrarAlerta('Ingrese un nombre','documento');
    }

    else if(this.Telefono===''){
      mostrarAlerta('Ingrese un nombre','Telefono');
    }
    else{
      var parametros  = {Nombre:this.Nombre.trim(),Email:this.Email.trim(),Direccion:this.Direccion.trim(),Ciudad:this.Ciudad.trim(),Semestre:this.Semestre.trim(),Documento:this.Documento,Telefono:this.Telefono}
      enviarSolicitud('PUT',parametros,this.url,'Se Actuallizo estudiante');
    }

  }
}
}


</script>