export const useThemeSync = () => {
  const colorMode = useColorMode()

  onMounted(() => {
    // Initial setzen
    document.documentElement.setAttribute('data-ui-color-scheme', colorMode.value)

    // Watch für Änderungen
    watch(
      () => colorMode.value,
      (newMode) => {
        document.documentElement.setAttribute('data-ui-color-scheme', newMode)
      }
    )
  })
}
