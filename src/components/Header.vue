<template>
  <header class="header" :style="[this.$route.path === '/' ? {background: ''} : {background: 'black'}]">
    <div class="header__block header__block--logo">
      <button class="header__burger"></button>
      <router-link to="/" tag="div">
        <img src="@/assets/logo.svg" alt="Logo" class="header__logo">
      </router-link>
    </div>
    
    <nav class="nav">

      <ul class="nav__list">

        <router-link 
          to="/" 
          tag="li" 
          class="nav__item"
          exact
          active-class="nav__item--isActive"
        >
          <a>Activitis</a>
        </router-link>

        <router-link 
          to="/finance" 
          tag="li" 
          class="nav__item"
          active-class="nav__item--isActive"
        >
          <a>Фінансові послуги</a>
        </router-link>

        <router-link 
          to="/realty" 
          tag="li" 
          class="nav__item"
          active-class="nav__item--isActive"
        >
          <a>управління нерухомістю</a>
        </router-link>

        <router-link 
          to="/contacts" 
          tag="li" 
          class="nav__item"
          active-class="nav__item--isActive"
        >
          <a>Контакти</a>
        </router-link>

      </ul>
    </nav>

    <div class="header__block">
      <img src="@/assets/icons/mail.svg" alt="mail" class="header__img">
      <a href="https://www.facebook.com/" target="blank">
        <img src="@/assets/icons/facebook.svg" alt="facebook" class="header__img">
      </a>
      <div class="lang">
        <span>укр</span>
        <img src="@/assets/icons/arrowBot.svg" alt="dropDown">
      </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>