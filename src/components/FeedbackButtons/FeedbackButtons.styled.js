import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 8px;
`;
export const Button = styled.button`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  min-width: 120px;
  padding: 8px 16px;
  border: 1px solid #DBDBDB;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 2px 4px 3px rgba(0, 0, 0, 0.2);
  text-transform: capitalize;
  font: inherit;
  font-size: 30px;
  cursor: pointer;
`;
