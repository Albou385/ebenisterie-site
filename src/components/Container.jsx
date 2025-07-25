function Container({ children }) {
  return (
    <div style={{
      width: "100%",
      maxWidth: "1200px",
      minHeight: "60vh",
      margin: "0 auto",
      padding: "0 2vw",
      boxSizing: "border-box",
      overflowX: "hidden",
    }}>
      {children}
    </div>
  );
}
export default Container;
