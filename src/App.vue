<template>
  <section id="app">
    <div class="section__wrapper">
      <div id="nav" class="tab">
        <router-link to="/" class="tab__item">Home</router-link>
        <router-link to="/state" class="tab__item">State</router-link>
        <router-link to="/axios" class="tab__item">Axios</router-link>
      </div>
      <router-view/>
    </div>
  </section>
</template>

<style lang="scss">
  @import "./scss/style.scss";
</style>
