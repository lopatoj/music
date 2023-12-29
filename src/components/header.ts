import m, { Children, Vnode } from "mithril";
import "~/styles.css";

import Link from "~/components/link";

const Header: m.Component<Children> = {
  view: (v: Vnode<Children>) => {
    return m(
      "div.header.center",
      m("div.width.nav", [
        m(
          Link,
          {
            href: "/",
            style: {
              fontWeight: "bold",
            },
          },
          m("div", { style: { display: "flex", alignItems: "center" } }, [
            m("img.icon", {
              src: "/images/icon.png",
              alt: "Music.com",
            }),
            "music.com",
          ])
        ),
        m("div.nav", [
          v.children,
          m(Link, { href: "/" }, "home"),
          m(Link, { href: "/about" }, "about"),
          m(Link, { href: "/upload" }, "upload"),
        ]),
      ])
    );
  },
};

export default Header;
