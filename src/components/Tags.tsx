import { memo } from "react";
import styles from "@/app/page.module.scss";
import { Tag } from "./Tag";

interface Props {
  tags: string[];
  selectTag: (num: number) => void;
  selectedTag: number;
}

export const Tags = memo(({ tags, selectTag, selectedTag }: Props) => (
  <aside className={styles.aside}>
    {tags.map((tag, num) => (
      <Tag
        number={num}
        tag={tag}
        key={num}
        selectedTag={selectedTag}
        setNumber={selectTag}
      />
    ))}
  </aside>
));

Tags.displayName = "Tags";
