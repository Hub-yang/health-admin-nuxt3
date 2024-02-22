<script setup lang='ts'>
const isCollapsed = defineModel('collapsed', { type: Boolean, default: false })
const username = computed(() => {
  const username = useStorage().getItem(USERINFO_KEY).username
  if (!username)
    return '--'
  return username.at(0).toLocaleUpperCase() + username.substring(1).toLocaleLowerCase()
})

const year = useState('year')
async function handleLogout() {
  useStorage().removeItems(TOKEN_KEY, USERINFO_KEY)
  await navigateTo('/login', { replace: true })
  message.success({ content: '请重新登录', duration: 3 })
}
</script>

<template>
  <a-layout-sider
    v-model:collapsed="isCollapsed"
    width="25%"
    :collapsed-width="0"
    :reverse-arrow="true"
    :collapsible="true"
    rounded-l-3xl
    p-4
    important-bg-blue
  >
    <div class="home_right">
      <!-- welcome and logout button -->
      <div v-once class="logout_welcome">
        <div class="welcome">
          Welcome, {{ username }}
        </div>
        <div class="logout_btn">
          <button class="btn" @click="handleLogout">
            退出登录
          </button>
        </div>
      </div>
      <!-- years select -->
      <div class="year_selector">
        <BaseYearSelect v-model:year="year" />
      </div>
      <!-- audio player -->
      <div v-once class="audio_container">
        <BaseAudio />
      </div>
      <!-- clock module -->
      <div v-once class="clock_container">
        <BaseClock />
      </div>

      <!-- kpi module -->
      <div class="kpi_container">
        <BaseKpi />
      </div>

      <!-- weather module -->
      <div class="weather_container">
        <BaseWeather />
      </div>

      <!-- switch button -->
      <div v-once class="tabs_container">
        <BaseSwitchTabs />
      </div>
    </div>
  </a-layout-sider>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Bad+Script');

$base-color: #181b22;
$default-color: #222430;
$default-broder-radius: 30px;

.home_aside {
  height: 95%;
  width: 76px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .showDrawnBtn {
    cursor: pointer;
    display: block;
    width: 20px;
    height: 150px;
    overflow: hidden;
    outline: none;
    border: 1px solid #27b2f3;
    border-radius: 0 15px 15px 0;
    box-shadow: 2px 0 10px 0 #27b2f3;
    text-align: center;
    padding: 0;
    background-color: #27b2f3;
    color: white;
    transition: all 0.3s ease;
  }

  .showDrawnBtn:hover {
    width: 25px;
    transition: all 0.3s ease;
  }
}

.home_main {
  height: 95%;
  width: 78%;
  background-color: $base-color;
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .health_part_one,
  .health_part_two,
  .health_part_three {
    margin: 0 auto;
    width: 97.5%;
    border-radius: $default-broder-radius;
    background-color: $default-color;
  }

  .health_part_one {
    height: 36%;
    animation: bounce-in-top 1.1s both;
  }

  .health_part_two {
    display: flex;
    align-items: center;
    height: 36%;
    background-color: #181b22;
    animation: bounce-in-top 1.1s both 0.5s;

    .area_one,
    .area_two,
    .area_three {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      border-radius: $default-broder-radius;
      background-color: $default-color;
      transition: all 700ms ease;
    }

    .area_one {
      margin-right: 10px;
    }

    .area_two {
      margin: 0 10px;
    }

    .area_three {
      margin-left: 10px;
    }
  }

  .health_part_three {
    height: 20%;
    // overflow-y: hidden;
    // overflow-x: visible;
    border-radius: 0;
    background-color: transparent;
    animation: bounce-in-top 1.1s both 1s;
  }
}

.home_right {
  height: 95%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .logout_welcome {
    width: 320px;
    padding: 10px 0 0 0px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: -10px;
    animation: slide-in-blurred-left 1s cubic-bezier(0.23, 1, 0.32, 1) both 0.4s;

    .welcome {
      white-space: normal;
      font-family: 'Bad Script', cursive;
      font-size: 2em;
      user-select: none;
      text-align: center;
      transition: all 2s ease;
      animation: animate 3s linear infinite;
    }

    .logout_btn {
      margin-left: 15px;
      top: -4px;

      .btn {
        background-color: #27b2f3;
        color: #fff;
        border: 0;
        border-radius: 5px;
        box-shadow:
          0 5px 15px rgba(0, 0, 0, 0.1),
          0 6px 6px rgba(0, 0, 0, 0.1);
        padding: 4px 6px;
        font-size: 12px;
        cursor: pointer;
      }

      .btn:active {
        transform: scale(0.98);
      }

      .btn:focus {
        outline: 0;
      }
    }
  }

  .audio_container {
    width: 320px;
    height: 120px;
    border: 2px solid #2f313c;
    border-radius: $default-broder-radius;
    background-color: #222430;
    text-align: center;
    box-shadow: 7px 8px 17px -7px #000;
    animation: slide-in-blurred-left 1s cubic-bezier(0.23, 1, 0.32, 1) both 0.8s;
  }

  .clock_container {
    width: 283px;
    height: 32px;
    border-radius: 20px;
    background-color: #181b22;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: slide-in-blurred-left 1s cubic-bezier(0.23, 1, 0.32, 1) both 1.2s;
  }

  .kpi_container {
    width: 340px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: slide-in-blurred-left 1s cubic-bezier(0.23, 1, 0.32, 1) both 1.2s;
  }

  .weather_container {
    width: 283px;
    height: 100px;
    border-radius: 20px;
    background-color: #181b22;
    animation: slide-in-blurred-left 1s cubic-bezier(0.23, 1, 0.32, 1) both 1.6s;
  }

  .tabs_container {
    width: 283px;
    height: 200px;
    animation: slide-in-blurred-left 1s cubic-bezier(0.23, 1, 0.32, 1) both 2s;

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
  }
}

.mask {
  // float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #000;

  h1 {
    font-size: 4.5em;
    font-weight: 900;
    font-style: italic;
    // color: aqua;
    cursor: pointer;
    // 渐变色动画
    animation: color-change-3x 2s linear infinite alternate both;
  }
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
