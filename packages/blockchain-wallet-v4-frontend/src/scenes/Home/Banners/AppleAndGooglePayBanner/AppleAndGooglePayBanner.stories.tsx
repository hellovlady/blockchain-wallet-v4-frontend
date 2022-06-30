import React from 'react'
import { IntlProvider } from 'react-intl'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { AppleAndGooglePayBanner, AppleAndGooglePayBannerComponent } from '.'

export default {
  component: AppleAndGooglePayBanner,
  decorators: [(Story) => <IntlProvider locale='en'>{Story()}</IntlProvider>],
  title: 'Home/Banners/AppleAndGooglePayBanner'
} as ComponentMeta<AppleAndGooglePayBannerComponent>

const Template: ComponentStory<AppleAndGooglePayBannerComponent> = (args) => (
  <AppleAndGooglePayBanner {...args} />
)

export const Default = Template.bind({})
