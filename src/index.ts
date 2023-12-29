import m from "mithril";
import "~/styles.css";

import Main from "~/views/main";

m.route(document.body as HTMLElement, "/", {
  "/": Main,
});
