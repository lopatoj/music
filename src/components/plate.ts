import m from "mithril";
import "~/styles.css";

const Plate: m.Component = {
  view: (v) => {
    return m(
      "div.plate",
      {
        style: {
          padding: "1rem",
          backgroundColor: "rgb(10, 16, 14, 0.4)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "5px",
          marginBottom: "1rem",
        },
      },
      v.children
    );
  },
};

export default Plate;