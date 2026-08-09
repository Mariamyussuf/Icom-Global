export default function Container({ children, className = '' }) {
  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}
      className={`px-4 sm:px-6 md:px-12 ${className}`}
    >
      {children}
    </div>
  );
}
