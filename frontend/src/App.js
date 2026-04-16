import Button from "./components/Button";

function App() {
  return (
    <div className="min-h-screen bg-dark-bg p-6">
      <div className="max-w-3xl mx-auto py-8 px-8">
        <div className="flex justify-between items-center">
          {/* TOP HEADER*/}
          <h1 className="text-3xl font-bold text-gray-300">
            Finance<span className="text-income-text">Pal</span>
          </h1>
          <div className="space-x-4">
            <Button
              text="+ Income"
              bgColor="bg-income-bg"
              borderColor="border-income-hover"
              textColor="text-income-text"
              hoverColor="hover:bg-income-hover"
            />
            <Button
              text="- Expense"
              bgColor="bg-expense-bg"
              borderColor="border-expense-hover"
              textColor="text-expense-text"
              hoverColor="hover:bg-expense-hover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
