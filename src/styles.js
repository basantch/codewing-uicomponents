import { css } from "@emotion/react";

const styles = css`
  @keyframes fadeInDown {
    0% {
      transform: translateY(-20px) scaleY(0);
      visibility: hidden;
      opacity: 0;
      transform-origin: top;
    }
    100% {
      transform: translateY(0px) scaleY(1);
      visibility: visible;
      opacity: 1;
      transform-origin: top;
    }
  }
  @keyframes fadeInUp {
    0% {
      transform: translateY(20px) scaleY(0);
      visibility: hidden;
      opacity: 0;
      transform-origin: bottom;
    }
    100% {
      transform: translateY(0px) scaleY(1);
      visibility: visible;
      opacity: 1;
      transform-origin: bottom;
    }
  }
  body {
    --inactive-color: #93999f;
    --primary-color: #93999f;
    --secondary-color: #216bdb;
    --background-color: #f2f7fc;
    --border-color: #e0e3e7;
    --box-shadow: 0px 1px 2px 0px #1018280f, 0px 1px 3px 0px #1018281a;
    --transition: all 0.2s ease;
    --border-radius: 4px;
    --wp-components-color-accent: var(--secondary-color);
    --wp-admin-theme-color: var(--secondary-color);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    .controls-wrapper {
      max-width: 320px;
      border: 1px solid #efefef;
      position: relative;
    }
    .cw__date-popover {
      background-color: #ffffff;
      font-size: 13px;
      padding: 0.25rem 0.5rem;
      border-radius: var(--border-radius);
      border: 1px solid var(--border-color);
      width: 286px;
    }
    .components-dropdown__content {
      z-index: 99999;
      .components-popover__content {
        padding: 12px;
        background-color: #ffffff;
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        border: 1px solid var(--border-color);
        width: 286px;
      }
    }
    .components-color-picker {
      width: 100%;
      .react-colorful,
      .react-colorful__alpha,
      .react-colorful__hue {
        width: 100%;
      }
      .react-colorful__saturation {
        border-radius: var(--border-radius);
      }
      > div:not(.react-colorful) {
        > div {
          padding-left: 0;
          padding-right: 0;
          &:last-child {
            padding-bottom: 0;
          }
        }
        .components-button {
          background: none;
          border: none;
        }
      }
      .components-select-control {
        margin-left: 0;
      }
    }
    .components-input-control__container {
      position: relative;
      .components-input-control__prefix {
        position: absolute;
        left: 0;
      }
      .components-input-control__prefix + .components-input-control__input {
        padding-left: 32px !important;
      }
    }
    input[type="text"],
    input[type="number"],
    input[type="email"],
    input[type="url"],
    input[type="search"],
    input[type="date"],
    select,
    textarea,
    .components-base-control__field
      .components-input-control__container
      input.components-input-control__input,
    .components-base-control__field
      .components-input-control__container
      .components-select-control__input {
      background-color: #ffffff;
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius);
      padding: 12.5px 10px;
      font-size: 14px;
      line-height: 1;
      color: #2b3034;
      width: 100%;
      max-width: 100%;
      transition: var(--transition);
      outline: none;
      min-height: 44px;
      &:focus {
        border-color: var(--secondary-color);
      }
    }
    .components-input-control__backdrop {
      display: none;
    }
    .components-circular-option-picker {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
    .components-circular-option-picker__swatches {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      .components-circular-option-picker__option {
        display: inline-block;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 1px solid #efefef;
        cursor: pointer;
        &.is-pressed {
          outline: 1px solid #e0e3e7;
          outline-offset: 2px;
        }
      }
      .components-circular-option-picker__option-wrapper {
        position: relative;
        display: flex;
        svg {
          position: absolute;
          left: 0;
          top: 0;
        }
      }
    }
  }
`;

export default styles;
