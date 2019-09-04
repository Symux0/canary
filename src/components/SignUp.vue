<template>
  <div class="body">
    <div class="container text-dark">
      <div class="d-flex h-100 text-center align-items-center">
        <div class="jumbotron w-50 bg-white" style="margin-top:10%;">
            <span v-html="error"></span>
              <form class="">
                <div class="form-group w-100" >
                  <label for="exampleInputEmail1">Username</label>
                  <input type="text" class="form-control w-" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="username" placeholder="Enter email">
                </div>
                <div class="form-group w-100" >
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" class="form-control w-" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email" placeholder="Enter email">
                  <small id="emailHelp" class="form-text text-dark">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group w-100">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" v-model="password" placeholder="Password">
                </div>
                <button type="submit" class="btn btn-secondary" v-on:click='reg'>Submit</button>
              </form>
        </div>
        <div class="container w-50 ">
          <div class="jumbotron bg-light" style="margin-top:8%;">
            <div>
              <img src="../assets/canary.png" height='150' alt="">
            </div>
            <div>
              <p class="text-muted font-italic m-4">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus eaque qui veritatis quas quam provident obcaecati explicabo quibusdam ab enim, animi quaerat culpa, vel rem non ipsum nemo consectetur est."</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'signup',
  data () {
    return {
      username: '',
      email: '',
      password: '',
      errormessage: '',
      error: ''
    }
  },
  methods: {
    register: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(user => {
        alert(`Welcome ` + this.email)
        this.$router.push('/account/')
      }, err => {
        this.errormessage = err.message
        this.error = '<div class="alert alert-danger alert-dismissible fade show" role="alert">' + this.errormessage + ' <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'
      })
    }
  }
}
</script>

<style scoped>
  .body{
    height: 100vh;
    min-height: 25rem;    
    background-image:url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80');
    background-size:cover;
  }
</style>