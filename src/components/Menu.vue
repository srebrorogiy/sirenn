<template>
  <div class="menu-item">
    <div class="header_nav">
      <router-link :to="{ name: 'main-block' }">
        <p class="nav-menu">{{ menubar }}</p>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class MenuBlock extends Vue {
  name = "menuItem";

  menubar = "Menu";
}
</script>

<style lang="scss">
<<<<<<< HEAD

*,
::after,
::before {
  box-sizing: border-box;
}

hr {
  border: 1px;
  height: 1px;
  margin: 1rem 0;
  border-top: 1px solid #eb4863;
}

// Header Menu

.header {

  &__nav {
    position: relative;
 
  }

  // &__navbar {
  //   display: flex;
  //   align-items: center;
  //   justify-content: flex-start
  // }

  &__item {
    // padding: 1rem;
  }

  &--icon {
    width: 1.65rem;
    height: 1.65rem;
  }

  &--button {
    // top: 0;
    // right: 0;
    position: absolute;
    // margin: 0;
    // padding: 0;
    color: gray;
    cursor: pointer;
    border: 1px solid transparent;
    background-color: transparent;

    &:focus {
      outline: 0;
    }
  }
}

// Dropdown Menu

.dropdown__menu {
  top: 100%;
  right: auto;
  position: absolute;
  z-index: 10;
  height: 25rem;
  min-width: 300px;
  margin-top: 1rem;
  overflow-y: auto;
  padding: 2rem 1rem 2rem 0rem;
  border-radius: 12px;
  background-color: white;
  border: 1px solid var(--color-gray);
  background-clip: padding-box;

  &-link {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
    padding: 0.8rem 0 0.8rem 2rem;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    border-radius: 0 50px 50px 0;

    &:hover {
      color: #bf1733;
      background-color: rgba(79, 192, 141, 0.1);
    }
  }

  &-svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  &-text {
    font-weight: 300;
    margin-left: 1rem;
    margin-right: 1rem;
  }
}

// Animation Menu Icon

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.6s;
}

.slide-fade-enter,
.slide-fade-leave-active {
  opacity: 0;
}

.slide-fade-enter {
  transform: translateX(31px);
}

.slide-fade-leave-active {
  transform: translateX(-31px);
}

// Dropdown Menu Animation

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 1s;
}

.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

// Wrapper

.main {
  margin: 6rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &__subtitle {
    color: #4f5959;
    font-weight: 100;
    margin-bottom: 2rem;
  }

  &__link {
    margin-right: 1.5rem;
    display: inline-block;

    &:last-child {
      margin-right: 0;
    }
  }

  &__svg {
    width: 2rem;
    height: 2rem;
    opacity: 0.6;
    color: #94a2b0;

    &:hover {
      color: #ffad1f;
    }
  }
=======
p {
  text-decoration: none;
>>>>>>> parent of e3341ba (--help)
}
</style>
