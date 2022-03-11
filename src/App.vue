<template>
  <div class="header">
    <page-haeder :headerData="headerData"/>
  </div>
  <div class="container">
      <router-view/>
  </div>
  <div class="footer">
      <app-footer v-model:footerData="footerData"/>
  </div>
  <div class="mobile-bar">
    <mobile-bar :mobileLinks="mobileBarLinks"/>
  </div>
</template>

<script>

// Макет: https://www.figma.com/file/bsvHZBhAhDecuvThNGTmU5/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%97%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-(%D0%92%D1%91%D1%80%D1%81%D1%82%D0%BA%D0%B0)?node-id=0%3A1

import pageHaeder from '@/components/appHeader.vue'
import appFooter from '@/components/appFooter.vue'
import mobileBar from '@/components/mobileNavBar.vue'

export default {
  name: 'App',
  components: {pageHaeder, appFooter, mobileBar},
  data () {
    return {
      headerData: {
        sliderInfo: [
          'Refer a friend and get $10 off! 🔥 Offer ends February 27!', 
          'Refer a friend and get $10 off! 🔥 Offer ends February 27!'
        ],
        location: 'Dublin, Republic of Ireland',
        links: [
          'Discover',
          'Browse',
          'Store',
          'Platforms',
          'Releases',
          'Mobile',
          'Articles',
          'Blog',
          'News',
          'Contacts'
        ],
      },
      footerData: {
        email: '',
        copyright: 'Copyright © GameVendor, 2022',
        links: [
          {
            name: 'Categories',
            links: ['Strategy', 'Action', 'Shooter', 'Card Game', 'Simulator', 'RPG', 'Multiplayer']
          },
          {
            name: 'Company',
            links: ['About us', 'Careers', 'Press', 'News', 'Contact']
          },
          {
            name: 'Legal',
            links: ['Terms', 'Careers', 'Privacy', 'Cookies', 'Licenses', 'Settings']
          },
          {
            name: 'Legal',
            links: ['Twitter', 'Facebook', 'Dribbble', 'GitHub']
          },
        ]
      },
      mobileBarLinks: [
        {title: 'Home', icon: 'home', isActive: true},
        {title: 'Browse', icon: 'explore', isActive: false},
        {title: 'Search', icon: 'search', isActive: false},
        {title: 'Account', icon: 'person', isActive: false},
        {title: 'Cart', icon: 'shopping_cart', isActive: false},
      ]
    }
  },

  beforeMount(){
    this.$router.push('/home/discover/games')
  },
}
</script>

<style lang="scss">

@import './styles/appDefaultStyles.scss';

</style>
