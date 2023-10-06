import { Container, PageFooter } from './Styles';
import { Link } from 'react-router-dom';
import SocialNav from '../socialNav/SocialNav';

const Footer = () => {
  return (
    <PageFooter>
      <Container>
        <p>
          Copyright © 2023 <Link to="/">André Meyer</Link>
        </p>
        <SocialNav />
      </Container>
    </PageFooter>
  )
}

export default Footer;