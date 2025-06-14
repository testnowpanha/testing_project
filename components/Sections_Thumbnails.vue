<template>
  <div class="w-full py-2 sm:py-2 font-sans container mx-auto">
    <!-- Toggle Button -->
    <div class="flex justify-end items-center mb-3">
      <div class="flex items-center h-[40px] cursor-pointer group" @click="toggleView">
        <div class="gradient-text-black gap-5 text-[16px] font-bold group-hover:text-amber-500 transition-colors ">
          {{ showAll ? 'Thu gọn' : 'Xem tất cả' }}
        </div>
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/chevron-right.png"
          alt="arrow"
          class="w-5 h-5 ml-1 transition-transform"
          :class="{ '': !showAll, 'rotate-270': showAll }"
        />
      </div>
    </div>

    <!-- Swiper View -->
    <section v-if="!showAll" class="relative border-t-2 rounded-2xl mt-5 pt-5 border-amber-500 bg-gray-100/40 shadow-2xs">
      <Swiper
        :modules="[Navigation]"
        :slides-per-view="5"
        :space-between="20"
        :slides-offset-after="60"   
        :slides-offset-before="60"   
        :breakpoints="{
          320: {
            slidesPerView: 2,
            spaceBetween: 12,
            slidesOffsetBefore: 16,
            slidesOffsetAfter: 16
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 16,
            slidesOffsetBefore: 20,
            slidesOffsetAfter: 20
          },
          768: {
            slidesPerView: 3.5,
            spaceBetween: 20,
            slidesOffsetBefore: 30,
            slidesOffsetAfter: 30
          },
          1024: {
            slidesPerView: 4.5,
            spaceBetween: 20,
            slidesOffsetBefore: 40,
            slidesOffsetAfter: 40
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 20,
            slidesOffsetBefore: 60,
            slidesOffsetAfter: 60
          }
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="mySwiper w-full px-[54px] box-border"
      >

        <SwiperSlide v-for="(item, index) in thumbnails" :key="index">
          <CardItem :item="item" @toggle-subscribe="toggleSubscribe" />
        </SwiperSlide>
      </Swiper>

      <!-- Prev Button -->
      <div @click="slidePrev" class="custom-prev-button border-2 border-white" :class="{ 'button-disabled': isBeginning }">
        <img src="/public/thumbnails/doublearrow.png" alt="prev" />
      </div>

      <!-- Next Button -->
      <div @click="slideNext" class="custom-next-button border-2 border-white" :class="{ 'button-disabled': isEnd }">
        <img class="rotate-180" src="/public/thumbnails/doublearrow.png" alt="next" />
      </div>
    </section>

    <!-- Grid View -->
    <!-- Grid View -->
      <section v-else class="relative border-t-2 rounded-2xl mt-5 pt-5 border-amber-500 bg-gray-300/20 shadow-2xl">
        <div class="grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-5">
          <CardItem v-for="(item, index) in thumbnails" :key="index" :item="item" @toggle-subscribe="toggleSubscribe" />
        </div>
      </section>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import CardItem from '~/components/Card.vue';

const swiperInstance = ref<SwiperClass | null>(null);
const isBeginning = ref(true);
const isEnd = ref(false);
const showAll = ref(false);

const thumbnails = ref([
  {
    thumbnail: '/thumbnails/1.jpg',
    hot: true,
    status_label: '/thumbnails/live.png',
    label: '/icons/ani_Basketball.png',
    subscribed: false
  },
  {
    thumbnail: '/thumbnails/2.jpg',
    hot: true,
    status_label: '/thumbnails/Status.png',
    label: '/icons/ani_Soccer.png',
    subscribed: false
  },
  {
    thumbnail: '/thumbnails/3.jpg',
    hot: true,
    status_label: '/thumbnails/Status.png',
    label: '/icons/ani_Basketball.png',
    subscribed: false
  },
  {
    thumbnail: '/thumbnails/1.jpg',
    hot: true,
    status_label: '/thumbnails/Status.png',
    label: '/icons/Frame 8912.png',
    subscribed: false
  },
  {
    thumbnail: '/thumbnails/1.jpg',
    hot: true,
    status_label: '/thumbnails/Status.png',
    label: '/icons/ani_Basketball.png',
    subscribed: false
  },
  {
    thumbnail: '/thumbnails/1.jpg',
    hot: true,
    status_label: '/thumbnails/live.png',
    label: '/icons/Frame 8912.png',
    subscribed: false
  },
  {
    thumbnail: '/thumbnails/1.jpg',
    hot: true,
    status_label: '/thumbnails/Status.png',
    label: '/icons/Frame 8912.png',
    subscribed: false
  },
  {
    thumbnail: '/thumbnails/1.jpg',
    hot: true,
    status_label: '/thumbnails/Status.png',
    label: '/icons/ani_Basketball.png',
    subscribed: false
  },
  {
    thumbnail: '/thumbnails/1.jpg',
    hot: true,
    status_label: '/thumbnails/live.png',
    label: '/icons/Frame 8912.png',
    subscribed: false
  },
  {
    thumbnail: '/thumbnails/1.jpg',
    hot: true,
    status_label: '/thumbnails/live.png',
    label: '/icons/Frame 8912.png',
    subscribed: false
  },
]);

function toggleSubscribe(item: any) {
  item.subscribed = !item.subscribed;
}

function toggleView() {
  showAll.value = !showAll.value;
}

const onSwiper = (swiper: SwiperClass) => {
  swiperInstance.value = swiper;
  isEnd.value = swiper.isEnd;
};

const onSlideChange = (swiper: SwiperClass) => {
  isBeginning.value = swiper.isBeginning;
  isEnd.value = swiper.isEnd;
};

const slidePrev = () => swiperInstance.value?.slidePrev();
const slideNext = () => swiperInstance.value?.slideNext();
</script>

<style>
.custom-prev-button,
.custom-next-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 52px;
  height: 124px;
  background-color: rgb(247, 247, 247);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 5;
  transition: background-color 0.3s ease, opacity 0.3s ease;
}

.custom-prev-button:hover,
.custom-next-button:hover {
  background-color: rgb(243, 243, 243);
}

.custom-prev-button {
  left: 0;
  border-radius: 20px 7px 7px 20px;
}

.custom-next-button {
  right: 0;
  border-radius: 7px 20px 20px 7px;
}

.button-disabled {
  opacity: 0.9;
  cursor: not-allowed;
  pointer-events: none;
}

@media (max-width: 768px) {
  .custom-prev-button,
  .custom-next-button {
    display: none;
  }
}
</style>
