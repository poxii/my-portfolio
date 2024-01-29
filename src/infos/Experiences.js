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
    company: 'Warsaw University of Technology',
    address: 'Warsaw, MZ, Poland',
    site: 'https://eng.pw.edu.pl/',
    details: ['Computer Science', 'Web Programming'],
  }),

  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: '2018.2',
    until: '2018.12',
    title: 'Junior wordpress developer',
    company: 'House of Puff',
    address: '1412 Broadway, New York City, New York, 10018, United States',
    site: 'https://houseofpuff.com/',
    details: [
      'Implemented custom backend functionalities required for the e-commerce site using WordPress and PHP.',
      'Worked on extending and customizing WooCommerce features based on project requirements.',
      'Integrated third-party APIs for payment gateways, shipping, and other services.',
      'Customized WooCommerce templates and themes to match the design and branding requirements.',
    ],
  }),
  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: '2019.2',
    until: '2020.8',
    title: 'Backend Developer',
    company: 'agente',
    address: 'Gdansk, Poland',
    site: 'https://agentestudio.com/',
    details: [
      'Spearheaded the end-to-end development and refinement of an e-commerce platform, wielding Angular for a dynamic frontend and Express.js for a resilient backend. Engineered a responsive and feature-rich user interface, ensuring optimal performance and user engagement.',
      'Architected the integration of payment gateways by harnessing the power of Express.js on the backend. Engineered a streamlined checkout process for a seamless user experience, optimizing the platform for swift and secure payment transactions.',
      'Engineered a real-time inventory tracking system, leveraging Express.js on the backend. Elevated user experience by providing up-to-the-minute product availability information, showcasing expertise in backend systems for dynamic data management.',
    ],
  }),
  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: '2020.11',
    until: '2022.4',
    title: 'Backend Developer',
    company: 'The Fresh Market',
    address: '300 N Greene St Ste 1100, Greensboro, North Carolina, 27401, United States',
    site: 'https://www.thefreshmarket.com/',
    details: [
      'Strengthened the backend e-commerce functionality, optimizing order processing, securing payment transactions, and implementing real-time inventory updates. Leveraged backend technologies to ensure a seamless and secure shopping experience.',
      'Leveraged Next.js for backend-driven server-side rendering (SSR), focusing on optimizing backend performance. Implemented SSR to handle dynamic content generation, enhancing both backend efficiency and SEO capabilities.',
      'Developed and implemented robust backend mechanisms for user authentication and authorization. Ensured the protection of user data and established secure access controls for different backend components, emphasizing data security.',
    ],
  }),
  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: '2022.6',
    until: '2023.10',
    title: 'Backend Developer',
    company: 'Corner',
    address: 'Warsaw, Poland',
    site: 'https://www.joincorner.com/',
    details: [
      'Engineered a robust and scalable Content Management System (CMS) using JavaScript on the backend. This system facilitates the seamless management of health-related content, ensuring efficiency in content creation, editing, and publishing.',
      'Implemented robust backend mechanisms for secure user authentication and authorization. Leveraged JavaScript frameworks to control access levels, ensuring users have precise permissions for various health content types.',
      'Employed backend JavaScript optimization techniques to enhance platform performance. Implemented strategies such as lazy loading and efficient caching mechanisms to achieve fast page loads and improved responsiveness.',
    ],
  }),
].sort(({ since: as, until: au }, { since: bs, until: bu }) => (as < bs || au < bu ? 1 : -1));
