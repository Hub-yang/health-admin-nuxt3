<script setup lang="ts">
const weather = ref('晴')
const temp = ref('--')
onMounted(() => getWeatherData())
function getWeatherData() {
  getWeather().then((res: unknown) => {
    if ((res as anyKey).code === '200') {
      weather.value = (res as anyKey)?.now?.text || '--'
      temp.value = (res as anyKey)?.now?.temp || '--'
    }
  })
}
</script>

<template>
  <div h-full w-full flex items-center>
    <!-- 晴 -->
    <svg
      v-if="weather === '晴'"
      id="sunGlobe"
      class="svg_qing"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 100 100"
      xml:space="preserve"
    >
      <g id="sunrays">
        <radialGradient
          id="XMLID_4_"
          cx="51.1566"
          cy="21.1667"
          r="4.7267"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.3333" style="stop-color: #fbd25a" />
          <stop offset="0.7581" style="stop-color: #fad45d" />
          <stop offset="1" style="stop-color: #f5e16e" />
        </radialGradient>

        <path
          id="XMLID_3_"
          fill="url(#XMLID_4_)"
          stroke="#6D6E71"
          stroke-width="0.5"
          stroke-miterlimit="10"
          stroke-opacity="7.000000e-002"
          d="M56.1,25.3h-9.7c0,0-1.2-6.1,0-7.4c1.2-1.3,8.9-1,9.7,0C56.8,18.9,56.1,25.3,56.1,25.3z"
        />
        <radialGradient
          id="XMLID_12_"
          cx="71.2457"
          cy="29.7708"
          r="6.0292"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.3333" style="stop-color: #fbd25a" />
          <stop offset="0.7581" style="stop-color: #fad45d" />
          <stop offset="1" style="stop-color: #f5e16e" />
        </radialGradient>

        <path
          id="XMLID_5_"
          fill="url(#XMLID_12_)"
          stroke="#6D6E71"
          stroke-width="0.5"
          stroke-miterlimit="10"
          stroke-opacity="7.000000e-002"
          d="
M71.8,35.8l-6.6-7.1c0,0,3.7-5,5.4-5.1s6.8,5.8,6.6,7.1C77.1,32,71.8,35.8,71.8,35.8z"
        />
        <radialGradient
          id="XMLID_13_"
          cx="79.016"
          cy="49.1667"
          r="4.757"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.3333" style="stop-color: #fbd25a" />
          <stop offset="0.7581" style="stop-color: #fad45d" />
          <stop offset="1" style="stop-color: #f5e16e" />
        </radialGradient>

        <path
          id="XMLID_6_"
          fill="url(#XMLID_13_)"
          stroke="#6D6E71"
          stroke-width="0.5"
          stroke-miterlimit="10"
          stroke-opacity="7.000000e-002"
          d="
M75.1,54.2l-0.3-9.7c0,0,6.1-1.3,7.4-0.2c1.3,1.1,1.2,8.9,0.3,9.7C81.5,54.8,75.1,54.2,75.1,54.2z"
        />
        <radialGradient
          id="XMLID_14_"
          cx="70.2457"
          cy="69.6002"
          r="6.0234"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.3333" style="stop-color: #fbd25a" />
          <stop offset="0.7581" style="stop-color: #fad45d" />
          <stop offset="1" style="stop-color: #f5e16e" />
        </radialGradient>

        <path
          id="XMLID_7_"
          fill="url(#XMLID_14_)"
          stroke="#6D6E71"
          stroke-width="0.5"
          stroke-miterlimit="10"
          stroke-opacity="7.000000e-002"
          d="
M64.3,70.7l6.4-7.2c0,0,5.3,3.2,5.5,4.9c0.2,1.7-5.2,7.3-6.4,7.2C68.5,75.6,64.3,70.7,64.3,70.7z"
        />

        <radialGradient
          id="XMLID_15_"
          cx="50.7987"
          cy="78.0712"
          r="4.7789"
          gradientTransform="matrix(0.998 -6.322496e-002 6.322496e-002 0.998 -4.8396 3.3703)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.3333" style="stop-color: #fbd25a" />
          <stop offset="0.7581" style="stop-color: #fad45d" />
          <stop offset="1" style="stop-color: #f5e16e" />
        </radialGradient>

        <path
          id="XMLID_8_"
          fill="url(#XMLID_15_)"
          stroke="#6D6E71"
          stroke-width="0.5"
          stroke-miterlimit="10"
          stroke-opacity="7.000000e-002"
          d="
M45.8,74.2l9.7-0.2c0,0,1.3,6.1,0.2,7.4c-1.1,1.3-8.9,1.2-9.7,0.2C45.2,80.6,45.8,74.2,45.8,74.2z"
        />
        <radialGradient
          id="XMLID_16_"
          cx="30.5864"
          cy="70.2252"
          r="6.0153"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.3333" style="stop-color: #fbd25a" />
          <stop offset="0.7581" style="stop-color: #fad45d" />
          <stop offset="1" style="stop-color: #f5e16e" />
        </radialGradient>

        <path
          id="XMLID_9_"
          fill="url(#XMLID_16_)"
          stroke="#6D6E71"
          stroke-width="0.5"
          stroke-miterlimit="10"
          stroke-opacity="7.000000e-002"
          d="
M29.3,64.3l7.3,6.3c0,0-3.1,5.4-4.8,5.6s-7.4-5-7.3-6.3C24.6,68.6,29.3,64.3,29.3,64.3z"
        />
        <radialGradient
          id="XMLID_44_"
          cx="21.0871"
          cy="50"
          r="4.8093"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.3333" style="stop-color: #fbd25a" />
          <stop offset="0.7581" style="stop-color: #fad45d" />
          <stop offset="1" style="stop-color: #f5e16e" />
        </radialGradient>

        <path
          id="XMLID_10_"
          fill="url(#XMLID_44_)"
          stroke="#6D6E71"
          stroke-width="0.5"
          stroke-miterlimit="10"
          stroke-opacity="7.000000e-002"
          d="
