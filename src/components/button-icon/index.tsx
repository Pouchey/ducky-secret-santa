import { StyledButtonIcon, StyledIcon } from "./style";
import { ButtonProps } from "./types";


export default (props:ButtonProps) => {
  return (
    <StyledButtonIcon {...props}>
      <StyledIcon src={props.glyph} />
    </StyledButtonIcon>
  )
}