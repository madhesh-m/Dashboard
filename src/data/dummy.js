import React from 'react';
import { AiOutlineCalendar, AiFillProject} from 'react-icons/ai';
import { FiAlertTriangle,FiActivity,FiCheckCircle, FiEdit} from 'react-icons/fi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine,} from 'react-icons/ri';

export const EditorData = () => (
  <div>
    <h3 placeholder='Try Writing Something'>

    </h3>
  </div>
);

export const links = [
  {
    title: 'Progress',
    links: [
      {
        name: 'Current',
        icon: <FiActivity />,
      },
      {
        name: 'Pending',
        icon: <FiAlertTriangle />,
      },
      {
        name: 'Finished',
        icon: <FiCheckCircle />,
      },
    ],
  },

  {
    title: 'To-Do',
    links: [
      {
        name: 'Projects',
        icon: <AiFillProject />,
      },
      {
        name: 'Meetings',
        icon: <IoMdContacts />,
      },
      {
        name: 'Daily-Chores',
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: 'Tools',
    links: [
      {
        name: 'calendar',
        icon: <AiOutlineCalendar />,
      },
      {
        name: 'editor',
        icon: <FiEdit />,
      },
    ],
  },


 ];

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];