M24.8,44.8l0.6,9.6c0,0-6,1.5-7.4,0.5c-1.4-1.1-1.5-8.8-0.6-9.6C18.3,44.4,24.8,44.8,24.8,44.8z"
        />
        <radialGradient
          id="XMLID_45_"
          cx="29.9614"
          cy="29.0073"
          r="6.019"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.3333" style="stop-color: #fbd25a" />
          <stop offset="0.7581" style="stop-color: #fad45d" />
          <stop offset="1" style="stop-color: #f5e16e" />
        </radialGradient>

        <path
          id="XMLID_11_"
          fill="url(#XMLID_45_)"
          stroke="#6D6E71"
          stroke-width="0.5"
          stroke-miterlimit="10"
          stroke-opacity="7.000000e-002"
          d="
M36,28.6L28.7,35c0,0-4.9-3.8-4.9-5.6c0-1.7,6.1-6.6,7.3-6.3C32.4,23.3,36,28.6,36,28.6z"
        />
      </g>
      <radialGradient
        id="XMLID_46_"
        cx="50"
        cy="49.1667"
        r="26.8776"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.3333" style="stop-color: #e3bf4c" />
        <stop offset="0.7473" style="stop-color: #f4ce52" />
        <stop offset="1" style="stop-color: #f5e16e" />
      </radialGradient>
      <ellipse
        id="XMLID_1_"
        fill="url(#XMLID_46_)"
        stroke="#58595B"
        stroke-width="0.5"
        stroke-miterlimit="10"
        stroke-opacity="7.000000e-002"
        cx="50"
        cy="49.2"
        rx="27.3"
        ry="26.5"
      />
    </svg>
    <!-- 晴转多云 -->
    <svg
      v-if="weather === '晴转多云'"
      class="svg"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 100 100"
      xml:space="preserve"
    >
      <g id="totalSun">
        <g id="sunRays">
          <radialGradient
            id="XMLID_4_"
            cx="51.1566"
            cy="21.1667"
            r="4.7267"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.3333" style="stop-color: #fbd25a" />
            <stop offset="0.7581" style="stop-color: #fad45d" />
            <stop offset="1" style="stop-color: #f5e16e" />
          </radialGradient>

          <path
            id="XMLID_3_"
            fill="url(#XMLID_4_)"
            stroke="#6D6E71"
            stroke-width="0.5"
            stroke-miterlimit="10"
            stroke-opacity="7.000000e-002"
            d="
M56.1,25.3h-9.7c0,0-1.2-6.1,0-7.4c1.2-1.3,8.9-1,9.7,0C56.8,18.9,56.1,25.3,56.1,25.3z"
          />
          <radialGradient
            id="XMLID_12_"
            cx="71.2457"
            cy="29.7708"
            r="6.0292"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.3333" style="stop-color: #fbd25a" />
            <stop offset="0.7581" style="stop-color: #fad45d" />
            <stop offset="1" style="stop-color: #f5e16e" />
          </radialGradient>

          <path
            id="XMLID_5_"
            fill="url(#XMLID_12_)"
            stroke="#6D6E71"
            stroke-width="0.5"
            stroke-miterlimit="10"
            stroke-opacity="7.000000e-002"
            d="
M71.8,35.8l-6.6-7.1c0,0,3.7-5,5.4-5.1s6.8,5.8,6.6,7.1C77.1,32,71.8,35.8,71.8,35.8z"
          />
          <radialGradient
            id="XMLID_13_"
            cx="79.016"
            cy="49.1667"
            r="4.757"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.3333" style="stop-color: #fbd25a" />
            <stop offset="0.7581" style="stop-color: #fad45d" />
            <stop offset="1" style="stop-color: #f5e16e" />
          </radialGradient>

          <path
            id="XMLID_6_"
            fill="url(#XMLID_13_)"
            stroke="#6D6E71"
            stroke-width="0.5"
            stroke-miterlimit="10"
            stroke-opacity="7.000000e-002"
            d="
M75.1,54.2l-0.3-9.7c0,0,6.1-1.3,7.4-0.2c1.3,1.1,1.2,8.9,0.3,9.7C81.5,54.8,75.1,54.2,75.1,54.2z"
          />
          <radialGradient
            id="XMLID_14_"
            cx="70.2457"
            cy="69.6002"
            r="6.0234"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.3333" style="stop-color: #fbd25a" />
            <stop offset="0.7581" style="stop-color: #fad45d" />
            <stop offset="1" style="stop-color: #f5e16e" />
          </radialGradient>

          <path
            id="XMLID_7_"
            fill="url(#XMLID_14_)"
            stroke="#6D6E71"
            stroke-width="0.5"
            stroke-miterlimit="10"
            stroke-opacity="7.000000e-002"
            d="
M64.3,70.7l6.4-7.2c0,0,5.3,3.2,5.5,4.9c0.2,1.7-5.2,7.3-6.4,7.2C68.5,75.6,64.3,70.7,64.3,70.7z"
          />

          <radialGradient
            id="XMLID_15_"
            cx="50.7987"
            cy="78.0712"
            r="4.7789"
            gradientTransform="matrix(0.998 -6.322496e-002 6.322496e-002 0.998 -4.8396 3.3703)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.3333" style="stop-color: #fbd25a" />
            <stop offset="0.7581" style="stop-color: #fad45d" />
            <stop offset="1" style="stop-color: #f5e16e" />
          </radialGradient>

          <path
            id="XMLID_8_"
            fill="url(#XMLID_15_)"
            stroke="#6D6E71"
            stroke-width="0.5"
            stroke-miterlimit="10"
            stroke-opacity="7.000000e-002"
            d="
M45.8,74.2l9.7-0.2c0,0,1.3,6.1,0.2,7.4c-1.1,1.3-8.9,1.2-9.7,0.2C45.2,80.6,45.8,74.2,45.8,74.2z"
          />
          <radialGradient
            id="XMLID_16_"
            cx="30.5864"
            cy="70.2252"
            r="6.0153"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.3333" style="stop-color: #fbd25a" />
            <stop offset="0.7581" style="stop-color: #fad45d" />
            <stop offset="1" style="stop-color: #f5e16e" />
          </radialGradient>

          <path
            id="XMLID_9_"
            fill="url(#XMLID_16_)"
            stroke="#6D6E71"
            stroke-width="0.5"
            stroke-miterlimit="10"
            stroke-opacity="7.000000e-002"
            d="
