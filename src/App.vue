<template>

  <nav id="nav">
    <div class="container" id="navblurr">
      <div class="row">
        <div class="col" id="home">
          <router-link to="/">
            <img src="./assets/de268hn-0a55c704-06de-4ae7-ab7f-4d87a1dd093e.png" id="crown">
          </router-link>
        </div>
        <div class="col" id="about">
          <router-link to="/about">
            <p>About</p>
          </router-link>
        </div>
        |
        <div class="col" id="products">
          <router-link to="/products">
            <p>Products</p>
          </router-link>
        </div>
        <div class="col" id="adminbox1">
          <i class="bi bi-journal-bookmark"></i>
          <router-link to="/admin">Register</router-link>
        </div>
        <div class="col" id="adminbox2">
          <i class="bi bi-person"></i>
          <router-link to="/admin">Login</router-link>
        </div>
        <div class="col" id="adminbox3">
          <i class="bi bi-cart"></i>
          <router-link to="/cart">Cart</router-link>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

#page {
  font-size: 10px;
  color: #fb93ac;
}

#nav {
  height: 55px;
  display: flex;
  justify-content: start;
  text-align: center;
  /* background-color: #1e1328; */
  color: white;

  background: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(./assets/aesthetic-pink.jpg);
  width: 100%;
}

a {
  text-decoration: none;
  font-family: NSimSun;
  font-size: 20px;
  font-family: Comic Sans MS;
  color: #fb93ac;
}


.col {
  width: 20px;
}

#adminbox1 {
  height: 55px;
  /* border-left: 7px solid #fb93ac;
  border-bottom: 7px solid #fb93ac; */
}

#adminbox2 {
  height: 55px;
  /* border-right: 7px solid #fb93ac;
  border-bottom: 7px solid #fb93ac; */
}

#crown {
  width: 65px;
  height: 70px;
}

#home {
  padding-right: 200px;
}

#products {
  padding-right: 500px;
}

#navblurr {
  background: rgba(255, 255, 255, 0);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

P {
  /* From https://css.glass */

}
</style>

