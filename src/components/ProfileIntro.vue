<template>
  <v-card class="profile-Intro" width="100%" height="680px" color="#252839">
    <v-card-text>
      <div class="name">
      <h1>{{ left }}{{ right }}</h1><br/>
        <h1 data-text="CHRISTIAN "> CHRISTIAN JAVIER </h1>
        <span><h3>BS Information Technology | Web Developer</h3></span>
      </div>
        
    </v-card-text>
    
      <v-btn class="download-btn" href="./storage/JAVIER-CHRISTIAN.pdf" target="_blank" absolute>My Resume</v-btn>
  </v-card>
</template>
<script>
export default {
  name: "Profile-Intro",
  components: {
  },
  data() {
    return {
      right: "j>",
      left: "<",
    };
  },
};
</script>
<style scoped>
.profile-Intro {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.name {
  color: aliceblue;
}

.name h1 {
  color: #01fe87;
  font-size: 60px;
  padding: 20px;
}
.name h3 {
  margin: 15px;
  font-size: 20px;
}
.download-btn {
  bottom: 130px;
}


@media only screen and (max-width: 600px) {
  /* For mobile phones: */
  .name h1 {
    font-size: 32px;
  }
}
@media only screen and (max-width: 430px) {
  /* For mobile phones: */
  .name h1 {
    font-size: 30px;
  }
}
@media only screen and (max-width: 340px) {
  /* For mobile phones: */
  .name h1 {
    font-size: 24px;
    padding: 5px;
  }
  .name h3 {
    margin: 8px;
  }
}
</style>