import styled from '@emotion/styled';

export const Conteiner = styled.div`
  width: 400px;

  margin: auto;
`;

export const Avatar = styled.img`
  width: 200px;
  border-radius: 50%;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Name = styled.p`
  font-weight: 800;
  font-size: 16px;
  line-height: 19px;
`;

export const InfoText = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
  background-color: lightgrey;
`;
export const StatItem = styled.li`
  border: 1px;
  display: flex;
  flex-direction: column;
`;
export const StatName = styled.span`
  font-weight: 900;
`;
export const StatNum = styled.span`
  font-weight: 400;
`;
