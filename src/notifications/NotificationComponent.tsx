import './NotificationComponent.css';

import * as React from 'react';
import { Notification } from './Notification';

export interface Props {
    notification: Notification;
}

function NotificationComponent ({notification}: Props) {
 return (
     <li className="notification-item">
        <time>{notification.date}</time>
        <a href={notification.link}>{notification.title}</a>
     </li>
 );
}

export default NotificationComponent;