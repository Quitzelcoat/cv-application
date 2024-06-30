const ShowCv = () => {
  return (
    <>
      <nav>
        <h2>Name</h2>
      </nav>

      <section className="maincontainer">
        <div className="perDesText">
          <h2>Prersonal Description:</h2>

          <div>
            <p>Date Of Birth: </p>
            <p>Summary: </p>
          </div>
        </div>

        <div className="EducationText">
          <h2>Education:</h2>
          <div className="EduTextDetail"></div>
        </div>

        <div className="workExpText">
          <h2>Work Experience:</h2>
          <div className="workTextDetail"></div>
        </div>

        <div className="skillsText">
          <h2>Skills:</h2>
          <div className="skillsTextDetail"></div>
        </div>
      </section>
    </>
  );
};

export default ShowCv;
