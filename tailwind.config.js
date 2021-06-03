module.exports = {
    future: {},
    purge: {
        content: [
            './resources/views/**/*.blade.php',
        ]
    },
    theme: {
        fontFamily: {
            body: ['Muli', 'sans-serif'],
        },
        extend: {
            colors: {
                green: {
                    '50': '#E0FFEF',
                    '100': '#D2FFE7',
                    '200': '#A3FFCE',
                    '300': '#61FFAB',
                    '400': '#19FF89',
                    '500': '#26DE81',
                    '600': '#11CA6D',
                    '700': '#0CB862',
                    '800': '#089650',
                    '900': '#026D37',
                },
                blue: {
                    '50': '#E5EFFF',
                    '100': '#D3E5FF',
                    '200': '#A2C7FF',
                    '300': '#78AEFF',
                    '400': '#5599FF',
                    '500': '#3283FD',
                    '600': '#0368FF',
                    '700': '#035DE4',
                    '800': '#024FC3',
                    '900': '#0043A9',
                },
                yellow: {
                    '100': '#FFF7E6',
                    '200': '#FFDA92',
                    '300': '#FFCE6D',
                    '400': '#FDBF3E',
                    '500': '#FDB51E',
                    '600': '#FFB002',
                    '700': '#E39E03',
                    '800': '#BE8603',
                    '900': '#926601',
                },
                red: {
                    '100': '#FDEAED',
                    '200': '#FDCED6',
                    '300': '#FD6975',
                    '400': '#FF4757',
                    '500': '#FF293B',
                    '600': '#FF1428',
                    '700': '#E70014',
                    '800': '#BC0009',
                    '900': '#98000D',
                },
                gray: {
                    '50': '#F9FAFB',
                    '100': '#F5F8FC',
                    '200': '#EDF2F7',
                    '250': '#E5EBEF',
                    '300': '#E2E8F0',
                    '400': '#CBD5E0',
                    '500': '#A0AEC0',
                    '550': '#8792A2',
                    '600': '#718096',
                    '700': '#4A5568',
                    '800': '#2D3748',
                    '900': '#1A202C',
                },
            },
            spacing: {
                '0.5': '0.125rem',
                '1.5': '0.375rem',
                '2.5': '0.625rem',
                '3.5': '0.875rem',
                '5.5': '1.375rem',
                '6.5': '1.625rem',
                '7': '1.75rem',
                '9': '2.25rem',
                '11': '2.75rem',
                '18': '4.5rem',
                '26': '6.5rem',
                '28': '7rem',
                '34': '8.5rem',
                '36': '9rem',
                '67.5': '16.875rem',
                '69': '17.25rem',
                '72': '18rem',
                '84': '21rem',
                '96': '24rem',
                '97': '24.25rem',
                '108': '27rem',
                '200': '50rem',
            },
            inset: {
                '0.5': '.125rem',
                '1/2': '50%',
            },
            screens: {
                '2xl': '1535px',
            },
            gridTemplateColumns: {
                '16': 'repeat(16, minmax(0, 1fr))',
            },
            gridColumn: {
                'span-12': 'span 12 / span 12',
                'span-13': 'span 13 / span 13',
            },
            height: {
                'fit-content': 'fit-content',
            },
            minWidth: {
                '20': '5rem',
            },
            minHeight: {
                '180': '45rem',
            },
            fontSize: {
                'md': '1.125rem',
                '12xl': '1.125rem',
            },
            opacity: {
                '10': '.1',
                '15': '.15',
            },
            animation: {
                'spin-fast': 'spin 500ms linear infinite',
            }
        },
        shadowOutline: {
            'shadow': '0 0 0 0.2em',
            'alpha': '0.5'
        },
        shadowOutlineColors: {
            'blue': '#A2C7FF',
            'red': '#FD6975',
        }
    },
    variants: {
        shadowOutline: ['focus', 'active'],
        zIndex: ['focus'],
    },
    plugins: [
        require('@tailwindcss/custom-forms'),
        require('tailwindcss-shadow-outline-colors')(),
    ],
}
