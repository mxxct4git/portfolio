import { visit } from "unist-util-visit";

export default function remarkComment() {
  return (tree) => {
    visit(tree, "html", (node, index, parent) => {
      if (node.value.startsWith("<!--") && node.value.endsWith("-->")) {
        const commentText = node.value.slice(4, -3).trim();
        parent.children[index] = {
          type: "comment",
          value: commentText,
        };
      }
    });
  };
}