M29.3,64.3l7.3,6.3c0,0-3.1,5.4-4.8,5.6s-7.4-5-7.3-6.3C24.6,68.6,29.3,64.3,29.3,64.3z"
          />
          <radialGradient
            id="XMLID_44_"
            cx="21.0871"
            cy="50"
            r="4.8093"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.3333" style="stop-color: #fbd25a" />
            <stop offset="0.7581" style="stop-color: #fad45d" />
            <stop offset="1" style="stop-color: #f5e16e" />
          </radialGradient>

          <path
            id="XMLID_10_"
            fill="url(#XMLID_44_)"
            stroke="#6D6E71"
            stroke-width="0.5"
            stroke-miterlimit="10"
            stroke-opacity="7.000000e-002"
            d="
M24.8,44.8l0.6,9.6c0,0-6,1.5-7.4,0.5c-1.4-1.1-1.5-8.8-0.6-9.6C18.3,44.4,24.8,44.8,24.8,44.8z"
          />
          <radialGradient
            id="XMLID_45_"
            cx="29.9614"
            cy="29.0073"
            r="6.019"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.3333" style="stop-color: #fbd25a" />
            <stop offset="0.7581" style="stop-color: #fad45d" />
            <stop offset="1" style="stop-color: #f5e16e" />
          </radialGradient>

          <path
            id="XMLID_11_"
            fill="url(#XMLID_45_)"
            stroke="#6D6E71"
            stroke-width="0.5"
            stroke-miterlimit="10"
            stroke-opacity="7.000000e-002"
            d="
M36,28.6L28.7,35c0,0-4.9-3.8-4.9-5.6c0-1.7,6.1-6.6,7.3-6.3C32.4,23.3,36,28.6,36,28.6z"
          />
          <radialGradient
            id="XMLID_46_"
            cx="50"
            cy="49.1667"
            r="26.8776"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.3333" style="stop-color: #e3bf4c" />
            <stop offset="0.7473" style="stop-color: #f4ce52" />
            <stop offset="1" style="stop-color: #f5e16e" />
          </radialGradient>
          <ellipse
            id="XMLID_1_"
            fill="url(#XMLID_46_)"
            stroke="#58595B"
            stroke-width="0.5"
            stroke-miterlimit="10"
            stroke-opacity="7.000000e-002"
            cx="50"
            cy="49.2"
            rx="27.3"
            ry="26.5"
          />
        </g>
      </g>
      <g id="smallcloud">
        <path
          id="XMLID_3_"
          fill="#5BCAEB"
          stroke="#6D6E71"
          stroke-width="0.5"
          stroke-miterlimit="10"
          stroke-opacity="8.000000e-002"
          d="
M19,39.9c0,0,5.7,1.7,7-1.2c5.4,3,9.1,0.6,11.5,0c0.5,2.3,6.1,1.2,6.1,1.2s10.7-2.6,9.9-11.7c0,0-1.9-12.4-14-10
c0,0-9.7-9.5-18.6,2.5c0,0-9-0.5-10.3,10C10.6,30.7,10.9,37.8,19,39.9z"
        />
      </g>
      <g id="bigCloud">
        <path
          id="XMLID_9_"
          fill="#F4F4F4"
          stroke="#515251"
          stroke-width="0.5"
          stroke-miterlimit="10"
          stroke-opacity="8.000000e-002"
          d="
M22.3,65.5c0,0-8.9-2.9-9.3-12.8s10-11.3,11.4-10.1c0,0,2.5-8.4,10.1-8.6c0,0,3.5-13.4,17.8-13.1c0,0,15.6-0.8,17.9,16.4
c0,0,12.9-1,13.4,15.1c0,0-1.4,10.9-11.9,13.1c0,0-12,2-13.8-2.3c-0.2,2.1-15,6-19.6,0C33.8,68.4,22.3,65.5,22.3,65.5z"
        />
      </g>
    </svg>
    <!-- 晴转雨 -->
    <svg
      v-if="weather === '晴转雨'"
      class="svg"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 100 100"
      xml:space="preserve"
    >
      <g id="totalSun">
        <g id="sunRays">
          <radialGradient
            id="XMLID_4_"
            cx="51.1566"
            cy="21.1667"
            r="4.7267"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.3333" style="stop-color: #fbd25a" />
            <stop offset="0.7581" style="stop-color: #fad45d" />
            <stop offset="1" style="stop-color: #f5e16e" />
          </radialGradient>

          <path
            id="XMLID_3_"
            fill="url(#XMLID_4_)"
            stroke="#6D6E71"
            stroke-width="0.5"
            stroke-miterlimit="10"
            stroke-opacity="7.000000e-002"
            d="
M56.1,25.3h-9.7c0,0-1.2-6.1,0-7.4c1.2-1.3,8.9-1,9.7,0C56.8,18.9,56.1,25.3,56.1,25.3z"
          />
          <radialGradient
            id="XMLID_12_"
            cx="71.2457"
            cy="29.7708"
            r="6.0292"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.3333" style="stop-color: #fbd25a" />
            <stop offset="0.7581" style="stop-color: #fad45d" />
            <stop offset="1" style="stop-color: #f5e16e" />
          </radialGradient>

          <path
            id="XMLID_5_"
            fill="url(#XMLID_12_)"
            stroke="#6D6E71"
            stroke-width="0.5"
            stroke-miterlimit="10"
            stroke-opacity="7.000000e-002"
            d="
M71.8,35.8l-6.6-7.1c0,0,3.7-5,5.4-5.1s6.8,5.8,6.6,7.1C77.1,32,71.8,35.8,71.8,35.8z"
          />
          <radialGradient
            id="XMLID_13_"
            cx="79.016"
            cy="49.1667"
            r="4.757"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.3333" style="stop-color: #fbd25a" />
            <stop offset="0.7581" style="stop-color: #fad45d" />
            <stop offset="1" style="stop-color: #f5e16e" />
          </radialGradient>

          <path
            id="XMLID_6_"
            fill="url(#XMLID_13_)"
            stroke="#6D6E71"
            stroke-width="0.5"
            stroke-miterlimit="10"
            stroke-opacity="7.000000e-002"
            d="
