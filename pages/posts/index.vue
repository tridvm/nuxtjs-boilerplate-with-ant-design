<template>
  <div class="container-fluid main-content px-4">
    <h1 class="mt-5">Top trending posts</h1>

    <div class="row justify-content-between px-5">
      <a-card v-for="post in posts" :key="post.id" hoverable style="width: 240px" class="col-auto">
        <img
          slot="cover"
          alt="example"
          :src="post.imageUrl"
          style="min-height: 238px"
        />
        <a-card-meta :title="`${post.title} ${post.id}`">
          <template slot="description">
            {{ post.description }}
          </template>
        </a-card-meta>
      </a-card>
    </div>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'New post',
          description: 'Description 1',
          imageUrl: 'https://picsum.photos/200'
        },
        {
          id: 2,
          title: 'New post',
          description: 'Description 2',
          imageUrl: 'https://picsum.photos/200'
        },
        {
          id: 3,
          title: 'New post',
          description: 'Description 3',
          imageUrl: 'https://picsum.photos/200'
        },
        {
          id: 4,
          title: 'New post',
          description: 'Description 1',
          imageUrl: 'https://picsum.photos/200'
        },
        {
          id: 5,
          title: 'New post',
          description: 'Description 2',
          imageUrl: 'https://picsum.photos/200'
        },
        {
          id: 6,
          title: 'New post',
          description: 'Description 3',
          imageUrl: 'https://picsum.photos/200'
        },
      ]
    }
  },
  components: {
    // Logo
  }
}
</script>

<style>
/*
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
