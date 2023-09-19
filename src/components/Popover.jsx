import styled from "@emotion/styled";
import Tippy from "@tippyjs/react";

const PopoverStyle = styled.div`
  [data-tippy-root] {
    max-width: 286px;
    width: 286px;
    .tippy-arrow {
      &::before {
        border: 1px solid transparent;
        width: 12px;
        height: 12px;
        background-color: currentColor;
        transform: rotate(45deg);
      }
    }
  }
  [data-placement^="top"] {
    .tippy-arrow {
      &::before {
        border-bottom-color: var(--border-color);
        border-right-color: var(--border-color);
        bottom: -9px;
      }
    }
  }
  [data-placement^="bottom"] {
    .tippy-arrow {
      &::before {
        border-top-color: var(--border-color);
        border-left-color: var(--border-color);
        top: -9px;
      }
    }
  }
  [data-placement^="left"] {
    .tippy-arrow {
      &::before {
        border-top-color: var(--border-color);
        border-right-color: var(--border-color);
        right: -9px;
      }
    }
  }
  [data-placement^="right"] {
    .tippy-arrow {
      &::before {
        border-left-color: var(--border-color);
        border-bottom-color: var(--border-color);
        left: -9px;
      }
    }
  }
  .cw_popover {
    background-color: #ffffff;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    padding: 8px;
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
  }
`;

export default ({ children, className, ...rest }) => {
  const cls = `cw_popover ${className}`;
  return (
    <PopoverStyle>
      <Tippy
        className={cls}
        trigger="click"
        theme="light"
        interactive
        allowHTML
        arrow
        {...rest}
      >
        {children}
      </Tippy>
    </PopoverStyle>
  );
};
