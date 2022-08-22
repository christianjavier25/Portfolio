<template>
  <div class="profile-Intro">
    <div class="name">
      <h1>{{ left }}{{ right }}</h1>
      <br />
      <h1 data-text="CHRISTIAN ">CHRISTIAN JAVIER</h1>
      <span><h3>BS Information Technology | Web Developer</h3></span>
      <div class="icons">
        <a href="https://www.facebook.com/kulokoy999" target="_blank"
          ><img class="socialMedia" src="../img/socialmedia-icon/facebook.png"
        /></a>
        <a href="https://github.com/christianjavier25/" target="_blank"
          ><img class="socialMedia" src="../img/socialmedia-icon/github.png"
        /></a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=javierchristian2512@gmail.com"
          target="_blank"
          ><img
            class="socialMedia"
            src="../img/socialmedia-icon/gmail.png"
            alt=""
        /></a>
      </div>
      <div class="btn">
        <v-btn color="#daece4"
          ><a
            href="https://drive.google.com/file/d/1jRrIzmQz1bGEvmVtwbGaJUaCMmlKg3pq/view?usp=sharing"
            class="btn-resume"
            target="_blank"
            >My Resume</a
          ></v-btn
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Profile-Intro",
  components: {},
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
  height: 700px;
  background-color: #242c64;
}
.btn {
  margin-top: 100px;
  color: #242c64;
}
.btn-resume {
  text-decoration: none;
}
.name h1 {
  color: #daece4;
  font-size: 60px;
  padding: 20px;
}

.socialMedia {
  width: 50px;
  margin-left: 20px;
}
.socialMedia:hover {
  opacity: 0.5;
  cursor: pointer;
}
.name h3 {
  margin: 15px;
  font-size: 20px;
  color: #daece4;
}
.btn .download-btn {
  border-radius: 25%;
  background-color: #daece4;
  padding: 20px;
  font-size: 30px;
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