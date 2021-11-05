import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

library.add(faTwitter);
library.add(faInstagram);
library.add(faLinkedin);
library.add(faGithub);
library.add(faPhone);
library.add(faFacebookSquare);
library.add(faEnvelope)

export default FontAwesomeIcon;
