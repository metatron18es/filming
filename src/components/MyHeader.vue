<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="header">
    <h1 class="header-logo">
      <img class="header-logo-img" src="@/assets/img/logo.svg" alt="Filming">
      <span class="header-logo-name">Filming</span>
    </h1>
    <nav class="header-nav">
      <RouterLink class="header-nav-item" to="/">Home</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  padding: 0 2rem;
  box-sizing: border-box;
  background-color: #141414;
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
}
  @media screen and (max-width: 800px) {
    .header {
      height: 3rem;
    }
  }
  /* Header Title */
  .header-logo {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
  }
    .header-logo-img {
      width: auto;
      height: calc(100% - 0.2rem);
    }
    .header-logo-name {
      margin-left: 1rem;
      font-size: 2rem;
    }
    @media screen and (max-width: 800px) {
      .header-logo-name {
      font-size: 1.2rem;
      }
    }

  /* Header Nav */
  .header-nav {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5rem;
  }
    .header-nav-item {
      position: relative;
      padding: 0.7rem 1.5rem;
      border: none;
      background: none;
      font-size: 1.125rem;
      color: white;
      text-decoration: none;
    }
      .header-nav-item::before,
      .header-nav-item::after {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        box-sizing: border-box;
        border-width: 2px;
        border-style: solid;
        border-color: transparent;
        border-radius: var(--radius);
        transition: width .3s, height .3s, border-color 0s ease-in .3s;
      }
        .header-nav-item::before {
          top: 0;
          left: 0;
        }
        .header-nav-item::after {
          bottom: 0;
          right: 0;
        }
          .header-nav-item:hover::before,
          .header-nav-item:focus-visible::before,
          .header-nav-item:hover::after,
          .header-nav-item:focus-visible::after {
            width: 100%;
            height: 100%;
            transition: width .3s, height .3s, border-color 0s ease-in;
          }
          .header-nav-item:hover::before,
          .header-nav-item:focus-visible::before {
              border-color: white transparent transparent white;
            }
            .header-nav-item:hover::after,
            .header-nav-item:focus-visible::after {
              border-color: transparent white white transparent;
            }

            @media screen and (max-width: 800px) {
              .header-nav-item {
                padding: 5px 15px;
                border: 2px solid white;
              }
                .header-nav-item::before,
                .header-nav-item::after {
                  display: none;
                }
            }

</style>
