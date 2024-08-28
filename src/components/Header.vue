<template>
  <header>
    <div class="logo">
      <img src="@/assets/logo.webp" class="avatar">
      <h1 class="flicker rexdevelop-text">RexDevelop</h1>
    </div>
    <nav>
      <ul v-if="!isMobileMenuOpen">
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/services">Servicios</router-link></li>
        <li><router-link to="/about">Nosotros</router-link></li>
        <li><router-link to="/contact">Contacto</router-link></li>
      </ul>
      <button @click="toggleMobileMenu" class="menu-toggle" v-if="isMobile">
        ☰
      </button>
    </nav>
    <ul v-if="isMobile && isMobileMenuOpen" class="mobile-menu">
      <li><router-link to="/" @click="toggleMobileMenu">Inicio</router-link></li>
      <li><router-link to="/services" @click="toggleMobileMenu">Servicios</router-link></li>
      <li><router-link to="/about" @click="toggleMobileMenu">Nosotros</router-link></li>
      <li><router-link to="/contact" @click="toggleMobileMenu">Contacto</router-link></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMobile: false,
      isMobileMenuOpen: false,
    };
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth <= 768;
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
  },
  mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style scoped>
@import '../assets/variables.css';

header {
  background-color: var(--color-background);
  color: var(--color-text);
  padding: 1rem;
  text-align: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  width: 100%;
  margin-right: 10px;
}

nav ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin: 0;
}

nav ul li {
  margin: 0 1rem;
}

nav ul li a {
  color: var(--color-text);
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

nav ul li a:hover {
  color: var(--color-primary);
}

.menu-toggle {
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1.5rem;
  cursor: pointer;
  display: none; /* Oculto por defecto */
}

.mobile-menu {
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 60px; /* Ajustar según sea necesario */
  right: 10px;
  background-color: var(--color-background);
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.mobile-menu li {
  margin: 0;
  padding: 10px;
  border-bottom: 1px solid var(--color-primary);
}

.mobile-menu li a {
  color: var(--color-text);
  text-decoration: none;
  display: block;
}

@media (max-width: 768px) {
  nav ul {
    display: none;
  }

  .menu-toggle {
    display: block;
  }
}

.flicker {
  animation: flicker 1.5s infinite alternate;
}

@keyframes flicker {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.5;
  }
}

.avatar {
  width: 50px; /* Ajustar tamaño según sea necesario */
  height: 50px; /* Ajustar tamaño según sea necesario */
  border-radius: 50%;
  margin-right: 10px;
}
</style>
