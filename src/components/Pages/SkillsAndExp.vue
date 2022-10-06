<template>
  <div>
    <div class="skills">
      <div class="label">
        <label><h1>Skills</h1></label>
      </div>
      <div class="skillFrame">
        <div class="row">
        <div class="item">
          <img src="../Tech-Icon/php-icon.png" /><br />
          <label><h4>PHP</h4></label>
        </div>
        <div class="item">
          <img src="../Tech-Icon/laravel-icon.png" /><br />
          <label><h4>Laravel</h4></label>
        </div>
        <div class="item">
          <img src="../Tech-Icon/vuejs-icon.png" /><br />
          <label><h4>Vue.js</h4></label>
        </div>
        <div class="item">
          <img src="../Tech-Icon/js-icon.png" /><br />
          <label><h4>JavaScript</h4></label>
        </div>

        <div class="item">
          <img src="../Tech-Icon/css-Icon.png" /><br />
          <label><h4>CSS</h4></label>
        </div>

        <div class="item">
          <img src="../Tech-Icon/html-icon.png" /><br />
          <label><h4>HTML</h4></label>
        </div>
        <div class="item">
          <img src="../Tech-Icon/mysql-icon.png" /><br />
          <label><h4>MySQL</h4></label>
        </div>
        <div class="item">
          <img src="../Tech-Icon/git logo.png" /><br />
          <label><h4>Git</h4></label>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "my-skills",
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped>
.skills {
  text-align: center;
  background-color: #f6f6f6;
  width: 100%;
  height: 1024px;

}
.skillFrame{
  background-color: #D6E4F0;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 100px;
}
h1 {
  font-size: 40px;
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
}
h4 {
  color: #000000;
  margin-top: 50px;
}

.row {
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
}
.item {
  margin: 50px;
  width: 160px;
}
img {
  width: 150px;
  height: 145px;
}
@media only screen and (max-width: 1200px) {
  .item {
    margin: 30px;
  }
  img {
  width: 100px;
  height:95px;
}
}
@media only screen and (max-width: 1080px) {
  .item {
    margin: 30px;
    width: 150px;
  }
  img {
  width: 80px;
  height: 75px;
}
}
@media only screen and (max-width: 875px) {
  .item {
    margin: 30px;
    width: 100px;
  }
  h4 {
    font-size: 18px;
}
  img {
  width: 70px;
  height: 65px;
}
.skillFrame{
  padding: 70px;
  padding-top: 0;
  padding-bottom: 0;
}
}
@media only screen and (max-width: 680px) {
  .item {
    margin: 30px;
    width: 100px;
  }
  img {
  width: 60px;
  height: 55px;
}
h4 {
    font-size: 16px;
}
.skillFrame{
  padding: 50px;
}
}
@media only screen and (max-width: 605px) {
  .item {
    margin: 30px;
    width: 100px;
  }
  img {
  width: 50px;
  height: 45px;
}
.skillFrame{
  padding: 20px;
}
}
@media only screen and (max-width: 560px) {
  .item {
    margin: 30px;
    width: 100px;
  }
  img {
  width: 40px;
  height: 39px;
}
}
@media only screen and (max-width: 500px) {
  .row{
    margin-top: 50px;
  }
}
@media only screen and (max-width: 350px) {
  .item {
    margin: 30px;
    width: 80px;
  }
  h4 {
    font-size: 14px;
}
}
@media only screen and (max-width: 295px) {
  .item {
    margin: 30px;
    width: 60px;
  }
  h4 {
    font-size: 10px;
}
}
</style>