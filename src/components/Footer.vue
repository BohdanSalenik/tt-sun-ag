<template>
  <footer class="footer">
    <div class="wrapper wrapper--footer">
      <div class="part part--left">
        <img src="@/assets/logo.svg" alt="logo" class="footer__logo">
        <a href="" class="footer__link">Публічна оферта</a>
        <a href="" class="footer__link">Умови використання</a>
        <span class="footer__span">&copy; 2019 Всі права захищено.</span>
      </div>
      <div class="part part--left">
        <span class="footer__span">
          <img src="@/assets/icons/location.svg" alt="">
          01014, м. Київ , вул. Болсуновська, будинок 13-15, офіс 620
        </span>
        <span class="footer__span">
          <img src="@/assets/icons/phone.svg" alt="">
          044-465-66-01
        </span>
        <span class="footer__span">
          <img src="@/assets/icons/mail.svg" alt="">
          office@ukactivitis.com
        </span>
        <span class="footer__span">
          <img src="@/assets/icons/facebook.svg" alt="">
          facebook.com/Activitis.Group
        </span>
        <span class="footer__span footer__span--sun">
          Активність від Сонця 
          <img src="@/assets/icons/Ellipse.svg" alt="sun">
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .footer {
    &__logo {
      align-self: flex-start;
      margin-bottom: 12px;
    }
    &__link {
      @include textStyle($montserat, $fzP7Reg, $fwNormal, #56CCF2);
      cursor: url('../assets/icons/cursor.svg'), auto;
      line-height: 150%;

      &:last-of-type {
        margin-bottom: 2px;
      }
    }
    &__span {
      @include textStyle($montserat, $fzP7Reg, $fwNormal, $lightText);
      line-height: 30px;

      display: flex;
      &--sun {
        align-self: flex-end;
        & img {
          margin-left: 5px;
        }
      }
      & img {
        margin-right: 13px;
      }
    }
  }
  .part {
    display: flex;
    flex-direction: column;
  }
</style>