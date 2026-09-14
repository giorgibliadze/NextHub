import EnglishSolutionPage from "../components/EnglishSolutionPage";
import {
  buildGeorgianSchemas,
  georgianIndustryPages,
} from "../lib/georgianIndustryPages";

export default function TourismWebsitesPage() {
  return (
    <EnglishSolutionPage
      page={georgianIndustryPages.tourism}
      locale="ka"
      buildSchemas={buildGeorgianSchemas}
    />
  );
}
