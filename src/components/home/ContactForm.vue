<template>
  <div class="contact-form wrapper--contact-form">
    <p class="contact-form__text">
      Є проект, де може знадобитись наша консультація? 
      Пишіть нам на office@activitis.com.ua або залиште повідомлення у зворотній формі
    </p>
    <button class="contact-form__btn">
      написати повідомлення
    </button>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .contact-form {
    &__text {
      @include textStyle($montserat, $fzP4Reg, $fwBold, $lightText);
      line-height: 140%;
      text-align: center; 
      text-transform: uppercase;

      max-width: 835px;
      margin-bottom: 55px;
      @media screen and (max-width: 450px) {
        @include textStyle($montserat, $fzP6Reg, $fwBold, $lightText);
        text-align: auto; 
        margin-bottom: 50px;
      }
    }
    &__btn {
      @include textStyle($montserat, $fzP9Reg, $fwBold, $lightText);
      line-height: 12px;
      letter-spacing: 0.05em;
      text-transform: uppercase;

      padding: 14px 30px;
      border-radius: 50px;
      background: #56CCF2;

      &:hover {
        background: linear-gradient(214.32deg, #84B0C7 0%, #56CCF2 100%);
      } 
    }
  }
</style>