M75.1,54.2l-0.3-9.7c0,0,6.1-1.3,7.4-0.2c1.3,1.1,1.2,8.9,0.3,9.7C81.5,54.8,75.1,54.2,75.1,54.2z"
          />
          <radialGradient
            id="XMLID_14_"
            cx="70.2457"
            cy="69.6002"
            r="6.0234"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.3333" style="stop-color: #fbd25a" />
            <stop offset="0.7581" style="stop-color: #fad45d" />
            <stop offset="1" style="stop-color: #f5e16e" />
          </radialGradient>

          <path
            id="XMLID_7_"
            fill="url(#XMLID_14_)"
            stroke="#6D6E71"
            stroke-width="0.5"
            stroke-miterlimit="10"
            stroke-opacity="7.000000e-002"
            d="
M64.3,70.7l6.4-7.2c0,0,5.3,3.2,5.5,4.9c0.2,1.7-5.2,7.3-6.4,7.2C68.5,75.6,64.3,70.7,64.3,70.7z"
          />

          <radialGradient
            id="XMLID_15_"
            cx="50.7987"
            cy="78.0712"
            r="4.7789"
            gradientTransform="matrix(0.998 -6.322496e-002 6.322496e-002 0.998 -4.8396 3.3703)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.3333" style="stop-color: #fbd25a" />
            <stop offset="0.7581" style="stop-color: #fad45d" />
            <stop offset="1" style="stop-color: #f5e16e" />
          </radialGradient>

          <path
            id="XMLID_8_"
            fill="url(#XMLID_15_)"
            stroke="#6D6E71"
            stroke-width="0.5"
            stroke-miterlimit="10"
            stroke-opacity="7.000000e-002"
            d="
M45.8,74.2l9.7-0.2c0,0,1.3,6.1,0.2,7.4c-1.1,1.3-8.9,1.2-9.7,0.2C45.2,80.6,45.8,74.2,45.8,74.2z"
          />
          <radialGradient
            id="XMLID_16_"
            cx="30.5864"
            cy="70.2252"
            r="6.0153"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.3333" style="stop-color: #fbd25a" />
            <stop offset="0.7581" style="stop-color: #fad45d" />
            <stop offset="1" style="stop-color: #f5e16e" />
          </radialGradient>

          <path
            id="XMLID_9_"
            fill="url(#XMLID_16_)"
            stroke="#6D6E71"
            stroke-width="0.5"
            stroke-miterlimit="10"
            stroke-opacity="7.000000e-002"
            d="
M29.3,64.3l7.3,6.3c0,0-3.1,5.4-4.8,5.6s-7.4-5-7.3-6.3C24.6,68.6,29.3,64.3,29.3,64.3z"
          />
          <radialGradient
            id="XMLID_44_"
            cx="21.0871"
            cy="50"
            r="4.8093"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.3333" style="stop-color: #fbd25a" />
            <stop offset="0.7581" style="stop-color: #fad45d" />
            <stop offset="1" style="stop-color: #f5e16e" />
          </radialGradient>

          <path
            id="XMLID_10_"
            fill="url(#XMLID_44_)"
            stroke="#6D6E71"
            stroke-width="0.5"
            stroke-miterlimit="10"
            stroke-opacity="7.000000e-002"
            d="
M24.8,44.8l0.6,9.6c0,0-6,1.5-7.4,0.5c-1.4-1.1-1.5-8.8-0.6-9.6C18.3,44.4,24.8,44.8,24.8,44.8z"
          />
          <radialGradient
            id="XMLID_45_"
            cx="29.9614"
            cy="29.0073"
            r="6.019"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.3333" style="stop-color: #fbd25a" />
            <stop offset="0.7581" style="stop-color: #fad45d" />
            <stop offset="1" style="stop-color: #f5e16e" />
          </radialGradient>

          <path
            id="XMLID_11_"
            fill="url(#XMLID_45_)"
            stroke="#6D6E71"
            stroke-width="0.5"
            stroke-miterlimit="10"
            stroke-opacity="7.000000e-002"
            d="
M36,28.6L28.7,35c0,0-4.9-3.8-4.9-5.6c0-1.7,6.1-6.6,7.3-6.3C32.4,23.3,36,28.6,36,28.6z"
          />
          <radialGradient
            id="XMLID_46_"
            cx="50"
            cy="49.1667"
            r="26.8776"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.3333" style="stop-color: #e3bf4c" />
            <stop offset="0.7473" style="stop-color: #f4ce52" />
            <stop offset="1" style="stop-color: #f5e16e" />
          </radialGradient>
          <ellipse
            id="XMLID_1_"
            fill="url(#XMLID_46_)"
            stroke="#58595B"
            stroke-width="0.5"
            stroke-miterlimit="10"
            stroke-opacity="7.000000e-002"
            cx="50"
            cy="49.2"
            rx="27.3"
            ry="26.5"
          />
        </g>
      </g>
      <g id="rain">
        <path
          id="drop1"
          class="raindrop"
          fill="url(#XMLID_17_)"
          stroke="#000000"
          stroke-width="0.5"
          stroke-miterlimit="10"
          stroke-opacity="0.5"
          d="
M33.8,67.2c0,0-10.4,14.3,0,14.3C44.4,81.5,33.8,67.2,33.8,67.2z"
        />
        <linearGradient
          id="XMLID_17_"
          gradientUnits="userSpaceOnUse"
          x1="43.5804"
          y1="74.1052"
          x2="52.9097"
          y2="74.1052"
        >
          <stop offset="0.4718" style="stop-color: #5ccaeb" />
          <stop offset="0.5339" style="stop-color: #51b1cd" />
        </linearGradient>
        <path
          id="drop2"
          class="raindrop"
          fill="url(#XMLID_17_)"
          stroke="#000000"
          stroke-width="0.5"
          stroke-miterlimit="10"
          stroke-opacity="0.5"
          d="
M48.2,67c0,0-10.4,14.3,0,14.3C58.8,81.3,48.2,67,48.2,67z"
        />
        <path
          id="drop3"
          class="raindrop"
          fill="url(#XMLID_17_)"
          stroke="#000000"
          stroke-width="0.5"
          stroke-miterlimit="10"
          stroke-opacity="0.5"
          d="
