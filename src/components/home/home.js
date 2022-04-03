import React from 'react';
import './home.css'

export default function Home() {
    return(
        <div class="container mt-3">
        <h2>Affichage des tâches</h2>
        <table class="table">
          <thead class="table-success">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Utilisateur</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
            </tr>
            <tr>
              <td>Mary</td>
              <td>Moe</td>
              <td>mary@example.com</td>
            </tr>
            <tr>
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
