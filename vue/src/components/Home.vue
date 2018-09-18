<template>
  <div class="home">
    <section class="hero is-fullwidth">
      <div class="hero-body">
        <div class="container">
          <div class="column is-one-third-desktop is-half-tablet is-two-thirds-mobile">
            <div class="content is-large">
              <p class="quotation">{{ quote }}</p>
              <h4><span class="quotation">{{ author }}</span></h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      quote: '“In a hole in the ground there lived a hobbit.\n' + 
      		'Not a nasty, dirty, wet hole, filled with the ends of worms\n' +
      		'and an oozy smell, nor yet a dry, bare, sandy hole\n' + 
      		'with nothing in it to sit down on or to eat:\n' +
      		'it was a hobbit-hole, and that means comfort.”',
      author: '- J.R.R. Tolkien'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'

.hero
  background: url('../assets/visit.jpg')
  background-size: cover
  background-position: right bottom
  flex: 1

  .title
    +mobile
      font-weight: bold
    +tablet
      font-size: 2.5rem
    +desktop
      font-size: 4rem
      margin-top: 2rem

h2
  margin: 1.5rem 0 2rem 0 !important

.quotation
  color: #fff
  background-color: rgba(1,1,1,0.45)
  padding-left: 0.5rem 
  padding-right: 0.5rem 

.fa-cog
  font-size: 40px

#learn
  +desktop
    margin-bottom: 2rem

.pd
  +tablet
    padding: 2em 0



</style>
