import m from "mithril";
import "~/styles.css";

import Link from "~/components/link";

const Header: m.Component = {
  view: () => {
    return m(
      "div.header.center",
      m(
        "div",
        {
          style: {
            maxWidth: "50%",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
          },
        },
        [
          m(
            Link,
            {
              href: "/",
              style: {
                fontWeight: "bold",
              },
            },
            m("div", { style: { display: "flex", alignItems: "center" } }, [
              m("img", {
                src: "/images/icon.png",
                alt: "Music.com",
                style: {
                  height: "1.5rem",
                  width: "1.5rem",
                  marginRight: "0.5rem",
                },
              }),
              "music.com",
            ])
          ),
          m(
            "nav",
            {
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1rem",
              },
            },
            [
              m(Link, { href: "/" }, "home"),
              m(Link, { href: "/about" }, "about"),
              m(Link, { href: "/upload" }, "upload"),
            ]
          ),
        ]
      )
    );
  },
};

export default Header;
