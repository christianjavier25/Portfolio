<template>
  <v-card class="portfolio-project">
    <label class="title"> <h2>Projects</h2> </label>
    <section class="left">
      <div class="project-img">
        <a href="#projects"
          ><img src="../project-img/inventory-system.png"
        /></a>
      </div>
      <div class="project-img2">
        <a href="https://christianjavier25.github.io/todolist/" target="_blank"
          ><img src="../project-img/todolist.png"
        /></a>
      </div>
      <div class="project-img3">
        <a
          href="https://christianjavier25.github.io/id-generator/"
          target="_blank"
          ><img src="../project-img/idGenerator.png"
        /></a>
      </div>
    </section>
    <section class="right">
      <div class="description">
        <h1>Web App - Sales Inventory system</h1>
        <h4>( Not Yet Deployed )</h4>

        <span>
          <p>
            An Automated System Like a Point-of-Sale systems helps the
            receptionist, material control and the CEO to monitor the sales,
            transaction and manage stocks. And also organized the product that
            helps the material control to easily monitor and manage stocks. And
            transaction that gives an accurate report for the CEO.
          </p></span
        >
      </div>
      <div class="description2">
        <h1>To-Do List</h1>
        <h4>
          To visit the site just
          <a
            href="https://christianjavier25.github.io/todolist/"
            target="_blank"
            class="mytodo-list"
            >Click here !</a
          >
        </h4>

        <span>
          <p>
            Todo list is a list of tasks you need to complete or things that you
            want to do. Helping you not forget anything important.
          </p></span
        >
      </div>
      <div class="description3">
        <h1>ID Generator</h1>
        <h4>
          To visit the site just
          <a
            href="https://christianjavier25.github.io/id-generator/"
            target="_blank"
            class="mytodo-list"
            >Click here !</a
          >
        </h4>

        <span>
          <p>
            Todo list is a list of tasks you need to complete or things that you
            want to do. Helping you not forget anything important.
          </p></span
        >
      </div>
    </section>
  </v-card>
</template>
<script>
export default {
  name: "portfolio-project",
  components: {},
};
</script>
<style scoped>
.portfolio-project {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 1250px;
  background-color: #daece4;
}
.title {
  position: absolute;
  top: 20px;
  font-size: 40px;
  color: #242c64;
}
.right {
  position: absolute;
  right: 80px;
  top: 120px;
  text-align: justify;
}
.left {
  position: absolute;
  left: 80px;
  top: 120px;
}
.mytodo-list {
  text-decoration: none;
}
.project-img img {
  width: 500px;
  margin: 30px;
  box-shadow: 10px 10px 5px rgb(97, 91, 91);
}
.project-img:hover {
  opacity: 50%;
}
.project-img2:hover {
  opacity: 50%;
}
.project-img3:hover {
  opacity: 50%;
}
.project-img2 img {
  width: 500px;
  margin: 30px;
  box-shadow: 10px 10px 5px rgb(97, 91, 91);
}
.project-img3 img {
  width: 500px;
  margin: 30px;
  box-shadow: 10px 10px 5px rgb(97, 91, 91);
}
.description {
  width: 500px;
  font-size: 18px;
  color: #242c64;
}
.description h4 {
  text-align: center;
  margin-bottom: 20px;
  color: #242c64;
}
.description h1 {
  margin-bottom: 10px;
}
.description2 {
  width: 500px;
  font-size: 18px;
  color: #242c64;
  margin-top: 50px;
}
.description2 h4 {
  text-align: center;
  margin-bottom: 20px;
  color: #242c64;
}
.description3 {
  width: 500px;
  font-size: 18px;
  color: #242c64;
  margin-top: 150px;
}
.description3 h4 {
  text-align: center;
  margin-bottom: 20px;
  color: #242c64;
}
.description3 h1 {
  text-align: center;
  margin-bottom: 10px;
}
.description2 h1 {
  text-align: center;
  margin-bottom: 10px;
}
@media only screen and (max-width: 1200px) {
  .project-img img {
    width: 500px;
  }
  .project-img2 img {
    width: 500px;
  }
  .project-img3 img {
    width: 500px;
  }
  .description {
    width: 400px;
  }
  .description2 {
    width: 400px;
    margin-top: 50px;
  }
  .description3 {
    width: 400px;
    margin-top: 100px;
  }
  .right {
    right: 50px;
  }
  .left {
    left: 50px;
  }
}

