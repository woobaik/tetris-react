import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../tetromino";

const Cell = ({ type }) => {
  return (
    <StyledCell type="J" color={TETROMINOS["J"].color}>
      {type}
    </StyledCell>
  );
};

export default Cell;
