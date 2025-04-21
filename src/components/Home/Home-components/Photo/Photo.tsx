import photo from "@images/photo.webp";
import cl from "./Photo.module.scss";

const Photo = () => {
  return (
    <div className={cl.container}>
      <img
        className={cl.myPhoto}
        src={photo}
        alt="My photo"
      />
    </div>
  );
};

export default Photo;
