<template>
  <aside
    class="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]"
  >
    <div>
      <div class="mx-6 px-6 py-4 text-center">
        <a title="home">
          <img src="https://pbs.twimg.com/media/B_Eske-U4AAuKgQ.jpg" class="w-32" alt="nikung" />
        </a>
      </div>

      <div class="mt-8 text-center">
        <h5 class="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
          {{ email }}
        </h5>
        <span class="hidden text-gray-400 lg:block">Admin</span>
      </div>
      <ul class="space-y-2 tracking-wide mt-8">
        <li>
          <a
            aria-label="dashboard"
            @click.prevent="$router.push('/')"
            :class="{
              'relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400':
                $route.name == 'dashbord'
            }"
            class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group cursor-pointer"
          >
            <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                class="fill-current text-cyan-400 dark:fill-slate-600"
              ></path>
              <path
                d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                class="fill-current text-cyan-200 group-hover:text-cyan-300"
              ></path>
              <path
                d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                class="fill-current group-hover:text-sky-300"
              ></path>
            </svg>
            <span class="-mr-1 font-medium">Dashboard</span>
          </a>
        </li>
        <li>
          <a
            @click.prevent="$router.push('/product')"
            :class="{
              'relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400':
                $route.name == 'product' || $route.name == 'detail'
            }"
            class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group cursor-pointer"
          >
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <g>
                <path
                  :class="{
                    'fill-current text-gray-600 group-hover:text-cyan-600':
                      $route.name != 'product' || $route.name != 'detail'
                  }"
                  d="M428.588,239.276c-46.594-11.245-119.026-57.862-163.522-96.005c-6.122-5.255-11.044-10.412-15.804-15.402
                                 c-9.026-9.466-17.556-18.409-30.294-23.187c-5.252-1.969-10.799-2.969-16.482-2.969h-0.004c-18.901,0-33.706,11.086-40.82,16.418
                                 c-18.92,14.161-24.641,29.7-25.751,41.422c-1.81,0.144-3.65,0.227-5.501,0.227c-18.636,0-25.436-7.724-29.631-15.274
                                 c-10.954-19.719-30.359-31.971-50.646-31.971C25.22,112.535,0,131.799,0,168.625V379.27v31.017h31.017h448.458h31.017V379.27
                                 c0-1.416,0.265-4.764,0.499-7.716C513.15,344.277,519.715,261.267,428.588,239.276z M385.446,275.321
                                 c5.422-4.195,12.162-7.777,20.423-10.473c5.293,1.78,10.481,3.386,15.44,4.582c44.11,10.647,56.438,39.627,59.119,65.896h-132.61
                                 l9.397-0.447l2.06-0.076v-0.022l-0.015-1.038c-0.038-4.339,0.734-21.021,8.602-36.674
                                 C371.786,289.217,377.352,281.607,385.446,275.321z M180.231,142.976c5.191-3.884,13.664-10.246,22.256-10.246
                                 c1.87,0,3.74,0.303,5.588,0.992c10.336,3.877,19.03,17.848,36.803,33.092c34.394,29.487,85.638,64.858,131.914,86.334
                                 c-1.901,1.242-3.877,2.446-5.611,3.794c-8.61,6.687-15.092,14.433-19.999,22.354c-62.455-30.221-109.886-58.574-142.209-79.928
                                 c-17.814-11.768-31.093-21.415-39.873-28.079c-0.504-0.378-0.845-0.651-1.318-1.015
                                 C165.324,163.187,166.259,153.434,180.231,142.976z M31.017,168.625c0-16.994,8.924-25.073,19.117-25.073
                                 c8.413,0,17.69,5.497,23.532,16.016c13.65,24.572,36.266,31.229,56.745,31.229c8.148,0,15.933-1.06,22.706-2.453
                                 c24.49,18.78,86.922,63.049,188.363,112.097c-0.159,0.492-0.356,1.007-0.507,1.492c-4.521,14.668-4.96,26.988-4.975,31.812
                                 c0,0.72,0.015,1.211,0.023,1.583h-183.32c-4.222-16.758-14.036-33.334-28.871-47.079c-20.203-18.682-49.998-31.827-87.33-31.789
                                 c-1.798,0-3.65,0.09-5.482,0.151C31.017,214.635,31.017,176.227,31.017,168.625z M31.017,279.872
                                 c1.844-0.068,3.692-0.151,5.482-0.151c31.915,0.038,55.597,10.95,71.557,25.626c9.893,9.08,16.659,19.711,20.374,29.98H31.017
                                 C31.017,318.97,31.017,299.584,31.017,279.872z M479.475,379.27H31.017c0,0,0-7.959,0-20.681H480.8
                                 C480.338,367.267,479.475,374.575,479.475,379.27z"
                />
              </g>
            </svg>
            <span
              :class="{
                'group-hover:text-gray-700': $route.name != 'product' || $route.name != 'detail'
              }"
              >Product</span
            >
          </a>
        </li>
        <li>
          <a
            @click.prevent="$router.push('/add')"
            :class="{
              'relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400':
                $route.name == 'productForm'
            }"
            class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus-square"
              viewBox="0 0 16 16"
            >
              <path
                :class="{
                  'fill-current text-gray-600 group-hover:text-cyan-600':
                    $route.name != 'productForm'
                }"
                d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
              />
              <path
                :class="{
                  'fill-current text-gray-600 group-hover:text-cyan-600':
                    $route.name != 'productForm'
                }"
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
              />
            </svg>
            <span :class="{ 'group-hover:text-gray-700': $route.name != 'productForm' }"
              >Add Product</span
            >
          </a>
        </li>
        <li>
          <a
            @click.prevent="$router.push('/register')"
            :class="{
              'relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400':
                $route.name == 'register'
            }"
            class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person-fill-add"
              viewBox="0 0 16 16"
            >
              <path
                :class="{
                  'fill-current text-gray-600 group-hover:text-cyan-600': $route.name != 'register'
                }"
                d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                :class="{
                  'fill-current text-gray-600 group-hover:text-cyan-600': $route.name != 'register'
                }"
                d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"
              />
            </svg>
            <span class="group-hover:text-gray-700">Register</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
      <button
        class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
        @click.prevent="logout"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
        <span class="group-hover:text-gray-700">Logout</span>
      </button>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      email: localStorage.email
    }
  },
  methods: {
    logout() {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style></style>
