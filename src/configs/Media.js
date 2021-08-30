import { css } from 'styled-components'

export const sizes = {
    uhd: 1980,
    desktop: 1366,
    laptop: 1024,
    tab: 768,
}

export default Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (min-width: ${sizes[label]}px) {
        ${css(...args)};
      }
    `
    return acc
}, {})