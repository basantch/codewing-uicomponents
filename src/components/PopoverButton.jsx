import styled from "@emotion/styled";
import Icons from "../controls/Icons";

const PopoverButtonStyle = styled.button`
  padding: 4px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  cursor: pointer;
  background: none;
  &:hover,
  &.changed {
    color: var(--secondary-color);
    border-color: var(--secondary-color);
  }
`;

const PopoverButton = ({ changed }) => {
  return (
    <PopoverButtonStyle type="button" className={changed ? "changed" : ""}>
      {Icons.pen}
    </PopoverButtonStyle>
  );
};

export default PopoverButton;
