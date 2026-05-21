import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";

const mdxSource = docs.toFumadocsSource();

// fumadocs-mdx returns files as a lazy function, fumadocs-core expects an array
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const files = (mdxSource.files as any)();

export const source = loader({
  baseUrl: "/",
  source: { files },
});
