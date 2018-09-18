<template>
  <div class="home">
    <section class="hero is-fullwidth is-fullwidth">
      <div class="hero-body">
        <div class="container">
          <div class="content is-small has-text-centered">
	        <a href="https://www.dropbox.com/s/rcw7i55bult9hpp/rustam_mingazov-s_CV.doc?dl=0" title="Download Word version of CV">
	          <img src="../assets/cv_qr_code.jpg" />
	        </a>
	      </div>
	      <div class="content is-small has-text-centered">
	        <p class="control">
	          <a class="button is-primary is-outlined" href="https://www.dropbox.com/s/rcw7i55bult9hpp/rustam_mingazov-s_CV.doc?dl=0" title="Download Word version of CV">
	            <span class="icon">
	              <i class="fa fa-download"></i>
	            </span>
	            <span>Download Word version</span>
	          </a>
	        </p>
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
      cv_url: 'https://www.dropbox.com/s/rcw7i55bult9hpp/rustam_mingazov-s_CV.doc?dl=0'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'

.hero

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

.fa-cog
  font-size: 40px

#learn
  +desktop
    margin-bottom: 2rem

.pd
  +tablet
    padding: 2em 0



</style>
