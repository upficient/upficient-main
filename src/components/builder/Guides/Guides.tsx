import GuidesMain from "@/components/miscellaneous/GuidesMain/GuidesMain";
import "./Guides.scss";

function Guides({ data }: any) {
  return (
    <>
      <GuidesMain type={data.type ? data.type : "blog"} />
    </>
  );
}

export const meta = {
  name: "guides",
  fields: [{ key: "type", label: "Type", type: "text" }],
};

export default Guides;
