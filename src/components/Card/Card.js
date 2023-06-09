import styles from "./Card.module.scss";

const Card = ({ results }) => {
  let display;

  if (results) {
    display = results.map((result) => {
      let { id, image, name, status, location } = result;

      // (() => {
      //   if (status === "Dead") {
      //     return (
      //       <div
      //         className={`${styles.badge} position-absolute badge bg-danger`}
      //       >
      //         {status}
      //       </div>
      //     );
      //   } else if (status === "Alive") {
      //     return (
      //       <div
      //         className={`${styles.badge} position-absolute badge bg-success`}
      //       >
      //         {status}
      //       </div>
      //     );
      //   } else {
      //     return (
      //       <div
      //         className={`${styles.badge} position-absolute badge bg-secondary`}
      //       >
      //         {status}
      //       </div>
      //     );
      //   }
      // })();

      return (
        <div>
          <div
            className={`${styles.card} d-flex flex-column justify-content-center`}
          >
            <img className={`${styles.img} img-fluid`} src={image} alt="" />
            <div className={`${styles.content}`}>
              <div className="fs-5 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6 fw-normal">Last Location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    <h1 className="text-center">Loading...</h1>;
  }

  return <div>{display}</div>;
};

export default Card;
