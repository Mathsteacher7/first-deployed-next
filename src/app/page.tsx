import Table from "@/components/table/table";
import style from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1 className={style.title}>מילון המושגים הכלכלי של The real yield</h1>
      <div>
        <Table />
      </div>
    </main>
  );
}
