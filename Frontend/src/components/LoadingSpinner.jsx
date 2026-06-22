const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="h-6 w-6 rounded-full border-t-transparent border-4 border-amber-300 transition-all animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
