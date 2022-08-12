import { ContentContainer, FlexStartWrapper, H2 } from "../../components";
import { SplitSlideUp } from "../../components/typography/SplitText";

export const PlaygroundPage = () => {
  return (
    <ContentContainer>
      <FlexStartWrapper>
        <SplitSlideUp component={H2} text="Playground" splitBy="letters" />
      </FlexStartWrapper>
    </ContentContainer>
  );
};
