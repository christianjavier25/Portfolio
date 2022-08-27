<template>
  <div>
    <div class="skills">
      <div class="label">
        <label><h1>Skills</h1></label>
      </div>
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
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 700px;
  background-color: #242c64;
}
h1 {
  padding: 30px;
  margin-top: 30px;
  font-size: 50px;
  color: #daece4;
}
h4 {
  color: #daece4;
}

.row {
  display: flex;
  justify-content: center;
  margin: auto;
}
.item {
  margin: 50px;
  width: 120px;
}
img {
  width: 100px;
  height: 100px;
}
@media only screen and (max-width: 875px) {
  .item {
    margin: 30px;
    width: 120px;
  }
}
@media only screen and (max-width: 720px) {
  .item {
    margin: 30px;
    width: 120px;
  }
  h1 {
    font-size: 40px;
  }
  .item {
    margin: 30px;
  }
  .skills {
    height: 800px;
  }
}
@media only screen and (max-width: 570px) {
  img {
    width: 70px;
    height: 70px;
  }
  .skills {
    height: 900px;
  }
}
@media only screen and (max-width: 370px) {
  img {
    width: 40px;
    height: 40px;
  }
  .skills {
    height: 700px;
  }

  h1 {
    font-size: 30px;
  }
  .item {
    margin: 20px;
  }
}
@media only screen and (max-width: 318px) {
  img {
    width: 50px;
    height: 50px;
  }
  .skills {
    height: 700px;
  }

  h1 {
    font-size: 30px;
  }
  h4 {
    font-size: 12px;
  }
  .item {
    width: 70px;
  }
}
</style>