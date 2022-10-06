<template>
  <div id="my-pages">
    <!-- <div class="my-resume">
          <pdf src="/public/JAVIER-CHRISTIAN.pdf" :page="1" />
        </div> -->
        
    <div class="profileIntro">
      <ProfileIntro id="home" />
    </div>

    <div class="aboutMe">
      <AboutMe id="about" />
    </div>

    <div class="skillsExp">
      <SkillsAndExp id="skills" />
    </div>
    <div class="portfolioProject">
      <PortfolioProject id="projects" />
    </div>
    <!-- <div class="AcadandAchievement">
          <AcadandAchievement/>
        </div> -->
    <div class="footer">
      <Footer id="contact" />
    </div>
    <div class="header">
      <TopNav />
    </div>
  </div>
</template>
<script>
import TopNav from "./Pages/TopNav.vue";
import ProfileIntro from "./Pages/ProfileIntro.vue";
import AboutMe from "./Pages/AboutMe.vue";
import SkillsAndExp from "./Pages/SkillsAndExp.vue";
// import Projects from "./Pages/Projects.vue";
import PortfolioProject from "./Pages/portfolioProject.vue";
// import AcadandAchievement from "./Pages/Acadandachievement.vue";
import Footer from "./Pages/ContactMe.vue";
export default{
  name:"My-Page",
  components:{
    TopNav,
    ProfileIntro,
    AboutMe,
    SkillsAndExp,
    PortfolioProject,
    Footer,
  }
}
</script>
<style>
.header {
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
}
</style>

