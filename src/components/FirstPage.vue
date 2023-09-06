<template>
  <div>
    <div class="hero relative pt-6 pb-36">
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

        <div class="loggo flex items-center justify-between px-4 px-sm-8">
          <div>
            <img
              src="@/assets/imgs/logo-1.jpg"
              alt="LOGO"
              class="h-[4rem] rounded-full sm:h-[5.3rem] lg:h-[7rem]"
            />
          </div>

          <div>
            <div
              @click="openMenu"
              class="absolute right-6 translate-y-[-60%] z-50 sm:right-8 lg:hidden"
            >
              <i
                :class="[open ? 'fa-solid  fa-lg icon fa-xmark' : 'fa-solid  fa-lg icon fa-bars']"
              ></i>
            </div>
          </div>

          <ul
            class="px-6 flex flex-col gap-12 pt-24 pb-28 w-[100%] bg-gray-800 text-white text-center absolute top-0 left-0 duration-700 ease-in z-30"
            :class="[open ? 'top-0' : 'top-[-200%]']"
          >
            <li v-for="link in Links" :key="link.name" class="border-b-2 border-[#494848] pb-4">
              <RouterLink :to="link.link">{{ link.name }}</RouterLink>
            </li>
          </ul>
        </div>

        <div class="hidden lg:block">
          <v-btn class="order-btn h-auto py-3 font-weight-bold">ORDER ONLINE</v-btn>
        </div>
      </header>

      <nav class="text-center hidden mb-24 lg:block">
        <RouterLink to="/">HOME</RouterLink>
        <RouterLink to="/about">OUR MENU</RouterLink>
        <RouterLink to="/about">ABOUT</RouterLink>
        <RouterLink to="/about">OFFERS</RouterLink>
        <RouterLink to="/about">CONTACT</RouterLink>
      </nav>

      <div class="text-center text-white px-2 sm:px-8">
        <h1 class="font-bold text-lg mb-6 sm:text-2xl lg:text-[4rem]/[4rem] mb-sm-3 px-md-4">
          ENJOY DELICIOUS AND NUTRITIOUS MEALS
        </h1>

        <div class="sm:px-4">
          <P
            class="text-sm/6 max-w-[22rem] mb-8 max-[300px]:max-w-[20rem] sm:text-base sm:max-w-none lg:px-12 lg:text-[1.35rem]/[2rem] lg:font-medium mb-md-16"
          >
            We make you want to come back for more by providing delicious delicacies for you at
            ridiculously cheap prices and we also save you the stress of cooking. We are always at
            your service!</P
          >
        </div>
      </div>

      <div
        class="flex flex-col w-[70%] m-auto justify-center gap-6 lg:flex-row lg:gap-16 lg:mb-24 lg:w-none"
      >
        <v-btn
          class="book-btn h-auto py-2 text-body-1 font-weight-medium px-md-8 text-sm-body-2 text-md-h6"
          >BOOK A TABLE</v-btn
        >
        <v-btn
          class="order-btn h-auto py-2 text-body-1 font-weight-medium px-md-8 py-md-3 text-sm-body-2 text-md-h6"
          >TAKEAWAY</v-btn
        >
      </div>
    </div>

    <div class="hero-img-box border-red-500">
      <img
        src="@/assets/imgs/header-pizza-img.png"
        alt="Pizza"
        class="z-10 absolute h-[8rem] translate-y-[-50%] left-1/2 translate-x-[-50%] sm:h-[10rem] lg:h-[15rem]"
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
        class="py-24 px-6 m-auto flex flex-col gap-12 justify-between lg:max-w-none lg:flex-row lg:gap-6"
      >
        <div class="img-text-box text-center flex-1" data-aos="fade-right">
          <div class="img-box mb-6 flex justify-center items-center">
            <img
              src="@/assets/imgs/ingredients-img.jpg"
              alt="Ingredients"
              class="rounded-full w-[45%] sm:w-[25%] lg:w-[45%]"
            />
          </div>

          <div class="text-box">
            <h3 class="text-red-600 font-[600] text-base mb-2 sm:text-lg lg:text-2xl">
              FRESH INGREDIENTS
            </h3>
            <p
              class="text-gray-800 text-sm/5 m-auto max-w-[22rem] max-[400px]:max-w-[20rem] sm:text-base sm:max-w-[34rem] lg:max-w-none lg:text-[1.21rem]/[2rem]"
            >
              All our food are prepared with fresh and healthy ingredients in order to give our
              esteemed customers tasty and healthy meal.
            </p>
          </div>
        </div>

        <div class="img-text-box text-center flex-1 lg:mt-14" data-aos="fade-up">
          <div class="img-box mb-6 flex justify-center items-center">
            <img
              src="@/assets/imgs/mozarella.jpg"
              alt="Mozarella"
              class="rounded-full w-[45%] sm:w-[25%] lg:w-[45%]"
            />
          </div>

          <div class="text-box">
            <h3 class="text-red-600 font-[600] text-base mb-2 sm:text-lg lg:text-2xl">
              HANDMADE MOZARELLA
            </h3>
            <p
              class="text-gray-800 text-sm/5 m-auto max-w-[22rem] max-[400px]:max-w-[20rem] sm:text-base sm:max-w-[34rem] lg:max-w-none lg:text-[1.21rem]/[2rem]"
            >
              Enjoy the taste of our freshly prepared healthy hand-made Mozarella. Sometimes, all
              you need to relieve you of your stress is a delicious meal made entirely by hand and
              with that fresh aroma from your kitchen.
            </p>
          </div>
        </div>

        <div class="img-text-box text-center flex-1" data-aos="fade-left">
          <div class="img-box mb-6 flex justify-center items-center">
            <img
              src="@/assets/imgs/sauce-img.jpg"
              alt="Sauce"
              class="rounded-full w-[45%] sm:w-[25%] lg:w-[45%]"
            />
          </div>

          <div class="text-box">
            <h3 class="text-red-600 font-[600] text-base mb-2 sm:text-base lg:text-2xl">
              "SECRET RECIPE" SAUCE
            </h3>
            <p
              class="text-gray-800 text-sm/5 m-auto max-w-[22rem] max-[400px]:max-w-[20rem] sm:text-base sm:max-w-[34rem] lg:max-w-none lg:text-[1.21rem]/[2rem]"
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
      <div class="bring-sect text-white text-center py-12 px-4 px-md-12 py-md-12">
        <div class="bring-head">
          <h3 class="font-bold text-lg mb-4 sm:text-2xl lg:text-5xl">BRINGING HAPPINESS TO YOU</h3>
          <p
            class="m-auto text-sm/5 sm:text-base sm:max-w-[40rem] md:max-w-none md:m-auto lg:max-w-fit lg:text-[1.35rem]/[2rem]"
          >
            You need not worry about anything concerning your meal! We cook them and we deliver them
            to you at your convenience where ever, whenever. Order your food now or book a table at
            any branch of our restaurant.
          </p>
        </div>

        <div class="mt-8 flex justify-between gap-4 sm:justify-center sm:gap-16 lg:gap-24">
          <div>
            <i class="fa-solid fa-mobile bg-red-600 p-3 rounded-full mb-6"></i>
            <h3 class="text-xs font-medium lg:text-2xl lg:mb-4">ORDER ONLINE</h3>
            <a href="#" class="text-xs text-red-400 lg:text-lg">ORDER NOW &rarr;</a>
          </div>

          <div>
            <i class="fa-solid fa-box bg-red-600 p-3 rounded-full mb-6"></i>
            <h3 class="text-xs font-medium lg:text-2xl lg:mb-4">TAKE AWAY</h3>
            <a href="#" class="text-xs text-red-400 lg:text-lg">VISIT &rarr;</a>
          </div>

          <div>
            <i class="fa-solid fa-utensils bg-red-600 p-3 rounded-full mb-6"></i>
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
            <h3 class="font-bold text-lg mt-2 mb-4 text-red-600 sm:text-2xl mb-md-8 lg:text-5xl">
              SPECIAL MEALS PREPARED JUST FOR YOU!
            </h3>

            <p
              class="text-sm/5 m-auto mb-3 px-2 sm:max-w-[40rem] sm:text-base lg:text-[1.3rem]/[2rem]"
            >
              We have a list of available healthy meals prepared just for you today! Order now, eat
              and have a fantastic day ahead!
            </p>
          </div>
        </div>

        <div class="mb-8 lg:mb-0">
          <v-btn
            class="reg-btn mt-3 px-2 py-1 rounded shadow-none font-weight-bold transition-all duration-[0.3s] text-caption text-md-subtitle-1"
            >VIEW ALL MENU</v-btn
          >
        </div>

        <div
          class="flex flex-col gap-12 justify-center items-center sm:flex-row lg:flex-row lg:px-12"
        >
          <div data-aos="fade-right">
            <a href="#"
              ><img
                src="@/assets/imgs/menu-pasta-img.png"
                alt="Our Menu"
                class="w-[60%] m-auto hover:translate-y-[-10%] transition-all duration-[0.3s] sm:w-[90%] lg:w-[75%]"
            /></a>
            <p class="mt-2 text-red-600 font-bold lg:text-xl mt-md-6">Pasta</p>
          </div>

          <div class="sm:pt-24 lg:mt-24" data-aos="fade-up">
            <a href="#"
              ><img
                src="@/assets/imgs/menu-pizza-img.png"
                alt="Our Menu"
                class="w-[60%] m-auto hover:translate-y-[-10%] transition-all duration-[0.3s] sm:w-[90%] lg:w-[75%]"
            /></a>
            <p class="mt-2 text-red-600 font-bold lg:text-xl mt-md-6">Pizza</p>
          </div>

          <div data-aos="fade-left">
            <a href="#"
              ><img
                src="@/assets/imgs/menu-dessert-img.png"
                alt="Our Menu"
                class="w-[60%] m-auto hover:translate-y-[-10%] transition-all duration-[0.3s] sm:w-[90%] lg:w-[75%]"
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

    <!-- <section>
        <div>
          <div>
            <h3 class="font-bold text-lg mt-2 mb-2 text-red-600 mb-md-8 lg:text-5xl">
              BEST DEALS!
            </h3>

            <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
              <polygon points="30,10 200,10 200,100 0,100" fill="purple" />
            </svg>

            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
              <polygon points="10,90 50,10 90,90" fill="red" />
            </svg>
          </div>
        </div>

        <div class="typewriter">
          <h1 class="write">Just do your thing</h1>
        </div>
      </section> -->

    <section class="bg-[#f4f6f8]">
      <div class="py-8 px-4 px-md-16 py-md-16">
        <div class="text-center">
          <div>
            <p class="text-[0.8rem] font-semibold text-gray-600 lg:font-bold lg:text-sm lg:mb-4">
              OUR LOCATION
            </p>
          </div>

          <div>
            <h3 class="font-bold text-lg mt-2 mb-2 text-red-600 sm:text-2xl mb-md-8 lg:text-5xl">
              FIND OSUNG FOODS NEAR YOU
            </h3>

            <p class="text-sm/6 m-auto mb-3 sm:max-w-[41rem] sm:text-base lg:text-[1.3rem]/[2rem]">
              We have our branches in several locations in the country. We have listed them below
              for easy accessibility just in case our esteemed customers would love to book a table
              or buy meals.
            </p>
          </div>
        </div>

        <div
          class="m-auto grid grid-cols-2 text-center justify-center gap-x-2 gap-y-5 sm:max-w-[40rem]"
        >
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
      <div class="text-center pt-8 pb-16 px-4 px-md-16 lg:flex justify-center items-center gap-12">
        <div class="lg:text-left flex-2">
          <div>
            <p class="text-[0.8rem] font-semibold text-gray-600 lg:font-bold lg:text-sm lg:mb-4">
              JOIN THE TABLE
            </p>

            <h3 class="font-bold text-lg mt-2 mb-2 text-red-600 sm:text-2xl mb-md-8 lg:text-5xl">
              FRANCHISE OPPORTUNITIES
            </h3>
          </div>
        </div>

        <div class="lg:text-left flex-3">
          <div>
            <p
              class="text-sm/5 m-auto sm:max-w-[40rem] sm:text-base md:max-w-[45rem] lg:text-[1.3rem]/[2rem] lg:mb-4"
            >
              We are opened to collaborate with individuals or companies that are willing to help
              expand the organization and further project the her good image within the country and
              beyond the borders of this nation.
            </p>
          </div>

          <div>
            <v-btn
              class="reg-btn mt-5 px-2 py-1 rounded shadow-none font-weight-bold transition-all duration-[0.3s] text-caption text-sm-body-2 text-md-subtitle-1"
              >GET IN TOUCH</v-btn
            >
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="py-6 pb-4 px-4 text-center px-md-16 lg:flex justify-center items-center gap-24">
        <div>
          <div class="lg:text-left">
            <p class="text-[0.8rem] font-semibold text-gray-600 lg:font-bold lg:text-sm lg:mb-4">
              FREE DELIVERY!
            </p>

            <h3 class="font-bold text-lg mt-2 mb-2 text-red-600 sm:text-2xl mb-md-8 lg:text-5xl">
              DOWNLOAD OUR APP NOW!
            </h3>
          </div>

          <div class="lg:text-left flex-3">
            <div class="mb-4">
              <p
                class="text-sm/5 m-auto sm:max-w-[40rem] sm:text-base lg:text-[1.3rem]/[2rem] lg:mb-4"
              >
                Download our app now and your first order will be delivered to you FREE of charge
                and your meal comes with a bottle of wine as a souvenir.
              </p>
            </div>

            <div class="flex gap-5 mb-8 justify-center">
              <v-btn
                class="reg-btn mt-3 px-2 py-1 rounded shadow-none font-weight-bold transition-all duration-[0.3s] text-caption text-sm-body-2 text-md-subtitle-1"
                >GOOGLE PLAY</v-btn
              >
              <v-btn
                class="reg-btn mt-3 px-2 py-1 rounded shadow-none font-weight-bold transition-all duration-[0.3s] text-caption text-sm-body-2 text-md-subtitle-1"
                >APP STORE</v-btn
              >
            </div>
          </div>
        </div>

        <div>
          <img
            src="@/assets/imgs/mobile-app-mockup.png"
            alt="App Mockup"
            class="m-auto w-[60%] sm:w-[30%] lg:w-full"
          />
        </div>
      </div>
    </section>

    <footer class="hidden lg:block">
      <div class="mt-4 mb-8 pl-24 pr-12">
        <div class="grid grid-cols-4 items-center justify-between gap-8 mb-4">
          <div>
            <v-img
              src="/src/assets/imgs/logo-2.jpg"
              alt="LOGO"
              class="rounded-full w-[7rem]"
            ></v-img>
          </div>

          <div>
            <h3 class="text-xl font-bold">About Us</h3>
          </div>

          <div>
            <h3 class="text-xl font-bold">Our Menu</h3>
          </div>

          <div>
            <h3 class="text-xl font-bold">Our Location</h3>
          </div>
        </div>

        <div class="grid grid-cols-4 justify-center gap-8">
          <div class="sm:max-w-[35rem]">
            <p class="text-lg">
              Enjoy food rich in taste and quality. Providing healthy meal and satisfying our
              customers in every way possible is our topmost priotiy at Osung Foods.
            </p>
          </div>

          <ul class="flex flex-col gap-3 text-lg">
            <li>
              <a href="#" class="duration-[0.3s] text-red-600 hover:text-red-300">Our Story</a>
            </li>
            <li>
              <a href="#" class="duration-[0.3s] text-red-600 hover:text-red-300">Our Location</a>
            </li>
            <li>
              <a href="#" class="duration-[0.3s] text-red-600 hover:text-red-300">Current Deals</a>
            </li>
            <li>
              <a href="#" class="duration-[0.3s] text-red-600 hover:text-red-300">Contact Us</a>
            </li>
          </ul>

          <ul class="flex flex-col gap-3 text-lg">
            <li><a href="#" class="duration-[0.3s] text-red-600 hover:text-red-300">Pizza</a></li>
            <li><a href="#" class="duration-[0.3s] text-red-600 hover:text-red-300">Pasta</a></li>
            <li><a href="#" class="duration-[0.3s] text-red-600 hover:text-red-300">Dessert</a></li>
            <li>
              <a href="#" class="duration-[0.3s] text-red-600 hover:text-red-300">Take and Bake</a>
            </li>
          </ul>

          <ul class="flex flex-col gap-3 text-lg">
            <li>
              <a href="#" class="duration-[0.3s] text-red-600 hover:text-red-300"
                >Osung Foods Ado Ekiti</a
              >
            </li>
            <li>
              <a href="#" class="duration-[0.3s] text-red-600 hover:text-red-300"
                >Osung Foods Akure</a
              >
            </li>
            <li>
              <a href="#" class="duration-[0.3s] text-red-600 hover:text-red-300"
                >Osung Foods Ibadan</a
              >
            </li>
            <li>
              <a href="#" class="duration-[0.3s] text-red-600 hover:text-red-300"
                >Osung Foods Lagos</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 mb-4 text-center">
        <p class="text-xs">Copyright &copy; 2023. Powered by Osung Tech.</p>
      </div>
    </footer>

    <footer class="lg:hidden">
      <div class="mt-12 mb-4 text-center px-8">
        <div class="mb-12">
          <div class="inline-block mb-8">
            <v-img
              src="/src/assets/imgs/logo-2.jpg"
              alt="LOGO"
              class="rounded-full w-[5rem]"
            ></v-img>
          </div>

          <p class="text-sm/5 mb-6">
            Enjoy food rich in taste and quality. Providing healthy meal and satisfying our
            customers in every way possible is our topmost priotiy at Osung Foods.
          </p>

          <div>
            <ul class="flex justify-center gap-6">
              <li>
                <a href="#"><i class="fa-brands fa-instagram fa-lg f-icon"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa-brands fa-twitter fa-lg f-icon"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa-brands fa-whatsapp fa-lg f-icon"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa-brands fa-tiktok fa-lg f-icon"></i></a>
              </li>
            </ul>
          </div>
        </div>

        <div class="mb-12">
          <h3 class="mb-5 text-lg font-semibold">About Us</h3>

          <ul class="flex flex-col gap-3 text-sm">
            <li>
              <a href="#" class="duration-[0.3s] text-red-600 hover:text-red-300">Our Story</a>
            </li>
            <li>
              <a href="#" class="duration-[0.3s] text-red-600 hover:text-red-300">Our Location</a>
            </li>
            <li>
              <a href="#" class="duration-[0.3s] text-red-600 hover:text-red-300">Current Deals</a>
            </li>
            <li>
              <a href="#" class="duration-[0.3s] text-red-600 hover:text-red-300">Contact Us</a>
            </li>
          </ul>
        </div>

        <div class="mb-12">
          <h3 class="mb-5 text-lg font-semibold">Our Menu</h3>

          <ul class="flex flex-col gap-3 text-sm">
            <li><a href="#" class="duration-[0.3s] text-red-600 hover:text-red-300">Pizza</a></li>
            <li><a href="#" class="duration-[0.3s] text-red-600 hover:text-red-300">Pasta</a></li>
            <li><a href="#" class="duration-[0.3s] text-red-600 hover:text-red-300">Dessert</a></li>
            <li>
              <a href="#" class="duration-[0.3s] text-red-600 hover:text-red-300">Take and Bake</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="mb-5 text-lg font-semibold">Our Location</h3>

          <ul class="flex flex-col gap-3 text-sm">
            <li>
              <a href="#" class="duration-[0.3s] text-red-600 hover:text-red-300"
                >Osung Foods Ado</a
              >
            </li>
            <li>
              <a href="#" class="duration-[0.3s] text-red-600 hover:text-red-300"
                >Osung Foods Akure</a
              >
            </li>
            <li>
              <a href="#" class="duration-[0.3s] text-red-600 hover:text-red-300"
                >Osung Foods Ibadan</a
              >
            </li>
            <li>
              <a href="#" class="duration-[0.3s] text-red-600 hover:text-red-300"
                >Osung Foods Lagos</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-8 mb-2 text-center">
        <p class="text-xs">Copyright &copy; 2023. Powered by Osung Tech.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      Links: [
        { name: 'HOME', link: '/' },
        { name: 'OUR MENU', link: '/about' },
        { name: 'ABOUT', link: '/about' },
        { name: 'OFFERS', link: '/about' },
        { name: 'CONTACT', link: '/about' }
      ]
    }
  },

  methods: {
    openMenu() {
      this.open = !this.open
    }
  }
}
</script>

