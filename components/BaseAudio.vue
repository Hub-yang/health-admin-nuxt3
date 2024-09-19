<script setup lang="ts">
const params = encodeURIComponent('audios/邓紫棋/')
const playList = await $fetch(`/api/getAudioList?prefix=${params}`) as any[]

const curTime = ref('00:00')
const totalTime = ref('00:00')
const playing = ref(false)
const playIndex = ref(0)
const player = ref<HTMLAudioElement | null>(null)
const range = ref<HTMLInputElement | null>(null)

function handlePlayStart() {
  const playerState = player.value as HTMLAudioElement
  (!playerState.autoplay) && (playerState.autoplay = true)
  playerState.play()
  playing.value = true
}
// 播放/暂停
function handlePlay() {
  const playerState = player.value as HTMLAudioElement
  // 根据paused属性判断播放状态，执行播放暂停操作
  (!playerState.autoplay) && (playerState.autoplay = true)
  playing.value = playerState.paused
  if (playerState.paused)
    playerState.play()
  else
    playerState.pause()
}
// 绑定进度条与时间显示
function handleTimeUpdate() {
  const playerState = player.value as HTMLAudioElement
  const rangeState = range.value as HTMLInputElement
  rangeState.max = `${playerState.duration}`
  rangeState.value = `${playerState.currentTime}`
  totalTime.value = useDateFormat((playerState?.duration || 0) * 1000, 'mm:ss').value
  curTime.value = useDateFormat((playerState?.currentTime || 0) * 1000, 'mm:ss').value
}
// 拖拽进度条
function handleRangeChange() {
  const playerState = player.value as HTMLAudioElement
  const rangeState = range.value as HTMLInputElement
  playerState.currentTime = +rangeState.value
  handlePlayStart()
}
// 下一首
function handlePlayNext() {
  playIndex.value += 1
  handlePlayStart()
}
// 上一首
function handlePlayPrevious() {
  playIndex.value -= 1
  handlePlayStart()
}

function handleCoverImgError(event: any) {
  const img = event.srcElement
  img.src = new URL('public/error.gif', import.meta.url).href
  img.onerror = null
}
</script>

<template>
  <div class="relative h-full w-full">
    <audio
      ref="player"
      loop
      :src="playList[playIndex].playUrl"
      @timeupdate="handleTimeUpdate"
    />
    <!-- cover -->
    <img
      class="absolute left-6 top-5 h-10 w-10 animate-spin animate-duration-6s rounded-50%"
      :style="{
        animationPlayState: playing ? 'running' : 'paused',
      }"
      :src="playList[playIndex].cover"
      :onerror="(e:any) => handleCoverImgError(e)"
    >

    <!-- info -->
    <div class="absolute left-18 top-6 flex flex-col items-start">
      <span class="text-3 color-white">
        {{ playList[playIndex].playTitle }}
      </span>
      <span class="text-2.5 color-gray">
        {{ playList[playIndex].player }}
      </span>
    </div>

    <!-- progress bar -->
    <div class="absolute bottom-2 left-50% w-85% translate-x--50%">
      <input
        ref="range"
        class="w-full cursor-pointer appearance-none rounded-1"
        type="range"
        min="0"
        value="0"
        max="100"
        @change="handleRangeChange"
      >
      <div class="mxa my0">
        <span class="float-left text-2.7 color-gray:60">{{ curTime }}</span>
        <span class="float-right text-2.7 color-gray:60">{{ totalTime }}</span>
      </div>
    </div>

    <!-- controller -->
    <div class="absolute right-6 top-5 flex-center gap-1">
      <button
        i-carbon-skip-back-filled disabled:corsor-not-allowed color-white disabled:color-gray:60
        :disabled="!playIndex"
        @click="handlePlayPrevious"
      />
      <div
        rounded="50%"
        from="#bb49fe"
        to="#6222e9"
        h-10 w-10 flex-center cursor-pointer bg-gradient-to-br outline-none
      >
        <transition>
          <span v-if="!playing" i-carbon-play h-5 w-5 color-white @click="handlePlay" />
          <span v-else i-carbon-pause h-5 w-5 color-white @click="handlePlay" />
        </transition>
      </div>
      <button
        i-carbon-skip-forward-filled
        class="disabled:corsor-not-allowed color-white disabled:color-gray:60"
        :disabled="playIndex === playList.length - 1"
        @click="handlePlayNext"
      />
    </div>
  </div>
</template>
