import ContactButton from 'components/contactButton';
import NavigationLinks from 'components/navigationLinks';
import Presentation from 'components/presentation';
import SocialMedias from 'components/socialMedias';
import appStyle from './start.style';

function Start() {
  return (
    <div className={appStyle}>
      <Presentation/>
      <ContactButton/>
      <NavigationLinks/>

      <SocialMedias/>
    </div>
  );
}

export default Start;
