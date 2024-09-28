export const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        style={{
          borderRadius: "40px",
          border: "1.5px solid #282D35",
          background:
            "linear-gradient(0deg, rgba(122, 127, 153, 0.20) 0%, rgba(37, 38, 46, 0.14) 51.69%)",
          boxShadow: "-26px 4px 64px 0px #000",
          backdropFilter: "blur(47px)",
          padding: "40px",
          cursor: "pointer",
          display: "none",
        }}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.1806 4.98938C16.6109 4.55908 17.3085 4.55908 17.7388 4.98938L26.5537 13.8042C26.984 14.2345 26.984 14.9322 26.5537 15.3625L17.7388 24.1773C17.3085 24.6076 16.6109 24.6076 16.1806 24.1773C15.7503 23.747 15.7503 23.0493 16.1806 22.619L23.1144 15.6852H2.26836C1.65982 15.6852 1.1665 15.1919 1.1665 14.5833C1.1665 13.9748 1.65982 13.4815 2.26836 13.4815H23.1144L16.1806 6.54764C15.7503 6.11734 15.7503 5.41968 16.1806 4.98938Z"
            fill="white"
          />
        </svg>
      </div>
    );
  };
  
  export   const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow p-[12px] md:p-[13px] xl:p-[15px] 2xl:p-[16px]" onClick={onClick}>
        <svg className="w-[20px] md:w-[22px] xl:w-[26px] 2xl:w-[28px]" 
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.1806 4.98938C16.6109 4.55908 17.3085 4.55908 17.7388 4.98938L26.5537 13.8042C26.984 14.2345 26.984 14.9322 26.5537 15.3625L17.7388 24.1773C17.3085 24.6076 16.6109 24.6076 16.1806 24.1773C15.7503 23.747 15.7503 23.0493 16.1806 22.619L23.1144 15.6852H2.26836C1.65982 15.6852 1.1665 15.1919 1.1665 14.5833C1.1665 13.9748 1.65982 13.4815 2.26836 13.4815H23.1144L16.1806 6.54764C15.7503 6.11734 15.7503 5.41968 16.1806 4.98938Z"
            fill="white"
          />
        </svg>
      </div>
    );
  };
  