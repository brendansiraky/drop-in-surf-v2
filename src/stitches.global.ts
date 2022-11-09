import { createStitches } from '@stitches/react'

export const { styled, css } = createStitches({
    theme: {
        space: {
            xs: '5px',
            sm: '10px',
            md: '20px',
            lg: '40px',
            xl: '80px',
        },
        colors: {
            sidebar: '#FFF',
        },
    },
})
