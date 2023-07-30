<template>
  <div>
    <div class="hero relative pt-4 pb-20">
      <header class="lg:flex justify-between items-center mb-12 lg:mx-8">
        <div>
          <ul class="lg:flex gap-8 hidden">
            <li>
              <a href="#"><i class="fa-brands fa-instagram fa-xl icon"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa-brands fa-twitter fa-xl icon"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa-brands fa-whatsapp fa-xl icon"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa-brands fa-tiktok fa-xl icon"></i></a>
            </li>
          </ul>
        </div>

        <div class="flex items-center justify-between mb-6 px-4">
          <div>
            <img
              src="@/assets/imgs/logo-1.jpg"
              alt="LOGO"
              class="h-[2.8rem] rounded-full lg:h-[7rem]"
            />
          </div>

          <div>
            <i class="fa-solid fa-bars fa-lg icon lg:hidden"></i>
          </div>
        </div>

        <div class="hidden lg:block">
          <v-btn class="order-btn">ORDER ONLINE</v-btn>
        </div>
      </header>

      <nav class="text-center hidden lg:block mb-24">
        <RouterLink to="/">HOME</RouterLink>
        <RouterLink to="/about">OUR MENU</RouterLink>
        <RouterLink to="/about">ABOUT</RouterLink>
        <RouterLink to="/about">OFFERS</RouterLink>
        <RouterLink to="/about">CONTACT</RouterLink>
      </nav>

      <div class="text-center text-white px-2 sm:px-8">
        <h1 class="font-bold text-lg mb-6 lg:text-[4rem]/[4rem] px-md-4">
          ENJOY DELICIOUS AND NUTRTIOUS MEALS
        </h1>

        <div>
          <P
            class="text-sm/5 max-w-[22rem] m-auto mb-6 max-[300px]:max-w-[20rem] lg:max-w-none lg:text-[1.35rem]/[2rem] lg:font-medium"
          >
            We make you want to come back for more by providing delicious delicacies for you at
            ridiculously cheap prices and we also save you the stress of cooking. We are always at
            your service!</P
          >
        </div>
      </div>

      <div class="reserve-btns flex justify-center gap-4 lg:gap-16 lg:mb-24">
        <v-btn class="book-btn text-caption px-2 px-md-6 text-md-h6">BOOK A TABLE</v-btn>
        <v-btn class="order-btn text-caption px-2 px-md-8 text-md-h6">TAKEAWAY</v-btn>
      </div>
    </div>

    <div class="hero-img-box border-red-500">
      <img
        src="@/assets/imgs/header-pizza-img.png"
        alt="Pizza"
        class="z-10 absolute h-[7rem] translate-y-[-50%] left-1/2 translate-x-[-50%] lg:h-[15rem]"
      />
    </div>

    <div class="w-full absolute translate-y-[-99%]">
      <svg
        viewBox="0 0 1000 100"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 500 97 C 126.7 96.3 0.8 19.8 0 0 v 100 h 1000 V 0 C 1000 19.4 873.3 97.8 500 97 Z"
          fill="white"
        />
      </svg>
    </div>

    <section class="bg-[#f4f6f8]">
      <div
        class="py-24 px-6 m-auto flex flex-col gap-12 justify-between sm:max-w-md lg:max-w-none lg:flex-row lg:gap-6"
      >
        <div class="img-text-box text-center flex-1" data-aos="fade-right">
          <div class="img-box mb-6 flex justify-center items-center">
            <img
              src="@/assets/imgs/ingredients-img.jpg"
              alt="Ingredients"
              class="rounded-full w-[45%]"
            />
          </div>

          <div class="text-box">
            <h3 class="text-red-600 font-[600] text-base mb-2 lg:text-2xl">FRESH INGREDIENTS</h3>
            <p
              class="text-gray-800 text-sm/5 m-auto max-w-[22rem] max-[400px]:max-w-[20rem] lg:max-w-none lg:text-[1.21rem]/[2rem]"
            >
              All our food are prepared with fresh and healthy ingredients in order to give our
              esteemed customers tasty and healthy meal.
            </p>
          </div>
        </div>

        <div class="img-text-box text-center flex-1 lg:mt-14" data-aos="fade-up">
          <div class="img-box mb-6 flex justify-center items-center">
            <img src="@/assets/imgs/mozarella.jpg" alt="Mozarella" class="rounded-full w-[45%]" />
          </div>

          <div class="text-box">
            <h3 class="text-red-600 font-[600] text-base mb-2 lg:text-2xl">HANDMADE MOZARELLA</h3>
            <p
              class="text-gray-800 text-sm/5 m-auto max-w-[22rem] max-[400px]:max-w-[20rem] lg:max-w-none lg:text-[1.21rem]/[2rem]"
            >
              Enjoy the taste of our freshly prepared healthy hand-made Mozarella. Sometimes, all
              you need to relieve you of your stress is a delicious meal made entirely by hand and
              with that fresh aroma from your kitchen.
            </p>
          </div>
        </div>

        <div class="img-text-box text-center flex-1" data-aos="fade-left">
          <div class="img-box mb-6 flex justify-center items-center">
            <img src="@/assets/imgs/sauce-img.jpg" alt="Sauce" class="rounded-full w-[45%]" />
          </div>

          <div class="text-box">
            <h3 class="text-red-600 font-[600] text-base mb-2 lg:text-2xl">
              "SECRET RECIPE" SAUCE
            </h3>
            <p
              class="text-gray-800 text-sm/5 m-auto max-w-[22rem] max-[400px]:max-w-[20rem] lg:max-w-none lg:text-[1.21rem]/[2rem]"
            >
              We cook food like no other using our "secret recipe" sauce which makes our food
              tastier, sweeter and even healthier because we use medicinal and all natural recipe
              formulated by our team of nutritionists.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!--  -->
    <section>
      <div class="bring-sect text-white text-center py-8 px-4 px-md-12 py-md-12">
        <div class="bring-head">
          <h3 class="font-bold text-lg mb-4 lg:text-5xl">BRINGING HAPPINESS TO YOU</h3>
          <p class="text-sm/5 md:max-w-xl md:m-auto lg:max-w-fit lg:text-[1.35rem]/[2rem]">
            You need not worry about anything concerning your meal! We cook them and we deliver them
            to you at your convenience where ever, whenever. Order your food now or book a table at
            any branch of our restaurant.
          </p>
        </div>

        <div
          class="mt-8 flex justify-center gap-4 sm:flex-row sm:gap-12 sm:justify-center lg:gap-24"
        >
          <div>
            <h3 class="text-xs font-medium lg:text-2xl lg:mb-4">ORDER ONLINE</h3>
            <a href="#" class="text-xs text-red-400 lg:text-lg">ORDER NOW &rarr;</a>
          </div>

          <div>
            <h3 class="text-xs font-medium lg:text-2xl lg:mb-4">CLICK & COLLECT</h3>
            <a href="#" class="text-xs text-red-400 lg:text-lg">TAKEOUT ORDER &rarr;</a>
          </div>

          <div>
            <h3 class="text-xs font-medium lg:text-2xl lg:mb-4">RESTAURANT DINNING</h3>
            <a href="#" class="text-xs text-red-400 lg:text-lg">BOOK A TABLE &rarr;</a>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#f4f6f8]">
      <div class="py-6 px-4 text-center py-md-16 relative">
        <div>
          <div>
            <p class="text-[0.8rem] font-semibold text-gray-600 lg:font-bold lg:text-sm lg:mb-4">
              CHOOSE YOUR DELICACY
            </p>
          </div>

          <div>
            <h3 class="font-bold text-lg mt-2 mb-4 text-red-600 mb-md-8 lg:text-5xl">
              SPECIAL MEALS PREPARED JUST FOR YOU!
            </h3>

            <p class="text-sm/5 m-auto mb-3 px-2 lg:text-[1.3rem]/[2rem]">
              We have a list of available healthy meals prepared just for you today! Order now, eat
              and have a fantastic day ahead!
            </p>
          </div>
        </div>

        <div class="mb-8 lg:mb-0">
          <button
            class="reg-btn px-2 py-1 rounded transition-all duration-[0.3s] text-[0.6rem] text-red-600 hover:bg-red-600 hover:text-white mt-3 lg:text-base lg:font-bold"
          >
            VIEW ALL MENU
          </button>
        </div>

        <div class="flex flex-col gap-12 items-center lg:flex-row lg:px-12">
          <div data-aos="fade-right">
            <a href="#"
              ><img
                src="@/assets/imgs/menu-pasta-img.png"
                alt="Our Menu"
                class="w-[60%] m-auto hover:translate-y-[-10%] transition-all duration-[0.3s] lg:w-[75%]"
            /></a>
            <p class="mt-2 text-red-600 font-bold lg:text-xl mt-md-6">Pasta</p>
          </div>

          <div class="lg:mt-24" data-aos="fade-up">
            <a href="#"
              ><img
                src="@/assets/imgs/menu-pizza-img.png"
                alt="Our Menu"
                class="w-[60%] m-auto hover:translate-y-[-10%] transition-all duration-[0.3s] lg:w-[75%]"
            /></a>
            <p class="mt-2 text-red-600 font-bold lg:text-xl mt-md-6">Pizza</p>
          </div>

          <div data-aos="fade-left">
            <a href="#"
              ><img
                src="@/assets/imgs/menu-dessert-img.png"
                alt="Our Menu"
                class="w-[60%] m-auto hover:translate-y-[-10%] transition-all duration-[0.3s] lg:w-[75%]"
            /></a>
            <p class="mt-2 text-red-600 font-bold lg:text-xl mt-md-6">Dessert</p>
          </div>
        </div>
      </div>

      <div class="w-full absolute translate-y-[-99%]">
        <svg
          viewBox="0 0 1000 100"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 500 97 C 126.7 96.3 0.8 19.8 0 0 v 100 h 1000 V 0 C 1000 19.4 873.3 97.8 500 97 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>

    <section class="bg-[#f4f6f8]">
      <div class="py-8 px-2 px-md-16 py-md-16">
        <div class="text-center">
          <div>
            <p class="text-[0.8rem] font-semibold text-gray-600 lg:font-bold lg:text-sm lg:mb-4">
              OUR LOCATION
            </p>
          </div>

          <div>
            <h3 class="font-bold text-lg mt-2 mb-2 text-red-600 mb-md-8 lg:text-5xl">
              FIND OSUNG FOODS NEAR YOU
            </h3>

            <p class="text-sm/5 m-auto mb-3 lg:text-[1.3rem]/[2rem]">
              We have our branches in several locations in the country. We have listed them below
              for easy accessibility just in case our esteemed customers would love to book a table
              or buy food physically.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-2 text-center justify-center gap-x-2 gap-y-5">
          <div>
            <p class="text-xs mt-3 text-red-400 font-semibold lg:text-2xl mt-md-12">LAGOS</p>
            <p class="text-sm/5 mt-1 lg:text-lg mt-md-2">
              Beside First Bank, Olusosun, Ojota Lagos, Lagos State.
            </p>
          </div>

          <div>
            <p class="text-xs mt-3 text-red-400 font-semibold lg:text-2xl mt-md-12">AKURE</p>
            <p class="text-sm/5 mt-1 lg:text-lg mt-md-2">
              Redemption Road, FUTA Southgate, Akure, Ondo State.
            </p>
          </div>

          <div>
            <p class="text-xs mt-3 text-red-400 font-semibold lg:text-2xl mt-md-12">ADO EKITI</p>
            <p class="text-sm/5 mt-1 lg:text-lg mt-md-2">
              Opposite DSS Office, Along New Iyin Road, Ado Ekiti, Ekiti State.
            </p>
          </div>

          <div>
            <p class="text-xs mt-3 text-red-400 font-semibold lg:text-2xl mt-md-12">IBADAN</p>
            <p class="text-sm/5 mt-1 lg:text-lg mt-md-2">
              Opposite Chicken Republic, Challenge Road, Ibadan, Oyo State.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#f4f6f8]">
      <div class="text-center pb-4 px-4 px-md-16 lg:flex items-center gap-12">
        <div class="lg:text-left flex-2">
          <div>
            <p class="text-[0.8rem] font-semibold text-gray-600 lg:font-bold lg:text-sm lg:mb-4">
              JOIN THE TABLE
            </p>

            <h3 class="font-bold text-lg mt-2 mb-2 text-red-600 mb-md-8 lg:text-5xl">
              FRANCHISE OPPORTUNITIES
            </h3>
          </div>
        </div>

        <div class="lg:text-left flex-3">
          <div>
            <p class="text-sm/5 m-auto lg:text-[1.3rem]/[2rem] lg:mb-4">
              We are opened to collaborate with individuals or companies that are willing to help
              expand the organization and further project the her good image within the country and
              beyond the borders of this nation.
            </p>
          </div>

          <div>
            <button
              class="reg-btn px-2 py-1 rounded transition-all duration-[0.3s] text-[0.6rem] text-red-600 hover:bg-red-600 hover:text-white mt-3 lg:text-base lg:font-bold"
            >
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="py-6 pb-4 px-4 text-center px-md-16 lg:flex items-center gap-24">
        <div>
          <div class="lg:text-left">
            <p class="text-[0.8rem] font-semibold text-gray-600 lg:font-bold lg:text-sm lg:mb-4">
              FREE DELIVERY!
            </p>

            <h3 class="font-bold text-lg mt-2 mb-2 text-red-600 mb-md-8 lg:text-5xl">
              DOWNLOAD OUR APP NOW!
            </h3>
          </div>

          <div class="lg:text-left flex-3">
            <div class="mb-4">
              <p class="text-sm/5 m-auto lg:text-[1.3rem]/[2rem] lg:mb-4">
                Download our app now and your first order will be delivered to FREE of charge and
                you will get a bottle of wine as a souvenir.
              </p>
            </div>

            <div class="flex gap-3 mb-8 justify-center lg:justify-start">
              <button
                class="reg-btn px-2 py-1 rounded transition-all duration-[0.3s] text-[0.6rem] text-red-600 hover:bg-red-600 hover:text-white mt-3 lg:text-base lg:font-bold"
              >
                GOOGLE PLAY
              </button>
              <button
                class="reg-btn px-2 py-1 rounded transition-all duration-[0.3s] text-[0.6rem] text-red-600 hover:bg-red-600 hover:text-white mt-3 lg:text-base lg:font-bold"
              >
                APP STORE
              </button>
            </div>
          </div>
        </div>

        <div>
          <img
            src="@/assets/imgs/mobile-app-mockup.png"
            alt="App Mockup"
            class="m-auto w-[60%] lg:w-full"
          />
        </div>
      </div>
    </section>

    <footer>
      <div>
        <ul>
          <li><img src="" alt="LOGO" /></li>
          <li>
            <p class="text-xs mt-3 font-medium lg:text-2xl mt-md-12">ABOUT US</p>
          </li>
          <li>
            <p class="text-xs mt-3 font-medium lg:text-2xl mt-md-12">OUR MENU</p>
          </li>
          <li>
            <p class="text-xs mt-3 font-medium lg:text-2xl mt-md-12">OUR LOCATION</p>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script></script>

<style scoped>
.hero {
  background-image: linear-gradient(#201d1d94, #1b19199d), url(@/assets/imgs/hero-bg-img.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.order-btn {
  background-color: transparent;
  color: white;
  border: 1px solid white;
}

.order-btn:hover {
  background-color: #fff;
  color: #222;
}

.book-btn {
  background-color: #ff0000bb;
  color: #fff;
}

.book-btn:hover {
  background-color: red;
}

.heavy-btn {
  font-weight: 600;
}

.icon {
  color: #fff;
  transition: all 0.3s;
}

.icon:hover {
  color: red;
}

/*  */
.bring-sect {
  background-image: linear-gradient(#22212194, #1b1919c4),
    url(@/assets/imgs/delivery-section-img-bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

/*  */
.reg-btn {
  border: 1px solid red;
}

/*  */
</style>
