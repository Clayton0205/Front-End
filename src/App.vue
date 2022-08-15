<template>
  <nav id="nav">
    <div class="container-fluid" id="navblurr">
      <div class="row">
        <div class="col" id="home">
          <router-link to="/">
            <img src="./assets/de268hn-0a55c704-06de-4ae7-ab7f-4d87a1dd093e.png" id="crown">
          </router-link>
        </div>
        <div class="col" id="products">
          <router-link to="/products">
            <strong>
              <p>Products</p>
            </strong>
          </router-link>
        </div>
        <div class="col" id="adminbox1">
          <router-link to="/admin"><i class="bi bi-journal"></i>
            <br>
            Register
          </router-link>
        </div>
        <div class="col" id="adminbox2">
          <router-link to="/admin"><i class="bi bi-cart"></i>
            <br>
            Login
          </router-link>
        </div>
        <div class="col" id="adminbox3">
          <router-link to="/cart"><i class="bi bi-person"></i>
            <br>
            Cart
          </router-link>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
  <footer id="footer">
    <router-link to="/contact">Click on me if you want to contact us</router-link>
  </footer>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  overflow-x: hidden;
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
  width: 1519px;
}

a {
  text-decoration: none;
  font-family: NSimSun;
  font-size: 20px;
  font-family: 'Cinzel', serif;
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

#adminbox1 {
  display: flex;
  justify-content: center;
  margin-right: 5rem;
}

#adminbox2 {
  display: flex;
  justify-content: center;
  margin-right: 5rem;
}

#adminbox3 {
  display: flex;
  justify-content: center;
}

#products {
  margin-top: 10px;
  margin-right: 40px;
}

#footer {
  padding-top: 10px;
  text-align: center;
  height: 55px;
  background: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(./assets/aesthetic-pink.jpg);
  width: 100%;
}
</style>

