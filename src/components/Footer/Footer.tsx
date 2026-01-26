import { FooterProps } from '../../models';
import styles from './Footer.module.scss';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer({ socialLinks, copyrightText }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <p>{copyrightText}</p>
          <div className={styles.footerLinks}>
            {socialLinks.map((link) => {
              const key = (link.icon || link.name).toLowerCase();
              const Icon = key.includes('github') ? FaGithub : key.includes('linkedin') ? FaLinkedin : key.includes('instagram') ? FaInstagram : null;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  title={link.name}
                  className={styles.socialLink}
                >
                  {Icon ? <Icon size={24} /> : link.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
