<template>
  <section class="section">
    <div class="section__wrapper">
      <h1>Check in inspect element</h1>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  mounted() {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=SpyxFamily&maxResults=5`)
      .then((response) => {
        console.log(response.data)
      })
  }
}
</script>
