import { useParams } from "react-router-dom";

export default function ProjectSlugPage() {
  const { projectSlug } = useParams();

  // Example project data (later we can fetch from API or JSON)
  const projects = {
    "oasis-cancun": {
      title: "Oasis Capital – Cancun",
      subtitle: "Luxury Oceanfront Residences",
      description: "A premium real estate project located in Cancun, offering unmatched views, world-class amenities, and an exclusive investment opportunity.",
      heroImage: "/images/oasis-cancun-hero.jpg",
      features: [
        "Beachfront location with panoramic views",
        "Infinity pool & spa",
        "24/7 concierge service",
        "Private gym & wellness center",
      ]
    },
    "oasis-tulum": {
      title: "Oasis Capital – Tulum",
      subtitle: "Jungle Villas & Retreats",
      description: "A boutique eco-luxury community in the heart of Tulum's lush jungle.",
      heroImage: "/images/oasis-tulum-hero.jpg",
      features: [
        "Sustainable architecture",
        "Private plunge pools",
        "Yoga & meditation spaces",
        "Organic farm-to-table dining",
      ]
    }
  };

  const project = projects[projectSlug] || {
    title: "Project Not Found",
    subtitle: "",
    description: "This project is not yet available.",
    heroImage: "",
    features: []
  };

  return (
    <div style={{ color: "white", backgroundColor: "#061525", fontFamily: "Arial, sans-serif" }}>
      {/* Hero Section */}
      <div style={{
        backgroundImage: `url(${project.heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <h1 style={{ backgroundColor: "rgba(0,0,0,0.5)", padding: "1rem 2rem", borderRadius: "10px" }}>
          {project.title}
        </h1>
      </div>

      {/* Content Section */}
      <div style={{ padding: "2rem" }}>
        <h2>{project.subtitle}</h2>
        <p>{project.description}</p>

        <h3>Key Features</h3>
        <ul>
          {project.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
