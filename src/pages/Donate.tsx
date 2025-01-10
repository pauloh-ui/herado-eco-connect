import { Header } from "@/components/Header";
import { Container } from "@/components/ui/container";

const donationOptions = [
  {
    amount: 25,
    impact: "Plant 5 trees",
    description: "Help us restore native forests",
  },
  {
    amount: 50,
    impact: "Protect 1 acre of land",
    description: "Preserve critical wildlife habitats",
  },
  {
    amount: 100,
    impact: "Build 1 water well",
    description: "Provide clean water access to communities",
  },
  {
    amount: 250,
    impact: "Support 1 research project",
    description: "Fund crucial environmental research",
  },
];

export default function Donate() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16">
        <Container>
          <h1 className="text-4xl font-bold text-center mb-6 text-forest">Support Our Mission</h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            Your donation helps us continue our work in environmental conservation, research, and community development.
            Every contribution makes a difference.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {donationOptions.map((option) => (
              <div key={option.amount} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-forest mb-2">${option.amount}</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">{option.impact}</div>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <button className="w-full bg-forest text-white py-2 px-4 rounded-full hover:bg-forest-light transition-colors">
                  Donate Now
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Want to make a custom donation?</p>
            <button className="bg-white text-forest border-2 border-forest py-2 px-6 rounded-full hover:bg-forest hover:text-white transition-colors">
              Custom Amount
            </button>
          </div>
        </Container>
      </div>
    </main>
  );
}