@media only screen and (max-width: 1100px) {
  .project-img img {
    width: 400px;
  }
  .project-img2 img {
    width: 400px;
  }
  .project-img3 img {
    width: 400px;
  }
  .description {
    width: 400px;
  }
  .description2 {
    width: 400px;
    margin-top: 50px;
  }
  .description3 {
    width: 400px;
    margin-top: 50px;
  }
  .right {
    right: 20px;
  }
  .left {
    left: 20px;
  }
}
@media only screen and (max-width: 900px) {
  .project-img img {
    width: 300px;
    margin: 50px;
  }
  .project-img2 img {
    width: 300px;
    margin: 50px;
  }
  .project-img3 img {
    width: 300px;
    margin: 50px;
  }
  .description {
    width: 400px;
  }
  .description2 {
    width: 400px;
  }
  .description3 {
    width: 400px;
  }
  .right {
    right: 20px;
  }
  .left {
    left: 20px;
  }
}

@media only screen and (max-width: 835px) {
  .project-img img {
    width: 300px;
    margin: 50px;
  }
  .project-img2 img {
    width: 300px;
    margin: 50px;
  }
  .project-img3 img {
    width: 300px;
    margin: 50px;
  }
  .description {
    width: 350px;
  }
  .description2 {
    width: 350px;
  }
  .description3 {
    width: 350px;
  }
  .right {
    right: 20px;
  }
  .left {
    left: 20px;
  }
}

@media only screen and (max-width: 800px) {
  /* For mobile phones: */
  .description {
    width: 300px;
  }
  .description2 {
    width: 300px;
  }
  .description3 {
    width: 300px;
  }
  .project-img img {
    width: 270px;
    border-radius: 5%;
  }
  .project-img2 img {
    width: 270px;
    border-radius: 5%;
  }
  .project-img3 img {
    width: 270px;
    border-radius: 5%;
  }
  .description h1 {
    font-size: 20px;
  }
  .description p {
    font-size: 14px;
  }
  .description2 h1 {
    font-size: 20px;
  }
  .description2 p {
    font-size: 14px;
  }
  .description3 h1 {
    font-size: 20px;
  }
  .description3 p {
    font-size: 14px;
  }
  .right {
    top: 170px;
  }
}
@media only screen and (max-width: 700px) {
  /* For mobile phones: */
  .description {
    width: 500px;
  }
  .description2 {
    margin-top: 200px;
    width: 500px;
  }
  .description3 {
    margin-top: 200px;
    width: 500px;
  }
  .project-img img {
    width: 300px;
    border-radius: 5%;
  }
  .project-img2 img {
    width: 300px;
    border-radius: 5%;
    margin-top: 220px;
  }
  .project-img3 img {
    width: 300px;
    border-radius: 5%;
    margin-top: 160px;
  }
  .description h1 {
    text-align: center;
    font-size: 20px;
  }
  .description p {
    font-size: 14px;
  }
  .description2 h1 {
    font-size: 20px;
  }
  .description2 p {
    font-size: 14px;
  }
  .description3 h1 {
    font-size: 20px;
  }
  .description3 p {
    font-size: 14px;
  }
  .left {
    top: 50px;
    left: auto;
  }
  .right {
    top: 300px;
    right: auto;
  }
}
@media only screen and (max-width: 700px) {
  /* For mobile phones: */
  .description {
    width: 350px;
  }
  .description2 {
    width: 350px;
  }
  .description3 {
    width: 350px;
  }
  .project-img img {
    width: 250px;
  }
  .project-img2 img {
    width: 250px;
  }
  .project-img3 img {
    width: 250px;
  }
  .right {
    top: 250px;
    right: auto;
  }
}
@media only screen and (max-width: 450px) {
  /* For mobile phones: */
  .description {
    width: 300px;
  }
  .title {
    font-size: 20px;
  }
  .left {
    top: 20px;
  }
  .right {
    top: 220px;
  }
  .description2 {
    width: 300px;
  }
  .description3 {
    width: 300px;
  }
  .project-img2 img {
    margin-top: 250px;
  }
  .project-img3 img {
    margin-top: 200px;
  }
}

@media only screen and (max-width: 280px) {
  /* For mobile phones: */
  .description {
    width: 230px;
  }
  .description2 {
    width: 230px;
  }
  .project-img2 img {
    margin-top: 250px;
  }
  .description3 {
    width: 230px;
  }
  .project-img3 img {
    margin-top: 180px;
  }
  .title {
    font-size: 20px;
  }
  .description h1 {
    text-align: center;
    font-size: 16px;
  }
  .description p {
    font-size: 12px;
  }
  .description2 h1 {
    font-size: 16px;
  }
  .description2 p {
    font-size: 12px;
  }
  .description3 h1 {
    font-size: 16px;
  }
  .description3 p {
    font-size: 12px;
  }
  .left {
    top: 20px;
  }
  .right {
    top: 220px;
  }
}
</style>