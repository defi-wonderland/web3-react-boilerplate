import merge from 'lodash.merge';
import { darkTheme, Theme } from '@rainbow-me/rainbowkit';

// Configure your rainbowkit custom theme here.
// More info: https://www.rainbowkit.com/docs/custom-theme
export const customTheme = merge(darkTheme(), {
  blurs: {
    // modalOverlay: '...',
  },
  colors: {
    // accentColor: '...',
    // accentColorForeground: '...',
    // actionButtonBorder: '...',
    // actionButtonBorderMobile: '...',
    // actionButtonSecondaryBackground: '...',
    // closeButton: '...',
    // closeButtonBackground: '...',
    // connectButtonBackground: '...',
    // connectButtonBackgroundError: '...',
    // connectButtonInnerBackground: '...',
    // connectButtonText: '...',
    // connectButtonTextError: '...',
    // connectionIndicator: '...',
    // downloadBottomCardBackground: '...',
    // downloadTopCardBackground: '...',
    // error: '...',
    // generalBorder: '...',
    // generalBorderDim: '...',
    // menuItemBackground: '...',
    // modalBackdrop: '...',
    // modalBackground: '...',
    // modalBorder: '...',
    // modalText: '...',
    // modalTextDim: '...',
    // modalTextSecondary: '...',
    // profileAction: '...',
    // profileActionHover: '...',
    // profileForeground: '...',
    // selectedOptionBorder: '...',
    // standby: '...',
  },
  fonts: {
    // body: '...',
  },
  radii: {
    // actionButton: '...',
    // connectButton: '...',
    // menuButton: '...',
    // modal: '...',
    // modalMobile: '...',
  },
  shadows: {
    // connectButton: '...',
    // dialog: '...',
    // profileDetailsAction: '...',
    // selectedOption: '...',
    // selectedWallet: '...',
    // walletLogo: '...',
  },
} as Theme);
