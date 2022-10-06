<template>
  <div class="aboutMe">
    <div><h1>About Me</h1></div>
    <div class="aboutFrame">
      <section class="right-aboutMe">
        <div class="mypic">
          <img src="../img/formalpic.jpg" />
        </div>
      </section>
      <section class="left-aboutMe">
        <div class="about">
          <h2>CHRISTIAN JAVIER</h2>
          <span
            ><p>
              Independent and self-motivated BS Information Technology fresh
              graduate, web developer, good at analytical thinking and
              problem-solving. I love coding, creating functions, and web design
            </p></span
          >
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: "About-Me",
};
</script>
<style scoped>
.aboutMe {
  text-align: center;
  background-color: #f6f6f6;
  height: 1024px;
  width: 100%;
}
.aboutFrame {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-evenly;
  background-color: #d6e4f0;
  width: 1200px;
  height: 597px;
  margin: auto;
  border-radius: 21px;
  box-shadow: 0 3px 5px rgb(126, 126, 126);
}
.about-me2 {
  display: none;
}
.about {
  width: 450px;
  text-align: justify;
  color: #242c64;
}

.aboutMe h1 {
  font-size: 40px;
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
}
.about p {
  font-size: 25px;
  font-weight: 50;
}
.about h2 {
  font-weight: bold;
  text-align: left;
}
.mypic img {
  display: flex;
  width: 330px;
  border-radius: 5%;
  right: 100px;
}
@media only screen and (max-width: 1200px) {
 .aboutFrame{
  width: 1000px;
  height: 450px;
 }
 .mypic img {
  width: 270px;
}

}

@media only screen and (max-width: 1030px) {
 .aboutFrame{
  width: 800px;
  height: 400px;
 }
 .mypic img {
  width: 240px;
}
.about p {
  font-size: 20px;
  font-weight: 30;
}
.about h2 {
  font-size: 40px;
  margin-bottom: 30px;
}
}
@media only screen and (max-width: 830px) {
 .aboutFrame{
  width: 600px;
  height: 330px;
 }
 .mypic img {
  width: 240px;
}
.aboutMe {
  height: 700px;
}
.about p {
  font-size: 16px;
  font-weight: 30;
  margin-left: 30px;
  width: 300px;
}
.about h2 {
  font-size: 25px;
  margin-left: 30px;
  margin-bottom: 30px;
}
}
@media only screen and (max-width: 630px) {
 .aboutFrame{
  width: 500px;
  height: 300px;
 }
 .mypic img {
  width: 250px;
}

.about p {
  font-size: 16px;
  font-weight: 30;
  margin-left: 30px;
  width: 250px;
}
.about h2 {
  font-size: 25px;
  margin-left: 30px;
  margin-bottom: 30px;
}
}
@media only screen and (max-width: 520px) {
 .aboutFrame{
  width: 400px;
  height: 260px;
 }
 .mypic img {
  width: 200px;
}

.about p {
  font-size: 12px;
  width: 200px;
  margin-left: 20px;
}
.about h2 {
  font-size: 20px;
  margin-left: 20px;
}
.left-aboutMe{
  width: 300px;
}
}
@media only screen and (max-width: 420px) {
 .aboutFrame{
  width: 350px;
  height: 260px;
 }
 .mypic img {
  width: 200px;
}
.about p {
  font-size: 12px;
  width: 175px;
}
.about h2 {
  font-size: 16px;
}
}
@media only screen and (max-width: 360px) {
 .aboutFrame{
  width: 100%;
  height: 260px;
  margin: auto;
 }
 .mypic img {
  width: 200px;
}
.about p {
  font-size: 12px;
  width: 175px;
}
.about h2 {
  font-size: 16px;
}
}
</style>