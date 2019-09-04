<template>
  <div>
    <link href="https://fonts.googleapis.com/css?family=Gayathri|Lexend+Deca&display=swap" rel="stylesheet">
    <ul class="fixed-top nav nav-light bg-light justify-content-center" style="border-bottom:1px solid #CBCBCB;">
      <li class="nav-link"><img src="../assets/canary.png" alt="Logo" width='30' height="30"></li>
      <li class='nav-link page' style="font-family: 'Lexend Deca', sans-serif;"><router-link to="/">Home</router-link></li>
      <li class='nav-link page' style="font-family: 'Lexend Deca', sans-serif;"><router-link to='/features'>Features</router-link></li>
      <li class='nav-link page' style="font-family: 'Lexend Deca', sans-serif;"><router-link to='/contactus'>Our Contacts</router-link></li>
    </ul>

  </div>
</template>
<script>
export default{
  name: 'navbar'

}
</script>
<style>
 
</style>
