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
    --cw__inactive-color: #93999f;
    --cw__primary-color: #93999f;
    --cw__secondary-color: #216bdb;
    --cw__background-color: #f2f7fc;
    --cw__border-color: #e0e3e7;
    --cw__box-shadow: 0px 1px 2px 0px #1018280f, 0px 1px 3px 0px #1018281a;
    --cw__transition: all 0.2s ease;
    --cw__border-radius: 4px;
    --wp-components-color-accent: var(--cw__secondary-color);
    --wp-admin-theme-color: var(--cw__secondary-color);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    *{
      box-sizing: border-box;
    }
    .controls-wrapper {
      max-width: 320px;
      border: 1px solid #efefef;
      width: 100%;
    }
    .cw__date-popover {
      background-color: #ffffff;
      font-size: 13px;
      padding: 0.25rem 0.5rem;
      border-radius: var(--cw__border-radius);
      border: 1px solid var(--cw__border-color);
      width: 286px;
    }
    .components-dropdown__content {
      z-index: 99999;
      .components-popover__content {
        padding: 12px;
        background-color: #ffffff;
        border-radius: var(--cw__border-radius);
        box-shadow: var(--cw__box-shadow);
        border: 1px solid var(--cw__border-color);
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
        border-radius: var(--cw__border-radius);
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
      .components-base-control {
        .components-input-control__container {
          .components-input-control__prefix{
            .components-text{
              padding-left: 10px;
              margin-left: 0;
              color: inherit;
            }
          }
          .components-select-control__input, input.components-input-control__input{
            border: none;
            background-color: var(--cw__background-color);
            min-height: 35px;
            padding: 9px 10px;
          }
          .components-input-control__prefix + input.components-input-control__input{
            padding-left: 28px !important;
          }
        }
        &.components-number-control{
          .components-input-control__container{
            max-width: 64px;
          }
        }
      }
      > div > [data-wp-component="Flex"]{
        padding-top: 8px;
      }
    }
    .components-base-control {
      .components-base-control__field{
        .components-range-control__track,
        span[class*="-Rail-railBackgroundColor"] {
          height: 6px;
        }
        span[class*="-Rail-railBackgroundColor"] {
          background-color: #e0e3e7;
        }
      }
      .components-range-control__tooltip {
        font-size: 13px;
        line-height: 17.3px;
        padding: 8px;
        border-radius: var(--cw__border-radius);
        background-color: #2b3034;
        bottom: 100%;
        margin-bottom: 10px;
        &::after {
          content: "";
          border: 6px solid transparent;
          border-top-color: #2b3034;
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
    .components-range-control__wrapper {
      .components-range-control__thumb-wrapper {
        width: 20px;
        height: 20px;
        transform: translateY(-50%);
        top: 50%;
        margin-top: 0;
        margin-left: -11px;
        > span {
          background-color: #ffffff;
          box-shadow: 0 0 0 2px #e6e6e6;
          background-image: url("data:image/svg+xml,%3Csvg width='12' height='6' viewBox='0 0 12 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.40393 5.22144L1.40393 3.22144L3.40393 1.22144' stroke='%2393999F' strokeLinecap='round' strokeLinejoin='round'/%3E%3Cpath d='M8.73718 1.22144L10.7372 3.22144L8.73718 5.22144' stroke='%2393999F' strokeLinecap='round' strokeLinejoin='round'/%3E%3C/svg%3E%0A");
          background-repeat: no-repeat;
          background-size: 12px;
          background-position: center;
          &::before {
            width: calc(100% + 12px);
            height: calc(100% + 12px);
            top: -6px;
            left: -6px;
            opacity: 0.15;
            z-index: -1;
          }
        }
        > span[class*="-thumbFocus"] {
          box-shadow: 0 0 0 2px var(--cw__secondary-color);
        }
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
      border: 1px solid var(--cw__border-color);
      border-radius: var(--cw__border-radius);
      padding: 12.5px 10px;
      font-size: 14px;
      line-height: 1;
      color: #2b3034;
      width: 100%;
      max-width: 100%;
      transition: var(--cw__transition);
      outline: none;
      min-height: 44px;
      &:focus {
        border-color: var(--cw__secondary-color);
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
