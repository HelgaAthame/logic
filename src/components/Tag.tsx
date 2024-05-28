import { memo } from "react";
import cn from "classnames";
import styles from "@/app/page.module.scss";

interface Props {
  number: number;
  setNumber: (num: number) => void;
  selectedTag: number;
  tag: string;
}

export const Tag = memo(({ number, setNumber, selectedTag, tag }: Props) => (
  <div
    className={cn(styles.tag, selectedTag === number && styles.selectedTag)}
    onClick={() => {
      setNumber(number);
    }}
  >
    {tag}
  </div>
));