M62.4,67c0,0-10.4,14.3,0,14.3C73,81.3,62.4,67,62.4,67z"
        />
      </g>
      <g id="bigCloud">
        <path
          id="XMLID_1_"
          fill="#F4F4F4"
          stroke="#515251"
          stroke-width="0.5"
          stroke-miterlimit="10"
          stroke-opacity="8.000000e-002"
          d="
M22.3,65.5c0,0-8.9-2.9-9.3-12.8s10-11.3,11.4-10.1c0,0,2.5-8.4,10.1-8.6c0,0,3.5-13.4,17.8-13.1c0,0,15.6-0.8,17.9,16.4
c0,0,12.9-1,13.4,15.1c0,0-1.4,10.9-11.9,13.1c0,0-12,2-13.8-2.3c-0.2,2.1-15,6-19.6,0C33.8,68.4,22.3,65.5,22.3,65.5z"
        />
      </g>
    </svg>
    <!-- 阵雨 -->
    <svg
      v-if="weather === '阵雨'"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 100 100"
      xml:space="preserve"
    >
      <g id="thunder">
        <polygon
          fill="#FAC73F"
          points="45.6,61.5 39.4,77.6 47.6,77.4 43.1,91.9 44.3,91.9 59.3,73.5 51.4,73.4 58.7,61.5"
        />
      </g>
      <g id="smallcloud">
        <path
          id="XMLID_3_"
          fill="#F4F4F4"
          stroke="#6D6E71"
          stroke-width="0.5"
          stroke-miterlimit="10"
          stroke-opacity="8.000000e-002"
          d="
M19,39.9c0,0,5.7,1.7,7-1.2c5.4,3,9.1,0.6,11.5,0c0.5,2.3,6.1,1.2,6.1,1.2s10.7-2.6,9.9-11.7c0,0-1.9-12.4-14-10
c0,0-9.7-9.5-18.6,2.5c0,0-9-0.5-10.3,10C10.6,30.7,10.9,37.8,19,39.9z"
        />
      </g>
      <g id="bigClouds">
        <path
          id="XMLID_16_"
          fill="#F4F4F4"
          stroke="#515251"
          stroke-width="0.5"
          stroke-miterlimit="10"
          stroke-opacity="8.000000e-002"
          d="
M22.3,65.5c0,0-8.9-2.9-9.3-12.8s10-11.3,11.4-10.1c0,0,2.5-8.4,10.1-8.6c0,0,3.5-13.4,17.8-13.1c0,0,15.6-0.8,17.9,16.4
c0,0,12.9-1,13.4,15.1c0,0-1.4,10.9-11.9,13.1c0,0-12,2-13.8-2.3c-0.2,2.1-15,6-19.6,0C33.8,68.4,22.3,65.5,22.3,65.5z"
        />
      </g>
    </svg>
    <!-- 多云 -->
    <svg
      v-if="weather === '多云' || weather === '扬沙'"
      class="svg_duoyun"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 100 100"
      xml:space="preserve"
    >
      <g id="smallcloud">
        <path
          id="XMLID_3_"
          fill="#5BCAEB"
          stroke="#6D6E71"
          stroke-width="0.5"
          stroke-miterlimit="10"
          stroke-opacity="8.000000e-002"
          d="
M19,39.9c0,0,5.7,1.7,7-1.2c5.4,3,9.1,0.6,11.5,0c0.5,2.3,6.1,1.2,6.1,1.2s10.7-2.6,9.9-11.7c0,0-1.9-12.4-14-10
c0,0-9.7-9.5-18.6,2.5c0,0-9-0.5-10.3,10C10.6,30.7,10.9,37.8,19,39.9z"
        />
      </g>
      <g id="bigCloud">
        <path
          id="XMLID_1_"
          fill="#F4F4F4"
          stroke="#515251"
          stroke-width="0.5"
          stroke-miterlimit="10"
          stroke-opacity="8.000000e-002"
          d="
M22.3,65.5c0,0-8.9-2.9-9.3-12.8s10-11.3,11.4-10.1c0,0,2.5-8.4,10.1-8.6c0,0,3.5-13.4,17.8-13.1c0,0,15.6-0.8,17.9,16.4
c0,0,12.9-1,13.4,15.1c0,0-1.4,10.9-11.9,13.1c0,0-12,2-13.8-2.3c-0.2,2.1-15,6-19.6,0C33.8,68.4,22.3,65.5,22.3,65.5z"
        />
      </g>
    </svg>
    <!-- 雨 -->
    <svg
      v-if="weather === '大雨'"
      class="svg"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 100 100"
      xml:space="preserve"
    >
      <g id="rain">
        <path
          id="drop1"
          class="raindrop"
          fill="url(#XMLID_19_)"
          stroke="#000000"
          stroke-width="0.5"
          stroke-miterlimit="10"
          stroke-opacity="0.5"
          d="
M33.8,67.2c0,0-10.4,14.3,0,14.3C44.4,81.5,33.8,67.2,33.8,67.2z"
        />
        <path
          id="drop2"
          class="raindrop"
          fill="url(#XMLID_19_)"
          stroke="#000000"
          stroke-width="0.5"
          stroke-miterlimit="10"
          stroke-opacity="0.5"
          d="
M48.2,67c0,0-10.4,14.3,0,14.3C58.8,81.3,48.2,67,48.2,67z"
        />
        <linearGradient
          id="XMLID_19_"
          gradientUnits="userSpaceOnUse"
          x1="57.7887"
          y1="74.1052"
          x2="67.118"
          y2="74.1052"
        >
          <stop offset="0.4718" style="stop-color: #5ccaeb" />
          <stop offset="0.5339" style="stop-color: #51b1cd" />
        </linearGradient>
        <path
          id="drop3"
          class="raindrop"
          fill="url(#XMLID_19_)"
          stroke="#000000"
          stroke-width="0.5"
          stroke-miterlimit="10"
          stroke-opacity="0.5"
          d="
