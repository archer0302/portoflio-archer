import '../styles.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #9CC1C0;
  width: 250px;
  height: 100vh;
  text-align: right;
  font-size: 24px;
`;

const Option = styled.div`
  margin: 12px;
`;

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <Wrapper>
      <Menu>
        <Option>About me</Option>
        <Option>About me</Option>
        <Option>About me</Option>
        <Option>About me</Option>
      </Menu>
      <Component {...pageProps} />
    </Wrapper>
  )
}
