import { createStitches, type ScaleValue } from '@stitches/react'

type Direction = 'row' | 'column'
type Alignment = 'start' | 'center' | 'end' | 'between' | 'around'
type Flexer = `${Direction}-${Alignment}-${Alignment}`

export const { styled, css, getCssText } = createStitches({
    theme: {
        space: {
            xs: '5px',
            sm: '10px',
            md: '20px',
            lg: '40px',
            xl: '80px',
        },
        colors: {
            primary: '#F04B46',
            background: '#FFF',
            textLight: '#FFF',

            sidebarBackground: '#F4F4F8',
        },
    },
    utils: {
        flexer: (value: Flexer) => {
            const values = value.split('-')
            const flexDirection = values[0]
            const justify = values[1]
            const alignItems = values[2]

            const justifyContent =
                justify === 'between' || justify == 'around'
                    ? `space-${justify}`
                    : justify

            return {
                display: 'flex',
                flexDirection,
                justifyContent,
                alignItems,
            }
        },
        px: (value: ScaleValue<'space'>) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
        py: (value: ScaleValue<'space'>) => ({
            paddingTop: value,
            paddingBottom: value,
        }),
        mx: (value: ScaleValue<'space'>) => ({
            marginLeft: value,
            marginRight: value,
        }),
        my: (value: ScaleValue<'space'>) => ({
            marginTop: value,
            marginBottom: value,
        }),
    },
})
