import styled from "styled-components";

export const AppointmentStyles = styled.div`
  padding: 30px;

  .top-nav {
    display: flex;
    flex-direction: column;
    gap: 20px;

    h1 {
      font-size: 20px;
    }

    img {
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }

    .left-wrapper {
      display: flex;
    }

    .right-wrapper {
      display: flex;

      select {
        border: 2px solid #e0e0e0;
        padding: 10px 20px;
        border-radius: 40px;
        height: fit-content;
        color: black;
      }
    }
  }
`;
