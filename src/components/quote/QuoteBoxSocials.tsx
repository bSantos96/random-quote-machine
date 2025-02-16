import GithubIcon from '../../assets/icons/brands/github.png';
import LinkedInIcon from '../../assets/icons/brands/linkedin.png';
import { Icon } from '../ui/Icon';
import { Link } from "../ui/Link";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/bruno-santos-1b5699182/",
    icon: LinkedInIcon,
  },
  {
    name: "GitHub",
    url: "https://github.com/bSantos96",
    icon: GithubIcon,
  },
];

export const QuoteBoxSocials = () => {
  return <div className='quote-box-socials'>
    {
      socialLinks.map((link, index) => (
        <Link key={index} name={link.name} url={link.url}>
          <Icon src={link.icon} alt={link.name} />
        </Link>
      ))
    }
  </div>
}
