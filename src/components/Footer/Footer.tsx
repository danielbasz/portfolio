import { FooterProps } from '../../models';
import styles from './Footer.module.scss';

export default function Footer({ socialLinks, copyrightText }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>{copyrightText}</p>
        <div className={styles.footerLinks}>
          <a href="mailto:danielbassporto@gmail.com">Contact</a>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
