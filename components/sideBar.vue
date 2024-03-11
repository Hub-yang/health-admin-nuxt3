<script setup lang='ts'>
const username = computed(() => {
  const username = useStorage().getItem(USERINFO_KEY)?.username
  if (!username)
    return '--'
  return username.at(0).toLocaleUpperCase() + username.substring(1).toLocaleLowerCase()
})

const year = useState('year')
async function handleLogout() {
  useStorage().removeItems(TOKEN_KEY, USERINFO_KEY)
  message.success({ content: '请重新登录', duration: 3 })
  await navigateTo('/login', { replace: true })
}
</script>

<template>
  <a-layout-sider
    class="select-none rounded-l-3xl px-6 py-5 important-bg-base"
    width="25%"
  >
    <div mt-2 h-full flex flex-1 flex-col items-center justify-between>
      <div class="w-full flex items-center justify-between slide-in-blurred-400">
        <div class="max-w-40 whitespace-normal text-center text-6 font-bad animate-welcome-text all:transition-2">
          Welcome, {{ username }}
        </div>
        <BaseYearSelect v-model:year="year" />
        <div @click="handleLogout">
          <button class="rounded-1 border-none bg-sky px-2 py-1 text-white active:scale-.5 focus:outline-none">
            退出登录
          </button>
        </div>
      </div>
      <!-- audio player -->
      <div v-once class="h-32 w-full border-2 border-color-base-b-color rounded-3xl bg-base shadow-base slide-in-blurred-800">
        <BaseAudio />
      </div>
      <!-- clock module -->
      <div class="h-8 w-95% flex-center rounded-5 bg-main slide-in-blurred-1200">
        <BaseClock />
      </div>
      <!-- kpi module -->
      <div class="w-full flex-col-center overflow-hidden slide-in-blurred-1200">
        <BaseKpi />
      </div>
      <!-- weather module -->
      <div class="h-25 w-full rounded-3xl bg-main slide-in-blurred-1600">
        <BaseWeather />
      </div>
      <!-- switch button -->
      <div v-once class="h-54 w-full slide-in-blurred-2000">
        <BaseSwitchTabs />
      </div>
    </div>
  </a-layout-sider>
</template>
