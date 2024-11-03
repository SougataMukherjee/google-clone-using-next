import SearchHeader from "@/components/SearchHeader";
import "./../globals.css";

export default function layout({ children }: { children: any }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
