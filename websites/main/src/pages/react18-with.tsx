const React18Child: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <div>react18 with child</div>
      <div className="flex-1 h-0">
        <micro-app
          class="h-full"
          url="http://localhost:3000/"
          name="react18-with"
          baseroute="/react18-with"
        ></micro-app>
      </div>
    </div>
  );
};

export default React18Child;
