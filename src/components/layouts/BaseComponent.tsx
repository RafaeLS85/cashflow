import styles from "./base.module.css";

export default function BaseComponentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className={styles.main}>{children}</main>;
}
