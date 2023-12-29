import m, { RouteLinkAttrs, Vnode } from "mithril";
import "~/styles.css";

const Link: m.Component<RouteLinkAttrs> = {
  view(v: Vnode<RouteLinkAttrs>) {
    return m(
      m.route.Link,
      {
        href: v.attrs.href,
        class: "link",
        style: v.attrs.style
      },
      v.children
    );
  },
};

export default Link;