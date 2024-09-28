const CustomDot = ({ active, onClick }) => {
    return (
      <div className="">
        <div
        onClick={onClick}
        className={`dot ${active ? 'active' : ''}`} // Add active class if it's the current dot
        style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%', // Make it circular
          margin: '0 6px', // Gap of 12px (6px on each side)
          cursor: 'pointer',
          marginTop: '60px',
          background: active
            ? 'linear-gradient(180deg, #666A80 0%, #000 100%)'
            : 'linear-gradient(180deg, #000 0%, #000 100%)',
          border: active ? '2px solid var(--Text, #0A5CFF)' : '1px solid #2F323C',
        }}
      />

      </div>
    );
  };
  
  export default CustomDot;
  