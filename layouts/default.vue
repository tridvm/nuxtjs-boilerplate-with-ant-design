<template>
  <div class="d-flex flex-column">
    <BaseHeader />
    <nuxt />
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from '~/components/v-layout/BaseHeader'
import BaseFooter from '~/components/v-layout/BaseFooter'

export default {
  name: 'DefaultLayout',
  components: {
    BaseHeader,
    BaseFooter
  }
}
</script>
