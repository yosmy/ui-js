// import baseHexToRgb from "hex-rgb";
//
// const hexToRgb = (hex, alpha) => {
//     const rgb = baseHexToRgb(hex);
//
//     return `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue}, ${alpha})`;
// };

// https://material-ui.com/customization/color/

const colors = {
    white: "#ffffff",
    gray: {
        light1:  "#fafafa", // Gray 50
        light2:  "#f5f5f5", // Gray 100
        default: "#9e9e9e", // Gray 500
        dark1:   "#616161", // Gray 700
        dark2:   "#424242", // Gray 800
    },
    indigo: {
        light1:  "#e8eaf6", // Indigo 50
        light2:  "#c5cae9", // Indigo 100
        default: "#3f51b5", // Indigo 500
        dark1:   "#303f9f", // Indigo 700
        dark2:   "#283593", // Indigo 800
    },
    red: {
        light1:  "#ffebee", // Red 50
        light2:  "#ffcdd2", // Red 100
        default: "#f44336", // Red 500
        dark1:   "#d32f2f", // Red 700
        dark2:   "#c62828", // Red 800
    },
    amber: {
        light1:  "#fff8e1", // Amber 50
        light2:  "#ffecb3", // Amber 100
        default: "#ffc107", // Amber 500
        dark1:   "#ffa000", // Amber 700
        dark2:   "#ff8f00", // Amber 800
    },
};

const build = (width, colors) => {
    return {
        spacing: (amount) => {
            return amount * 8;
        },
        button: {
            padding: {
                top: 1,
                bottom: 1,
                left: 3,
                right: 3
            },
            border: {
                width: width,
                radius: 6
            },
            progress: {
                top: 5
            }
        },
        primary_button: {
            background: colors.indigo.default,
            color: colors.indigo.light1,
            border: {
                color: colors.indigo.dark2,
            }
        },
        secondary_button: {
            padding: {
                top: 1,
                bottom: 1,
                left: 1,
                right: 1
            },
            color: colors.gray.dark2,
            border: {
                color: colors.gray.default,
            },
            contrast: {
                color: colors.gray.light1
            }
        },
        tertiary_button: {
            border: {
                width: 0
            },
            padding: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            color: colors.gray.dark2,
        },
        warning_button: {
            background: colors.amber.light1,
            color: colors.amber.dark2,
            border: {
                color: colors.amber.default,
            }
        },
        danger_button: {
            background: colors.red.default,
            color: colors.red.light1,
            border: {
                color: colors.red.dark2,
            }
        },
        tab_button: {
            color: colors.indigo.default,
            padding: {
                left: 2,
                right: 2,
            },
            border: {
                width: 0,
                color: colors.gray.default,
                radius: 0,
            }
        },
        icon: {
            size: 18,
            contrast: {
                color: colors.gray.light1
            },
            big: {
                size: 24
            }
        },
        form_icon: {
            size: 20,
        },
        card: {
            flow: "column",
            align: {
                main: "flex-start",
                cross: "flex-start"
            },
            margin: {
                top: 0,
                // To show shadow properly
                bottom: 2,
                left: 2,
                right: 2
            },
            padding: {
                top: 2,
                bottom: 2,
                left: 2,
                right: 2
            },
            background: colors.gray.light1,
            border: {
                width: width,
                color: colors.gray.default,
                radius: 8
            },
            shadow: {
                // https://ethercreative.github.io/react-native-shadow-generator/
                color: colors.gray.dark2,
                width: 0,
                height: 2,
                opacity: 0.23,
                radius: 2.62,
                elevation: 4
            },
        },
        warning_card: {
            title: {
                color: colors.gray.light1,
                background: colors.amber.default
                // gradient: {
                //     colors: [
                //         colors.amber.light2,
                //         colors.gray.light1,
                //     ],
                // },
            },
            border: {
                color: colors.amber.default,
                width: 2
            }
        },
        country_picker: {
            size: 14,
            color: colors.gray.default,
            border: {
                width: width,
                color: colors.gray.default,
            },
        },
        error: {
            padding: {
                top: 1,
                bottom: 1,
                left: 3,
                right: 3
            },
            color: colors.red.light1,
            background: colors.red.default,
            border: {
                width: width,
                color: colors.gray.dark2,
                radius: 8
            },
        },
        warning: {
            padding: {
                top: 1,
                bottom: 1,
                left: 3,
                right: 3
            },
            color: colors.amber.light1,
            background: colors.amber.default,
            border: {
                width: width,
                color: colors.gray.dark2,
                radius: 8
            },
        },
        input: {
            border: {
                width: width,
                color: colors.gray.default,
            },
        },
        modal: {
            background: colors.gray.light1,
            border: {
                width: width,
                color: colors.gray.default,
                radius: 8
            }
        },
        text: {
            color: colors.gray.dark2,
            contrast: {
                color: colors.gray.light1
            },
        },
        banner_text: {
            size: 28
        },
        title_text: {
            size: 18,
            contrast: {
                color: colors.gray.light1
            },
        },
        secondary_text: {
            size: 13
        },
        divider: {
            border: {
                width: width,
                color: colors.gray.default,
            },
        },
    };
};

export default {
    colors,
    build
};