import Tippy from "@tippyjs/react";

export default ({ content, children, className, ...rest }) => {
  const cls = `cw_popover ${className}`;
  return (
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
      appendTo={document.body}
      {...rest}
    >
      <div>{children}</div>
    </Tippy>
  );
};
