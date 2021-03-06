import React from "react";
import { PageSubtitleStyled, PageTitleContainer, PageTitleStyled } from "./styles";

interface PageTitleProps {
    title: string,
    subtitle?: string
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
    return (
        <PageTitleContainer>
            <PageTitleStyled>{props.title}</PageTitleStyled>
            <PageSubtitleStyled>{props.subtitle}</PageSubtitleStyled>
        </PageTitleContainer>
    );
}
export default PageTitle;