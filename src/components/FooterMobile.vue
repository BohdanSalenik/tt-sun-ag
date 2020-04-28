<template>
  <footer class="footer--mobile">
    <div class="wrapper wrapper--footerM">

      <div class="part">
        <img src="@/assets/logo.svg" alt="logo" class="footer--mobile__logo">
        <span class="footer--mobile__span">
          <img src="@/assets/icons/location.svg" alt="">
          01014, м. Київ , вул. Болсуновська, будинок 13-15, офіс 620
        </span>
        <span class="footer--mobile__span">
          <img src="@/assets/icons/phone.svg" alt="">
          044-465-66-01
        </span>
        <span class="footer--mobile__span">
          <img src="@/assets/icons/mail.svg" alt="">
          office@ukactivitis.com
        </span>
        <span class="footer--mobile__span">
          <img src="@/assets/icons/facebook.svg" alt="">
          facebook.com/Activitis.Group
        </span>
      </div>

      <div class="part">
        <a href="" class="footer--mobile__link">Публічна оферта</a>
        <a href="" class="footer--mobile__link">Умови використання</a>
        <span class="footer--mobile__text">&copy; 2019 Всі права захищено.</span>
        <span class="footer--mobile__text">
          Активність від Сонця 
          <img src="@/assets/icons/Ellipse.svg" alt="sun">
        </span>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .footer--mobile {
    display: none;
    @media screen and (max-width: 450px) {
      display: block;
      padding: 50px 0;
      background-color: #292839;
      &__logo {
        align-self: center;
        margin-bottom: 40px;
      }
      &__link {
        @include textStyle($montserat, $fzP7Reg, $fwNormal, #56CCF2);
        cursor: url('../assets/icons/cursor.svg'), auto;
        line-height: 150%;
        align-self: center;
        margin-bottom: 10px;
      }
      &__span {
        @include textStyle($montserat, $fzP7Reg, $fwNormal, $lightText);
        line-height: 150%;
        display: flex;
        width: 311px;
        &--sun {
          align-self: center;
          & img {
            margin-left: 5px;
          }
        }
        & img {
          margin-right: 13px;
        }
        &--copy {
          align-self: center;
        }
      }
      &__text {
        @include textStyle($montserat, $fzP7Reg, $fwNormal, $lightText);
        align-self: center;
        margin-bottom: 10px;
      }
    }
    .part {
      display: flex;
      flex-direction: column;
      margin-bottom: 40px;
    }
  }
</style>