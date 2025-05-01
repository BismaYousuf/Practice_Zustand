import MyComponent from "@/components/MyComponent";
import TestComponent from "@/components/testcomponent";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#ecf3ff] flex flex-col items-center justify-center gap-8 p-6">
      <h2 className="text-2xl font-bold text-gray-700">I PRACTICE HOW TO USE Zustand</h2>
      
      <TestComponent />
      <MyComponent />
    </div>
  );
}
