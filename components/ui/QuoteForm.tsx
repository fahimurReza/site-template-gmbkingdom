import Button from "./Button";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";

const QuoteForm = () => {
  return (
    <div className="p-8 bg-white text-gray-800 rounded-2xl shadow-lg max-w-lg w-full h-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Get a Free Quote</h2>
      <p className="text-gray-500 text-sm">
        Share your project scope and we'll deliver a complete proposal within
        two business days.
      </p>
      <form className="my-8">
        <div className="grid grid-cols-2 gap-x-6">
          <TextInput label="Name" type="text" placeholder="John Doe" required />
          <TextInput
            label="Email"
            type="email"
            placeholder="you@example.com"
            required
          />
          <TextInput
            label="Phone Number"
            type="tel"
            placeholder="(123) 456-7890"
            required
          />
          <TextInput
            label="Address"
            type="text"
            placeholder="123 Main St, City, State"
            required
          />
          <SelectInput
            label="Project Timeline"
            options={[
              { value: "Select Timeline...", label: "Select Timeline..." },
              { value: "as_soon_as_possible", label: "As Soon as Possible" },
              { value: "within_1_week", label: "Within 1 Week" },
              { value: "within_2_weeks", label: "Within 2 Weeks" },
              { value: "within_1_month", label: "Within 1 Month" },
              { value: "more_than_1_month", label: "More than 1 Month" },
              { value: "just_researching", label: "Just Researching" },
            ]}
            placeholder="Select a timeline"
          />

          <SelectInput
            label="Project Type"
            options={[
              {
                value: "project_type...",
                label: "Select Project Type...",
              },
              { value: "commercial", label: "Commercial" },
              { value: "residential", label: "Residential" },
              { value: "industrial", label: "Industrial" },
              { value: "multi_family", label: "Multi-Family" },
              { value: "other", label: "Other" },
            ]}
            placeholder="Select a timeline"
          />
        </div>
        <TextInput
          label="Project Description"
          type="text"
          placeholder="Briefly describe your project..."
          fullWidth={true}
          multiline={true}
          required
        />

        <Button variant="primary" fullWidth={true} className="mt-6">
          Submit Request
        </Button>
      </form>
      <p className="mt-4 text-sm text-gray-600 text-center">
        Average response time: about 2 hours during business hours. Need
        immediate help? Call us at 214-382-9350.
      </p>
    </div>
  );
};

export default QuoteForm;
