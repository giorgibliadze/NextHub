import EnglishSolutionPage from "../components/EnglishSolutionPage";
import {
  buildGeorgianSchemas,
  georgianIndustryPages,
} from "../lib/georgianIndustryPages";

export default function RealEstateWebsitesPage() {
  return (
    <EnglishSolutionPage
      page={georgianIndustryPages.realEstate}
      locale="ka"
      buildSchemas={buildGeorgianSchemas}
    />
  );
}
