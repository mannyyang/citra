export function useLayout() {
  const route = useRoute()

  const layout = computed(() => {
    if (route?.path?.startsWith('/app'))
      return 'app'
    else if (route?.path?.startsWith('/build'))
      return 'build'
    else
      return 'default'
  })

  return {
    layout,
  }
}