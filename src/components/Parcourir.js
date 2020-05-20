import React from "react";
import styled from "styled-components";
import { BsBell } from 'react-icons/bs';
import { FiMessageSquare } from 'react-icons/fi'
import { AiOutlineSearch } from 'react-icons/ai'

import Avatar from "./molecules/Avatar";
import { statuses } from "./molecules/Avatar";

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const IconWrapper = styled.div`
    display: flex;
    color: #fff;
  > * {
        font-size: 16px;
        margin-right: 20px;
        cursor:pointer;
        &:hover {
            color: #6441a5;
        }
    }
`;

const Parcourir = () => {
    return (
        <>
            <Header>
                <Avatar status={statuses.online} />
                <IconWrapper>
                    <BsBell />
                    <FiMessageSquare />
                    <AiOutlineSearch />
                </IconWrapper>
            </Header>

        </>
    );
};

export default Parcourir;