'use client';

import styled from 'styled-components';

const SpinnerContainer = styled.div`
  position: fixed;
  left: 65%;
`;

const SpinnerElement = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background: conic-gradient(#0000 10%, #cfbfbf);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
  animation: rotate 1.5s infinite linear;

  @keyframes rotate {
    to {
      transform: rotate(1turn);
    }
  }
`;

function Spinner() {
  return (
    <SpinnerContainer>
      <SpinnerElement />
    </SpinnerContainer>
  );
}

export default Spinner;
