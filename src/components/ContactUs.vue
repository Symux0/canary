<template> 
  
  <div>
    <navbar></navbar>
    
    <div class="card mt-5">
      <div class='row no-gutters'>
        <div class="col-4">
          <img src="../assets/img.jpg" alt="Levi Nzamba" width='100' class='card-img-top'>
        </div>
        <div class="col-8">
          <div class="card-body">
            <h4>Levi Nzamba</h4>
            <p class="lean">For business enquiries please call:</p>
            <p>Email: Picklebackblack@gmail.com</p>
          </div>
        </div>  
      </div>
    </div>
    <div class="card mt-4">
      <div class='row no-gutters'>
        <div class="col-4">
          <img src="../assets/img.jpg" alt="Levi Nzamba" width='100' class='card-img-top'>
        </div>
        <div class="col-8">
          <div class="card-body">
            <h4>Ian Cecil</h4>
            <p class="lean">For business enquiries please call:</p>
            <p>Email: Picklebackblack@gmail.com</p>
          </div>
        </div>  
      </div>
    </div>
    <div class="full-counter"></div>
    <contact class="fixed-bottom"></contact>
  </div>

</template>

<script>
import Navbar from './Navbar'
import Contact from '../components/Contact'
export default {
  name: 'contactus',
  components: {
    'navbar': Navbar,
    'contact': Contact
  }
}
</script>

<style>
  .full-counter{
    margin-top:20%;
  }
</style>