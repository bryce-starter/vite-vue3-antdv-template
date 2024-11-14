<script lang="ts" setup>
import { sleep } from '@bryce-loskie/utils'
import { samplePoints } from '~/constants'

const selectedSamplePoint = ref('')

const samplePointList = samplePoints.map(item => ({
  label: item,
  value: item,
}))

const indexRef = useLocalStorage('index', 19)

const updateSelectedSamplePoint = () => {
  selectedSamplePoint.value = samplePointList[indexRef.value].value
}

updateSelectedSamplePoint()

const handlePrint = async () => {
  window.print()
}

const previous = () => {
  indexRef.value--
  updateSelectedSamplePoint()
}

const next = () => {
  indexRef.value++
  updateSelectedSamplePoint()
}

window.onafterprint = async () => {
  indexRef.value++
  updateSelectedSamplePoint()

  await sleep(1 * 1000)
  handlePrint()
}
</script>

<template>
  <div class="h-screen w-screen fc flex-col gap-8 print:(h-65mm! w-112mm!)">
    <div class="h-112mm w-65mm fc flex-col rotate-90 gap-2">
      <div class="text-center text-16px font-black">
        {{ selectedSamplePoint }}
      </div>
      <a-qrcode
        :value="selectedSamplePoint"
        :bordered="false"
        error-level="H"
        :size="182 + 36"
        type="svg"
      />
    </div>

    <a-select v-model:value="selectedSamplePoint" class="w-20rem print:hidden" :options="samplePointList" />

    <span class="text-16px font-black print:hidden">
      正在打印第 {{ indexRef }} / {{ samplePointList.length }} 张...
    </span>

    <div class="flex flex-row gap-2 gap2 print:hidden">
      <a-button @click="previous">
        上一张
      </a-button>
      <a-button @click="next">
        下一张
      </a-button>
    </div>

    <a-button class="print:hidden" @click="handlePrint">
      开始打印
    </a-button>
  </div>
</template>
