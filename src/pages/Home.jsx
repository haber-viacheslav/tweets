import { Container } from 'components/Container/Container';
import { Section } from 'components/Section/Section';
import { Description } from 'components/Description/Description';
import { DescriptionList, DescriptionItem, BgWrapper } from './Home.styled';

const mainTextArray = [
  {
    id: 1,
    text: `             Welcome to the "Tweets" app! Tired of the endless stream of
              information on social media? Want to focus on what truly matters -
              the messages that interest you? Look no further! "Tweets" is the
              app designed to let you enjoy the power and simplicity of the most
              popular social platform - Twitter.`,
  },
  {
    id: 2,
    text: `             We've made it our mission to give you control over your Twitter
              experience and make browsing and posting tweets a truly enjoyable
              experience. What can you expect from our app? First and foremost,
              convenience. We provide a simple and intuitive interface that
              allows you to easily browse and engage with tweets.`,
  },
  {
    id: 3,
    text: `           Discover new people, follow their updates, and share your thoughts
              and ideas with the world. Secondly, personalization. We understand
              that everyone is unique and has their own preferences and
              interests.`,
  },
  {
    id: 4,
    text: `              That's why we've built a recommendation system that ensures you
              receive the most relevant content tailored to your tastes. So,
              whether you're a casual user or a Twitter enthusiast, "Tweets" has
              got you covered. Download the app now and unlock a whole new level
              of Twitter experience. Let the tweeting begin!`,
  },
];
const Home = () => {
  return (
    <BgWrapper>
      <Section title="Tweets">
        <Container>
          <DescriptionList>
            {mainTextArray.map(({ id, text }) => {
              return (
                <DescriptionItem key={id}>
                  <Description>{text}</Description>
                </DescriptionItem>
              );
            })}
          </DescriptionList>
        </Container>
      </Section>
    </BgWrapper>
  );
};
export default Home;
