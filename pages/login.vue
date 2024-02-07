<script setup lang='ts'>
definePageMeta({
  title: '欢迎登录',
})

const username = ref()
const password = ref()
const confirmPassword = ref('')
const showPassWord = ref(false)
const isReg = ref(false)
const keyframes = ref(false)
const toggleToolTip = ref(false)
let timer: NodeJS.Timeout | null = null
const tooltipTitle = '密码为6~12位,包含数字和字母'
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
const tooltipColor = ref(getRandomColor())

function authLogin() {
  if (!username.value || !username.value.replace(/\s*/g, '')) {
    message.error('请输入用户名')
    username.value = ''
    return false
  }
  if (!password.value || !password.value.replace(/\s*/g, '')) {
    message.error('请输入密码')
    return false
  }

  if (isReg.value) {
    if (!(password.value === confirmPassword.value)) {
      message.error('两次密码不一致，请重新输入')
      return false
    }
    if (!validatePassword(password.value)) {
      message.error('密码格式不正确，请重写输入')
      return false
    }
    handlerReg(username.value, password.value)
  }
  else {
    handlerLogin(username.value, password.value)
  }
}

async function handlerLogin(username: string, password: string) {
  const { data = {}, code, msg } = await login({ username, password }) as anyKey
  if (code && code === 200) {
    message.success(msg)
    const userInfo = {
      username: data?.username ?? '--',
      uid: data?.uid ?? '',
    }
    useStorage().setItems({ [TOKEN_KEY]: data?.token ?? '', [USERINFO_KEY]: JSON.stringify(userInfo) })
    await navigateTo('/dashboard', { replace: true })
  }
  else { message.error(msg) }
}

async function handlerReg(username: string, password: string) {
  const { code, msg } = await register({ username, password }) as anyKey
  if (code && code === 200) {
    message.success(msg)
    resetForm()
    isReg.value = false
    clearTimeout(timer as NodeJS.Timeout)
    timer = setTimeout(() => {
      keyframes.value = false
    }, 400)
  }
  else {
    message.error(msg)
  }
}

function registerOrBack() {
  resetForm()
  isReg.value = !isReg.value
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

function getRandomColor() {
  return color[Math.floor(Math.random() * color.length)]
}

watch(toggleToolTip, (isTrue) => {
  if (isTrue)
    tooltipColor.value = getRandomColor()
})
</script>

<template>
  <main class="login_container">
    <section>
      <div class="form">
        <p>{{ isReg ? "用户注册" : "用户登录" }}</p>
        <form>
          <input
            v-model.lazy.trim="username"
            v-focus
            type="text"
            placeholder="用户名"
            @blur="isReg && inputBlur()"
          >

          <a-tooltip
            :open="toggleToolTip && isReg"
            :title="tooltipTitle"
            :color="tooltipColor"
            placement="right"
          >
            <span class="passInput">
              <input
                v-model.lazy.trim="password"
                :type="showPassWord ? 'text' : 'password'"
                placeholder="密码"
                @blur="isReg && passwordBlur()"
                @focus="isReg && (toggleToolTip = true)"
              >
              <span
                class="eye"
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
            :class="[
              isReg
                ? 'slide-in-blurred-left'
                : 'slide-out-blurred-right',
            ]"
            type="password"
            placeholder="确认密码"
          >
          <button type="submit" @click.prevent="authLogin()">
            {{ isReg ? "注 册" : "登 录" }}
          </button>
          <div class="reg_btn" @click="registerOrBack">
            {{ isReg ? "返回登录" : "立即注册" }}
          </div>
        </form>
      </div>
    </section>
  </main>
</template>

<style lang='scss' scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;700;900&display=swap');

