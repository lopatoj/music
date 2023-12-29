import m from "mithril";
import "~/styles.css";

import Header from "~/components/header";
import Container from "~/components/container";
import Plate from "~/components/plate";
import Link from "~/components/link";

interface Page extends m.Component {
  posts: any[];
  addPost: (post: String) => void;
}

const Main: Page = {
  posts: [],
  addPost: () => {
    Main.posts.push("poast");
  },
  view: (v) => {
    return [m(Header, m("a.link", {onclick: v.state.addPost}, "add post")), m(Container, v.state.posts.map((post: String) => m(Plate, m("div", post))))];
  },
};

export default Main;
