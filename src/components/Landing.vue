<template>
  <div>
    <navbar></navbar>
    <header class="mt-5">
      <div class="overlay"></div>
      <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
        <source src="../assets/workspace.mp4" type="video/mp4">
      </video>
      <div class="container h-100">
        <div class="d-flex h-100 text-center align-items-center">
          <div class="jumbotron w-100 bg-light">
            <img src="../assets/canary.png" alt="Logo" height="100">
            <h1 class="display-3">Sign Up</h1>
            <p class="lead mb-0">To get some cool studying resources or to just be a part of the community if you aren't.</p>
            <router-link to="/signup"><button class="btn btn-outline-secondary m-5">Sign Up</button></router-link>
            <p>Are you already a member?<a class="link" href=""><router-link to="/signin">Sign In</router-link></a></p>
          </div>
        </div>
      </div>
    </header>
    <contact></contact>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Contact from '../components/Contact'
export default {
  name: 'landing',
  components: {
    'navbar': Navbar,
    'contact': Contact
  }
}
</script>

<style scoped>
header {
  position: relative;
  background-color: black;
  height: 90vh;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
}

header video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

header .container {
  position: relative;
  z-index: 2;
}

header .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
}


</style>