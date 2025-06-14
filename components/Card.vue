<template>
  <div class="border border-t-4 border-amber-400 rounded-3xl overflow-hidden group cursor-pointer relative shadow-md">
    <img class="w-full aspect-[4/3] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
         :src="item.thumbnail"
         alt="thumbnail"
         @error="$event.target.src='https://placehold.co/400x300/222/fff?text=Image+Error'" />

    <div v-if="item.hot" class="absolute top-0 right-0">
      <img src="/public/thumbnails/hot.png" alt="Hot">
    </div>

    <div class="w-full absolute bottom-0 bg-gradient-to-b from-[#F8E889] to-[#E4B764] border-2 border-[#E4B764] rounded-3xl h-[60px] grid items-center">
      <div class="flex items-center justify-between py-1 px-1">
        <div class="w-full">
          <div class="flex justify-center gap-2">
            <div class="text-[16px] text-[#5C5C5C]">Team A</div>
            <div class="text-[16px] text-[#1A1A1A] font-bold">VS</div>
            <div class="text-[16px] text-[#5C5C5C]">Team B</div>
          </div>
        </div>

        <div v-if="item.status_label === '/thumbnails/live.png'">
          <img class="w-[70px]" :src="item.status_label" alt="Live">
        </div>
        <div v-else>
          <img
            class="w-[70px] cursor-pointer"
            :src="item.subscribed ? '/thumbnails/Blingking_Statusdack.png' : item.status_label"
            @click="$emit('toggle-subscribe', item)"
            :alt="item.subscribed ? 'Subscribed' : 'Subscribe'"
          />
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 transform -translate-y-[200%]">
      <img :src="item.label" alt="Label">
    </div>
  </div>
</template>

<script setup>
defineProps(['item'])
defineEmits(['toggle-subscribe'])
</script>
