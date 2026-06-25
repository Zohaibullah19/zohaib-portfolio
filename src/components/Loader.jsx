function Loader() {
  return (
    <div className="loader">
      <div className="loader-content">

        <img
          src="/images/zohaib.jpg"
          alt="Zohaib Wazir"
          className="loader-logo"
        />

        <h1>Zohaib Ullah</h1>

        <div className="loader-spinner"></div>

        <p>Loading Portfolio...</p>

      </div>
    </div>
  );
}

export default Loader;