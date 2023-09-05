<template>
  <header>
    <!-- <nav>
      <RouterLink to="/"></RouterLink>
      <RouterLink to="/about"></RouterLink>
    </nav> -->
  </header>

  <RouterView />
</template>

<script setup>
// import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
nav {
  font-size: 1rem;
  color: #f7f2f2;
}

nav a.router-link-exact-active {
  color: #d41818;
  border-bottom: 2px solid #d41818 !important;
  padding: 0.5rem 1.5rem;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

.secondary-heading {
  font-size: 3.5rem;
  font-weight: 550;
  margin-bottom: 2rem;
  line-height: 1.2;
}

.tertiary-heading {
  font-size: 2.1rem;
  font-weight: 550;
  margin-bottom: 2rem;
}

.secondary-text {
  font-size: 1.8rem;
  line-height: 1.8;
}

.tertiary-text {
  font-size: 1.3rem;
  line-height: 1.5;
}

::-webkit-scrollbar {
  width: 3px;
}

::-webkit-scrollbar-thumb {
  background-color: #cf2121;
}

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
