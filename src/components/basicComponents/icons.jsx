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

export { HeartIcon, CartIcon, UserIcon, TruckIcon, HeadsetIcon, ShieldIcon, QuickViewIcon };