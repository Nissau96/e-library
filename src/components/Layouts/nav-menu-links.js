import { 
    LayoutDashboard, 
    Library, 
    FolderCog, 
    Settings, 
    HelpCircle 
} from 'lucide-react';

export const navMenuLinks = [
    {
        id: 'dashboard',
        icon: LayoutDashboard,
        label: 'Dashboard',
        active: true,
        submenu: [],
        role: 'admin'
    },
    {
        id: 'document-library',
        icon: Library,
        label: 'Document Library',
        active: false,
        submenu: [],
        role: 'user'
    },
    {
        id: 'document-management',
        icon: FolderCog,
        label: 'Document Management',
        active: false,
        submenu: [
            { id: 'upload', label: 'Upload' },
            { id: 'approval', label: 'Approval' },
            { id: 'recycle-bin', label: 'Recycle Bin' }
        ],
        role: 'admin'
    },
    {
        id: 'settings',
        icon: Settings,
        label: 'Settings',
        active: false,
        submenu: [
            { id: 'profile', label: 'Profile' },
            { id: 'reset-password', label: 'Reset Password' }
        ],
        role: 'user'
    },
    {
        id: 'help-support',
        icon: HelpCircle,
        label: 'Help & Support',
        active: false,
        submenu: [],
        role: 'user'
    }
];