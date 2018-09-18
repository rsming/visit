<template>
  <div class="home">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="is-two-thirds column is-paddingless">
            <div class="content is-large">
              <p>{{ quote }}</p>
              <h3>{{ author }}</h3>
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
      quote: '“In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.”',
      author: '- J.R.R. Tolkien',
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

.content p
  color: #fff

.content h3
  color: #fff

.fa-cog
  font-size: 40px

#learn
  +desktop
    margin-bottom: 2rem

.pd
  +tablet
    padding: 2em 0



</style>
