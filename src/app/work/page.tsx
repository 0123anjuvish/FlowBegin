import fs from "fs";
import path from "path";
import WorkClient from "./WorkClient";

export const dynamic = "force-dynamic";

export default function WorkPage() {
  const workDir = path.join(process.cwd(), "public", "work");
  let fileNames: string[] = [];

  try {
    if (fs.existsSync(workDir)) {
      fileNames = fs.readdirSync(workDir);
    }
  } catch (error) {
    console.error("Error reading public/work directory:", error);
  }

  // Filter only image files
  const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".svg", ".gif"];
  const allImages = fileNames.filter((file) => {
    const ext = path.extname(file).toLowerCase();
    return imageExtensions.includes(ext);
  });

  const categories = [
    {
      title: "Education",
      description: "Providing quality education and learning materials to underprivileged children to ensure they have a strong foundation for their future. Our programs cover primary education, remedial classes, and digital literacy.",
      status: "Active",
      impact: "500+ Children Enrolled",
      prefixes: ["education"]
    },
    {
      title: "Placement",
      description: "Equipping young adults with vocational skills and connecting them with employment opportunities to build sustainable careers. This includes industrial visits, resume building, and job interview preparation.",
      status: "Active",
      impact: "200+ Placements Secured",
      prefixes: ["placement", "industrial"]
    },
    {
      title: "Environment",
      description: "Driving community-led environmental initiatives like tree planting, waste management, and environmental awareness campaigns to create a cleaner, greener tomorrow.",
      status: "Active",
      impact: "10,000+ Trees Planted",
      prefixes: ["environment"]
    },
    {
      title: "Sports Support",
      description: "Encouraging physical fitness, teamwork, and discipline through organized sports programs, professional coaching, and providing necessary athletic gear to promising young talents.",
      status: "Active",
      impact: "50+ Sports Events",
      prefixes: ["sports"]
    },
    {
      title: "Women Empowerment",
      description: "Empowering women through skill development, financial literacy, vocational training, and self-defense programs to foster independence and self-reliance.",
      status: "Active",
      impact: "1,000+ Women Supported",
      prefixes: ["women"]
    }
  ];

  // Group images into projects based on filename prefix
  const projects = categories.map((cat) => {
    const catImages = allImages
      .filter((img) => {
        const lowerName = img.toLowerCase();
        return cat.prefixes.some((prefix) => lowerName.startsWith(prefix.toLowerCase()));
      })
      .map((img) => `/work/${img}`);

    return {
      title: cat.title,
      description: cat.description,
      status: cat.status,
      impact: cat.impact,
      images: catImages.length > 0 ? catImages : ["/placeholder.jpg"]
    };
  });

  return <WorkClient initialProjects={projects} />;
}
