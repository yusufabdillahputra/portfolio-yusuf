<script setup lang="ts">
const isSwitcherOpen = useState('switcher-open', () => false)
const onClick = (): void => {
  isSwitcherOpen.value = true
}
</script>

<template>
  <BaseButtonIcon
    rounded="full"
    @click="onClick"
    color="primary"
  >
    <Icon name="ic:outline-color-lens" class="size-5"/>
  </BaseButtonIcon>
</template>
