<template>
    <v-card class="acads" width="100%" height="500px" color="#252839">
       <div class="title"> <v-card-title><h1>Acads and Achievement</h1></v-card-title></div>
         <v-timeline>
    <v-timeline-item>timeline item</v-timeline-item>
    <v-timeline-item class="text-right">
      timeline item
    </v-timeline-item>
    <v-timeline-item>timeline item</v-timeline-item>
  </v-timeline>
    </v-card>
</template>
<script>
export default {
    name: "Acad-and-achievement"
}
</script>
<style scoped>
h1{
    color: #01fe87;

}
.title{
    position: absolute;
    top: 20px;
}
.acads{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>