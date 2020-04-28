<template>
  <div class="wrapper">

    <div class="block block-left" v-if="index % 2 === 0">
      <div class="block-left__img-section">
        <div :class="['block-left__strip', `block-left__strip--${modificator}`]">
          <span class="rotate rotate-down">{{stripText}}</span>
        </div>
        <img class="block-left__img" :src="path(imgSrc)"/>
      </div>
      <div class="block-left__description">

        <div class="contacts-info">
          <h2 class="contacts-info__title">{{title}}</h2>
          <div class="wrapper--info">

            <div class="wrapper--info__address">
              <div class="wrapper--info__heading">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.541626 3.24998V11.9166L4.33329 9.74998L8.66663 11.9166L12.4583 9.74998V1.08331L8.66663 3.24998L4.33329 1.08331L0.541626 3.24998Z" :stroke="svgColor" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M4.33337 1.08331V9.74998" :stroke="svgColor" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8.66663 3.25V11.9167" :stroke="svgColor" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> 
                <span class="contacts-info__address">Адреса</span>
              </div>
              <span class="contacts-info__text">{{address}}</span>
            </div>

            <div class="wrapper--info__client">
              <div class="wrapper--info__heading">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.91665 12.25V11.0833C9.91665 10.4645 9.67081 9.871 9.23323 9.43342C8.79564 8.99583 8.20215 8.75 7.58331 8.75H2.91665C2.29781 8.75 1.70432 8.99583 1.26673 9.43342C0.829146 9.871 0.583313 10.4645 0.583313 11.0833V12.25" :stroke="svgColor" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5.25002 6.41667C6.53869 6.41667 7.58335 5.372 7.58335 4.08333C7.58335 2.79467 6.53869 1.75 5.25002 1.75C3.96136 1.75 2.91669 2.79467 2.91669 4.08333C2.91669 5.372 3.96136 6.41667 5.25002 6.41667Z" :stroke="svgColor" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M13.4167 12.25V11.0833C13.4163 10.5663 13.2442 10.0641 12.9275 9.65549C12.6107 9.24689 12.1673 8.95505 11.6667 8.82581" :stroke="svgColor" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.33331 1.82581C9.83522 1.95431 10.2801 2.24621 10.5978 2.65549C10.9155 3.06476 11.0879 3.56812 11.0879 4.08622C11.0879 4.60432 10.9155 5.10769 10.5978 5.51696C10.2801 5.92623 9.83522 6.21813 9.33331 6.34664" :stroke="svgColor" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="contacts-info__client">Клієнт</span>
              </div>
              <span class="contacts-info__text">{{client}}</span>
            </div>
          </div>
          <router-link :class="[
              'contacts-info__btn', 
              `contacts-info__btn--${modificator}`, 
              `button--${modificator}`
            ]"
            tag="button"
            :to="`/projects/${id}`"
          >
            переглянути прОекТ 
          </router-link>
        </div>

      </div>
    </div>


    <div class="block block-right" v-if="index % 2 === 1">
      <div class="block-right__description">

        <div class="contacts-info">
          <h2 class="contacts-info__title">{{title}}</h2>
          <div class="wrapper--info">

            <div class="wrapper--info__address">
              <div class="wrapper--info__heading">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.541626 3.24998V11.9166L4.33329 9.74998L8.66663 11.9166L12.4583 9.74998V1.08331L8.66663 3.24998L4.33329 1.08331L0.541626 3.24998Z" :stroke="svgColor" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M4.33337 1.08331V9.74998" :stroke="svgColor" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8.66663 3.25V11.9167" :stroke="svgColor" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> 
                <span class="contacts-info__address">Адреса</span>
              </div>
              <span class="contacts-info__text">{{address}}</span>
            </div>

            <div class="wrapper--info__client">
              <div class="wrapper--info__heading">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.91665 12.25V11.0833C9.91665 10.4645 9.67081 9.871 9.23323 9.43342C8.79564 8.99583 8.20215 8.75 7.58331 8.75H2.91665C2.29781 8.75 1.70432 8.99583 1.26673 9.43342C0.829146 9.871 0.583313 10.4645 0.583313 11.0833V12.25" :stroke="svgColor" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5.25002 6.41667C6.53869 6.41667 7.58335 5.372 7.58335 4.08333C7.58335 2.79467 6.53869 1.75 5.25002 1.75C3.96136 1.75 2.91669 2.79467 2.91669 4.08333C2.91669 5.372 3.96136 6.41667 5.25002 6.41667Z" :stroke="svgColor" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M13.4167 12.25V11.0833C13.4163 10.5663 13.2442 10.0641 12.9275 9.65549C12.6107 9.24689 12.1673 8.95505 11.6667 8.82581" :stroke="svgColor" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.33331 1.82581C9.83522 1.95431 10.2801 2.24621 10.5978 2.65549C10.9155 3.06476 11.0879 3.56812 11.0879 4.08622C11.0879 4.60432 10.9155 5.10769 10.5978 5.51696C10.2801 5.92623 9.83522 6.21813 9.33331 6.34664" :stroke="svgColor" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="contacts-info__client">Клієнт</span>
              </div>
              <span class="contacts-info__text">{{client}}</span>
            </div>
            
          </div>
          <router-link :class="[
              'contacts-info__btn', 
              `contacts-info__btn--${modificator}`, 
              `button--${modificator}`
            ]"
            tag="button"
            :to="`/projects/${id}`"
          >
            переглянути прОекТ 
          </router-link>
        </div>

      </div>
      
      <div class="block-right__img-section">
        <img class="block-right__img" :src="path(imgSrc)"/>
        <div :class="[
          'block-right__strip', 
          `block-right__strip--${modificator}`
        ]">
          <span class="rotate rotate-down">{{stripText}}</span>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props:[
      'index', 
      'imgSrc', 
      'title', 
      'address', 
      'client', 
      'modificator', 
      'stripText', 
      'svgColor', 
      'id',
    ],
  methods: {
    path(img) {
      return require('../../assets/blocks-images/' + img)
    }
  }
}
</script>

<style scoped>

</style>