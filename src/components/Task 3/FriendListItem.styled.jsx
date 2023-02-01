import styled from '@emotion/styled';

export const IsOnline = styled.span`
  background: green;

  border-radius: 50%;
  height: 20px;
  width: 20px;
`;
export const IsOffline = styled.span`
  background: red;

  border-radius: 50%;
  height: 20px;
  width: 20px;
`;

export const ForbesItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;

  padding: 10px 30px 10px 10px;
  overflow: hidden;
  border-radius: 10px;

  box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);
  cursor: pointer;

  transition-property: transform, box-shadow;
  transition-duration: 0.25s;
  transition-timing-function: 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  background-color: #ffffff;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
  }
`;

export const Avatar = styled.img`
  width: 60px;
  border-radius: 50%;

  box-shadow: 0px 4px 10px 4px #9e9e9e;
`;

export const Name = styled.p`
  color: #9e9e9e;
  font-weight: 600;
  font-size: 22px;
  letter-spacing: 1px;

  margin-left: 8px;
  margin-bottom: 0;
`;
