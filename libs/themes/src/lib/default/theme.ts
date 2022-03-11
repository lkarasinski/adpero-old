export const theme = {
    font: {
        size: {
            small: "16px",
            medium: "24px",
            large: "36px",
        },
        weight: {
            regular: 400,
            medium: 500,
            semiBold: 600,
            bold: 700,
            extraBold: 800,
            black: 900,
        },
        family: "Nunito",
    },

    shadow: {
        color: "hsl(231deg 30% 44% / 0.15)",
        get low() {
            return `0px 0.2px 0.2px ${this.color},
            0px 0.4px 0.5px -1.2px ${this.color},
            0px 0.9px 1px -2.5px ${this.color}`;
        },
        get medium() {
            return `0px 0.2px 0.2px ${this.color},
            0px 0.7px 0.8px -0.8px ${this.color},
            0px 1.9px 2.1px -1.7px ${this.color},
            0.1px 4.7px 5.3px -2.5px ${this.color}`;
        },
        get high() {
            return `0px 0.2px 0.2px ${this.color},
            0px 1.6px 1.8px -0.4px ${this.color},
            0.1px 3px 3.4px -0.7px ${this.color},
            0.1px 5px 5.6px -1.1px ${this.color},
            0.2px 8px 9px -1.4px ${this.color},
            0.3px 12.5px 14.1px -1.8px ${this.color},
            0.5px 19.1px 21.5px -2.1px ${this.color},
            0.7px 28.1px 31.6px -2.5px ${this.color}`;
        },
    },

    colors: {
        primary: {
            regular: "#3d5eff",
            light: "#738aff",
        },
        red: {
            regular: "#eC6464",
            light: "#fbd0d0",
            extraLight: "#fff2f2",
        },
        green: {
            regular: "#09b54d",
            light: "#75e6a2",
        },
        gray: {
            dark: "#323232",
            light: "#676767",
        },
        selection: "#c2e2ff",
        background: "#ffffff",
    },
};
