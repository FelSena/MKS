import { Column } from "../../styles/globals";
import { ItemBox } from "../Item/style";
import { Description, Shadow } from "./style";

const Shimmer = () => {
  return (
    <ItemBox>
      <Column justify="space-between" height="80%" margin="auto">
        <Shadow />
        <Description />
        <Description />
        <Description />
        <Description />
      </Column>
    </ItemBox>
  );
};

export default Shimmer;
