import type { Preview } from '@storybook/react'
import 'primereact/resources/themes/lara-dark-purple/theme.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
