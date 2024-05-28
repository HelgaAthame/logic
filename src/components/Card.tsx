import { memo } from "react";
import styles from "@/app/page.module.scss";
import Image from "next/image";

interface Props {
  id: string;
  image: string;
  name: string;
}

export const Card = memo(({ id, image, name }: Props) => (
  <div className={styles.card} key={id}>
    <div className={styles.cardImage}>
      <Image
        src={image}
        alt={name}
        objectFit="contain"
        layout="fill"
        sizes="100%"
      />
    </div>
    <div className={styles.cardTitle}>{name}</div>
  </div>
));
