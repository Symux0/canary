<template>
    <div class="body">
    <div class="container text-dark">
      <div class="d-flex h-100 text-center align-items-center">
        <div class="jumbotron w-50 bg-white" style="margin-top:10%;">
              <form class="">
                <div class="form-group w-100" >
                  <label for="exampleInputEmail1">Email or Username</label>
                  <input type="text" class="form-control w-" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email or username">
                </div>
                <div class="form-group w-100">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <div class="form-group w-100 form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-secondary">Submit</button>
              </form>
        </div>
        <div class="container w-50 ">
          <div class="jumbotron bg-light" style="margin-top:21%;">
            <img src="../assets/canary.png" height='150' alt="">
            <div>
              <p class="text-muted font-italic m-1">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus eaque qui veritatis quas quam provident obcaecati explicabo quibusdam ab enim, animi quaerat culpa, vel rem non ipsum nemo consectetur est."</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'signin'
}
</script>

<style scoped>
  .body{
    height: 100vh;
    min-height: 25rem;    
    background-image:url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=541&q=80');
    background-size:cover;
  }
</style>