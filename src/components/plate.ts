import m, { Vnode } from "mithril";
import "~/styles.css";

const Plate: m.Component = {
  view: (v: Vnode) => {
    return m(
      "div.plate",
      {
        style: {
          padding: "1rem",
          backgroundColor: "rgb(10, 16, 14, 0.7)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "5px",
        },
      },
      v.children
    );
  },
};

export default Plate;