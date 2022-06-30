import React from 'react'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { Button, Icon, Text } from 'blockchain-info-components'
import { Expanded, Flex } from 'components/Flex'
import { Padding } from 'components/Padding'
import { actions } from 'data'

import { getAppleAndGooglePayAnnouncement } from '../selectors'
import { CloseLink } from '../styles'
import { CardWrapper } from './AppleAndGooglePayBanner.styles'
import {
  AppleAndGooglePayBannerComponent,
  AppleAndGooglePayBannerProps
} from './AppleAndGooglePayBanner.types'

export const AppleAndGooglePayBanner: AppleAndGooglePayBannerComponent = ({ onClickBuyCrypto }) => {
  return (
    <CardWrapper>
      <Padding all={20}>
        <Flex flexDirection='row' alignItems='center' gap={20}>
          <Expanded>
            <Flex flexDirection='column' gap={4}>
              <Text color='grey800' weight={600} size='20px'>
                <FormattedMessage
                  id='home.banners.appleAndGooglePayBanner.title'
                  defaultMessage='New: Apple Pay and Google Pay'
                />
              </Text>

              <Text color='grey600' weight={500} size='12px'>
                <FormattedMessage
                  id='home.banners.appleAndGooglePayBanner.body'
                  defaultMessage='Enjoy frictionless crypto purchases with Apple Pay and Google Pay.'
                />
              </Text>
            </Flex>
          </Expanded>

          <Button data-e2e='appleAndGooglePayBanner.buyCrypto' nature='primary'>
            <FormattedMessage
              id='home.banners.appleAndGooglePayBanner.buyCryptoButton.title'
              defaultMessage='Buy Crypto'
            />
          </Button>

          <CloseLink data-e2e='newCoinCloseButton' onClick={onClickBuyCrypto}>
            <Icon size='20px' color='grey400' name='close-circle' />
          </CloseLink>
        </Flex>
      </Padding>
    </CardWrapper>
  )
}

const mapDispatchToProps = (dispatch: Dispatch): Partial<AppleAndGooglePayBannerProps> => ({
  onClickBuyCrypto: () =>
    dispatch(actions.cache.announcementDismissed(getAppleAndGooglePayAnnouncement()))
})

export default connect(null, mapDispatchToProps)(AppleAndGooglePayBanner)
