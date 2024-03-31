import { FCBriefcase } from '@icongo/fc';
import { ICIconEducation } from '@icongo/ic';

function VerticalTimelineElementData({ since, until, icon, ...props }) {
  return {
    elementProps: {
      date: [since, until].filter(Boolean).join(' - '),
      contentStyle: {
        background: 'rgba(33, 33, 33, 0.5)',
        color: '#ddd',
      },
      contentArrowStyle: {
        borderRight: '10px solid #ccc',
      },
      iconStyle: {
        background: '#2d1950',
      },
      icon: icon,
    },
    ...props,
  };
}

export const Experiences = [
  VerticalTimelineElementData({
    type: 'education',
    icon: <ICIconEducation />,
    since: '2013.10',
    until: '2017.7',
    title: 'Bachelor in Computer Science',
    company: 'Thomas Edison State University',
    address: 'Trenton, N.J. United States',
    details: ['Computer Science', 'Web Programming'],
  }),

  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: '2018.2',
    until: '2018.12',
    title: 'Junior Web Developer',
    company: 'Spenny For Hire',
    address: 'Alberta, Canada',
    details: [
      'Implemented 15 custom backend features, tailoring solutions to meet project-specific needs as a PHP intern.',
      'Adapted and personalized 10 WooCommerce features to align precisely with project specifications, showcasing versatility in PHP development',
      'Enhanced design consistency across the site by 20% through adept template customization as part of the internship.',
      'Contributed to brand alignment with the implementation of 10 theme customizations, enriching the overall user experience in the PHP intern role.',
    ],
  }),
  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: '2019.2',
    until: '2020.8',
    title: 'JavaScript developer',
    company: 'agente',
    address: 'Gdansk, Poland',
    site: 'https://agentestudio.com/',
    details: [
      'Increased user engagement by 25% through a responsive and feature-rich user interface.',
      'Achieved a 20% improvement in page load times, ensuring optimal platform performance.',
      'Reduced checkout time by 30%, providing a seamless user experience.',
      'Achieved a 40% reduction in security vulnerabilities, contributing significantly to the overall security posture.',
    ],
  }),
  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: '2020.11',
    until: '2022.4',
    title: 'Full Stack Developer',
    company: 'Hollar',
    address: 'Commerce, CA, United States',
    details: [
      'Improved order processing speed by 25%, resulting in quicker checkout experiences.',
      'Enhanced payment transaction security, leading to a 20% reduction in transactionrelated issues.',
      'Improved SEO rankings by 15% through optimized SSR handling of dynamic content.',
      'Implemented secure access controls, reducing unauthorized access attempts by 25%.',
    ],
  }),
  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: '2022.6',
    until: '2023.10',
    title: 'Senior Backend Developer',
    company: 'Corner',
    address: 'Warsaw, Poland',
    site: 'https://www.joincorner.com/',
    details: [
      'Diversified the platform by adding support for 5 new product categories,enhancing ecommerce capabilities.',
      'Fortified security measures, resulting in a 40% reduction in vulnerabilities for as afer online shopping experience.',
      'Accelerated page load speed by 50% through the implementation of lazy loading, optimizing the customer browsing experience.',
      'Enhanced overall platform responsiveness by 20%, ensuring a smoother and more enjoyable ecommerce journey for users.',
    ],
  }),
].sort(({ since: as, until: au }, { since: bs, until: bu }) => (as < bs || au < bu ? 1 : -1));
