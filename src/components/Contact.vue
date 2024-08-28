<template>
    <div class="contact-page">
      <h2>Contacto</h2>
      <p>Si tienes alguna pregunta, no dudes en ponerte en contacto con nosotros.</p>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Nombre</label>
          <input type="text" id="name" v-model="form.name" required>
        </div>
        <div class="form-group">
          <label for="email">Correo Electrónico</label>
          <input type="email" id="email" v-model="form.email" required>
        </div>
        <div class="form-group">
          <label for="message">Mensaje</label>
          <textarea id="message" v-model="form.message" rows="5" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Contact',
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: ''
        }
      };
    },
    methods: {
      submitForm() {
        console.log('Formulario enviado', this.form);
        // Aquí puedes agregar la lógica para enviar el formulario
      }
    }
  };
  </script>
  
  <style scoped>
  @import '../assets/variables.css';
  
  .contact-page {
    padding-top: 80px; /* Ajustar esto según la altura del header */
    padding: 2rem;
    text-align: center;
  }
  
  .contact-page h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--color-primary); /* Usar el color primario configurado en variables.css */
  }
  
  .contact-page p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    color: var(--color-secondary); /* Usar el color secundario configurado en variables.css */
  }
  
  form {
    max-width: 500px;
    margin: 0 auto;
    text-align: left;
    background-color: var(--color-background); /* Usar el color de fondo configurado en variables.css */
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  button {
    padding: 0.75rem 1.5rem;
    background-color: var(--color-primary); /* Usar el color primario configurado en variables.css */
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: var(--color-secondary); /* Usar el color secundario configurado en variables.css */
  }
  </style>
  