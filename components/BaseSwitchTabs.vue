<script setup lang="ts">
const activeIndex = ref(0)
const items = [
  { label: '健身' },
  { label: '读书' },
]

function handleClick(index: number) {
  activeIndex.value = index
}
</script>

<template>
  <div id="nav-tab">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="nav-tab-item"
      :class="{ active: activeIndex === index }"
      @click="handleClick(index)"
    >
      <span class="nav-tab-item_label">{{
        item.label.split("")[0]
      }}</span>
      <span class="nav-tab-item_label">{{
        item.label.split("")[1]
      }}</span>
    </div>
    <div
      class="nav-tab-overlay"
      :style="{ left: `${activeIndex * 110}px` }"
    />
  </div>
</template>

<style scoped lang="scss">
#nav-tab {
  background-color: #181b22;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 20px;
  overflow: hidden;
  border: 10px solid #181b22;
}

.nav-tab-item {
  width: 110px;
  height: 100%;
  z-index: 2;
  transition: 0.3s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
}

.nav-tab-item.active {
  width: 152px;
}

.nav-tab-item_label {
  font-size: 4em;
  font-weight: 900;
  color: #4298e7;
  opacity: 0;
  transition: 0.6s ease;
  user-select: none;
  margin: 0;
  padding: 0;
}

.active .nav-tab-item_label {
  opacity: 1;
}

.nav-tab-overlay {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 152px;
  background-color: #222430;
  border-radius: 10px;
  transition: 0.6s ease;
}

// 动画
@keyframes color-change-3x {
  0% {
    color: #19dcea;
  }

  50% {
    color: #b22cff;
  }

  100% {
    color: #ea2222;
  }
}

@keyframes animate {
  /*动画*/
  0%,
  100% {
    color: #fff;
    filter: blur(2px);
    /*过渡:模糊*/
    text-shadow:
            /*字体阴影*/
      0 0 10px #00bcff,
      0 0 20px #00b3ff,
      0 0 30px #00b3ff,
      0 0 60px #00b3ff,
      0 0 90px #00b3ff;
  }

  35%,
  65% {
    color: #fff;
    filter: blur(0px);
    text-shadow: none;
  }
}

@keyframes slide-in-blurred-left {
  0% {
    -webkit-transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
    transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    -webkit-filter: blur(40px);
    filter: blur(40px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0) scaleY(1) scaleX(1);
    transform: translateX(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
}

@keyframes bounce-in-top {
  0% {
    -webkit-transform: translateY(-500px);
    transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  38% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 1;
  }

  55% {
    -webkit-transform: translateY(-65px);
    transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  72% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  81% {
    -webkit-transform: translateY(-28px);
    transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  90% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  95% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}
</style>
