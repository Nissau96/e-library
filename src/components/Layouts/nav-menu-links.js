import { 
    LayoutDashboard, 
    Library, 
    FolderCog, 
    Settings, 
    HelpCircle 
} from 'lucide-react';

export const navMenuGroups = [
    {
        title: "Overview",
        items: [
            {
                id: 'dashboard',
                icon: LayoutDashboard,
                label: 'Dashboard',
                active: true,
                role: 0
            }
        ]
    },
    {
        title: "Workspace",
        items: [
            {
                id: 'document-library',
                icon: Library,
                label: 'Document Library',
                active: false,
                submenu: [],
                role: 0
            },
            {
                id: 'file-manager',
                icon: FolderCog,
                label: 'File Manager',
                active: false,
                badge: '3', 
                submenu: [
                    { id: 'upload', label: 'Upload' },
                    { id: 'approval', label: 'Workflow', badge: 'New' }, 
                    { id: 'recycle-bin', label: 'Recycle Bin' }
                ],
                role: 0
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
                role: 0
            },
            {
                id: 'help-support',
                icon: HelpCircle,
                label: 'Help & Support',
                active: false,
                submenu: [],
                role: 0
            }
        ]
    }
];