import styled from "@emotion/styled";
import Tippy from "@tippyjs/react";

const PopoverStyle = styled.div`
  [data-tippy-root] {
    max-width: 286px;
    width: 286px;
    .tippy-arrow {
      width: 14px;
      height: 14px;
      &::before {
        border: 1px solid transparent;
        width: 12px;
        height: 12px;
        background-color: currentColor;
        transform: rotate(45deg);
        transform-origin: center;
      }
    }
  }
  [data-placement^="top"] {
    > .tippy-arrow {
      &::before {
        border-bottom-color: var(--cw__border-color);
        border-right-color: var(--cw__border-color);
      }
    }
  }
  [data-placement^="bottom"] {
    > .tippy-arrow {
      &::before {
        border-top-color: var(--cw__border-color);
        border-left-color: var(--cw__border-color);
      }
    }
  }
  [data-placement^="left"] {
    > .tippy-arrow {
      &::before {
        border-top-color: var(--cw__border-color);
        border-right-color: var(--cw__border-color);
      }
    }
  }
  [data-placement^="right"] {
    > .tippy-arrow {
      &::before {
        border-left-color: var(--cw__border-color);
        border-bottom-color: var(--cw__border-color);
      }
    }
  }
  .cw_popover {
    background-color: #ffffff;
    border: 1px solid var(--cw__border-color);
    border-radius: var(--cw__border-radius);
    padding: 12px;
    box-shadow:
      0px 4px 6px -2px #2b303408,
      0px 12px 16px -4px #2b303414;
    .tippy-content {
      padding: 0;
    }
    &[data-theme="light"] {
      color: #2b3034;
      .tippy-arrow {
        color: #ffffff;
      }
    }
    .cw__control-item {
      margin-bottom: 8px;
      padding: 0 12px;
      margin-left: -12px;
      margin-right: -12px;
      &:first-of-type{
        padding-top: 0;
      }
      &:first-of-type{
        padding-bottom: 0;
      }
      &:last-child {
        margin-bottom: 0;
      }
      &.cw__divider-top{
        padding-top: 12px;
      }
      &.cw__divider-bottom{
        padding-bottom: 12px;
      }
      &:not(.horizontal){
        > header{
          margin: 0 0 8px;
        }
        .cw__control-description{
          margin: 8px 0;
        }
      }
    }
    .cw__control-title{
      margin: -8px -12px 8px;
    }
  }
`;

export default ({ content, children, className, ...rest }) => {
  const cls = `cw_popover ${className}`;
  return (
    <PopoverStyle>
      <Tippy
        content={content}
        className={cls}
        trigger="click"
        theme="light"
        disabled={!content}
        animation="shift-away"
        // animateFill={true}
        interactive
        allowHTML
        arrow
        {...rest}
      >
        <div>{children}</div>
      </Tippy>
    </PopoverStyle>
  );
};
