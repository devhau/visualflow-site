import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="https://demo.visualflow.cc/">
            <a>Demo</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Visual Flow Creator\n'}
            <span className="text-primary-500">Javascript</span>
          </>
        }
        description="Support for framework reactjs, vue, angular, html."
        button={
          <Link href="https://github.com/devhau/visualflow">
            <a>
              <Button xl>View Source</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