M62.4,67c0,0-10.4,14.3,0,14.3C73,81.3,62.4,67,62.4,67z"
        />
      </g>
      <g id="bigCloudRain">
        <path
          id="XMLID_1_"
          fill="#F4F4F4"
          stroke="#515251"
          stroke-width="0.5"
          stroke-miterlimit="10"
          stroke-opacity="8.000000e-002"
          d="
M22.3,65.5c0,0-8.9-2.9-9.3-12.8s10-11.3,11.4-10.1c0,0,2.5-8.4,10.1-8.6c0,0,3.5-13.4,17.8-13.1c0,0,15.6-0.8,17.9,16.4
c0,0,12.9-1,13.4,15.1c0,0-1.4,10.9-11.9,13.1c0,0-12,2-13.8-2.3c-0.2,2.1-15,6-19.6,0C33.8,68.4,22.3,65.5,22.3,65.5z"
        />
      </g>
    </svg>
    <!-- 雪 -->
    <svg
      v-if="weather === '雪'"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 100 100"
      xml:space="preserve"
    >
      <g id="snowflakes">
        <g id="flake3">
          <path
            fill="#5BCAEB"
            d="M72,78.1c0.6,0.6,0.6,1.6,0,2.2l0,0c-0.6,0.6-1.6,0.6-2.2,0l-8.7-8.7C60.5,71,60.3,70,61,69.3
s1.7-0.4,2.3,0.2L72,78.1z"
          />
          <path
            fill="#5BCAEB"
            d="M63.1,80.3c-0.6,0.6-1.6,0.6-2.2,0l0,0c-0.6-0.6-0.6-1.6,0-2.2l8.7-8.7c0.6-0.6,1.7-0.8,2.3-0.2
c0.7,0.7,0.4,1.7-0.2,2.3L63.1,80.3z"
          />
          <path
            fill="#5BCAEB"
            d="M60.2,76.3c-0.9,0-1.5-0.7-1.5-1.5l0,0c0-0.9,0.7-1.5,1.5-1.5h12.3c0.9,0,1.8,0.6,1.8,1.5
c0,0.9-0.9,1.5-1.8,1.5H60.2z"
          />
          <path
            id="XMLID_8_"
            fill="#5BCAEB"
            d="M68,81c0,0.9-0.7,1.5-1.5,1.5l0,0c-0.9,0-1.5-0.7-1.5-1.5V68.8c0-0.9,0.6-1.8,1.5-1.8
c0.9,0,1.5,0.9,1.5,1.8V81z"
          />
        </g>
        <g id="flake2">
          <path
            fill="#5BCAEB"
            d="M53.5,78.1c0.6,0.6,0.6,1.6,0,2.2l0,0c-0.6,0.6-1.6,0.6-2.2,0l-8.7-8.7C42,71,41.8,70,42.5,69.3
c0.7-0.7,1.7-0.4,2.3,0.2L53.5,78.1z"
          />
          <path
            fill="#5BCAEB"
            d="M44.6,80.3c-0.6,0.6-1.6,0.6-2.2,0l0,0c-0.6-0.6-0.6-1.6,0-2.2l8.7-8.7c0.6-0.6,1.7-0.8,2.3-0.2
c0.7,0.7,0.4,1.7-0.2,2.3L44.6,80.3z"
          />
          <path
            fill="#5BCAEB"
            d="M41.7,76.3c-0.9,0-1.5-0.7-1.5-1.5l0,0c0-0.9,0.7-1.5,1.5-1.5H54c0.9,0,1.8,0.6,1.8,1.5
c0,0.9-0.9,1.5-1.8,1.5H41.7z"
          />
          <path
            id="XMLID_17_"
            fill="#5BCAEB"
            d="M49.5,81c0,0.9-0.7,1.5-1.5,1.5l0,0c-0.9,0-1.5-0.7-1.5-1.5V68.8c0-0.9,0.6-1.8,1.5-1.8
c0.9,0,1.5,0.9,1.5,1.8V81z"
          />
        </g>
        <g id="flake1">
          <path
            fill="#5BCAEB"
            d="M35.1,78.1c0.6,0.6,0.6,1.6,0,2.2l0,0c-0.6,0.6-1.6,0.6-2.2,0l-8.7-8.7c-0.6-0.6-0.8-1.7-0.2-2.3
c0.7-0.7,1.7-0.4,2.3,0.2L35.1,78.1z"
          />
          <path
            fill="#5BCAEB"
            d="M26.3,80.3c-0.6,0.6-1.6,0.6-2.2,0l0,0c-0.6-0.6-0.6-1.6,0-2.2l8.7-8.7c0.6-0.6,1.7-0.8,2.3-0.2
c0.7,0.7,0.4,1.7-0.2,2.3L26.3,80.3z"
          />
          <path
            fill="#5BCAEB"
            d="M23.4,76.3c-0.9,0-1.5-0.7-1.5-1.5l0,0c0-0.9,0.7-1.5,1.5-1.5h12.3c0.9,0,1.8,0.6,1.8,1.5
c0,0.9-0.9,1.5-1.8,1.5H23.4z"
          />
          <path
            fill="#5BCAEB"
            d="M31.1,81c0,0.9-0.7,1.5-1.5,1.5l0,0c-0.9,0-1.5-0.7-1.5-1.5V68.8c0-0.9,0.6-1.8,1.5-1.8s1.5,0.9,1.5,1.8
V81z"
          />
        </g>
      </g>
      <g id="bigCloudSnow">
        <path
          id="XMLID_1_"
          fill="#F4F4F4"
          stroke="#515251"
          stroke-width="0.5"
          stroke-miterlimit="10"
          stroke-opacity="8.000000e-002"
          d="
M22.3,65.5c0,0-8.9-2.9-9.3-12.8s10-11.3,11.4-10.1c0,0,2.5-8.4,10.1-8.6c0,0,3.5-13.4,17.8-13.1c0,0,15.6-0.8,17.9,16.4
c0,0,12.9-1,13.4,15.1c0,0-1.4,10.9-11.9,13.1c0,0-12,2-13.8-2.3c-0.2,2.1-15,6-19.6,0C33.8,68.4,22.3,65.5,22.3,65.5z"
        />
      </g>
    </svg>
    <!-- 雾 -->
    <svg
      v-if="weather === '雾' || weather === '霾'"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 100 100"
      xml:space="preserve"
    >
      <g id="bigCloud">
        <path
          id="XMLID_1_"
          fill="#F4F4F4"
          stroke="#515251"
          stroke-width="0.5"
          stroke-miterlimit="10"
          stroke-opacity="8.000000e-002"
          d="
