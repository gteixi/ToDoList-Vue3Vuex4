<template>
  <div class="nav">
    <div class="navItems">
      <router-link to="/">
        <Icon icon="flat-color-icons:home" />
        <span class="nav__routerNaming">HOME</span>
      </router-link>
    </div>
    <!-- <div class="navItems">
      <label class="switch">
        <input type="checkbox">
        <span class="slider round" />
      </label>
    </div> -->
    <div class="navItems">
      <router-link to="/about">
        <Icon icon="flat-color-icons:about" />
        <span class="nav__routerNaming">ABOUT</span>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from '@iconify/vue';

export default defineComponent({
    name: "Nav",
    components: {
		Icon,
	},
})
</script>

<style lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

* {
  margin: 0;
  font-family: $font;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $light_green_header_color;
  padding: 0px 20px;
  @include size(auto, 60px);

  svg {
    @include size(30px, 30px);
  }

  .navItems > a {
    text-decoration: none;
    display: flex;
    align-items: center;
    flex-direction: row;
    color: black;
    cursor: pointer;
  }

  .navItems:hover {
    transform: scale(1.3);
    transition: all 0.3s linear;
  }

  .nav__routerNaming{
    margin-left: 8px;
    font-weight: 500;
  }
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: $light_green_header_color;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: white;
}

input:focus + .slider {
  box-shadow: 0 0 2px black;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
  background-color: #252526;
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

@media screen and (max-width: 390px) {
  .nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  @include size(auto, 77px);

  svg {
    @include size(43px, 43px);
  }

  background-color: $light_green_header_color;
    .nav__routerNaming {
      display: none;
    }
}}
</style>
