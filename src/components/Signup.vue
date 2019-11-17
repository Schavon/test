<template>
<div class="from-inline">
  <h3>Sign up</h3>
  <div class="form-group">
  <input 
  type="text"
  placeholder="email"
  class="form-control"
  v-model="email"
  />
  <input 
  type="password"
  placeholder="password"
  class="form-control"
  v-model="password"
  >
  <br>
  <button class="btn btn-primary" @click="signUp">Sign up</button>
</div>
<br>
<p> {{error.message}}</p>
<router-link to="/signin">Alredy a user? Sign in</router-link>

</div>
</template>

<script>
import { firebaseApp } from '../firebaseApp' 

export default {
  data() {
    return {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  },
  methods: {
    signUp() {
firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
 .catch(error => {
  this.error = error
})
    }
  }
}
</script>