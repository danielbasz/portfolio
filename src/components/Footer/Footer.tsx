import { FooterProps } from '../../models';
import styles from './Footer.module.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer({ socialLinks, copyrightText }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>{copyrightText}</p>
        <div className={styles.footerLinks}>
          <a href="mailto:danielbassporto@gmail.com">Contact</a>
          {socialLinks.map((link) => {
            const key = (link.icon || link.name).toLowerCase();
            const Icon = key.includes('github') ? FaGithub : key.includes('linkedin') ? FaLinkedin : null;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                title={link.name}
              >
                {Icon ? <Icon size={20} /> : link.name}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
