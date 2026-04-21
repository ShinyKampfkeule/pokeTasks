// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    indent: [2, 'error'],
    '@stylistic/indent': [2, 'error']
  }
})
