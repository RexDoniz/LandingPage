<template>
  <div id="home" class="page-content">
    <br>

    <section class="hero animated-background-reverse">
      <h2 class="flicker rexdevelop-text">RexDevelop</h2>
      <p>Tu aliado en Desarrollo, Marketing y Contabilidad.</p>
    </section>

    <section class="services">
  <h3>Nuestros Servicios</h3>
  <div class="service-list">
    <div class="service">
      <img src="https://via.placeholder.com/100" alt="Desarrollo y TI">
      <h4>Desarrollo y TI</h4>
      <p>Ofrecemos soluciones integrales en desarrollo de software, administración de servidores, mantenimiento de equipos y más.</p>
      <router-link :to="{ path: '/services', hash: '#development' }">Ver más</router-link>
    </div>
    <div class="service">
      <img src="https://via.placeholder.com/100" alt="Contabilidad">
      <h4>Contabilidad</h4>
      <p>Te asistimos con declaraciones fiscales, facturación, y otros servicios contables esenciales para tu negocio.</p>
      <router-link :to="{ path: '/services', hash: '#accounting' }">Ver más</router-link>
    </div>
    <div class="service">
      <img src="https://via.placeholder.com/100" alt="Marketing Digital">
      <h4>Marketing Digital</h4>
      <p>Desde la grabación y edición de videos hasta la gestión de campañas en redes sociales, cubrimos todas tus necesidades de marketing.</p>
      <router-link :to="{ path: '/services', hash: '#marketing' }">Ver más</router-link>
    </div>
  </div>
</section>

    <section class="about">
      <h3>Nosotros</h3>
      <p>Conoce a los expertos que lideran nuestros servicios en desarrollo, marketing y contabilidad. Nuestro equipo está comprometido en ofrecer soluciones innovadoras y efectivas para tu negocio.</p>
      <div class="about-card">
        <img src="https://via.placeholder.com/1200x400" alt="Acerca de Nosotros">
        <div class="about-card-content">
          <h4>Sobre Nosotros</h4>
          <p>En RexDevelop, nuestro equipo está compuesto por expertos en desarrollo de software, marketing digital y contabilidad. Nos apasiona brindar soluciones de calidad y efectivas para tu negocio.</p>
          <p><strong>Desarrollo de Software</strong>: Contamos con años de experiencia en la industria tecnológica, ofreciendo servicios personalizados que se adaptan a las necesidades únicas de cada cliente. Nuestro enfoque en la innovación y el compromiso con la excelencia nos permite superar constantemente las expectativas. Desde la planificación inicial hasta la implementación y el soporte continuo, trabajamos en estrecha colaboración con nuestros clientes para asegurar el éxito de sus proyectos.</p>
          <p><strong>Marketing Digital</strong>: Nos especializamos en la creación de campañas efectivas de marketing digital que incrementan la visibilidad y el alcance de tu marca. Desde la grabación y edición de videos hasta la gestión de campañas en redes sociales, cubrimos todas tus necesidades de marketing.</p>
          <p><strong>Contabilidad</strong>: Nuestro equipo de expertos en contabilidad te asistirá con declaraciones fiscales, facturación, y otros servicios contables esenciales para tu negocio. Nos esforzamos por construir relaciones a largo plazo basadas en confianza y resultados comprobados.</p>
          <p>Además de nuestros servicios principales, estamos comprometidos con la formación continua y el desarrollo profesional de nuestro equipo, garantizando que siempre estamos a la vanguardia de las últimas tendencias y tecnologías.</p>
          <router-link to="/about">Ver más</router-link>
        </div>
      </div>
    </section>

    <section class="contact-call animated-background-reverse">
      <div class="contact-call-content">
        <p>Si necesitas más información o tienes alguna duda, por favor <router-link to="/contact">contáctanos</router-link>.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
@import '../assets/variables.css';

#home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
}

.page-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.hero {
  background-color: var(--color-background);
  padding: 4rem 2rem;
  width: 100%; /* Ajustar el ancho */
}

.hero h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.hero p {
  font-size: 1.25rem;
  color: var(--color-secondary);
}

.services, .about, .contact-call {
  width: 80%; /* Ajustar el ancho */
}

.services h3, .about h3 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--color-primary);
}

.service-list {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.service {
  background-color: var(--color-background);
  padding: 1.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 250px;
  border-radius: 8px;
  text-align: center;
}

.service img {
  max-width: 100%;
  margin-bottom: 1rem;
}

.service h4 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
}

.service p {
  font-size: 1rem;
  color: var(--color-secondary);
}

.service a {
  display: inline-block;
  margin-top: 1rem;
  color: var(--color-primary);
  text-decoration: underline;
  font-weight: bold;
}

.about-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  background-color: var(--color-background);
  padding: 1.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 100%; /* Asegura que la tarjeta ocupe el ancho completo dentro de la sección */
}

.about-card img {
  max-width: 100%;
  margin-bottom: 1rem;
  border-radius: 8px 8px 0 0;
}

.about-card-content {
  padding: 1rem;
}

.about-card-content h4 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
}

.about-card-content p {
  font-size: 1rem;
  color: var(--color-secondary);
}

.contact-call {
  background-color: var(--color-background);
  color: var(--color-primary);
  width: 100%;
  text-align: center;
}

.contact-call-content {
  max-width: 80%;
  margin: 0 auto;
}

.contact-call a {
  color: var(--color-accent);
  text-decoration: underline;
  font-weight: bold;
}

.flicker {
  animation: flicker 1.5s infinite alternate;
}

@keyframes flicker {
  from {
    opacity: 2;
  }
  to {
    opacity: 0.5;
  }
}
</style>
