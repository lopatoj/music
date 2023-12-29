import m from "mithril";
import "~/styles.css";

const Container: m.Component = {
  view: (v) => {
    return m("div.center", m("div.width", v.children));
  },
};

export default Container;