.login_container {
  font-family: 'Poppins', sans-serif;
  height: 100%;

  section {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(
      94.3deg,
      rgba(26, 33, 64, 1) 10.9%,
      rgba(81, 84, 115, 1) 87.1%
    );
    overflow: hidden;

    .form {
      position: relative;
      z-index: 3;
      width: 390px;
      background-color: rgba(255, 255, 255, 0.1);
      padding: 45px 30px 30px 30px;
      border-radius: 8px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-right: 1px solid rgba(255, 255, 255, 0.1);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      // 毛玻璃模糊
      backdrop-filter: blur(15px);

      p {
        color: #fff;
        display: block;
        text-align: center;
        margin: 0 0 30px 0;
        user-select: none;
      }

      .passInput {
        position: relative;
      }

      .eye {
        position: absolute;
        color: #fff;
        top: -3px;
        right: 14px;
        font-size: 18px;
      }

      input {
        box-sizing: border-box;
        width: 100%;
        height: 50px;
        border-radius: 8px;
        background-color: transparent;
        border: 1px solid rgba(255, 255, 255, 0.5);
        margin-bottom: 15px;
        padding-left: 15px;
        color: #fff;
        outline: none;
      }

      input::placeholder {
        color: #fff;
      }

      button {
        user-select: none;
        width: 100%;
        height: 50px;
        border: 0;
        background-image: linear-gradient(
          to right,
          #02aab0 0%,
          #00cdac 51%,
          #02aab0 100%
        );
        background-size: 200% auto;
        border-radius: 8px;
        color: #fff;
        outline: none;
        cursor: pointer;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        transition: ease 0.4s;
      }

      button:hover {
        background-position: right center;
        color: #fff;
        text-decoration: none;
      }

      .reg_btn {
        user-select: none;
        cursor: pointer;
        float: right;
        margin-top: 10px;
        color: #fff;
        transition: color ease 0.4s;

        &:hover {
          color: #02aab0;
        }
      }
    }
  }

  // 圆形1
  section::before {
    position: absolute;
    content: '';
    z-index: 2;
    width: 450px;
    height: 450px;
    top: 50%;
    left: 50%;
    transform: translate(-100%, -80%);
    background-color: #ffe53b;
    background-image: linear-gradient(147deg, #ffe53b 0%, #ff2525 74%);
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.2);
    animation: pulse 1.5s infinite;
  }

  // 圆形2
  section::after {
    position: absolute;
    content: '';
    z-index: 2;
    width: 300px;
    height: 300px;
    top: 50%;
    left: 50%;
    transform: translate(10%, 20%);
    background-color: #fa8bff;
    background-image: linear-gradient(
      45deg,
      #fa8bff 0%,
      #2bd2ff 52%,
      #2bff88 90%
    );
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.2);
    animation: pulse 1.6s infinite;
  }
}

@keyframes pulse {
  50% {
    box-shadow: 0 0 0 50px rgba(255, 255, 255, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}

.slide-in-blurred-left {
  -webkit-animation: slide-in-blurred-left 0.6s cubic-bezier(0.23, 1, 0.32, 1)
    both;
  animation: slide-in-blurred-left 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
}

.slide-out-blurred-right {
  -webkit-animation: slide-out-blurred-right 0.45s
    cubic-bezier(0.755, 0.05, 0.855, 0.06) both;
  animation: slide-out-blurred-right 0.45s
    cubic-bezier(0.755, 0.05, 0.855, 0.06) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2023-4-18 23:6:58
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-in-blurred-left
 * ----------------------------------------
 */
@-webkit-keyframes slide-in-blurred-left {
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

/* ----------------------------------------------
 * Generated by Animista on 2023-4-18 23:9:47
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-out-blurred-right
 * ----------------------------------------
 */
@-webkit-keyframes slide-out-blurred-right {
  0% {
    -webkit-transform: translateX(0) scaleY(1) scaleX(1);
    transform: translateX(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(1000px) scaleX(2) scaleY(0.2);
    transform: translateX(1000px) scaleX(2) scaleY(0.2);
    -webkit-transform-origin: 0% 50%;
    transform-origin: 0% 50%;
    -webkit-filter: blur(40px);
    filter: blur(40px);
    opacity: 0;
  }
}

@keyframes slide-out-blurred-right {
  0% {
    -webkit-transform: translateX(0) scaleY(1) scaleX(1);
    transform: translateX(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(1000px) scaleX(2) scaleY(0.2);
    transform: translateX(1000px) scaleX(2) scaleY(0.2);
    -webkit-transform-origin: 0% 50%;
    transform-origin: 0% 50%;
    -webkit-filter: blur(40px);
    filter: blur(40px);
    opacity: 0;
  }
}
</style>
