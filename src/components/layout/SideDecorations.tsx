export const SideDecorations = () => {
  return (
    <>
      {/* Left side decorations */}
      <div className="fixed left-0 top-1/4 w-2 h-32 bg-gradient-to-b from-primary to-accent opacity-60 z-10 hidden lg:block"></div>
      <div className="fixed left-4 top-1/3 w-4 h-4 bg-accent rounded-full opacity-40 z-10 hidden lg:block animate-pulse"></div>
      <div className="fixed left-2 top-1/2 w-6 h-6 border-2 border-primary rounded-full opacity-30 z-10 hidden lg:block"></div>
      <div className="fixed left-6 top-2/3 w-3 h-3 bg-primary rounded-full opacity-50 z-10 hidden lg:block animate-float"></div>
      
      {/* Right side decorations */}
      <div className="fixed right-0 top-1/4 w-2 h-32 bg-gradient-to-b from-accent to-primary opacity-60 z-10 hidden lg:block"></div>
      <div className="fixed right-4 top-1/3 w-4 h-4 bg-primary rounded-full opacity-40 z-10 hidden lg:block animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="fixed right-2 top-1/2 w-6 h-6 border-2 border-accent rounded-full opacity-30 z-10 hidden lg:block"></div>
      <div className="fixed right-6 top-2/3 w-3 h-3 bg-accent rounded-full opacity-50 z-10 hidden lg:block animate-float" style={{ animationDelay: '1s' }}></div>
      
      {/* Corner decorations */}
      <div className="fixed top-20 left-20 w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl z-0 hidden xl:block"></div>
      <div className="fixed top-20 right-20 w-20 h-20 bg-gradient-to-bl from-accent/20 to-primary/20 rounded-full blur-xl z-0 hidden xl:block"></div>
      <div className="fixed bottom-20 left-20 w-12 h-12 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-full blur-lg z-0 hidden xl:block"></div>
      <div className="fixed bottom-20 right-20 w-24 h-24 bg-gradient-to-tl from-accent/20 to-primary/20 rounded-full blur-2xl z-0 hidden xl:block"></div>
    </>
  );
};