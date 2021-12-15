import { stageGenerator } from "../gameHelper";
import Cell from "./Cell";
import { StyledStage } from "./styles/StyledStage";
const Stage = () => {
  return (
    <StyledStage>
      {stageGenerator().map((row) =>
        row.map((cell, idx) => <Cell key={idx} type={cell[0]} />)
      )}
    </StyledStage>
  );
};

export default Stage;
