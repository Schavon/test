<template>
<div class="">
  <h3> events dashborads</h3>
  <button class="btn btn-danger btn-sm" @click="signOut">sign out</button>

  {{$store.state}}

</div>

</template>

<script>
import { firebaseApp } from '../firebaseApp'

export default {
  methods: {
    signOut() {
      this.$store.dispatch('signOut')
      firebaseApp.auth().signOut()
    }
  }
}

</script>
