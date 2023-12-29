import m from "mithril";
import "~/styles.css";

const Container: m.Component = {
  view: (v) => {
    return m(
      "div.center",
      m("div", { style: { width: "50%", padding: "1rem" } }, v.children)
    );
  },
};

export default Container;
