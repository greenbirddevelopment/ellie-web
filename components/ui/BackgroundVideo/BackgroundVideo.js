import styles from "./BackgroundVideo.module.css";

const BackgroundVideo = ({ backgroundVideo }) => {
  if (backgroundVideo)
    return (
      <div
        id={styles.container}
        className="absolute top-0 left-0 w-full object-cover"
      >
        <video
          id="video"
          className="absolute w-full h-full object-cover"
          controls={false}
          autoPlay={true}
          loop={true}
          onLoad={() => {
            document.getElementById("video").removeAttribute("controls");
            document.getElementById("video").setAttribute("autoPlay", true);
          }}
        >
          <source
            src={backgroundVideo.source}
            type="video/mp4"
            title={backgroundVideo.title}
          />
        </video>
      </div>
    );
};

export default BackgroundVideo;
