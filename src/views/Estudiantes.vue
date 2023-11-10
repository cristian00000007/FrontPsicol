
<template>

  <div class="row">
    <div class="col-lg-12">
      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Nombre</th>
              <th>Documento</th>
              <th>Ciudad</th>
              <th>Direccion</th>
              <th>Email</th>
              <th>Semestre</th>
              <th>Telefono</th>
              <th></th>
            </tr>
          </thead>
          <tbody class="table-group-divider" id="contenido">
            <tr v-if="this.cargando">
              <td colspan="6"><h3>Cargando...</h3></td>
            </tr>
            <tr v-else v-for="Estu, i in this.Estudiantes" :key="Estu.id">
              <td v-text="(i+1)"></td>
              <td v-text="Estu.id"></td>
              <td v-text="Estu.Nombre"></td>
              <td v-text="Estu.Email"></td>
              <td v-text="Estu.Direccion"></td>
              <td v-text="Estu.Ciudad"></td>
              <td v-text="Estu.Semestre"></td>
              <td v-text="Estu.Documento"></td>
              <td v-text="Estu.Telefono"></td>
              <td>
                  <router-link :to="{path:'VerEstudiantes/'+Estu.id}" class="btn btn-info">
                    <i class="fa-solid fa-eye"></i>
                  </router-link>
                  &nbsp;
                  <router-link :to="{path:'EditarEstudiante/'+Estu.id}" class="btn btn-warning">
                    <i class="fa-solid fa-edit"></i>
                  </router-link>
                  &nbsp;
                  <button class="btn btn-danger" v-on:click="eliminar(Estu.id,Estu.Nombre)">
                    <i class="fa-solid fa-trash"></i>
                  </button>
              </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import {confirmar} from '../funciones'

export default{
data(){
  return{
    Estudiantes:null,
    cargando:false
  }
},
 
mounted(){
  this.getEstudiantes();
},

methods:{
  getEstudiantes(){
    this.cargando = true;

    axios.get('http://127.0.0.1:8000/api/estudiantes').then(
      res =>{
        this.Estudiantes = res.data;
        this.cargando = false;
      }
    );
  },
  eliminar(id,Nombre){
    confirmar('http://127.0.0.1:8000/api/estudiantes/',id,'Eliminar registro','Realmente Deseas Eliminar'+Nombre+'?');
    this.cargando = false;
  }
}
}


</script>