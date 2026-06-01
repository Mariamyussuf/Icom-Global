export default function Container({ children, className = '' }) {
  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        paddingLeft: '48px',
        paddingRight: '48px',
      }}
      className={className}
    >
      {children}
    </div>
  );
}
