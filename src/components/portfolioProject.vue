<template>
  <v-card class="portfolio-project" width="100%" height="680px" color="#ded5bd">
    <v-card-title class="title"> Projects </v-card-title>
    <section class="left">
      <div class="project-img">
        <img src="./project-img/inventory-system.png" />
      </div>
    </section>
    <section class="right">
      <div class="description">
        <label><h1>Web App - Sales Inventory system </h1> <h4>( Not Yet Deployed )</h4></label>
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
}
.title {
  position: absolute;
  top: 20px;
  font-size: 40px;
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
  box-shadow: 10px 10px 5px rgb(97, 91, 91);
}

.project-img img {
  width: 500px;
}
.description {
  width: 500px;
  font-size: 18px;
}
.description h4{
  text-align: center;
  margin-bottom: 20px;
}
.description h1 {
  margin-bottom: 10px;
}
@media only screen and (max-width: 1100px) {
  .project-img img {
    width: 400px;
  }
  .description {
    width: 400px;
  }
}
  .right {
  right: 20px;
  }
  .left {
    left: 20px;
  }

@media only screen and (max-width: 835px) {
  .project-img img {
    width: 400px;
  }
  .description {
    width: 350px;
  }
}
  .right {
  right: 20px;
  }
  .left {
    left: 20px;
  }

@media only screen and (max-width: 800px) {
  /* For mobile phones: */
  .description {
    width: 400px;
  }
  .right {
    top: auto;
    right: auto;
    bottom: 100px;
  }
  .left {
    left: auto;
    top: 100px;
  }
  .project-img img {
    width: 400px;
    border-radius: 5%;
  }
}
.description h1 {
  font-size: 30px;
}
.description p {
  font-size: 20px;
}

@media only screen and (max-width: 400px) {
  /* For mobile phones: */
  .description {
    width: 280px;
  }
  .right {
    top: auto;
    right: auto;
    bottom: 130px;
  }
  .left {
    left: auto;
    top: 100px;
  }
  .project-img img {
    width: 300px;
    border-radius: 5%;
  }
}
.description h1 {
  font-size: 30px;
}
.description p {
  font-size: 14px;
}
@media only screen and (max-width: 280px) {
  /* For mobile phones: */
    .right {
      top: auto;
    right: auto;
    bottom: 100px;
  }
  .left {
    left: auto;
    top: 100px;
  }
  .description {
    width: 200px;
  }

  .description h1 {
    font-size: 18px;
  }
  .description p {
    font-size: 16px;
  }
  .project-img img {
    width: 250px;
    border-radius: 5%;
  }

}

</style>