<template>
    <footer>
      <div class="social-buttons">
        <a>&copy; 2024 RexDevelop. Todos los derechos reservados.</a>
        <a href="https://www.facebook.com" target="_blank" class="social-button facebook">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" class="social-button twitter">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" class="social-button instagram">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
  };
  </script>
  
  <style scoped>
  @import '../assets/variables.css';
  
  footer {
    background-color: var(--color-background); /* Usar el color de fondo configurado en variables.css */
    color: var(--color-text); /* Usar el color de texto configurado en variables.css */
    text-align: center;
    padding: 1rem;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  
  .social-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .social-button {
    text-decoration: none;
    margin: 0 10px;
    font-size: 1.5rem;
    color: var(--color-primary); /* Usar el color primario configurado en variables.css */
    transition: color 0.3s;
  }
  
  .social-button:hover {
    color: var(--color-secondary); /* Usar el color secundario configurado en variables.css */
  }
  
  .social-button a {
    color: var(--color-text);
    margin-right: 1rem;
  }
  </style>
  