const HeartIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}><path d="M19.5 12.5 12 20 4.5 12.5a5 5 0 1 1 7-7 5 5 0 1 1 7 7Z"/></svg>
);
const CartIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}><path d="M3 3h2l.4 2M7 13h10l3-8H6.4"/><circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/></svg>
);
const UserIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>
);

const TruckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 7h11v8H3z"/><path d="M14 10h4l3 3v2h-7"/><circle cx="7.5" cy="18.5" r="1.5"/><circle cx="18.5" cy="18.5" r="1.5"/></svg>
);
const HeadsetIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 12a8 8 0 0 1 16 0"/><path d="M18 19a2 2 0 0 1-2 2h-3v-6h7v1"/><path d="M6 14v4a2 2 0 0 0 2 2h3"/></svg>
);
const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 3 4 6v6c0 5 3.5 9 8 9s8-4 8-9V6z"/></svg>
);

const QuickViewIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
);


const BaseIcon = ({ children, className = '', ...props }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth="1"
        strokeLinecap="round" 
        strokeLinejoin="round" 
        aria-hidden="true"
        className={`w-full h-full ${className}`} 
        {...props}
    >
        {children}
    </svg>
);

const PhoneLineIcon = (props) => (
    <BaseIcon {...props}>
        <rect x="6" y="2" width="12" height="20" rx="2" ry="2" />
        <line x1="10" y1="4" x2="14" y2="4" />
    </BaseIcon>
);

const ComputerLineIcon = (props) => (
    <BaseIcon {...props}>
        <rect x="2" y="4" width="20" height="12" rx="2" ry="2" />
        <line x1="3" y1="13" x2="21" y2="13" />
        <line x1="10" y1="16" x2="10" y2="20" />
        <line x1="14" y1="16" x2="14" y2="20" />
        <line x1="9" y1="20" x2="15" y2="20" />
    </BaseIcon>
);

const SmartWatchLineIcon = (props) => (
    <BaseIcon {...props}>
        <rect x="7" y="5" width="10" height="10" rx="2" ry="2" />
        <line x1="10" y1="15" x2="10" y2="22" />
        <line x1="10" y1="5" x2="10" y2="2" />
        <line x1="14" y1="15" x2="14" y2="22" />
        <line x1="14" y1="5" x2="14" y2="2" />
        <line x1="10" y1="11" x2="10" y2="13" />
        <line x1="12" y1="10" x2="12" y2="13" />
        <line x1="14" y1="9" x2="14" y2="13" />
        <line x1="17" y1="8" x2="18" y2="8" />
    </BaseIcon>
);

const CameraLineIcon = (props) => (
    <BaseIcon {...props}>
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
    </BaseIcon>
);

const HeadPhonesLineIcon = (props) => (
    <BaseIcon {...props}>
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </BaseIcon>
);

const GamingLineIcon = (props) => (
    <BaseIcon {...props}>
        <rect x="2" y="6" width="20" height="12" rx="2" ry="2" />
        <path d="M6 12h4m-2-2v4m7-4h.01M17 16h.01" />
    </BaseIcon>
);

export { 
    HeartIcon, 
    CartIcon, 
    UserIcon, 
    TruckIcon, 
    HeadsetIcon, 
    ShieldIcon, 
    QuickViewIcon, 
    PhoneLineIcon, 
    ComputerLineIcon, 
    SmartWatchLineIcon, 
    CameraLineIcon, 
    HeadPhonesLineIcon, 
    GamingLineIcon, 
};