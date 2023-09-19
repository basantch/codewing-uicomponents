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
    .tippy-arrow {
      &::before {
        border-bottom-color: var(--border-color);
        border-right-color: var(--border-color);
      }
    }
  }
  [data-placement^="bottom"] {
    .tippy-arrow {
      &::before {
        border-top-color: var(--border-color);
        border-left-color: var(--border-color);
      }
    }
  }
  [data-placement^="left"] {
    .tippy-arrow {
      &::before {
        border-top-color: var(--border-color);
        border-right-color: var(--border-color);
      }
    }
  }
  [data-placement^="right"] {
    .tippy-arrow {
      &::before {
        border-left-color: var(--border-color);
        border-bottom-color: var(--border-color);
      }
    }
  }
  .cw_popover {
    background-color: #ffffff;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
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
      &:last-child {
        margin-bottom: 0;
      }
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
        animateFill
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
