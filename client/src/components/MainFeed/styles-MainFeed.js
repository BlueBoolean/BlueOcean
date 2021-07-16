import styled from 'styled-components';

export const Card = styled.div`
  max-width: 100%;
  margin-top: 1em;
  padding: 0.75em 1em;
  border-radius: 10px;
  background-color: #FFFFFF;
  overflow: visible;
  flex: 1;
  box-shadow: 2px 2px 3px #cccccc, -1px -1px 27px #f1f2f5;
  color: black;
`;

export const CardHeaders = styled.div`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
`;

export const Row = styled.div`
  margin-top: 2px;
  display: flex;
  direction: row;
`;

export const CardContent = styled.div`
  font-family: Roboto;
  margin-left: 1em;
`;

export const Username = styled.div`
  font-weight: 500;
  font-size: 14px;
`;

export const Description = styled.div`
  font-size: 14px;
  margin-top: 2px;
  padding-right: 1em;
  wrap: wrap;
  max-width: auto;
  font-weight: 300;
`;

export const DetailsCol = styled.div`
  font-family: Roboto;
  margin-right: 1.5em;
  text-align: right;
  color: grey;
  flex-wrap: nowrap;
`;

export const Details = styled.div`
  font-size: 14px;
  font-weight: lighter;
  color: grey;
  width: 140%;
`;

export const Subdetails = styled.div`
  font-size: 12px;
  font-weight: lighter;
  color: grey;
  width: 140%;
`;

export const StatusBadge = styled.div`
  border-radius: 100px;
  height: 20px;
  width: 100px;
  z-index: 1;
  background-color: ${(props) => props.theme.statusColor};
  position: absolute;
  text-align: center;
  padding: 1px;
  color: white;
  font-size: 0.75rem;
  font-weight: 400;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transform: scale(1) translate(-57%, -118%);
  transform-origin: 0% 0%;
  box-sizing: border-box;
`;

export const StatusBadgeTasks = styled(StatusBadge)`
transform: scale(1) translate(-10%, -118%);

`;