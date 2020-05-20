import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

export const statuses = {
  bolt: "bolt",
  crush: "crush",
  online: "online"
};

const size_shrinked = "5rem";
const size_default = "5.6rem";

const handleIconType = type => {
  switch (type) {
    case statuses.crush:
      return css`
        /* icon crush */
      `;
    case statuses.bolt:
      return css`
        /* icon crush */
      `;
    default:
      return;
  }
};

const handleAvatarLayout = type => {
  switch (type) {
    case statuses.online:
      return css`
        &::before {
          content: " ";
          position: absolute;
          z-index: 3;
          top: 50%;
          right: -5px;
          transform: translateY(-50%);
          width: 10px;
          height: 10px;
          background-color: red;
          border: 3px solid #fff;
          border-radius: 50%;
        }
      `;
    case statuses.crush:
      return css`
        border: 0.2rem solid red;

        &::after {
          content: " ";
          position: absolute;
          z-index: 1;
          top: 0;
          left: 0;
          width: calc(100% - 0.2rem);
          height: calc(100% - 0.2rem);
          border: 0.1rem solid #fff;
          border-radius: 50%;
        }
      `;
    case statuses.bolt:
      return css``;
    default:
      return;
  }
};

const AvatarWrapper = styled.div`
  position: relative;
  display: inline-flex;
  margin: 15px;
  border-radius: 50%;

  ${props => handleAvatarLayout(props.status)};
`;

const ImageWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  height: ${props =>
    props.status === statuses.crush ? size_shrinked : size_default};
  width: ${props =>
    props.status === statuses.crush ? size_shrinked : size_default};
  border-radius: 50%;

  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
`;

const IconWrapper = styled.div`
  position: absolute;
`;

const Icon = styled.div`
  ${props => handleIconType(props.status)};
`;

const Avatar = props => {
  const { status, url } = props;

  return (
    <AvatarWrapper {...props}>
      <ImageWrapper>
        <Image {...props} src={url} alt="" />
      </ImageWrapper>

      {status === statuses.crush || statuses.bolt ? (
        <IconWrapper>
          <Icon />
        </IconWrapper>
      ) : (
        ""
      )}
    </AvatarWrapper>
  );
};

Avatar.propTypes = {
  status: PropTypes.oneOf(Object.keys(statuses)),
  url: PropTypes.string,
  icon: PropTypes.string
};

Avatar.defaultProps = {
  status: statuses.online,
  url:
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
  icon: null
};

export default Avatar;
