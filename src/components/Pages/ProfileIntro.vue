<template>
  <div class="profile-Intro">
    <div class="name">
      <h1>
        <font color="#ffd700">&#8705;</font>j<font color="#ffd700">&gt;</font>
      </h1>

      <br />
      <h1>CHRISTIAN JAVIER</h1>
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
      <div class="resume">
        <a
          href="https://drive.google.com/file/d/10HjqjQJGFDRdZ_p_oYV15R6_IVUNzvAv/view?usp=sharing"
          class="btn-resume"
          target="_blank"
          ><button class="mainBtn">My resume</button></a
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
    return {};
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
.resume {
  margin-top: 100px;
  color: #242c64;
}
.btn-resume {
  text-decoration: none;
}
.mainBtn {
  background-color: #daece4;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5%;
  width: 150px;
  color: #242c64;
  font-weight: bold;
}
.mainBtn:hover {
  opacity: 70%;
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