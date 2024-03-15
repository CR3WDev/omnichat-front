import { Meta, StoryObj } from '@storybook/react'
import { GlobalToastComponent } from './GlobalToastComponent'

export default {
  title: 'Components/GlobalToastComponent',

  component: GlobalToastComponent,
  decorators: [
    (Story) => {
      return <div>{Story()}</div>
    },
  ],
} as Meta

export const Default: StoryObj = {}
