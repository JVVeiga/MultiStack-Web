import { getThemeProps } from "@mui/system";
import React from "react";
import { AvatarStyled, RatingStyled, UserDescription, UserInformationContainer, UserName } from "./styles";

interface UserInformationProps {
    picture: string,
    name: string,
    rating: number,
    description?: string
}

const UserInformation: React.FC<UserInformationProps> = ({ picture, name, rating, description }) => {
    return(
        <UserInformationContainer>
            <AvatarStyled src={picture}>{name[0]}</AvatarStyled>
            <UserName>{name}</UserName>
            <RatingStyled readOnly value={rating}/>
            <UserDescription>{description}</UserDescription>
        </UserInformationContainer>
    );
}
export default UserInformation;