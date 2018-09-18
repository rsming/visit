<template>
  <div id="app" class="hero is-fullheight">
  
    <div class="nav hero-head is-info has-shadow">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">Welcome</a>
        </div>

        <span class="nav-toggle" v-on:click="toggleNav" v-bind:class="{ 'is-active': isActive }">
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div class="nav-right nav-menu" v-bind:class="{ 'is-active': isActive }">

          <router-link to="/" class="nav-item r-item" title="Go, covfefe yourself"><i class="fa fa-home" />&nbsp;Home</router-link>
          <router-link to="addressBook" class="nav-item r-item"><i class="fa fa-address-book" />&nbsp;Address Book</router-link>
          <router-link to="cv" class="nav-item r-item" title="My CV"><i class="fa fa-file-text-o" />&nbsp;CV</router-link>
          <a href="http://aws-chipo.s3-website-ap-southeast-2.amazonaws.com/">&nbsp;HTML/CSS</a>
        </div>
      </div>
    </div>

    <router-view></router-view>

    <footer class="footer hero-foot is-primary has-shadow">
      <div class="container">
        <div class="columns">
        
          <div class="column has-text-left">
          	<span>Powered by</span>
            <a class="icon" href="http://fontawesome.io/" title="Font Awesome"><i class="fa fa-font-awesome" /></a>
            <a class="icon" href="http://bulma.io/" title="Bulma"><i class="fa fa-css3" /></a>
            <a class="icon" href="https://github.com/" title="GitHub"><i class="fa fa-github" /></a>
            <a class="icon" href="https://vuejs.org/" title="Vue.js"><i class="fa fa-get-pocket" /></a>
            <a class="icon" href="https://aws.amazon.com/" title="AWS"><i class="fa fa-amazon" /></a>
          </div>
          
          <div class="column has-text-right">
            <span>Follow me on</span>
            <a class="icon" href="https://github.com/rsming/" title="GitHub"><i class="fa fa-github" /></a>
            <a class="icon" href="https://au.linkedin.com/in/rustam-mingazov-42b4952" title="LinkedIn"><i class="fa fa-linkedin" /></a>
            <a class="icon" href="https://www.ok.ru/profile/120948718058/" title="Odniklassniki"><i class="fa fa-odnoklassniki" /></a>
            <a class="icon" href="https://www.facebook.com/rustam.mingazov.3" title="Facebook"><i class="fa fa-facebook" /></a>
            <a class="icon" href="https://chipo-java-interview.blogspot.com.au/" title="Blogger"><i class="fa fa-snapchat-ghost" /></a>
            <a class="icon" href="https://plus.google.com/116729920698569055886" title="Google Plus"><i class="fa fa-google-plus" /></a>
            <!--a class="icon" href="https://plus.google.com/116795018824099406230"><i class="fa fa-google-plus" /></a-->
            <a class="icon" href="#"><i class="fa fa-twitter" title="Twitter"></i></a>
          </div>
          
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleNav: function() {
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style lang="sass">
@import '../node_modules/bulma/bulma.sass'
@import 'mq'

.nav
  background-color: #383838
  a:hover
    color: #fff

.nav-left a 
  color: #fff
  font-weight: bold

a.r-item
  color: #C1C1C1
  padding: 0.5rem 1.75rem
  +mobile
    color: gray
    &:hover
      background-color: #F1F1F1

.nav-toggle span
  background-color: #C1C1C1

footer
  background-color: $primary !important
  color: #fff !important
  padding-top: 2rem !important
  padding-bottom: 2rem !important

  .icon
    color: #fff
    margin-left: 15px

</style>
