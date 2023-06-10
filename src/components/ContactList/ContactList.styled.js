import styled from 'styled-components';

export const List = styled.ul`
width: 350px;
  background-color: #9370db;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #000;
  padding: 20px;
  border-radius: 10px;
`;

export const Item = styled.li`
  font-size: 17px;
  background-color: #fff;
  border: 1px solid #000;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Text = styled.p`
  display: inline-block;
  min-width: 230px;
`;

export const Button = styled.button`
  width: 70px;
  padding-top: 3px;
  padding-bottom: 3px;
  margin-left: 10px;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.5s ease;

  &:hover,
  &:focus {
    background-color: #c4c4c4;
  }
`;