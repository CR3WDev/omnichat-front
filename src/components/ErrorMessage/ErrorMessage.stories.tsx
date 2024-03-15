import { Meta, StoryObj } from '@storybook/react'
import { ErrorMessageComponent } from './ErrorMessageComponent'
export default {
  title: 'Components/ErrorMessageComponent',
  component: ErrorMessageComponent,
  args: {
    errors: {
      type: 'validate',
      validate: true,
      message: 'Exemplo de error message',
    },
  },
} as Meta

export const Default: StoryObj = {}
