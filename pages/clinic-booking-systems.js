import EnglishSolutionPage from "../components/EnglishSolutionPage";
import {
  buildGeorgianSchemas,
  georgianIndustryPages,
} from "../lib/georgianIndustryPages";

export default function ClinicBookingSystemsPage() {
  return (
    <EnglishSolutionPage
      page={georgianIndustryPages.clinic}
      locale="ka"
      buildSchemas={buildGeorgianSchemas}
    />
  );
}
