<template>
  <div class="profile-Intro">
    <div class="name">
      <h1>CHRISTIAN JAVIER</h1>
      <span><h3>BS Information Technology | Web Developer</h3></span>
      <div class="icons">
        <a href="https://www.facebook.com/kulokoy999" target="_blank"
          ><img class="socialMedia" src="../img/socialmedia-icon/facebook.png"
        /></a>
        <a href="https://github.com/christianjavier25/" target="_blank"
          ><img class="socialMedia centerGit" src="../img/socialmedia-icon/github.png"
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
          href="https://drive.google.com/file/d/1zqhbQUulcvIuiXu2C0PIm5DahYVSQV4A/view?usp=sharing"
          class="btn-resume"
          target="_blank"
          ><button class="mainBtn"> My resume</button></a
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
  background-color: #f6f6f6;

}
.resume {
  margin-top: 100px;
  color: #242c64;
  padding: 50px;
}

.btn-resume {
  text-decoration: none;
}
/* .mainBtn {
  background-color: #1E56A0;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 50px;
  width: 150px;
  color: #FFFFFF;
  font-weight: bold;
  border: none;
}
.mainBtn:hover {
  opacity: 70%;
} */
/* From uiverse.io */
button {
  padding: 15px 30px;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

button:hover {
  background-color: #3580f0;
  box-shadow: 0px 15px 20px #d6e4f0;
  color: #fff;
  transform: translateY(-7px);
}

button:active {
  transform: translateY(-1px);
}
.name h1 {
  color: #000000;
  font-size: 70px;
  padding: 20px;

}
.icons{
  display: flex;
  justify-content: center;
  align-items: center;
}
.socialMedia {
  width: 50px;
  /* margin-left: 20px; */
}
.socialMedia:hover {
  opacity: 0.5;
  cursor: pointer;
}
.centerGit{
  margin-left: 20px;
  margin-right: 20px;
}
.name h3 {
  margin: 15px;
  font-size: 20px;
  color: #000000;
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
    font-size: 50px;
  }
  .socialMedia {
  width: 30px;
}
button {
  padding: 10px 20px;
  font-size: 16px;
}
}
@media only screen and (max-width: 430px) {
  /* For mobile phones: */
  .name h1 {
    font-size: 40px;
  }
  .name h3{
    font-size: 16px;
  }
  button {
  padding: 8px 16px;
  font-size: 12px;
}
.resume {
  margin-top: 50px;
}
}
@media only screen and (max-width: 340px) {
  /* For mobile phones: */
  .name h1 {
    font-size: 30px;
    padding: 5px;
  }
  .name h3 {
    margin: 6px;
  }

}
</style>