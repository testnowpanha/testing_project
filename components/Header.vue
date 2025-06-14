<template>
  <header class="relative">

    <div class="bg-gradient-to-r from-[#F8E889] to-[#E4B764] to-[98%] ">
      <div class="flex container mx-auto max-h-max">

        <div class="hidden xl:block bg-black text-white text-[4rem] rounded-tr-[3.5rem] pr-4 max-h-full relative">

          <div>LOGO</div>
          <div class="absolute z-0 bg-black h-full top-0 left-0 w-[150%] transform -translate-x-[99%]"></div>
        </div>

        <div class="flex flex-col w-full z-10 relative">
          <div class="grid grid-cols-12 h-full items-center py-3 gap-5">

            <div class="hidden xl:block  col-span-9 ">
              <ul class="flex justify-between w-full *:transition *:duration-500 *:text-[14px]">
                <li v-for="(item, index) in dropdownItems" :key="index" class="group relative w-[8rem] py-1 cursor-pointer">
                  <!-- Button -->
                  <div href="#"
                    class="group-hover:bg-gradient-to-b z-20 uppercase  flex justify-center group-hover:text-[#F8E889] group-hover:font-semibold group-hover:border border-black from-[#5C5C5C] to-black  rounded-full relative ">
                    {{ item.label }}
                  </div>

                  <!-- Dropdown -->
                  <div
                    class="hidden  group-hover:block pt-6 absolute top-0 left-1/2 transform -translate-x-1/2  w-[104%] bg-white/30 backdrop-blur-sm rounded-2xl shadow-md z-10">
                    <a v-for="(subItem, subIndex) in item.sub" :key="subIndex"
                      class="flex items-center px-[5px] gap-1 py-[5px] mb-[1px] border-[0.5px] border-yellow-100/10 bg-white/10 border-b-white/20 hover:bg-white/20 rounded-xl transition "
                      href="">
                      <img class="w-6 h-6" :src="subItem.icon" alt="icon" />
                      <div class="text-[11px]">{{ subItem.text }}</div>
                    </a>
                  </div>

                </li>
              </ul>
            </div>
            <!-- Button Login -->
            <div v-if="!userStore.isLogin" class="col-span-12 xl:col-span-3">
              <div class="flex justify-around flex-2/6 *:uppercase *:px-8 *:py-[6px] *:backdrop-blur-md ">
                <a href="javascript:void(0)" @click="login"
                  class="border-white border-2 bg-[#F4F5F7] rounded-full  font-bold text-md ">
                  <div class="gradient-text-black">đăng ký</div>
                </a>
                <a href="javascript:void(0)" @click="login"
                  class="bg-white rounded-full  font-bold text-md bg-gradient-to-b from-[#5C5C5C] to-black border border-[#1A1A1A]">
                  <div class="gradient-text-yellow">đăng nhập</div>
                </a>
              </div>
            </div>
            <!-- Profile -->
            <div v-else class=" col-span-12 xl:col-span-3 relative">

              <div class="bg-gradient-to-b from-[#5C5C5C] to-black border border-[#1A1A1A] grid grid-cols-2  h-[40px] items-center pl-[2px] rounded-full gap-2">

                <div class="group relative ">

                  <div class="border-white border-2 bg-[#F4F5F7] rounded-full h-full flex justify-between items-center z-20 relative">
                    <img class="h-[70%] px-2" src="/public/icons/user/Coin.png" alt="">
                    <div class="text-[#1A1A1A] text-xl font-semibold w-full">1000</div>
                    <div class=" w-full h-full">
                    <div class="bg-gradient-to-b w-fit h-fit float-end from-[#F8E889] to-[#E4B764]  flex items-center rounded-full  mr-1 border border-amber-400 cursor-pointer">
                      <img class="h-[20px] w-[20px] transition-transform duration-300 group-hover:rotate-45 " src="/public/icons/user/Plus.png" alt="">
                    </div>
                  </div>

                  </div>

                  <div class="hidden group-hover:block pt-9  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-5  w-[103%] bg-gray-900/20 backdrop-blur-sm rounded-2xl shadow-md z-10">
                    
                    <a class="flex items-center px-[1px] gap-1  mb-[4px] bg-white/10 rounded-xl transition " href="">
                      <div class="flex items-center gap-2 bg-black/10 w-full rounded-full p-[7px] hover:bg-black/20 px-3">
                        <img src="/public/icons/_27e32f25-c449-4845-b56c-fdb9aacf123a 1.png" alt="">
                        <div class="text-md text-white">20.000</div>
                      </div>
                    </a>
                    <a class="flex items-center px-[1px] gap-1  mb-[4px] bg-white/10 rounded-xl transition " href="">
                      <div class="flex items-center gap-2 bg-black/10 w-full rounded-full p-[7px] hover:bg-black/20 px-">
                        <img src="/public/icons/VectorK.png" alt="">
                        <div class="text-md text-white">20.000</div>
                      </div>
                    </a>


                    <div class="flex justify-center text-white items-center py-3">
                      <div class="bg-gradient-to-b from-[#F8E889] to-[#E4B764]  flex items-center rounded-full w-fit h-fit mr-1 border border-amber-400">
                        <img class="h-[14px] w-[14px]" src="/public/icons/user/Plus.png" alt="">
                      </div>
                      <div class="text-md">Nạp thêm</div>
                    </div>

                    


                  </div>

                </div>


                <div class="flex items-center justify-between px-1">
                  <div class="relative">
                    <img src="/public/icons/user/Vector.png" alt="">
                    <div
                      class="absolute top-0 right-0 bg-gradent-red w-4 h-4 rounded-full flex items-center justify-center transform -translate-y-2 translate-x-1">
                      <div class="text-[10px] text-[#F8E889] font-semibold">10</div>
                    </div>
                  </div>
                  <div class="relative">
                    <img src="/public/icons/user/Mail.png" alt="">
                    <div
                      class="absolute top-0 right-0 bg-gradent-red w-4 h-4 rounded-full flex items-center justify-center transform -translate-y-2 translate-x-1">
                      <div class="text-[10px] text-[#F8E889] font-semibold">2</div>
                    </div>
                  </div>
                  <div class="relative">
                    <img src="/public/icons/user/Diemdanh.png" alt="">
                  </div>

                  <!-- Profile Icon -->
                  <div class="relative">
                    <div class="h-[40px]  relative cursor-pointer" @click="toggleDropdown" v-click-outside="closeDropdown">
                      <img class=" bg-white h-full rounded-full" src="/public/icons/user/avatar.webp" alt="">

                      <div class="absolute top-1/2 left-1/2 transform w-[56px] -translate-y-1/2 -translate-x-1/2">
                        <img class="w-full" src="/public/icons/user/test 1.svg" alt="">
                      </div>

                      <div
                        class="absolute bottom-0 right-0  rounded-full flex items-center justify-center transform translate-y-2 translate-x-3">
                        <div class="relative w-[22px] h-[22px] flex items-center justify-center rounded-full">
                          <div class="text-[11px] gradient-text-yellow font-bold z-30 pb-[1px]1">20</div>
                          <img class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full"
                            src="/public/icons/user/Isolation_Mode.svg" alt="">
                        </div>
                      </div>

                    </div>
                  </div>

              <!-- Dropdown click Profile -->
              <div v-if="isDropdownOpen"  class="block  absolute top-full left-1/2 transform -translate-x-1/2   w-full bg-white/40 backdrop-blur-sm rounded-2xl shadow-md z-10">
                    
                <a class="flex items-center px-[1px] gap-1  mb-[1px] transition group" href="">
                  <div class="grid grid-cols-12 items-center gap-2 bg-white/10 w-full rounded-full p-[7px] px-3 group-hover:bg-gradient-to-b group-hover:from-[#5C5C5C] group-hover:to-black group-hover:border group-hover:border-[#1A1A1A]">
                    <img class="col-span-2 mx-auto" src="/public/icons/Agent.svg" alt="">
                    <div class="text-md col-span-10 gradient-text-black uppercase group-hover:font-semibold group-hover:gradient-text-yellow ">Trung tâm Tài khoản</div>
                  </div>
                </a>
                <a class="flex items-center px-[1px] gap-1  mb-[1px] transition group" href="">
                  <div class="grid grid-cols-12 items-center gap-2 bg-white/10 w-full rounded-full p-[7px] px-3 group-hover:bg-gradient-to-b group-hover:from-[#5C5C5C] group-hover:to-black group-hover:border group-hover:border-[#1A1A1A]">
                    <img class="col-span-2 mx-auto" src="/public/icons/Icon_size.png" alt="">
                    <div class="text-md col-span-10 gradient-text-black uppercase group-hover:font-semibold group-hover:gradient-text-yellow ">Trang cá nhân</div>
                  </div>
                </a>
                <a class="flex items-center px-[1px] gap-1  mb-[1px] transition group" href="">
                  <div class="grid grid-cols-12 items-center gap-2 bg-white/10 w-full rounded-full p-[7px] px-3 group-hover:bg-gradient-to-b group-hover:from-[#5C5C5C] group-hover:to-black group-hover:border group-hover:border-[#1A1A1A]">
                    <img class="col-span-2 mx-auto" src="/public/icons/Icon_size (1).png" alt="">
                    <div class="text-md col-span-10 gradient-text-black uppercase group-hover:font-semibold group-hover:gradient-text-yellow ">Nhiệm vụ</div>
                  </div>
                </a>
                <a class="flex items-center px-[1px] gap-1  mb-[1px] transition group" href="">
                  <div class="grid grid-cols-12 items-center gap-2 bg-white/10 w-full rounded-full p-[7px] px-3 group-hover:bg-gradient-to-b group-hover:from-[#5C5C5C] group-hover:to-black group-hover:border group-hover:border-[#1A1A1A]">
                    <img class="col-span-2 mx-auto" src="/public/icons/Icon_size (2).png" alt="">
                    <div class="text-md col-span-10 gradient-text-black uppercase group-hover:font-semibold group-hover:gradient-text-yellow ">Ví của bạn</div>
                  </div>
                </a>
                <a class="flex items-center px-[1px] gap-1  mb-[1px] transition group" href="">
                  <div class="grid grid-cols-12 items-center gap-2 bg-white/10 w-full rounded-full p-[7px] px-3 group-hover:bg-gradient-to-b group-hover:from-[#5C5C5C] group-hover:to-black group-hover:border group-hover:border-[#1A1A1A]">
                    <img class="col-span-2 mx-auto" src="/public/icons/Icon_size.svg" alt="">
                    <div class="text-md col-span-10 gradient-text-black uppercase group-hover:font-semibold group-hover:gradient-text-yellow ">lịch sử giao dịch</div>
                  </div>
                </a>
                <a class="flex items-center px-[1px] gap-1  mb-[1px] transition group" href="">
                  <div class="grid grid-cols-12 items-center gap-2 bg-white/10 w-full rounded-full p-[7px] px-3 group-hover:bg-gradient-to-b group-hover:from-[#5C5C5C] group-hover:to-black group-hover:border group-hover:border-[#1A1A1A]">
                    <img class="col-span-2 mx-auto" src="/public/icons/Icon_size (2).png" alt="">
                    <div class="text-md col-span-10 gradient-text-black uppercase group-hover:font-semibold group-hover:gradient-text-yellow ">Ví của bạn</div>
                  </div>
                </a>
                <a class="flex items-center px-[1px] gap-1  mb-[1px] transition group" href="javascript:void(0)" @click="logout">
                  <div class="grid grid-cols-12 items-center gap-2 bg-white/10 w-full rounded-full p-[7px] px-3 group-hover:bg-gradient-to-b group-hover:from-[#5C5C5C] group-hover:to-black group-hover:border group-hover:border-[#1A1A1A]">
                    <img class="col-span-2 mx-auto" src="/public/icons/Icon_size (1).svg" alt="">
                    <div class="text-md col-span-10 gradient-text-black uppercase group-hover:font-semibold group-hover:gradient-text-yellow ">Thoát tài khoản</div>
                  </div>
                </a>

              </div>

                </div>

              </div>


              <div class="absolute top-0 left-1/2 transform -translate-x-1/2 text-[10px] -translate-y-[14px] ">Xin chào,
                NguyenVanDen</div>
            </div>

          </div>


          <div class="grid grid-cols-12 h-[90%] items-center bg-black relative xl:pl-3 py-1 gap-5">
            <div class="absolute z-0 bg-black h-full top-0 right-0 w-[50%] transform translate-x-[99%]"></div>

            <div class="hidden xl:block col-span-9 ">
              <div class="flex items-center h-full justify-between">
                <div class="flex items-center gap-2">
                  <img src="public/icons/Frame 96.svg" alt="icon">
                  <div class="text-md gradient-text-yellow">Bảng Tin</div>
                </div>
                <div class="flex items-center gap-2">
                  <img src="public/icons/Icon copy.png" alt="icon">
                  <div class="text-md gradient-text-yellow">Reels</div>
                </div>
                <div class="flex items-center gap-2">
                  <img src="public/icons/video.png" alt="icon">
                  <div class="text-md gradient-text-yellow">Highlight</div>
                </div>
                <div class="flex items-center gap-2">
                  <img src="public/icons/Frame 206.png" alt="icon">
                  <div class="text-md gradient-text-yellow">Tip Kèo</div>
                </div>
                <div class="flex items-center gap-2">
                  <img src="public/icons/Movie.png" alt="icon">
                  <div class="text-md gradient-text-yellow">Phim Ảnh</div>
                </div>
                <div class="flex items-center gap-2">
                  <img src="public/icons/Icon.svg" alt="icon">
                  <div class="text-md gradient-text-yellow">Truyện Tranh</div>
                </div>
              </div>
            </div>


            <div class="col-span-12 xl:col-span-3">
              <div class="flex justify-between text-white h-full relative items-center">
                <div class="border-2 border-white bg-[#F4F5F7] rounded-full flex items-center">
                  <div class="text-md uppercase gradient-text-black font-bold px-6  py-1 relative">
                    <div class="pl-3">tiếng việt</div>
                    <img class="absolute top-0 left-0 transform translate-y-[2px] translate-x-[1px]"
                      src="/public/icons/vietnam.png" alt="">
                  </div>
                </div>
                <div
                  class="bg-white border border-[#F8E889] rounded-full w-[60px] h-[30px] relative bg-gradient-to-b from-[#5C5C5C] to-black -px-1">
                  <img class="max-h-full" src="/public/icons/Light.png" alt="">
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const dropdownItems = [
  {
    label: 'lịch trực tiếp',
    sub: [
      { icon: '/icons/ani_Soccer.png', text: 'BÓNG ĐÁ' },
      { icon: '/icons/ani_Duabi.png', text: 'Đua bi' },
      { icon: '/icons/ani_Basketball.png', text: 'BÓNG rổ' },
      { icon: '/icons/Frame 8912.png', text: 'e-sports' },
      { icon: '/icons/ani_Casino.png', text: 'Casino' },
    ],
  },
  {
    label: 'lịch thi đấu',
    sub: [
      { icon: '/icons/ani_Soccer.png', text: 'BÓNG ĐÁ' },
      { icon: '/icons/ani_Duabi.png', text: 'Đua bi' },
      { icon: '/icons/ani_Basketball.png', text: 'BÓNG rổ' },
      { icon: '/icons/Frame 8912.png', text: 'e-sports' },
      { icon: '/icons/ani_Casino.png', text: 'Casino' },
    ],
  },
  {
    label: 'tỷ lệ kèo',
    sub: [
      { icon: '/icons/ani_Soccer.png', text: 'BÓNG ĐÁ' },
      { icon: '/icons/ani_Duabi.png', text: 'Đua bi' },
      { icon: '/icons/ani_Basketball.png', text: 'BÓNG rổ' },
      { icon: '/icons/Frame 8912.png', text: 'e-sports' },
      { icon: '/icons/ani_Casino.png', text: 'Casino' },
    ],
  },
  {
    label: 'kết quả',
    sub: [
      { icon: '/icons/ani_Soccer.png', text: 'BÓNG ĐÁ' },
      { icon: '/icons/ani_Duabi.png', text: 'Đua bi' },
      { icon: '/icons/ani_Basketball.png', text: 'BÓNG rổ' },
      { icon: '/icons/Frame 8912.png', text: 'e-sports' },
      { icon: '/icons/ani_Casino.png', text: 'Casino' },
    ],
  },
  {
    label: 'phòng chat',
    sub: [
      { icon: '/icons/ani_Soccer.png', text: 'BÓNG ĐÁ' },
      { icon: '/icons/ani_Duabi.png', text: 'Đua bi' },
      { icon: '/icons/ani_Basketball.png', text: 'BÓNG rổ' },
      { icon: '/icons/Frame 8912.png', text: 'e-sports' },
      { icon: '/icons/ani_Casino.png', text: 'Casino' },
    ],
  },
  {
    label: 'tin tức',
    sub: [
      { icon: '/icons/ani_Soccer.png', text: 'BÓNG ĐÁ' },
      { icon: '/icons/ani_Duabi.png', text: 'Đua bi' },
      { icon: '/icons/ani_Basketball.png', text: 'BÓNG rổ' },
      { icon: '/icons/Frame 8912.png', text: 'e-sports' },
      { icon: '/icons/ani_Casino.png', text: 'Casino' },
    ],
  },
  // You can add more here...
]


import { useUserStore } from '~/stores/user'
const userStore = useUserStore()

function login() {
  userStore.login({ name: "sempanha", email: "sempanha@gmail.com" })
}
function logout() {
  userStore.logout()
}

import { ref } from 'vue'
const isDropdownOpen = ref(false)

function toggleDropdown(){
  isDropdownOpen.value = !isDropdownOpen.value
}

function closeDropdown(){
  isDropdownOpen.value = false
  console.log("click outside")
}

</script>