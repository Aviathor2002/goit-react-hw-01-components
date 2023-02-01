import styled from '@emotion/styled';

export const StatisticBox = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  background: lightcoral;
  border-radius: 10px;
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);

  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
`;

export const StatisticText = styled.span`
  margin-bottom: 0;

  color: #9e9e9e;
  font-size: 18px;
  font-weight: 300;
`;

export const StatisticCounter = styled.span`
  font-size: 16px;
  font-weight: 900;
  color: #2196f3;
`;
