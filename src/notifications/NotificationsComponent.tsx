
import * as React from 'react';
import { Notification } from './Notification';
import NotificationComponent from './NotificationComponent';
let styles = require('./NotificationsComponent.css');

export interface Props {
    notifications: Notification[];
}

function NotificationsComponent ({notifications}: Props) {
    return (
        <div className={styles.notificationsCard}>
            <header>
                <h3>Notifications</h3>
            </header>
            <ul>
                {notifications.map(item => (
                    <NotificationComponent notification={item} />
                ))}
            </ul>
        </div>
    );
}

export default NotificationsComponent;
