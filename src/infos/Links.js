import { ICPGithubIconWhite } from '@icongo/ic';
import { IUMicrosoftOutlook } from '@icongo/iu';
import { LGGithubIcon, LGGoogleGmail } from '@icongo/lg';
import { VLSkype } from '@icongo/vl';

export const LinkInfos = [
  {
    href: 'mailto:poxii2001@gmail.com',
    icon: {
      dark: LGGoogleGmail,
      light: LGGoogleGmail,
    },
    label: 'GMail',
  },
  {
    href: 'https://join.skype.com/invite/CesoNNRu2asp',
    icon: {
      dark: VLSkype,
      light: VLSkype,
    },
    label: 'Skype',
  },
  {
    href: 'https://github.com/poxii',
    icon: {
      dark: LGGithubIcon,
      light: ICPGithubIconWhite,
    },
    label: 'Github',
  },
];
