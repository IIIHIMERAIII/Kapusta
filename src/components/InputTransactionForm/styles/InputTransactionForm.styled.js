import styled from '@emotion/styled';

export const MainContainer = styled.div`
  box-sizing: border-box;
  min-width: 280px;

  display: flex;
  flex-wrap: wrap;

  background-color: #f5f6fb;
  border-bottom-left-radius: 64px;

  /* position: relative;
  z-index: 1; */

  @media screen and (min-width: 768px) and (max-width: 1279.5px) {
    width: 624px;

    background-color: white;
    border-bottom-left-radius: 0;
  }

  @media screen and (min-width: 1280px) {
    flex-wrap: nowrap;

    margin-bottom: 60px;
  }
`;

export const InputForm = styled.form`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  min-width: 280px;

  @media screen and (min-width: 768px) and (max-width: 1279.5px) {
    width: 624px;
    height: 44px;

    row-gap: 34px;
    column-gap: 34px;

    margin-bottom: 48px;
  }

  @media screen and (min-width: 1280px) {
    display: inline-flex;
    column-gap: 32px;
  }
`;

export const InputGroupWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;

  @media screen and (min-width: 768px) and (max-width: 1279.5px) {
    display: inline-flex;
    position: relative;

    height: 44px;
    width: 478px;

    border: 2px solid #f6f7fc;
    border-radius: 16px 16px 16px 0;

    @media screen and (min-width: 1280px) {
      width: 578px;
    }
  }
`;

export const Input = styled.input`
  box-sizing: border-box;

  height: 44px;
  width: 100%;

  background-color: #f5f6fb;
  border: 2px solid #ffffff;

  font-family: inherit;
  font-size: 12px;
  outline: none;

  @media screen and (min-width: 768px) and (max-width: 1279.5px) {
    height: 40px;
    border: none;

    background-color: #ffffff;

    ::placeholder {
      font-family: inherit;
      font-size: 12px;
      font-weight: 400;
      color: #c7ccdc;
    }
  }
`;

export const InputProduct = styled(Input)`
  font-family: inherit;
  font-size: 12px;
  padding-left: 20px;

  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  @media screen and (min-width: 768px) and (max-width: 1279.5px) {
    border-top-left-radius: 0px;
    border-top-right-radius: 16px;
  }
  @media screen and (min-width: 1280px) {
    width: 290px;
  }
`;

export const InputAmountWrapper = styled.div`
  @media screen and (max-width: 767.9px) {
    display: flex;
    position: relative;

    margin-top: 34px;
    margin-bottom: 80px;
    margin-left: auto;
    margin-right: auto;

    width: 183px;
  }
`;

export const InputAmount = styled(Input)`
  @media screen and (min-width: 768px) and (max-width: 1279.5px) {
    flex-shrink: 0;
    padding-right: 42px;
    width: 110px;

    text-align: right;
    border-radius: 0 16px 16px 0;
    overflow: hidden;
  }
  @media screen and (min-width: 1280px) {
    width: 120px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: inline-flex;
  column-gap: 16px;
`;
