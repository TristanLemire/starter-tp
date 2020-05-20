import React from "react";
import styled from "styled-components";
import Avatar from "./ui/molecules/Avatar";
import { statuses } from "./ui/molecules/Avatar";

const AppWrapper = styled.div`
  background-color: black;
  height: 100%;
`;

const App = () => {
  return (
    <AppWrapper>
      <Avatar />
      <Avatar status={statuses.crush} />
      <Avatar status={statuses.bolt} />
    </AppWrapper>
  );
};

export default App;
