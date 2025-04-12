import type { Environment } from 'vitest'

export default (<Environment>{
  name: 'custom',
  transformMode: 'ssr',
  setup() {
    return {
      teardown() {},
    }
  },
})
