import styled from "styled-components";
import { ReactComponent as DownArrow } from "../../assets/svgs/down-arrow.svg";

export const StyledDropDown = styled(DownArrow)`
  ${({ show }) => show && `transform: rotate(180deg);`}
`;

export const Container = styled.div`
  margin-right: 22px;
  position: relative;
  height: 29px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  cursor: pointer;
`;

export const DropDown = styled.div`
  width: 114px;
  /* height: 100px; */
  /* border: 1px solid; */
  position: absolute;
  top: 65px;
  right: 78px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
  filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
  background-color: white;
  cursor: pointer;

  ${({ show }) => !show && `display:none;`}

  /* bottom: 0; */

  .list {
    padding: 0 20px;

    &:hover {
      opacity: 0.65;
    }
  }
`;
