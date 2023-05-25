import styled from '@emotion/styled';

export const Form = styled.form`
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
`;

export const Input = styled.input`
  padding: 13px 20px;
  width: 300px;
  border-radius: 4px;

  font-size: 18px;
  color: var(--secondary);

  box-shadow: var(--inset-shadow);
  border: 1px solid black;

  :focus {
    outline: 3px solid black;
  }
`;

export const Button = styled.button`
  padding: 8px 14px;

  font-weight: 700;
  font-size: 22px;

  border-radius: 5px;

  border: 1 px solid black;
  color: black;
  background-color: white;


  transition: all 200ms ease-in-out;
  cursor: pointer;

  :hover,
  :focus-visible {
    color: white;
    background-color: black;
  }

  :focus {
    outline: 3px solid var(--bg);
    box-shadow: 0px 0px 0px 6px var(--accent);
  }
`;