<!-- THIS IS COMPOSITION API SCRIPT -->
<!-- <script>
  // import { ref } from 'vue'
  
 setup() {
    let open = ref(false)
    let Links = [
      { name: 'HOME', link: '/' },
      { name: 'OUR MENU', link: '/about' },
      { name: 'ABOUT', link: '/about' },
      { name: 'OFFERS', link: '/about' },
      { name: 'CONTACT', link: '/about' }
    ]

    function openMenu() {
      open.value = !open.value
    }
    return { Links, open, openMenu }
  }
</script> -->

<style scoped>
.hide {
  display: none;
}

.show {
  display: block;
  transition: all 5s;
}
.active {
  transition: transform 6s;
}

.hero {
  background-image: linear-gradient(#201d1d94, #1b1919c0), url(@/assets/imgs/hero-bg-img.jpg);
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

.f-icon {
  color: #cf6464;
}

/*  */
.bring-sect {
  background-image: linear-gradient(#222121da, #1b1919c4),
    url(@/assets/imgs/delivery-section-img-bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

/*  */
.reg-btn {
  background-color: transparent;
  color: red;
  border: 1px solid red;
}

.reg-btn:hover {
  background-color: red;
  color: #fff;
}

.typewriter h1 {
  overflow: hidden;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}
</style>
