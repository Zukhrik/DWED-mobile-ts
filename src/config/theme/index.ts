import {createTheme, PaletteMode, Theme} from '@mui/material'

const primary = '#1DA1F2'
const primaryLight = 'rgba(29, 161, 242, 0.5)'
const secondary = '#7F92A0'
const secondaryLight = '#F2F2F2'
const success = '#2BCBBA'
const text = '#262626'
const error = '#FF5A5F'

export const getTheme = (mode: PaletteMode): Theme => createTheme({
    palette: {
        mode,
        primary: {
            light: primaryLight,
            main: primary
        },
        secondary: {
            light: secondaryLight,
            main: secondary
        },
        error: {
            main: error
        },
        success: {
            main: success
        },
        text: {
            primary: text,
            secondary: secondary,
            disabled: secondaryLight
        },
        ...(
            mode === 'light'
                ? {
                    background: {
                        default: '#fff'
                    }
                }
                : {
                    default: '#000'
                }
        )
    },
    components: {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    '&.Mui-disabled': {
                        color: secondary
                    }
                }
            }
        },
        MuiDialogContentText: {
            styleOverrides: {
                root: {
                    color: text
                }
            }
        },
        MuiTooltip: {
            defaultProps: {
                arrow: true
            },
            styleOverrides: {
                arrow: {
                    borderColor: text
                },
                tooltipArrow: {
                    backgroundColor: text,
                    borderRadius: 6,
                    padding: '12px 16px',
                    p: {
                        color: secondary
                    }
                }
            }
        },
        MuiButton: {
            defaultProps: {
                variant: 'contained'
            },
            styleOverrides: {
                root: {
                    boxShadow: 'unset',
                    fontSize: 14,
                    lineHeight: '24px',
                    borderRadius: 6,
                    textTransform: 'unset'
                },
                contained: {
                    color: '#fff'
                },
                sizeSmall: {
                    svg: {
                        width: 18,
                        height: 18
                    }
                },
                sizeLarge: {
                    padding: '16px 22px',
                    fontWeight: 600,
                    fontSize: 16
                },
                sizeMedium: {
                    padding: '8px 22px'
                }
            }
        },
        MuiFilledInput: {
            defaultProps: {
                disableUnderline: true,
                size: 'small'
            },
            styleOverrides: {
                root: {
                    background: '#fff',
                    border: `1px solid ${secondary}`,
                    borderRadius: '4px',

                    '&:hover, &:focus': {
                        background: '#fff',
                        borderColor: primary
                    },
                    '&.Mui-disabled': {
                        backgroundColor: secondaryLight,
                        WebkitTextFillColor: text,
                        overflow: 'hidden'
                    },
                    '&.Mui-error': {
                        borderColor: error
                    },
                    '&.Mui-focused': {
                        backgroundColor: '#fff',
                        borderColor: primary
                    }
                },
                input: {
                    paddingBottom: 8,
                    '&.Mui-disabled': {
                        backgroundColor: secondaryLight,
                        WebkitTextFillColor: text
                    }
                }
            }
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    margin: '0 auto',
                    padding: '0 24px'
                }
            }
        },
        MuiSnackbar: {
            styleOverrides: {
                root: {
                    top: '40px !important'
                }
            }
        },
        MuiPopover: {
            styleOverrides: {
                root: {
                    boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: 8
                }
            }
        },
        MuiSnackbarContent: {
            styleOverrides: {
                root: {
                    background: '#fff',
                    color: text,
                    boxShadow: 'var(--dwed-shadow)'
                }
            }
        }
    },
    typography: {
        fontFamily: '"Golos", sans-serif',
        h1: {
            fontWeight: 600
        },
        h2: {
            fontWeight: 700
        },
        h3: {
            fontWeight: 600
        },
        h4: {
            fontWeight: 500
        },
        h5: {
            fontWeight: 500
        },
        h6: {
            fontWeight: 400,
            fontSize: 16,
            lineHeight: '24px',
            color: text
        },
        button: {
            fontWeight: 500
        },
        body2: {
            color: secondary,
            lineHeight: '16px',
            marginBottom: '4px'
        }
    }
})