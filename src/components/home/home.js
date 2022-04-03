import React from 'react';
import './home.css'

export default function Home() {
    return(
        <div class="container-fluid mt-3">
        <h2>Affichage des tâches</h2>
        <div class="row justify-content-between">
        <div class="col-6">
          <button type="button" class="btn btn-primary">Add one task</button>
        </div>
        <div class="col-6">
          <h3 class='text-info'>0 enregistrements</h3>
        </div>
        </div>
        <table class="table table-bordered table-light mt-3">
        <thead>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Utilisateur</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>Bird</td>
            <td>@twitter</td>
            </tr>
        </tbody>
        </table>
      </div>
    )
  }
