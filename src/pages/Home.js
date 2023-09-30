import { Container, Title } from './Home.styled';
import phoneImage from '../.././src/pages/contacts.png';

export default function Home() {
  return (
    <Container>
      <Title>
        Welcome to the contact book{' '}
        <img src={phoneImage} alt="Phone" width="300" height="300" />
      </Title>
    </Container>
  );
}
