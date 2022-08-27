<template>
  <div class="content">
    <label class="title"> <h1>Projects</h1> </label>
    <div class="portfolio-project">
      <section class="left">
        <div class="project-img">
          <a href="#projects"
            ><img src="../project-img/inventory-system.png"
          /></a>
          <div class="project1">
            <h1>Web App - Sales Inventory system</h1>
            <h4>( Not Yet Deployed )</h4>

            <span>
              <p>
                An Automated System Like a Point-of-Sale systems helps the
                receptionist, material control and the CEO to monitor the sales,
                transaction and manage stocks. And also organized the product
                that helps the material control to easily monitor and manage
                stocks. And transaction that gives an accurate report for the
                CEO.
              </p></span
            >
          </div>
        </div>
        <div class="project-img2">
          <a
            href="https://christianjavier25.github.io/todolist/"
            target="_blank"
            ><img src="../project-img/todolist.png"
          /></a>
          <div class="project2">
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
                Todo list is a list of tasks you need to complete or things that
                you want to do. Helping you not forget anything important.
              </p></span
            >
          </div>
        </div>
        <div class="project-img3">
          <a
            href="https://christianjavier25.github.io/id-generator/"
            target="_blank"
            ><img src="../project-img/idGenerator.png"
          /></a>

          <div class="project3">
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia dignissimos magni reiciendis, inventore ut dolorum velit
                quo neque autem id excepturi debitis nisi at assumenda? Nulla
                dolore similique nam minus?
              </p></span
            >
          </div>
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
              helps the material control to easily monitor and manage stocks.
              And transaction that gives an accurate report for the CEO.
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
              Todo list is a list of tasks you need to complete or things that
              you want to do. Helping you not forget anything important.
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
              Todo list is a list of tasks you need to complete or things that
              you want to do. Helping you not forget anything important.
            </p></span
          >
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: "portfolio-project",
  components: {},
};
</script>
<style scoped>
.content {
  background-color: #242c64;
}
.portfolio-project {
  text-align: center;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  width: 100%;
  height: 1250px;
}
.title {
  /* position: absolute; */
  /* top: 20px; */
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: #daece4;
  margin-top: 30px;
  margin-bottom: 30px;
}
.title h1 {
  border-bottom: 3px solid gold;
}
.project1 {
  display: none;
}
.project2 {
  display: none;
}
.project3 {
  display: none;
}
.right {
  /* position: absolute;
  right: 80px; */
  top: 120px;
  text-align: justify;
}
/* .left {
  position: absolute;
  left: 80px;
  top: 120px;
} */
.mytodo-list {
  text-decoration: none;
}
.project-img img {
  width: 500px;
  margin: 30px;
  /* box-shadow: 10px 10px 5px rgb(97, 91, 91); */
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
  /* box-shadow: 10px 10px 5px rgb(53, 52, 52); */
}
.project-img3 img {
  width: 500px;
  margin: 30px;
  /* box-shadow: 10px 10px 5px rgb(97, 91, 91); */
}
.description {
  width: 500px;
  font-size: 18px;
  color: #daece4;
  margin-right: 30px;
}
.description h4 {
  text-align: center;
  margin-bottom: 20px;
  color: #daece4;
}
.description h1 {
  margin-bottom: 10px;
}
.description2 {
  width: 500px;
  font-size: 18px;
  color: #daece4;
  margin-top: 50px;
  margin-right: 30px;
}
.description2 h4 {
  text-align: center;
  margin-bottom: 20px;
  color: #daece4;
}
.description3 {
  width: 500px;
  font-size: 18px;
  color: #daece4;
  margin-top: 150px;
  margin-right: 30px;
}
.description3 h4 {
  text-align: center;
  margin-bottom: 20px;
  color: #daece4;
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
  /* .right {
    right: 50px;
  }
  .left {
    left: 50px;
  } */
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
  /* .right {
    right: 20px;
  }
  .left {
    left: 20px;
  } */
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
  /* .right {
    right: 20px;
  }
  .left {
    left: 20px; */
  /* } */
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
  /* .right {
    right: 20px;
  }
  .left {
    left: 20px;
  } */
}

@media only screen and (max-width: 800px) {
  /* For mobile phones: */
  .portfolio-project {
    height: 800px;
  }
  .description {
    width: 300px;
  }
  .description2 {
    width: 300px;
    margin-top: 20px;
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
  /* .right {
    top: 170px;
  } */
}

@media only screen and (max-width: 700px) {
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
    width: 250px;
  }
  .project-img2 img {
    width: 250px;
    margin-top: 100px;
  }
  .project-img3 img {
    width: 250px;
    margin-top: 100px;
  }
}

@media only screen and (max-width: 630px) {
  .description {
    width: 250px;
  }
  .description2 {
    width: 250px;
  }
  .description3 {
    width: 250px;
  }
}

@media only screen and (max-width: 600px) {
  .portfolio-project {
    height: 1400px;
    justify-content: center;
  }
  .description {
    display: none;
  }
  .description2 {
    display: none;
  }
  .description3 {
    display: none;
  }
  .project1 {
    display: block;
    color: #daece4;
    width: 400px;
  }
  .project2 {
    display: block;
    color: #daece4;
    width: 400px;
  }
  .project3 {
    display: block;
    color: #daece4;
    width: 400px;
  }
  .project1 p {
    text-align: justify;
  }
  .project2 p {
    text-align: justify;
  }
  .project3 p {
    text-align: justify;
  }
  .project-img2 img {
    margin-top: 20px;
  }
  .project-img3 img {
    margin-top: 20px;
  }
}
@media only screen and (max-width: 450px) {
  /* For mobile phones: */
  .project1 {
    width: 250px;
    margin-left: 50px;
  }
  .project2 {
    width: 250px;
    margin-left: 50px;
  }
  .project3 {
    width: 250px;
    margin-left: 50px;
  }
  .portfolio-project {
    height: 1600px;
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
  /* .project-img2 img {
    margin-top: 250px;
  } */
  .description3 {
    width: 230px;
  }
  /* .project-img3 img {
    margin-top: 180px;
  } */
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
  /* .left {
    top: 20px;
  }
  .right {
    top: 220px;
  } */
}
</style>