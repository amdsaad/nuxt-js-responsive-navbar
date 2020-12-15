<template>
  <header>
    <div class="wraper">
      <div class="brand-name">
        <nuxt-link to="/">LOGO</nuxt-link>
      </div>
      <nav class="navbar" :class="{ 'show-navbar': isOpen }">
        <ul class="nav-links">
          <li
            class="nav-link__item"
            v-for="link in links"
            :key="link.name"
            @click="openNav"
          >
            <nuxt-link :to="link.to"> {{ link.name }}</nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="mobile-menu" @click="openNav" :class="{ open: isOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: "home",
          to: "/"
        },
        {
          name: "about",
          to: "/about"
        },
        {
          name: "blog",
          to: "/blog"
        }
      ],
      isOpen: false
    };
  },
  methods: {
    openNav() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style></style>
