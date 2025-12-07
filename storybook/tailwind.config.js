/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../packages/core-ui/src/**/*.{js,ts,jsx,tsx}",
    "../packages/react/src/**/*.{js,ts,jsx,tsx}"
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--corella-color-primary)',
          hover: 'var(--corella-color-primary-hover)',
          content: 'var(--corella-color-primary-content)',
          soft: 'var(--corella-color-primary-soft)',
          'soft-hover': 'var(--corella-color-primary-soft-hover)',
        },
        secondary: {
          DEFAULT: 'var(--corella-color-secondary)',
          hover: 'var(--corella-color-secondary-hover)',
          content: 'var(--corella-color-secondary-content)',
          soft: 'var(--corella-color-secondary-soft)',
          'soft-hover': 'var(--corella-color-secondary-soft-hover)',
        },
        accent: {
          DEFAULT: 'var(--corella-color-accent)',
          hover: 'var(--corella-color-accent-hover)',
          content: 'var(--corella-color-accent-content)',
          soft: 'var(--corella-color-accent-soft)',
          'soft-hover': 'var(--corella-color-accent-soft-hover)',
        },
        neutral: {
          DEFAULT: 'var(--corella-color-neutral)',
          hover: 'var(--corella-color-neutral-hover)',
          content: 'var(--corella-color-neutral-content)',
          soft: 'var(--corella-color-neutral-soft)',
          'soft-hover': 'var(--corella-color-neutral-soft-hover)',
        },
        info: {
          DEFAULT: 'var(--corella-color-info)',
          hover: 'var(--corella-color-info-hover)',
          content: 'var(--corella-color-info-content)',
          soft: 'var(--corella-color-info-soft)',
          'soft-hover': 'var(--corella-color-info-soft-hover)',
        },
        success: {
          DEFAULT: 'var(--corella-color-success)',
          hover: 'var(--corella-color-success-hover)',
          content: 'var(--corella-color-success-content)',
          soft: 'var(--corella-color-success-soft)',
          'soft-hover': 'var(--corella-color-success-soft-hover)',
        },
        warning: {
          DEFAULT: 'var(--corella-color-warning)',
          hover: 'var(--corella-color-warning-hover)',
          content: 'var(--corella-color-warning-content)',
          soft: 'var(--corella-color-warning-soft)',
          'soft-hover': 'var(--corella-color-warning-soft-hover)',
        },
        error: {
          DEFAULT: 'var(--corella-color-error)',
          hover: 'var(--corella-color-error-hover)',
          content: 'var(--corella-color-error-content)',
          soft: 'var(--corella-color-error-soft)',
          'soft-hover': 'var(--corella-color-error-soft-hover)',
        },
        base: {
          100: 'var(--corella-color-base-100)',
          200: 'var(--corella-color-base-200)',
          300: 'var(--corella-color-base-300)',
          hover: 'var(--corella-color-base-hover)',
          content: 'var(--corella-color-base-content)',
        },
      },
    },
  },
  plugins: [],
}
