function Center({ children, style, id, className }) {
  return (
    <>
      <center
        style={style || {}}
        id={id || ""}
        className={`absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] ${className}`}
      >
        {children}
      </center>
    </>
  );
}

export default Center;
