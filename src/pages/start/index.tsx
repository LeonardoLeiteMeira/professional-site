import ContactButton from 'components/contactButton';
import NavigationLinks from 'components/navigationLinks';
import Presentation from 'components/presentation';
import SocialMedias from 'components/socialMedias';
import './Start.css';

function Start() {
  

  return (
    <div className="App">
      <Presentation/>
      <ContactButton/>
      <NavigationLinks/>

      <SocialMedias/>
    </div>
  );
}

export default Start;
