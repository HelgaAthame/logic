"use client";

import { Course } from "@/types/Course";
import { CSSProperties, memo, useMemo, useState } from "react";
import styles from "@/app/page.module.scss";
import { Tags } from "./Tags";
import { Cards } from "./Cards";

interface Props {
  courses: Course[];
}

export const Content = memo(({ courses }: Props) => {
  const tags = useMemo(
    () =>
      Array.from(
        new Set(
          courses.reduce(
            (res: string[], cur) => res.concat(cur.tags),
            ["Все темы"]
          )
        )
      ),
    [courses]
  );

  const [selectedTag, setSelectedTag] = useState<number>(0);

  return (
    <main className={styles.main}>
      <Tags
        tags={tags}
        selectedTag={selectedTag}
        selectTag={(num) => {
          setSelectedTag(num);
        }}
      />
      <Cards courses={courses} selectedTag={selectedTag} tags={tags} />
    </main>
  );
});
