<template>
  <div id="home">
    <!-- <h1>GLORIA & IJEM</h1> -->
    <div class="picture">
      <img class="image1" src="../assets/ccc.jpg" />
    </div>
    <br />
    <h4>Please click on the button below to support.</h4>
    <router-link to="/support-page"><button>SUPPORT</button></router-link>
    <img
      style="
        max-width: 200px;
        max-height: 40px;
        display: block;
        margin: 20px auto;
      "
      alt="Vue logo"
      src="../assets/flutter.png"
    />
  </div>
</template>

<script>
export default {
  name: "Mainpage",
  components: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Aclonica&display=swap");

#home {
  background-image: url(../assets/qaq.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: cover cover;
  background-attachment: scroll;
  object-fit: cover;
  padding: 6.375rem 1.25rem;
}

.picture {
  width: 60%;
  height: 37.5rem;
  border-radius: 8px;
  margin: 1.125rem auto 2.125rem;
}
.image1 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}

h4 {
  font-family: "Aclonica", sans-serif;
}
button {
  width: 12.5rem;
  height: 3.125rem;
  border-radius: 5px;
  font-weight: bolder;
  background: #8ebf42;
  color: white;
  border: 0px;
}
button:hover {
  cursor: pointer;
  background-color: #8ebf99;
}

@media screen and (max-width: 600px) {
  #home {
    background-image: url(../assets/222.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: cover cover;
    background-attachment: scroll;
    object-fit: cover;
    padding: 4.375rem 1.25rem;
  }
  .picture {
    width: 88%;
    height: 33.375rem;
    margin: 3.125rem auto 2.5rem;
  }
  h4 {
    font-size: 0.8rem;
  }
}
</style>
