<script setup>
import { VBtn } from "vuetify/lib/components/VBtn/index.mjs"
 
const props = defineProps({
  icon: String,
  color: String,
  title: String,
  value: Number,
  isHover: Boolean,
})
</script>

<template>
  <div class="main-div-dashboard-card">
    <VCard
      class="logistics-card-statistics cursor-pointer"
      :style="
        isHover
          ? `border-block-end-color: rgb(var(--v-theme-${color}))`
          : `border-block-end-color: rgba(var(--v-theme-${color}),0.38)`
      "
      @mouseenter="isHover === true"
      @mouseleave="isHover === false"
    >
      <VCardText>
        <div class="d-flex align-center gap-x-4 mb-1">
          <VAvatar variant="tonal" :color="color" rounded>
            <VIcon :icon="icon" size="28" />
          </VAvatar>
          <h4 class="text-h4">
            {{ value }}
          </h4>
        </div>
        <div class="text-body-1 mb-1">
          {{ title }}
        </div>
        <VDivider />
        <div class="d-flex gap-x-2 align-center">
          <VBtn size="40" variant="plain"> View </VBtn>
        </div>
      </VCardText>
    </VCard>
  </div>
</template>

<style lang="scss" scoped>
@use "@core/scss/base/mixins" as mixins;

.main-div-dashboard-card {
  height: 100%;
  width: 100%;

  .logistics-card-statistics {
    border-block-end-style: solid;
    border-block-end-width: 2px;
    height: 100%;

    &:hover {
      border-block-end-width: 3px;
      margin-block-end: -1px;

      @include mixins.elevation(8);

      transition: all 0.1s ease-out;
    }
  }
}

.skin--bordered {
  .logistics-card-statistics {
    border-block-end-width: 2px;

    &:hover {
      border-block-end-width: 3px;
      margin-block-end: -2px;
      transition: all 0.1s ease-out;
    }
  }
}
</style>
