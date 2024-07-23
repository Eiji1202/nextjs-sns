import { SidebarMenu } from 'types';
import { Home, Bell, User, Mail } from 'lucide-react';

export const sidebarMenus: SidebarMenu[] = [
  { name: 'ホーム', icon: Home, url: '/home' },
  { name: '通知', icon: Bell, url: '/notifications' },
  { name: 'メッセージ', icon: Mail, url: '/messages' },
  { name: 'プロフィール', icon: User, url: '/profile' },
];