M22.3,65.5c0,0-8.9-2.9-9.3-12.8s10-11.3,11.4-10.1c0,0,2.5-8.4,10.1-8.6c0,0,3.5-13.4,17.8-13.1c0,0,15.6-0.8,17.9,16.4
c0,0,12.9-1,13.4,15.1c0,0-1.4,10.9-11.9,13.1c0,0-12,2-13.8-2.3c-0.2,2.1-15,6-19.6,0C33.8,68.4,22.3,65.5,22.3,65.5z"
        />
      </g>
      <g id="mistrays">
        <path
          id="ray1"
          fill="none"
          stroke="#5BCAEB"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-miterlimit="10"
          d="M46,56.3H20.6"
        />
        <path
          id="ray3"
          fill="none"
          stroke="#5BCAEB"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-miterlimit="10"
          d="M49.6,75.7H22.8"
        />
        <path
          id="ray4"
          fill="none"
          stroke="#5BCAEB"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-miterlimit="10"
          d="M75.1,75.7H57"
        />
        <path
          id="ray5"
          fill="none"
          stroke="#5BCAEB"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-miterlimit="10"
          d="M66.1,65.6H49.2"
        />
        <path
          id="ray6"
          fill="none"
          stroke="#5BCAEB"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-miterlimit="10"
          d="M28.1,65h13.1"
        />
        <path
          id="ray7"
          fill="none"
          stroke="#5BCAEB"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-miterlimit="10"
          d="M67,56.3h12.3"
        />
        <path
          id="ray2"
          fill="none"
          stroke="#5BCAEB"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-miterlimit="10"
          d="M53.9,56.3H58"
        />
      </g>
    </svg>
    <!-- 阴 -->
    <svg
      v-if="weather === '阴'"
      class="svg_yin"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 100 100"
      xml:space="preserve"
    >
      <g id="bigCloudRain">
        <path
          id="XMLID_1_"
          fill="#F4F4F4"
          stroke="#515251"
          stroke-width="0.5"
          stroke-miterlimit="10"
          stroke-opacity="8.000000e-002"
          d="
M22.3,65.5c0,0-8.9-2.9-9.3-12.8s10-11.3,11.4-10.1c0,0,2.5-8.4,10.1-8.6c0,0,3.5-13.4,17.8-13.1c0,0,15.6-0.8,17.9,16.4
c0,0,12.9-1,13.4,15.1c0,0-1.4,10.9-11.9,13.1c0,0-12,2-13.8-2.3c-0.2,2.1-15,6-19.6,0C33.8,68.4,22.3,65.5,22.3,65.5z"
        />
      </g>
    </svg>
    <div text-left text-3xl text-white font-bold>
      {{ weather }} | {{ temp }}℃
    </div>
  </div>
</template>

<style scoped>
svg {
  width: 100px;
}

.svg_duoyun,
.svg_yin {
  margin-top: 12px;
}

#smallcloud path {
  will-change: transform;
  -webkit-animation: bgCloud 6s linear infinite;
  animation: bgCloud 6s linear infinite;
}

#bigCloudRain path {
  -webkit-animation: cloud-color 8s ease infinite;
  animation: cloud-color 8s ease infinite;
}

#drop1 {
  -webkit-animation: droplet 1s linear infinite;
  animation: droplet 1s linear infinite;
}

#drop2 {
  -webkit-animation: droplet 1s linear infinite 0.4s;
  animation: droplet 1s linear infinite 0.4s;
}

#drop3 {
  -webkit-animation: droplet 1s linear infinite 0.8s;
  animation: droplet 1s linear infinite 0.8s;
}

#flake3 {
  -webkit-animation: snow-flakes 3s linear infinite;
  animation: snow-flakes 3s linear infinite;
}

#flake1 {
  -webkit-animation: snow-flakes 3s linear infinite 1.2s;
  animation: snow-flakes 3s linear infinite 1.2s;
}

#flake2 {
  -webkit-animation: snow-flakes 3s linear infinite 2s;
  animation: snow-flakes 3s linear infinite 2s;
}

#mistrays path {
  opacity: 1;
}

#mistrays #ray2 {
  stroke-dashoffset: 5;
  stroke-dasharray: 5;
  -webkit-animation: dashXs 9s linear forwards infinite;
  animation: dashXs 9s linear forwards infinite;
}

#mistrays #ray4,
#ray5 {
  stroke-dashoffset: 20;
  stroke-dasharray: 20;
  -webkit-animation: dashM 9s linear forwards infinite;
  animation: dashM 9s linear forwards infinite;
}

#mistrays #ray6,
#ray7 {
  stroke-dashoffset: 14;
  stroke-dasharray: 14;
  -webkit-animation: dashS 9s linear forwards infinite;
  animation: dashS 9s linear forwards infinite;
}

#mistrays #ray1,
#ray3 {
  stroke-dashoffset: 27;
  stroke-dasharray: 27;
  -webkit-animation: dashL 9s linear forwards infinite;
  animation: dashL 9s linear forwards infinite;
}
#sunRays,
#sunrays,
#SunGlobe {
  transform-origin: 50% 50%;
  -webkit-animation: spin 20s linear infinite;
  animation: spin 20s linear infinite;
}

#totalSun {
  transform: translate(15px, -12px) scale(0.9);
}

#thunder {
  -webkit-animation: thunder-bolt 6s linear infinite;
  animation: thunder-bolt 6s linear infinite;
}

#bigClouds path {
  -webkit-animation: thunder-cloud 6s ease infinite;
  animation: thunder-cloud 6s ease infinite;
}

@-webkit-keyframes bgCloud {
  0% {
    transform: translate(0px, 0px);
    opacity: 0;
  }

  30% {
    transform: translate(9px, 0px);
    opacity: 1;
  }

  70% {
    transform: translate(27px, 0px);
    opacity: 1;
  }

  100% {
    transform: translate(45px, 0px);
    opacity: 0;
  }
}

