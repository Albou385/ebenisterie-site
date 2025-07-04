function Container({ children }) {
  return (
    <div style={{
      width: "100%",
      minHeight: "100vh",
      padding: "0 2vw",
      boxSizing: "border-box",
      overflowX: "hidden",
    }}>
      {children}
    </div>
  );
}
export default Container;
