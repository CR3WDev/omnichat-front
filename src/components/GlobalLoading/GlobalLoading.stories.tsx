import { queryClient } from '@services/queryClient'
import { Meta, StoryObj } from '@storybook/react'
import { QueryClientProvider } from 'react-query'
import { GlobalLoadingComponent } from './GlobalLoadingComponent'

export default {
  title: 'Components/GlobalLoadingComponent',
  component: GlobalLoadingComponent,
  decorators: [
    (Story) => {
      return (
        <QueryClientProvider client={queryClient}>
          <div>{Story()}</div>
        </QueryClientProvider>
      )
    },
  ],
} as Meta

export const Default: StoryObj = {}
