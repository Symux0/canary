<template>
  
  <div class="body">
    <navbar></navbar>
    <div class="row mt-5">
      <div class="col-lg">
        <div class="container">
          <div class="card" style="width:25rem;">
            <img src="../assets/notes.png" alt="Notes" class='card-img-top'>
            <div class='card-header'>
              <h5>Notes</h5>
            </div>
            <div class="card-body">
              <p>Be able to access multiple notes that are proffessionally written to encourage maximum comprehension with minimal effort, with over 7 subjects to choose from there's alot to go around.</p>
            </div>
          </div>
        </div>
        <br>
      </div>
      <div class="col-lg">
        <div class="container">
          <div class="card" style="width:25rem;">
            <img src="../assets/videos.png" alt="Videos" class='card-img-top'>
            <div class='card-header'>
              <h5>Videos</h5>
            </div>
            <div class="card-body">
              <p>Nothing is as comprehensive as a practical experience to a concept, but what about the next best thing with.Videos help to visualize a concept through imagery and sound and with over 50 videos you can never get enough.</p>
            </div>
          </div>
        </div>
        <br>
      </div>
    </div>
    <div class="row mt-5 mb-5">
      <div class="col-lg">
        <div class="container">
          <div class="card" style="width:25rem;">
            <img src="../assets/games.png" alt="games" class='card-img-top'>
            <div class='card-header'>
              <h5>Games</h5>
            </div>
            <div class="card-body">
              <p>Feel the challenge as you overcome obstacles that tease your brain and upon completion strengthen it.Struggle to beat your friends and get to the top of the leaderboards, good luck becoming the best in these academic milestones.</p>
            </div>
          </div>
        </div>
        <br>
      </div>
      <div class="col-lg">
        <div class="container">
          <div class="card" style="width:25rem;">
            <img src="../assets/connect.png" alt="connect" class='card-img-top'>
            <div class='card-header'>
              <h5>Connect</h5>
            </div>
            <div class="card-body">
              <p>A good meal can only become the best meal when eaten with others, same goes for knowledge.Share with others what you know as you learn from them.Meet many other scholars who suffer similar problems as you and work them out together, the community awaits you.</p>
            </div>
          </div>
        </div>
        <br>
      </div>
    </div>
    <contact></contact>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Contact from '../components/Contact'
export default {
  name: 'features',
  components: {
    'navbar': Navbar,
    'contact': Contact
  }
}
</script>

<style scoped>
  .body{
    width: 98.5%;
  }
  .card {
    margin: 0 auto;
    margin-left:20%; 
  
  }
</style>