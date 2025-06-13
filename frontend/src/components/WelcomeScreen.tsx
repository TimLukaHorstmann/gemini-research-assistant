import { InputForm } from "./InputForm";

interface WelcomeScreenProps {
  handleSubmit: (
    submittedInputValue: string,
    effort: string,
    model: string
  ) => void;
  onCancel: () => void;
  isLoading: boolean;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  handleSubmit,
  onCancel,
  isLoading,
}) => (
  <div className="flex flex-col items-center justify-center text-center px-4 flex-1 w-full max-w-3xl mx-auto gap-8">
    {/* Header with logos */}
    <div className="flex flex-col items-center gap-6">
      {/* IP Paris logo (main) */}
      <div className="flex items-center justify-center">
        <img 
          src="/app/logos/ip-paris-logo-without.png" 
          alt="Institut Polytechnique de Paris" 
          className="h-12 md:h-14"
        />
      </div>
      
      {/* Title */}
      <div>
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-3">
          Research Assistant
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          AI-powered research support for Institut Polytechnique de Paris
        </p>
      </div>
    </div>

    {/* Input form */}
    <div className="w-full">
      <InputForm
        onSubmit={handleSubmit}
        isLoading={isLoading}
        onCancel={onCancel}
        hasHistory={false}
      />
    </div>

    {/* Footer with credits */}
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-3 text-sm text-gray-500">
        <span>Developed by</span>
        <img 
          src="/app/logos/hi-paris-logo.png" 
          alt="HI! Paris" 
          className="h-6"
        />
      </div>
      <p className="text-xs text-gray-400">
        Powered by Google Gemini and LangChain LangGraph
      </p>
    </div>
  </div>
);
