import InstagramIcon from '../assets/icons/instagram.svg';
import TelegramIcon from '../assets/icons/telegram.svg';
import EmailIcon from '../assets/icons/email.svg';

export enum ContactsIds {
    Telegram = 'telegram',
    Instagram = 'instagram',
    Email = 'Email',
}

export const contactsData = [
    {
        id: ContactsIds.Telegram,
        title: "Telegram",
        value: "@FuchsTelegram",
        icon: TelegramIcon,
        link: "////",
    },
    {
        id: ContactsIds.Instagram,
        title: "Instagram",
        value: "@FuchsFuchsFuchs",
        icon: InstagramIcon,
        link: "////",
    },
    {
        id: ContactsIds.Email,
        title: "Email",
        value: "fuchs.and.fox@gmail.com",
        icon: EmailIcon,
        link: "////",
    }
]