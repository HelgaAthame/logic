import styles from "@/app/page.module.scss";
import { Course } from "@/types/Course";
import { memo } from "react";
import { Card } from "./Card";

interface Props {
  courses: Course[];
  selectedTag: number;
  tags: string[];
}

export const Cards = memo(({ courses, selectedTag, tags }: Props) => (
  <section className={styles.section}>
    {courses
      .filter(
        (course) => selectedTag === 0 || course.tags.includes(tags[selectedTag])
      )
      .map((course) => (
        <Card {...course} key={course.id} />
      ))}
  </section>
));

Cards.displayName="Cards"
