import { render, cleanup } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import { expect, describe, it, vi, afterEach } from 'vitest'

import LanguageSwitcher from './LanguageSwitcher'

vi.mock('react-i18next', () => ({
  useTranslation: vi.fn().mockReturnValue({
    i18n: {
      changeLanguage: vi.fn(),
    },
  }),
}))

describe('LanguageSwitcher', () => {
  afterEach(cleanup)

  it('should render two buttons with language codes', () => {
    const { getByTestId } = render(<LanguageSwitcher />)

    const buttonEn = getByTestId('language-switcher-en-button')
    const buttonPtBr = getByTestId('language-switcher-pt-br-button')

    expect(buttonEn).toBeTruthy()
    expect(buttonPtBr).toBeTruthy()
  })

  // it('should call a function on click on each button', () => {
  //   const { getByTestId } = render(<LanguageSwitcher />)

  //   const buttonEn = getByTestId('language-switcher-en-button')
  //   userEvent.click(buttonEn)

  //   // TODO: implement expect
  // })
})