@keyframes bgCloud {
  0% {
    transform: translate(0px, 0px);
    opacity: 0;
  }

  30% {
    transform: translate(9px, 0px);
    opacity: 1;
  }

  70% {
    transform: translate(27px, 0px);
    opacity: 1;
  }

  100% {
    transform: translate(45px, 0px);
    opacity: 0;
  }
}

@-webkit-keyframes droplet {
  0% {
    transform: translate(0px, -35px);
    opacity: 0;
  }

  30% {
    transform: translate(0px, -18px);
    opacity: 1;
  }

  80% {
    transform: translate(0px, 8px);
    opacity: 1;
  }

  100% {
    transform: translate(0px, 20px);
    opacity: 0;
  }
}

@keyframes droplet {
  0% {
    transform: translate(0px, -35px);
    opacity: 0;
  }

  30% {
    transform: translate(0px, -18px);
    opacity: 1;
  }

  80% {
    transform: translate(0px, 8px);
    opacity: 1;
  }

  100% {
    transform: translate(0px, 20px);
    opacity: 0;
  }
}

@-webkit-keyframes cloud-color {
  0% {
    fill: #f4f4f4;
  }

  50% {
    fill: #c4c4c4;
  }

  100% {
    fill: #f4f4f4;
  }
}

@keyframes cloud-color {
  0% {
    fill: #f4f4f4;
  }

  50% {
    fill: #c4c4c4;
  }

  100% {
    fill: #f4f4f4;
  }
}

@-webkit-keyframes snow-flakes {
  0% {
    transform: translate(0px, -35px);
    opacity: 0;
  }

  30% {
    transform: translate(-10px, -18px);
    opacity: 1;
  }

  40% {
    transform: translate(0px, -8px);
    opacity: 1;
  }

  60% {
    transform: translate(10px, 0px);
    opacity: 1;
  }

  80% {
    transform: translate(0px, 8px);
    opacity: 1;
  }

  100% {
    transform: translate(10px, 20px);
    opacity: 0;
  }
}

@keyframes snow-flakes {
  0% {
    transform: translate(0px, -35px);
    opacity: 0;
  }

  30% {
    transform: translate(-10px, -18px);
    opacity: 1;
  }

  40% {
    transform: translate(0px, -8px);
    opacity: 1;
  }

  60% {
    transform: translate(10px, 0px);
    opacity: 1;
  }

  80% {
    transform: translate(0px, 8px);
    opacity: 1;
  }

  100% {
    transform: translate(10px, 20px);
    opacity: 0;
  }
}

@-webkit-keyframes dashXs {
  0% {
    opacity: 0;
    stroke-dashoffset: 5;
  }

  50% {
    opacity: 1;
    stroke-dashoffset: 0;
  }

  100% {
    opacity: 0;
    stroke-dashoffset: -5;
  }
}

@keyframes dashXs {
  0% {
    opacity: 0;
    stroke-dashoffset: 5;
  }

  50% {
    opacity: 1;
    stroke-dashoffset: 0;
  }

  100% {
    opacity: 0;
    stroke-dashoffset: -5;
  }
}

@-webkit-keyframes dashS {
  0% {
    opacity: 0;
    stroke-dashoffset: 14;
  }

  50% {
    opacity: 1;
    stroke-dashoffset: 0;
  }

  100% {
    opacity: 0;
    stroke-dashoffset: -14;
  }
}

@keyframes dashS {
  0% {
    opacity: 0;
    stroke-dashoffset: 14;
  }

  50% {
    opacity: 1;
    stroke-dashoffset: 0;
  }

  100% {
    opacity: 0;
    stroke-dashoffset: -14;
  }
}

@-webkit-keyframes dashM {
  0% {
    opacity: 0;
    stroke-dashoffset: -20;
  }

  50% {
    opacity: 1;
    stroke-dashoffset: 0;
  }

  100% {
    opacity: 0;
    stroke-dashoffset: 20;
  }
}

@keyframes dashM {
  0% {
    opacity: 0;
    stroke-dashoffset: -20;
  }

  50% {
    opacity: 1;
    stroke-dashoffset: 0;
  }

  100% {
    opacity: 0;
    stroke-dashoffset: 20;
  }
}

@-webkit-keyframes dashL {
  0% {
    opacity: 0;
    stroke-dashoffset: -27;
  }

  50% {
    opacity: 1;
    stroke-dashoffset: 0;
  }

  100% {
    opacity: 0;
    stroke-dashoffset: 27;
  }
}

@keyframes dashL {
  0% {
    opacity: 0;
    stroke-dashoffset: -27;
  }

  50% {
    opacity: 1;
    stroke-dashoffset: 0;
  }

  100% {
    opacity: 0;
    stroke-dashoffset: 27;
  }
}

@-webkit-keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes thunder-cloud {
  100%,
  0% {
    fill: #666;
  }

  20% {
    fill: #555;
  }

  21.5% {
    fill: #999;
  }

  25% {
    fill: #555;
  }

  27.5% {
    fill: #999;
  }

  30% {
    fill: #555;
  }

  40% {
    fill: #999;
  }

  90% {
    fill: #555;
  }
}

@keyframes thunder-cloud {
  100%,
  0% {
    fill: #666;
  }

  20% {
    fill: #555;
  }

  21.5% {
    fill: #999;
  }

  25% {
    fill: #555;
  }

  27.5% {
    fill: #999;
  }

  30% {
    fill: #555;
  }

  40% {
    fill: #999;
  }

  90% {
    fill: #555;
  }
}

@-webkit-keyframes thunder-bolt {
  100%,
  0% {
    opacity: 0;
  }

  23% {
    opacity: 0;
  }

  25% {
    opacity: 1;
  }

  30% {
    opacity: 1;
  }

  35% {
    opacity: 0;
  }
}

@keyframes thunder-bolt {
  100%,
  0% {
    opacity: 0;
  }

  23% {
    opacity: 0;
  }

  25% {
    opacity: 1;
  }

  30% {
    opacity: 1;
  }

  35% {
    opacity: 0;
  }
}
</style>
