import { useParams } from "react-router-dom";

export default function ProjectSlugPage() {
  const { projectSlug } = useParams();
  
  return (
    <div style={{ padding: "2rem", color: "white", background: "#061525" }}>
      <h1>Project: {projectSlug}</h1>
      <p>This is the template page for {projectSlug}.</p>
    </div>
  );
}
