import Intro from '@/components/atomic/molecules/Intro';
import CardGrid from '@/components/atomic/organisms/CardGrid';
import ContactForm from '@/components/atomic/organisms/ContactForm';
import XPGrid from '@/components/atomic/organisms/XPGrid';

export default function Home() {
  return (
    <>
      <Intro />
      <XPGrid />
      <CardGrid />
      <ContactForm/>
    </>
  );
}
