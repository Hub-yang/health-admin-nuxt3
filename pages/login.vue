<script setup lang='ts'>
definePageMeta({
  title: '欢迎登录',
})

const username = ref('')
const password = ref('')
const confirmPassword = ref('')
const showPassWord = ref(false)
const isReg = ref(false)
const keyframes = ref(false)
const toggleToolTip = ref(false)
let timer: NodeJS.Timeout | null = null

function handleValidateLogin() {
  if (!username.value || !username.value.replace(/\s*/g, '')) {
    message.error('请输入用户名')
    return (username.value = '')
  }
  if (!password.value || !password.value.replace(/\s*/g, '')) {
    message.error('请输入密码')
    return (password.value = '')
  }
  if (isReg.value) {
    if (!(password.value === confirmPassword.value))
      return message.error('两次密码不一致，请重新输入')

    if (!validatePassword(password.value))
      return message.error('密码格式不正确，请重写输入')
    handleRegister()
  }
  else {
    handleLogin()
  }
}

async function handleLogin() {
  const { data, code, msg } = await login({ username: username.value, password: password.value }) as anyKey
  if (code === 200) {
    message.success(msg)
    const userInfo = {
      username: data?.username ?? '--',
      uid: data?.uid ?? '',
    }
    useStorage().setItems({ [TOKEN_KEY]: data?.token ?? '', [USERINFO_KEY]: JSON.stringify(userInfo) })
    await navigateTo('/welcome', { replace: true })
  }
  else { message.error(msg) }
}

async function handleRegister() {
  const { code, msg } = await register({ username: username.value, password: password.value })
  if (code === 200) {
    message.success(msg)
    isReg.value = false
    clearTimeout(timer as NodeJS.Timeout)
    timer = setTimeout(() => {
      keyframes.value = false
    }, 400)
  }
  else {
    resetForm()
    message.error(msg)
  }
}

const temp = {
  username: '',
  password: '',
}
function registerOrBack() {
  isReg.value = !isReg.value

  if (isReg.value) {
    username.value && (temp.username = username.value)
    password.value && (temp.password = password.value)
    resetForm()
  }

  if (!isReg.value) {
    username.value = temp.username
    password.value = temp.password
    temp.username = temp.password = ''
  }

  if (keyframes.value) {
    clearTimeout(timer as NodeJS.Timeout)
    timer = setTimeout(() =>
      keyframes.value = false, 400)
  }
  else { keyframes.value = true }
}

function resetForm() {
  username.value = password.value = confirmPassword.value = ''
  showPassWord.value = false
}

function passwordBlur() {
  toggleToolTip.value = false
  const isTrue = validatePassword(password.value)
  if (password.value && !isTrue)
    message.error('密码格式不正确')
}

async function inputBlur() {
  const { code, msg } = await checkName(username.value) as any
  if (code !== 200)
    message.error(msg)
}

const color = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
]

const tooltipColor = ref('')
watchEffect(getRandomColor)
function getRandomColor() {
  if (toggleToolTip.value)
    tooltipColor.value = color[Math.floor(Math.random() * color.length)]
}

const inputClass = computed(() => isReg.value ? 'animate-slide-in-blurred-left' : 'animate-slide-out-blurred-right')
const baseTitle = computed(() => isReg.value ? '用户注册' : '用户登录')
const loginBtnTitle = computed(() => isReg.value ? '注 册' : '登 录')
const registerBtnTitle = computed(() => isReg.value ? '返回登录' : '立即注册')

const isEnterUsername = ref(false)

watch(username, (val) => {
  if (val)
    isEnterUsername.value = true
  else
    isEnterUsername.value = false
})

function clearUsername() {
  username.value = ''
}
</script>

<template>
  <main class="login_container h-full w-full select-none text-white font-pop">
    <section from="#1b213e" to="#525471" h-full w-full flex-center bg-gradient-to-br after:circle-lg before:circle-sm>
      <div relative z-3 w-390px border-1 border-b-color-gray:10 border-l-color-gray:20 border-r-color-gray:10 border-t-color-gray:20 rounded-2 bg-gray:10 p-6 backdrop-blur-15 base-shadow>
        <p mb10 block text-center>
          {{ baseTitle }}
        </p>
        <form>
          <span relative block>
            <input
              v-model.trim="username"
              v-focus
              class="base-input placeholder:color-white"
              type="text"
              placeholder="用户名"
              @blur="isReg && inputBlur()"
            >
            <span
              v-show="isEnterUsername"
              absolute right-2.5 top-3 block cursor-pointer
              @click="clearUsername"
            >
              <CloseCircleFilled />
            </span>
          </span>

          <a-tooltip
            :open="toggleToolTip && isReg"
            :color="tooltipColor"
            title="密码为6~12位,包含数字和字母"
            placement="right"
          >
            <span relative block>
              <input
                v-model.lazy.trim="password"
                class="base-input placeholder:color-white"
                placeholder="密码"
                :type="showPassWord ? 'text' : 'password'"
                @blur="isReg && passwordBlur()"
                @focus="isReg && (toggleToolTip = true)"
              >
              <span
                absolute right-2.5 top-3 block cursor-pointer
                @click="showPassWord = !showPassWord"
              >
                <eye-filled v-if="!showPassWord" />
                <eye-invisible-filled v-else />
              </span>
            </span>
          </a-tooltip>

          <input
            v-if="keyframes"
            v-model.lazy.trim="confirmPassword"
            class="base-input placeholder:color-white"
            :class="inputClass"
            type="password"
            placeholder="确认密码"
          >
          <button class="base-button hover:base-button-hover" type="submit" @click.prevent="handleValidateLogin()">
            {{ loginBtnTitle }}
          </button>
          <div
            float-right mt-5 cursor-pointer transition-color-400 hover:color="#02aab0"
            @click="registerOrBack"
          >
            {{ registerBtnTitle }}
          </div>
        </form>
      </div>
    </section>
  </main>
</template>
