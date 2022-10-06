<template>
  <div class="projects">
    <h1>PROJECTS</h1>
    <div class="project-cards">
      <div class="row">
        <v-card v-model="slide1" class="project-card">
          <img
            src="../project-img/inventory-system.png"
            alt="Sales Inventory"
          />
          <div class="project-title">
            <h3>Sales Inventory System</h3>
          </div>
          <div class="project-description">
            Tech used: HTML, CSS, JS, PHP, MySQL
          </div>
          <v-btn block disabled color="#3580f0">Visit (not applicable)</v-btn>
        </v-card>
        <v-card v-model="slide2" class="project-card">
          <img src="../project-img/idGenerator.png" alt="ID Generator" />
          <div class="project-title"><h3>ID Generator</h3></div>
          <div class="project-description">Tech used: HTML, CSS, React.js</div>
          <v-btn
            block
            color="#3580f0"
            href="https://christianjavier25.github.io/id-generator/"
            target="blank_"
          >
            Visit
          </v-btn>
        </v-card>
        <v-card v-model="slide3" class="project-card">
          <img src="../project-img/calculator.png" alt="Calculator" />
          <div class="project-title"><h3>Calculator</h3></div>
          <div class="project-description">Tech used: HTML, CSS, Vue.js</div>
          <v-btn
            block
            color="#3580f0"
            href="https://christianjavier25.github.io/calculator/"
            target="blank_"
          >
            Visit
          </v-btn>
        </v-card>
        <v-card v-model="slide4" class="project-card">
          <img src="../project-img/todolist.png" alt="Todo-List" />
          <div class="project-title"><h3>Todo-List</h3></div>
          <div class="project-description">Tech used: HTML, CSS, Vue.js</div>
          <v-btn
            block
            color="#3580f0"
            href="https://christianjavier25.github.io/todolist/"
            target="blank_"
          >
            Visit
          </v-btn>
        </v-card>
      </div>
    </div>

    <v-carousel
      cycle
      height="400"
      show-arrows-on-hover
      :show-arrows="false"
      class="slides"
    >
      <v-carousel-item>
        <v-card class="project-card">
          <img
            src="../project-img/inventory-system.png"
            alt="Sales Inventory"
          />
          <div class="project-title">
            <h3>Sales Inventory System</h3>
            <p>( Capstone )</p>
          </div>
          <div class="project-description">
            Tech used: HTML, CSS, JS, PHP, MySQL
          </div>
          <v-btn block disabled color="#3580f0">Visit (not applicable)</v-btn>
        </v-card>
      </v-carousel-item>

      <v-carousel-item>
        <v-card class="project-card">
          <img src="../project-img/idGenerator.png" alt="Sales Inventory" />
          <div class="project-title"><h3>ID Generator</h3></div>
          <div class="project-description">Tech used: HTML, CSS, React.js</div>
          <v-btn
            block
            href="https://christianjavier25.github.io/id-generator/"
            target="_blank"
            color="#3580f0"
          >
            Visit
          </v-btn>
        </v-card>
      </v-carousel-item>

      <v-carousel-item>
        <v-card class="project-card">
          <img src="../project-img/calculator.png" alt="Sales Inventory" />
          <div class="project-title"><h3>Calculator</h3></div>
          <div class="project-description">Tech used: HTML, CSS, Vue.js</div>
          <v-btn
            block
            href="https://christianjavier25.github.io/calculator/"
            target="blank_"
            color="#3580f0"
          >
            Visit
          </v-btn>
        </v-card>
      </v-carousel-item>

      <v-carousel-item>
        <v-card class="project-card">
          <img src="../project-img/todolist.png" alt="Todo List" />
          <div class="project-title"><h3>Todo-List</h3></div>
          <div class="project-description">Tech used: HTML, CSS, Vue.js</div>
          <v-btn
            block
            href="https://christianjavier25.github.io/todolist/"
            target="blank_"
            color="#3580f0"
          >
            Visit
          </v-btn>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
export default {
  data: () => ({
    model: 0,
  }),
};
</script>
<style scoped>
.projects {
  text-align: center;
  height: 1024px;
  width: 100%;
  background-color: #f6f6f6;
  padding-top: 50px;
}
.project-cards .row {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  padding: 50px;
}
.project-card {
  padding: 20px;
  width: 500px;
  height: 350px;
  margin-bottom: 50px;
  border: none;
  box-shadow: 0px 3px 10px #beb5b595;
}
img {
  width: 250px;
  height: 140px;
  border-radius: 15px;
  box-shadow: 0px 3px 0px #cfc9c995;
}

.project-title {
  margin-left: 20px;
  margin-top: 15px;
  text-align: left;
  font-size: 16px;
}
.project-description {
  margin-left: 20px;
  margin-bottom: 10px;
  text-align: left;
  font: 20px;
}
button {
  padding: 6px;
  width: 100%;
  background-color: #1e56a0;
  font-size: 20px;
  font-weight: bold;
  color: #f6f6f6;
  margin-top: 15px;
}
.v-btn__content {
  color: #f6f6f6;
}
.slides {
  display: none;
}
button p {
  font-size: 14px;
}
button:hover {
  opacity: 70%;
}
@media only screen and (max-width: 900px) {
  .project-card {
    width: 300px;
  }
  .project-title h3 {
    font-size: 20px;
    font-weight: bold;
  }
  .project-description {
    font: 16px;
    width: 200px;
  }
}
@media only screen and (max-width: 710px) {
  .project-card {
    width: 270px;
  }
  .project-title h3 {
    font-size: 18px;
  }
  img {
    width: 210px;
  }
}
@media only screen and (max-width: 650px) {
  .project-cards {
    display: none;
  }
  .project-card {
    width: 600px;
  }
  .project-title {
    font-size: 16px;
  }
  .project-description {
    font: 20px;
    width: 300px;
  }
  .slides {
    display: block;
    margin-top: 100px;
  }
  .slides {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
}
</style>
