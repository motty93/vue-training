<template>
  <div>
    <h2>{{ title | lowerCase | upperCase }}</h2>
    <p>{{ subTitle | lowerCase }}</p>
  </div>
</template>

<script>
import { tokyoNumber } from '@/tokyoNumber'

export default {
  mixins: [tokyoNumber]
}
</script>
