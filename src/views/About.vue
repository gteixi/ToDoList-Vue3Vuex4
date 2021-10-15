<template>
  <div class="about">
    <div class="about_container">
      <div class="about_container-title">
        <h1>About</h1>
      </div>
      <div class="about_container-description">
        <p>This is my first Vue&Vuex project made within One Week that consist of a To Do List Responsive and Tested Front-end project.</p>
      </div>
      <div>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQH_ug7wph9KKw/profile-displayphoto-shrink_400_400/0/1584701161222?e=1639008000&v=beta&t=Bkz5x6-V8WuFbqkpjMYXoSP6-fHbp0tjS2Os-I5ibiA"
        >
      </div>
      <div class="about_container-socials">
        <a
          href="https://www.linkedin.com/in/gemma-teixido-sanchez/?locale=en_US"
          target="_blank"
        ><Icon
          class="socialsIcon"
          icon="akar-icons:linkedin-fill"
          color="#222"
        />
        </a>
        <a
          href="https://github.com/gteixi"
          target="_blank"
        >
          <Icon
            class="socialsIcon"
            icon="akar-icons:github-fill"
            color="#222"
          /></a>
        <a
          href="https://gteixi.medium.com/"
          target="_blank"
        >
          <Icon
            class="socialsIcon"
            icon="ant-design:medium-circle-filled"
            color="#222"
          /></a>
      </div>
      <p>Made by Gemma Teixidó</p>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default ({
  components: {
		Icon,
	},
})
</script>


<style lang="scss">
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.about {
  @include display (flex, column, wrap, center);
  background-color: $light_blue_background_color;
  height: calc(100vh - 72px);
}

.about_container{
  @include display (flex, column, wrap, none);
  align-items: center;
  margin: 20px;
  margin-top: 27px;
  position: relative;
  overflow: hidden;
  background: $light_green_note_color;
  border-style: solid;
  border-width: 2px;
  border-radius: 27px;
}

.about_container-title {
  margin-top: 20px;
}

.about_container-description, p {
  padding: 10px;
  font-style: italic;
  font-weight: 600;
}

img {
  @include size (250px, 250px);
  border-radius: 50%;
  margin-bottom: 30px;
}

.about_container-socials {
  @include size (200px, 50px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.socialsIcon {
  @include size(30px, 30px)
}

</style>