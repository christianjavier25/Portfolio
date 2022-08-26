<template>
  <div>
    <b-navbar toggleable="lg">
      <b-navbar-brand href="#"
        ><h1>
          <font color="#ffd700">&#8705;</font>j<font color="#ffd700">&gt;</font>
        </h1></b-navbar-brand
      >

      <!-- Right aligned nav items -->
      <div class="rightnav">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#home">Home</b-nav-item>
            <b-nav-item href="#about">About me</b-nav-item>
            <b-nav-item href="#skills">Skills</b-nav-item>
            <b-nav-item href="#projects">Projects</b-nav-item>
            <b-nav-item href="#contact">Contact me</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding-left: 50px;
  padding-right: 50px;
  background-color: rgb(93, 109, 204);
  min-height: 60px;
}
.navbar-brand {
  color: whitesmoke;
  display: block;
}
.nav-link {
  font-size: 20px;
  color: whitesmoke;
}
.navbar-nav {
  flex-direction: unset;
}
.nav-item {
  margin-right: 10px;
}
@media only screen and (max-width: 990px) {
  .navbar-nav {
    flex-direction: column;
  }
  .navbar {
    justify-content: center;
    text-align: center;
    padding-left: 30px;
    padding-right: 30px;
  }
  .navbar-brand {
    display: none;
  }
  button {
    position: absolute;
    left: 20px;
    top: 10px;
  }
}
</style>